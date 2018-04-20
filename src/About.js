import React, {Component} from 'react';
import './About.css';
import Footer from './components/Footer';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class About extends Component {

    render () {
        return(
            <div className="About animated fadeIn">
                <div className="AboutBackdrop">
                    <div className="AboutContainer">
                        <div className="AboutContent">
                        <p>Car Wars is unlike anything you've experienced before.
                        It will make you reconsider what you thought you knew about gaming, whilst pushing the boundaries of decentralised technologies to do so.</p>

                        <p>The cars made here will be yours to keep beyond the game.
                        Like all other crypto-assets (ERC721) you are the owner, free to do what you want with them.</p>

                        <p>Improving your asset is up to you, but you can't buy your way to the top. You'll need knowledge, skill, and nerves of steel. Challenge others to get ahead, but pick your battles wisely because the consequences can be devastating.</p>

                        </div>
                    </div>
                </div>
                <Footer />
        </div>
        )
    }
}

export default About;