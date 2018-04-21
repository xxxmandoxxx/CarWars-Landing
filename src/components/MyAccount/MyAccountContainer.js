import React, {Component} from 'react';
import MyAccount from './MyAccount';

import Web3Container from '../Presale/utils/Web3Container';
import Loading from '../Presale/utils/loading';


class MyAccountContainer extends Component {

  

    render() {
        return(
            <Web3Container
                renderLoading={() => <Loading />}
                render={({ accounts, contract, web3 }) => (
                <MyAccount accounts={accounts} contract={contract} web3={web3} />
            )}/>       
        )
    }

}

export default MyAccountContainer