import React from 'react';

const presaleLoading = (props) => {


    if (props.txHash) {
        return(
            <div>
                Transaction sent! <br />
                Waiting for transactio to be confirmed:<br />
                {props.txHash}
            </div>
        )
    } else {
        return(
            <div>
                Waiting for user to send transaction...
            </div>
        )
    }

};

export default presaleLoading;