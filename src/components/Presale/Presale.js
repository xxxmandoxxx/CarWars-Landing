import React, {Component} from 'react';

import UnlockAccount from './Components/UnlockAccount';
import PresaleForm from './Components/PresaleForm';
import Web3ErrorWrapper from './utils/Web3ErrorWrapper';
import { ToastContainer } from "react-toastr";

import { buyPackageUpTo, setCurrentPrice, packagesOwned } from './utils/contractFunctions';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class Presale extends Component {

    constructor(props) {
        super(props);
        this.intervalID = 0;
        this.setCurrentPrice = setCurrentPrice.bind(this);
        this.packagesOwned = packagesOwned.bind(this);
        this.container = null;

        this.state = {
            isMainNet: (this.props.contract != null),
            account: this.props.accounts[0],
            web3: this.props.web3,
            currentPrice: 0,
            pkgLimit: false,
            loading: false,
            pkgOwned: 0,
            txHash: null,
            pkgAllowed: 25
        }

        const PurchaseEvent = this.props.contract.Purchased();
        PurchaseEvent.watch((error, result) => {
            this.purchaseEventHandler(result);
        });
    }

    componentDidMount() {
      this.checkAccountChangedHandler()
      this.setCurrentPrice()
      this.packagesOwned()
    }

    componentWillUpdate() {
      
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    purchaseEventHandler = (result) => {
        console.log("Purchase Event");
        this.setCurrentPrice();
        this.showPurchesTicker(result);
        if (this.state.txHash == result.transactionHash) {
            this.packagesOwned()
            this.setState({loading: false, txHash: null})
        }
    }

    showPurchesTicker = (result) => {
        if (this.container != null) {
        this.container.info(
            <strong>A user just bought some packages</strong>,
            <em>{result.transactionHash.substring(0,20)+"..."}</em>,{
                showAnimation: 'animated bounceInUp',
                hideAnimation: 'animated bounceOutDown'
              }
          );}
    }

    checkAccountChangedHandler = () => {
        this.intervalID = setInterval(() => {
            this.state.web3.eth.getAccounts((err, accounts) => {
                if (err) return
                    if (accounts[0] !== this.state.account) {
                        console.log("New account detected");
                        this.setState({account: accounts[0]});
                        this.packagesOwned();
                    }
            })
        }, 1000)
    }

    render() {
       
        //Checking if contract found - if not wrong network
        if (!this.state.isMainNet) {
            return (
                <Web3ErrorWrapper>
                    Please switch to mainnet.
                </Web3ErrorWrapper>
            )
        }

        if (this.state.account == null) {
            return <Web3ErrorWrapper><UnlockAccount /></Web3ErrorWrapper>
        } else {
            return (
            <div>
                 <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-bottom-right"/>

                <PresaleForm {...this.state} 
                buyPackageUpTo={buyPackageUpTo.bind(this)} 
                packagesOwned={this.packagesOwned.bind(this)}/>
            </div>)
        }
        
    }
}

export default Presale;