import React from 'react';
import './Web3ErrorWrapper.css';

const web3ErrorWrapper = (props) => {
    return(
        <div className="ErrorWrapper">
                <div className='container'>
                    <div className="row col-xs-12">
                       <div className="error-wrapper-content col-sx-6 col-xs-offset-2">
                            {props.children}
                       </div>
                    </div>
                </div>
            </div>
    )
};

export default web3ErrorWrapper;