import React, {Component} from 'react';
import Presale from './components/Presale/Presale';

import Web3Container from './components/Presale/utils/Web3Container';
import Loading from './components/Presale/utils/loading';

class PresaleContainer extends Component {

    render() {

        return(
            <div>
                <Web3Container
                    renderLoading={() => <Loading />}
                    render={({ accounts, contract, web3 }) => (
                    <Presale accounts={accounts} contract={contract} web3={web3} />
                )}/>
            </div>
        )
    }
}

export default PresaleContainer