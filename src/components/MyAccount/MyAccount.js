import React, {Component} from 'react';

import MyAccountInfo from './MyAccountInfo';
import MyAccountTx from "./MyAccountTx";
import {getTxforAccount} from './utils/EtherScanApiFunctions';
import {packagesOwned} from '../Presale/utils/contractFunctions';
import MyAccountWrapper from './utils/MyAccountWrapper';
import { ToastContainer } from "react-toastr";

import Web3ErrorWrapper from '../Presale/utils/Web3ErrorWrapper';
import SwitchToMainNet from '../Presale/Components/SwitchToMainNet';
import UnlockAccount from '../Presale/Components/UnlockAccount';

import './MyAccount.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.getTxforAccount = getTxforAccount.bind(this);
        this.packagesOwned = packagesOwned.bind(this);
        this.container = null;

        this.state = {
            loadingTx: true,
            accountTx: [],
            account: this.props.accounts[0],
            web3: this.props.web3,
            pkgLimit: false,
            pkgOwned: 0,
            pkgAllowed: 25,
            gifts: 0,
            isMainNet: (this.props.contract != null),
            PurchaseEvent: this.props.contract.Purchased(),
        }

    }
   
    componentDidMount() {
        if (!this.state.web3.currentProvider.portisLocation) {
            this.checkAccountChangedHandler()
          }
        this.getTxforAccount(this.state.account);
        this.packagesOwned();

        this.state.PurchaseEvent.watch((error, result) => {
              this.purchaseEventHandler(result);
          });
    }

    componentWillUnmount () {
        this.PurchaseEvent= null;
    }

    checkAccountChangedHandler = () => {
        this.intervalID = setInterval(() => {
            this.state.web3.eth.getAccounts((err, accounts) => {
                if (err) return
                    if (accounts[0] !== this.state.account) {
                        console.log("New account detected");
                        this.setState({account: accounts[0]});
                        this.getTxforAccount(this.state.account)
                        this.packagesOwned();
                    }
            })
        }, 1000)
    }

    showPurchesTicker = (result) => {
        if (this.container != null) {
        this.container.info(
            <strong>A user just bought {result.args.pkgsBought.toNumber()} packages</strong>,
            <em>{result.transactionHash.substring(0,20)+"..."}</em>,{
                showAnimation: 'animated bounceInUp',
                hideAnimation: 'animated bounceOutDown'
              }
          );}
    }

    purchaseEventHandler = (result) => {
        this.showPurchesTicker(result);
    }

    render() {

        if (!this.state.isMainNet) {
            return (
                <Web3ErrorWrapper>
                    <SwitchToMainNet />
                </Web3ErrorWrapper>
            )
        }

        if (this.state.account == null) {
            return <Web3ErrorWrapper><UnlockAccount /></Web3ErrorWrapper>
        } else {
        return(
            <MyAccountWrapper account={this.state.account}>
                 <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-bottom-right"/>
                <div className="MyAccount">
                    <MyAccountInfo {...this.state}/>
                    <MyAccountTx {...this.state} contractAddress={this.props.contract.address} />
                </div>
            </MyAccountWrapper>
        )}
    }
}

export default MyAccount;