import React, {Component} from 'react';

import UnlockAccount from './Components/UnlockAccount';
import PresaleForm from './Components/PresaleForm';
import Web3ErrorWrapper from './utils/Web3ErrorWrapper';
import { ToastContainer } from "react-toastr";
import SwitchToMainNet from './Components/SwitchToMainNet';
import ModalWrapper from './utils/ModalWrapper';
import PresaleDetails from './Components/PresaleDetails';

import { buyPackageUpTo, setCurrentPrice, packagesOwned, claimPackages } from './utils/contractFunctions';

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
            showModal: false,
            error: null,
            gifts: 0,
        }

        
    }

    componentDidMount() {
    if (!this.state.web3.currentProvider.portisLocation) {
      this.checkAccountChangedHandler()
    }
      this.setCurrentPrice();
      this.packagesOwned() ;

      this.PurchaseEvent = this.props.contract.Purchased();
      this.intervalID = this.PurchaseEvent.watch((error, result) => {
            this.purchaseEventHandler(result);
        });
    }

    componentWillUpdate() {
        
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);

    }

    modalCloseHandler = () => {
        this.setState({showModal: false, txHash: null, error: null});
    }

    purchaseEventHandler = (result) => {
        console.log("Purchase Event");
        this.setCurrentPrice();
        this.showPurchesTicker(result);
        if (this.state.txHash.toLowerCase() === result.transactionHash.toLowerCase()) {
            this.packagesOwned()
            this.setState({loading: false, pkgBought: result.args.pkgsBought.toNumber(), ethSpend: result.args.spend.toNumber(), showModal: true})
        }
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

    skipLoading = () => {
        console.log('skipping');
        this.packagesOwned();
        this.setState({loading: false});
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

        if (this.state.showModal && !this.state.error) {
            modal = <ModalWrapper close={this.modalCloseHandler} title={<h3>Transaction successful</h3>}>
            <p>Thank you for participating in our pre-sale. Your transaction has been confirmed.</p>
        
            <ul>
                <li>Etherscan: <a href={"https://etherscan.io/tx/" + this.state.txHash}
            className="txLink" target="_blank" rel="noopener noreferrer" >
            {this.state.txHash.substring(0,15)+"..."}</a></li>
                <li>Packages bought: <strong>{this.state.pkgBought}</strong></li>
                <li>ETH spent: <strong>{this.state.web3.utils.fromWei(this.state.ethSpend.toString(), 'ether')}</strong></li>
            </ul>
            </ModalWrapper>
        } else if (this.state.showModal && this.state.error && this.state.txHash){
            modal = <ModalWrapper close={this.modalCloseHandler} title={<h3>Transaction Failed</h3>}>
            <p>There was an error with your transaction. Maybe someone got in before you and grabbed your pakages.
                To ensure this doesn't happen again turn "Guarantee Price" on and add a little extra gas. Just in case.</p>
            <ul>
                <li>Etherscan: <a href={"https://etherscan.io/tx/" + this.state.txHash}
            className="white" target="_blank" rel="noopener noreferrer" >
            {this.state.txHash.substring(0,15)+"..."}</a></li>
                <li>ETH spent: <strong>0</strong></li>
            </ul>
            <p>{this.state.error.message}</p>
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
                packagesOwned={this.packagesOwned.bind(this)}
                skip={this.skipLoading.bind(this)}/>
                <PresaleDetails />
            </div>)
        }
        
    }
}

export default Presale;