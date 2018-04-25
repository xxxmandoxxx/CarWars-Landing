import React from 'react';
import './MyAccountWrapper.css';

const myAccountWrapper = (props) => {
    return(
        <div className="MyAccount">
                <div className='container'>
                    
                        <div className="col-md-12 col-12 presale-panel">
                            <div className="myaccount-panel-header animated fadeIn">
                                <h2>My Account</h2>
                            </div>
                            <div className="myaccountAddress">{props.account}</div>
                            <div className="myaccount-panel-form animated fadeIn">
                               {props.children}
                            </div>
                            <div className="myaccount-panel-bottom animated fadeIn">
                                <div>
                                    To buy more packages please go to our Pre-Sale page. Tx information is provided by Etherscan.io
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
    )
};

export default myAccountWrapper;