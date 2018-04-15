import React from 'react';

const presalePanelWrapper = (props) => {
    return(
        <div className="PresaleForm">
                <div className='container'>
                    <div className="row col-xs-12">
                        <div className="col-xs-6 presale-panel">
                            <div className="presale-panel-header animated fadeIn">
                                <h2>??? / 5000 Packages Sold</h2>
                            </div>
                            <div className="presale-panel-form animated fadeIn">
                               {props.children}
                            </div>
                            <div className="presale-panel-bottom animated fadeIn">
                                <div>
                                    Each pre-sale package contains 3 unique blue prints.
                                    All pre-sale blue prints carry a unique mark that will never be seen again.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default presalePanelWrapper;