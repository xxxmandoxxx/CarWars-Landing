import React, {Component} from 'react';

import UnlockAccount from './Components/UnlockAccount';
import PresaleForm from './Components/PresaleForm';

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

        this.state = {
            isMainNet: (this.props.contract != null),
            account: this.props.accounts[0],
            web3: this.props.web3,
            currentPrice: 0,
            pkgLimit: false,
            loading: false,
            pkgOwned: 0,
            txHash: null,
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
        this.setCurrentPrice();
        //this.showPurchesTicker(result)
        console.log(result);
        if (this.state.txHash == result.transactionHash) {
            this.setState({loading: false, txHash: null})
        }
    }

    showPurchesTicker = (result) => {

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
                <div>
                    Please switch to mainnet.
                </div>
            )
        }

        if (this.state.account == null) {
            return <UnlockAccount />
        } else {
            return <PresaleForm {...this.state} 
            buyPackageUpTo={buyPackageUpTo.bind(this)} 
            packagesOwned={this.packagesOwned.bind(this)}/>
        }
        
    }
}

export default Presale;