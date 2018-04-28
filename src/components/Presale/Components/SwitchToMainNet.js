import React from 'react';
import switchAccount from '../img/switchNetwork_small.gif';


const switchToMainNet = (props) => {
    return(
        <div>
            <h2>Please switch MetaMask to Main Network</h2>
            <p>You are currently not connected to the Ethereum Main network. Please change to continue to the Pre-Sale.</p>
            <img src={switchAccount} alt="How to switch Metamask network gif" />
        </div>
    )
};

export default switchToMainNet;