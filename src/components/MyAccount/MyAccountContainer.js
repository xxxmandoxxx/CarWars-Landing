import React, {Component} from 'react';
import MyAccount from './MyAccount';

import Web3Container from '../Presale/utils/Web3Container';
import Loading from '../Presale/utils/loading';

import getAccounts from '../Presale/utils/getAccounts'
import getContract from '../Presale/utils/getContract'

import Web3 from 'web3';


class MyAccountContainer extends Component {

    state = {
        web3Portis: null,
        portisAccounts: null,
        portisContract: null
    }
    
    loadPortis = async () => {
        console.log(`Loading Portis.`)
        const portis = require('portis');
        //const provider = new Web3.providers.HttpProvider(localProvider)
        const web3 = new Web3(new portis.Provider({ network: 'ropsten' }));
        const accounts = await getAccounts(web3)
        const contract = await getContract(web3)

        this.setState({web3Portis: web3, portisAccounts: accounts, portisContract: contract });
    }

    render() {
        return(
            <Web3Container
                {...this.state}
                renderLoading={() => <Loading loadPortis={this.loadPortis.bind(this)}/>}
                render={({ accounts, contract, web3 }) => (
                <MyAccount accounts={accounts} contract={contract} web3={web3} />
            )}/>       
        )
    }

}

export default MyAccountContainer