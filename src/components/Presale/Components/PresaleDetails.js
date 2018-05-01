import React from 'react';
import {PRESALEDETAILSTEXT, GAMEPLAYCOLLECTTEXT, GAMEPLAYCOMPETETEXT, GAMEPLAYDISCOVERTEXT, THEFACTORYTEXT, ABOUTTEXT} from './textObjects';
import './PresaleDetails.css';
import CollectImage from '../img/collect_image.png';
import CompeteImage from '../img/carWars_competing.png';
import DiscoverImage from '../img/discover_image.png';
import JoinUs from '../utils/JoinUs';
import JoinPresale from './JoinPresale';
import {nRoadMap} from '../utils/RoadMap';


const presaleDetails = (props) => {

    let headerTitle = "Details"
    let headerContent = PRESALEDETAILSTEXT

    if (props.site === "About") {
        headerTitle = "The Game"
        headerContent = ABOUTTEXT
    }

    return(
        <div className={"container " + props.site }>
            <div className="PresaleDetails animated fadeIn">
                <div className="presaledetails-header">
                    <h1>{headerTitle}</h1>
                </div>
                <div className="presaledetails-content">
                    {headerContent}
                    <JoinUs />
                </div>
            
                <div className="presaledetails-even row animated fadeInLeft">
                    <div className="col-lg-8">
                        <h3 className="blue">Collect</h3>
                        {GAMEPLAYCOLLECTTEXT}
                    </div>
                    <div className="col-lg-4">
                        <div className="image-container-even">
                            <img src={CollectImage} height="100%" alt="CarWars Collect" />
                        </div>
                    </div>
                </div>
                <div className="presaledetails-odd row animated fadeInRight">
                    <div className="col-lg-4 hiddenTop">
                        <div className="image-container-odd">
                                <img src={CompeteImage} width="100%" alt="CarWars Collect" className={props.animated ? "carAnimated" : "nonAnimation" } onClick={props.clickImage} />
                            </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="blue">Compete</h3>
                        {GAMEPLAYCOMPETETEXT}
                    </div>
                    <div className="col-lg-4 hiddenBottom">
                        <div className="image-container-odd">
                                <img src={CompeteImage} width="100%" alt="CarWars Collect" />
                            </div>
                    </div>
                </div>
                <div className="presaledetails-even row animated fadeInLeft">
                    <div className="col-lg-8">
                        <h3 className="blue" >Discover</h3>
                        {GAMEPLAYDISCOVERTEXT}
                    </div>
                    <div className="col-lg-4">
                    <div className="image-container-even">
                            <img src={DiscoverImage} height="100%" alt="CarWars Collect" />
                        </div>
                    </div>
                </div>

                <div className="presaledetails-Factory">
                    <div className="presaledetails-header header-factory">
                        <h2>The Factory</h2>
                    </div>
                    <div className="presaledetails-content content-factory">
                        {THEFACTORYTEXT}
                    </div>
                </div>
                <div className="presaledetails-header header-roadmap">
                    <h2>Road Map</h2>
                </div>
                <div className="RoadMapImg">
                    {nRoadMap}
                </div>
                
                {props.site === "About" ? <JoinPresale /> : null}
            </div>
            
        </div>
    )
};

export default presaleDetails;