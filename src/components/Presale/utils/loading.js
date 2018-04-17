import React from 'react';
import Web3ErrorWrapper from './Web3ErrorWrapper';
import MetaMaksLogo from '../img/metamask.png';

const loading = (props) => {
    return(
        <Web3ErrorWrapper>
            <h4>Loading Web3 (MetaMask)...</h4>
            <div>
                <img src={MetaMaksLogo} width="350px" alt="MetaMask logo"/>
            </div>
        </Web3ErrorWrapper>
    )
};

export default loading;