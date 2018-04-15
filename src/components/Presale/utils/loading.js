import React from 'react';
import Web3ErrorWrapper from './Web3ErrorWrapper';
import MetaMaksLogo from '../img/metamask.png';

const loading = (props) => {
    return(
        <Web3ErrorWrapper>
            <h1>Loading Web3 (MetaMask)...</h1>
            <img src={MetaMaksLogo} width="350px" />
        </Web3ErrorWrapper>
    )
};

export default loading;