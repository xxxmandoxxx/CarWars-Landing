import React, {Component} from 'react';

import MyAccountInfo from './MyAccountInfo';
import MyAccountTx from "./MyAccountTx";
import {getTxforAccount} from './utils/EtherScanApiFunctions';
import {packagesOwned} from '../Presale/utils/contractFunctions';
import MyAccountWrapper from './utils/MyAccountWrapper';

import './MyAccount.css';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.getTxforAccount = getTxforAccount.bind(this);
        this.packagesOwned = packagesOwned.bind(this);

        this.state = {
            loadingTx: true,
            accountTx: [],
            account: this.props.accounts[0],
            web3: this.props.web3,
            pkgLimit: false,
            pkgOwned: 0,
            pkgAllowed: 25,
            gifts: 0,
        }

    }
   
    componentDidMount() {
        if (!this.state.web3.currentProvider.portisLocation) {
            this.checkAccountChangedHandler()
          }
        this.getTxforAccount(this.state.account);
        this.packagesOwned();
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

    render() {

        

   
        return(
            <MyAccountWrapper account={this.state.account}>
                <div className="MyAccount">
                    <MyAccountInfo {...this.state}/>
                    <MyAccountTx {...this.state} contractAddress={this.props.contract.address} />
                </div>
            </MyAccountWrapper>
        )
    }
}

export default MyAccount;