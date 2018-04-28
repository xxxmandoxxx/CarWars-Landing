import React from 'react';

import loadingGif from '../img/loading.gif';

const presaleLoading = (props) => {


    if (props.txHash) {
        return(
            <div className="text-center animated fadeIn">
                <div className="animated slideInUp loadingMessage">
                    Transaction received! <br />
                    Waiting for purchage event to be triggered:<br />
                    <a href={"https://etherscan.io/tx/" + props.txHash} className="txLink" target="_blank" rel="noopener noreferrer" >{props.txHash.substring(0,15)+"..."}</a>
                </div>
                <div>
                    <p><small>Not all browsers are supported. You don't need to wait until the event has been triggered. Check "My Account" for your transaction status.</small></p>
                    <button className="btn btn-primary btn-xs" onClick={props.skip}>Continue</button> 
                </div>
                <div className="loading-image-container">
                    <img src={loadingGif} width="150px" alt="loading animation" />
                </div>
            
            </div>
        )
    } else {
        return(
            <div className="text-center animated fadeIn">
                <div className="animated slideInUp loadingMessage">
                    Waiting for transaciton...
                </div>
                <div>
                    <p><small>You don't need to wait until your transaction has been confirmed. It could take a while. Check "My Account" for your transaction status.</small></p>
                    <button className="btn btn-primary btn-xs" onClick={props.skip}>skip</button> 
                </div>
                <div className="loading-image-container">
                    <img src={loadingGif} width="150px" alt="loading animation" />
                </div>
            </div>
        )
    }

};

export default presaleLoading;