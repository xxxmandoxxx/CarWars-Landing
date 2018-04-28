import React from 'react';
import './Web3ErrorWrapper.css';

const web3ErrorWrapper = (props) => {
    return(
        <div className="ErrorWrapper">
                <div className='container'>
                    <div className="row">
                       <div className="error-wrapper-content .col-lg-6 mx-auto">
                            {props.children}
                       </div>
                    </div>
                </div>
            </div>
    )
};

export default web3ErrorWrapper;