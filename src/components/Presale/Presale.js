import React, {Component} from 'react';

import UnlockAccount from './Components/UnlockAccount';
import PresaleForm from './Components/PresaleForm';

class Presale extends Component {

    constructor(props) {
        super(props);
        this.intervalID = 0;
        
        this.state = {
            isMainNet: (this.props.contract != null),
            account: this.props.accounts[0],
            web3: this.props.web3,
        }
    }

    componentDidMount() {
      this.checkAccountChangedHandler()
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    checkAccountChangedHandler = () => {
        this.intervalID = setInterval(() => {
            this.state.web3.eth.getAccounts((err, accounts) => {
                if (err) return
                    if (accounts[0] !== this.state.account) {
                        console.log("New account detected");
                        this.setState({account: accounts[0]});
                    }
            })
        }, 1000)
    }

    render() {

        let showPresale = "Nothing rendered";
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
            return <PresaleForm {...this.state}/>
        }
        
    }
}

export default Presale;