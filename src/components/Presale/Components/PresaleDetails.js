import React from 'react';
import {PRESALEDETAILSTEXT, GAMEPLAYCOLLECTTEXT, GAMEPLAYCOMPETETEXT, GAMEPLAYDISCOVERTEXT, THEFACTORYTEXT, ABOUTTEXT} from './textObjects';
import './PresaleDetails.css';
import CollectImage from '../img/collect_image.png';
import CompeteImage from '../img/carWars_competing.png';
import DiscoverImage from '../img/discover_image.png';


const presaleDetails = (props) => {

    let headerTitle = "Details"
    let headerContent = PRESALEDETAILSTEXT

    if (props.site === "About") {
        headerTitle = "About"
        headerContent = ABOUTTEXT
    }

    return(
        <div className="container">
            <div className="PresaleDetails">
                <div className="presaledetails-header">
                    <h1>{headerTitle}</h1>
                </div>
                <div className="presaledetails-content">
                    {headerContent}
                </div>
                <div className="presaledetails-even row">
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
                <div className="presaledetails-odd row">
                    <div className="col-md-4 hiddenTop">
                        <div className="image-container-odd">
                                <img src={CompeteImage} width="100%" alt="CarWars Collect" />
                         </div>
                    </div>
                    <div className="col-md-8">
                        <h3 className="blue">Compete</h3>
                        {GAMEPLAYCOMPETETEXT}
                    </div>
                    <div className="col-md-4 hiddenBottom">
                        <div className="image-container-odd">
                                <img src={CompeteImage} width="100%" alt="CarWars Collect" />
                         </div>
                    </div>
                </div>
                <div className="presaledetails-even row">
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
    )
};

export default presaleDetails;