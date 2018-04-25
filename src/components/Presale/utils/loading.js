import React from 'react';
import Web3ErrorWrapper from './Web3ErrorWrapper';
import MetaMaksLogo from '../img/metamask.png';
import PortisLogo from '../img/portis_logo.svg';

const loading = (props) => {
    return(
        <Web3ErrorWrapper>
            <div className="Loading">
                <h4>Loading Web3...</h4>
                <p>Please install MetaMask or sign in to Portis</p>
                <button className='btn btn-primary btn-lg' onClick={props.loadPortis}>Open Portis</button>
                <div className="LoadingLogos">
                    <img src={MetaMaksLogo} width="120px" alt="MetaMask logo"/>
                    <img src={PortisLogo} width="70px" alt="Portis Logo" />
                </div>
            </div>
        </Web3ErrorWrapper>
    )
};

export default loading;