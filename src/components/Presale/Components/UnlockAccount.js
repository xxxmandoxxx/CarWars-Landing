import React from 'react';
import UnlockGif from '../img/unlockMetamask_small.gif'

const unlockAccount = (props) => {
    return(
        <div>
            <h2>Your MetaMask account is locked.</h2>
            <p>Please unlock your account to continue to the pre-sale.</p>
            <img src={UnlockGif} alt="How to unlock MetaMask gif"/>
        </div>
    )
};

export default unlockAccount;