import React from 'react';

import loadingGif from '../img/loading.gif';

const presaleLoading = (props) => {


    if (props.txHash) {
        return(
            <div className="text-center animated fadeIn">
                <div className="animated slideInUp loadingMessage">
                    Transaction received! <br />
                    Waiting for transactio to be confirmed:<br />
                    <a href={"https://etherscan.io/tx/" + props.txHash} className="white" target="_blank" rel="noopener noreferrer" >{props.txHash.substring(0,15)+"..."}</a>
                </div>
                <div className="loading-image-container">
                    <img src={loadingGif} width="150px" />
                </div>
            
            </div>
        )
    } else {
        return(
            <div className="text-center animated fadeIn">
                <div className="animated slideInUp loadingMessage">
                    Waiting for transaciton to be sent...
                </div>
                <div className="loading-image-container">
                    <img src={loadingGif} width="150px" />
                </div>
            </div>
        )
    }

};

export default presaleLoading;