import React from 'react';
import UnlockGif from '../img/unlockMetamask_small.gif'

const unlockAccount = (props) => {
    return(
        <div>
            <h2>Your MetaMask account is locked. Please unlock your account to continue to the pre-sale.</h2>
            <img src={UnlockGif} alt="How to unlock MetaMask gif"/>
        </div>
    )
};

export default unlockAccount;