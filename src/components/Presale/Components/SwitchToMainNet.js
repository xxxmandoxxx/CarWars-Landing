import React from 'react';
import switchAccount from '../img/switchNetwork_small.gif';


const switchToMainNet = (props) => {
    return(
        <div>
            <h2>Please switch Meta Mask to Main Network</h2>
            <img src={switchAccount} />
        </div>
    )
};

export default switchToMainNet;