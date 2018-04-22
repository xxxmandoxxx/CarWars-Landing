import React from 'react';
import {PRESALEDETAILSTEXT, GAMEPLAYCOLLECTTEXT, GAMEPLAYCOMPETETEXT, GAMEPLAYDISCOVERTEXT, THEFACTORYTEXT} from './textObjects';
import './PresaleDetails.css';
import CollectImage from '../img/collect_image.png';
import CompeteImage from '../img/carWars_competing.png';
import DiscoverImage from '../img/discover_image.png';


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
                            <h3 className="blue">Collect</h3>
                            {GAMEPLAYCOLLECTTEXT}
                        </div>
                        <div className="col-md-4">
                            <div className="image-container-even">
                                <img src={CollectImage} height="100%" alt="CarWars Collect" />
                            </div>
                        </div>
                    </div>
                    <div className="presaledetails-odd">
                        <div className="col-md-4">
                            <div className="image-container-odd">
                                    <img src={CompeteImage} width="100%" alt="CarWars Collect" />
                                </div>
                            </div>
                        <div className="col-md-8">
                            <h3 className="blue">Compete</h3>
                            {GAMEPLAYCOMPETETEXT}
                        </div>
                    </div>
                    <div className="presaledetails-even">
                        <div className="col-md-8">
                            <h3 className="blue" >Discover</h3>
                            {GAMEPLAYDISCOVERTEXT}
                        </div>
                        <div className="col-md-4">
                        <div className="image-container-even">
                                <img src={DiscoverImage} height="100%" alt="CarWars Collect" />
                            </div>
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