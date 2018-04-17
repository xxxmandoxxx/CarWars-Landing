import React, {Component} from 'react';

import UnlockAccount from './Components/UnlockAccount';
import PresaleForm from './Components/PresaleForm';
import Web3ErrorWrapper from './utils/Web3ErrorWrapper';
import { ToastContainer } from "react-toastr";
import SwitchToMainNet from './Components/SwitchToMainNet';
import ModalWrapper from './utils/ModalWrapper';

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
            pkgAllowed: 25,
            pkgBought: 0,
            ethSpend: 0,
            showModal: false
        }

        this.PurchaseEvent = this.props.contract.Purchased();
        this.PurchaseEvent.watch((error, result) => {
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

    modalCloseHandler = () => {
        this.setState({showModal: false});
    }

    purchaseEventHandler = (result) => {
        console.log("Purchase Event");
        this.setCurrentPrice();
        this.showPurchesTicker(result);
        if (this.state.txHash == result.transactionHash) {
            this.packagesOwned()
            this.setState({loading: false, txHash: null, pkgBought: result.args.pkgsBought.toNumber(), ethSpend: result.args.spend.toNumber() ,showModal: true})
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
        let modal = null;

        if (this.state.showModal) {
            modal = <ModalWrapper close={this.modalCloseHandler} title={<h3>Transaction successful</h3>}>
            <p>Thank you for participating in our pre-sale. Your transaction has been confirmed.</p>
            <ul>
                <li>Packages bought: <strong>{this.state.pkgBought}</strong></li>
                <li>ETH spent: <strong>{this.state.web3.utils.fromWei(this.state.ethSpend.toString(), 'ether')}</strong></li>
            </ul>
            </ModalWrapper>
        }


        //Checking if contract found - if not wrong network
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
            return (
            <div>
                 <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-bottom-right"/>
                {modal}
                <PresaleForm {...this.state} 
                buyPackageUpTo={buyPackageUpTo.bind(this)} 
                packagesOwned={this.packagesOwned.bind(this)}/>
            </div>)
        }
        
    }
}

export default Presale;