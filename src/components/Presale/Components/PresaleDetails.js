import React from 'react';
import {PRESALEDETAILSTEXT, GAMEPLAYCOLLECTTEXT, GAMEPLAYCOMPETETEXT, GAMEPLAYDISCOVERTEXT, THEFACTORYTEXT} from './textObjects';
import './PresaleDetails.css';


const presaleDetails = (props) => {
    return(
        <div className="container">
            <div className="row col-xs-12">
                <div className="PresaleDetails">
                    <div className="presaledetails-header">
                        <h1>Details</h1>
                    </div>
                    <div className="presaledetails-content">
                        {PRESALEDETAILSTEXT}
                    </div>
                    <div className="presaledetails-even">
                        <div className="col-md-8">
                            <h3>Collect</h3>
                            {GAMEPLAYCOLLECTTEXT}
                        </div>
                        <div className="col-md-4">
                         
                        </div>
                    </div>
                    <div className="presaledetails-odd">
                        <div className="col-md-4">
                       
                        </div>
                        <div className="col-md-8 col-md-offset-4">
                            <h3>Compete</h3>
                            {GAMEPLAYCOMPETETEXT}
                        </div>
                        
                    </div>
                    <div className="presaledetails-even">
                        <div className="col-md-8">
                            <h3>Discover</h3>
                            {GAMEPLAYDISCOVERTEXT}
                        </div>
                        <div className="col-md-4">
                         
                        </div>
                    </div>
                    <div className="presaledetails-header header-factory">
                        <h2>The Factory</h2>
                    </div>
                    <div className="presaledetails-content content-factory">
                        {THEFACTORYTEXT}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default presaleDetails;