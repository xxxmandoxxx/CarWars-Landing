import React from 'react';
import './Story.css';


const story = (props) => {
    return(
        <div className="Story animated fadeIn">
            <div className="StoryBackdrop">
                <div className="StoryContainer">
                    <div className="StoryContent">
                    <p>A tight-functional team is in the process of creating a game on Ethereum that is not for the faint hearted.</p>

                    <p>In the presale, you purchase blueprints from “The Makers”. (more about their backstory later)
                    Presale blueprints are limited to 5000 and carry a unique mark that will never be seen again.
                    When “The Factory” (smart-contract) opens, you will be able to redeem the rare cars corresponding to your blueprints.
                    You own and control your car, which conforms to the ERC721 standard.</p>

                    <p>After this, the game really begins... When the time comes, will you be ready?</p>

                    <p>For those just starting out, you’ll need to allow time to buy some ether (eg. CoinBase), then install and get familiar with MetaMask.</p>
                    </div>
                </div>
                <div className="StoryButton" onClick={() => props.triggerStory()}>
                        <p>Close</p>
                </div>
            </div>
        </div>
    )
};

export default story;