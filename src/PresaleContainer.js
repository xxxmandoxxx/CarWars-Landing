import React, {Component} from 'react';
import Presale from './components/Presale/Presale';

import Web3Container from './components/Presale/utils/Web3Container';
import Loading from './components/Presale/utils/loading';
import getAccounts from './components/Presale/utils/getAccounts'
import getContract from './components/Presale/utils/getContract'

import Web3 from 'web3';

class PresaleContainer extends Component {

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
            <div>
                <Web3Container
                    {...this.state}
                    renderLoading={() => <Loading loadPortis={this.loadPortis.bind(this)}/>}
                    render={({ accounts, contract, web3 }) => (
                    <Presale accounts={accounts} contract={contract} web3={web3} />
                )}/>
            </div>
        )
    }
}

export default PresaleContainer