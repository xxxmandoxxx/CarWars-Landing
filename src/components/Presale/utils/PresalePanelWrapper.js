import React from 'react';

import blueprint from '../img/blueprint.png';
import {Link} from 'react-router-dom';

const presalePanelWrapper = (props) => {
    return(
        <div className="PresaleForm">
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6 col-12 presale-panel">
                            <div className="presale-panel-header animated fadeIn">
                                <h2>??? / 5000 Packages Sold</h2>
                            </div>
                            <div className="presale-panel-form animated fadeIn">
                               {props.children}
                            </div>
                            <div className="presale-panel-bottom animated fadeIn">
                                <div>
                                As a presale participant, you receive 3x blueprints per package. Each blueprint equates to a vehicle in Car Wars, and yours contains a feature that will never be repeated.  Don't delay, supply is strictly limited.
                                </div>
                                <div>
                                <small>By purchasing a Pre-Sale package you agree to our <Link to="/terms" className="txLink">Terms of User</Link>.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 presale-image animated fadeIn">
                            <img src={blueprint} alt="loot crate" width="100%"/>
                        </div>
                   </div>
                </div>
            </div>
    )
};

export default presalePanelWrapper;