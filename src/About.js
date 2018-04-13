import React, {Component} from 'react';
import './About.css';
import Footer from './components/Footer';

class About extends Component {

    render () {
        return(
            <div className="About animated fadeIn">
                <div className="AboutBackdrop">
                    <div className="AboutContainer">
                        <div className="AboutContent">
                        <p>A tight-functional team is in the process of creating a game on Ethereum that is not for the faint hearted.</p>

                        <p>In the presale, you purchase blueprints from “The Makers”. (more about their backstory later)
                        Presale blueprints are limited to 5000 and carry a unique mark that will never be seen again.
                        When “The Factory” (smart-contract) opens, you will be able to redeem the rare cars corresponding to your blueprints.
                        You own and control your car, which conforms to the ERC721 standard.</p>

                        <p>After this, the game really begins... When the time comes, will you be ready?</p>

                        <p>For those just starting out, you’ll need to allow time to buy some ether (eg. CoinBase), then install and get familiar with MetaMask.</p>
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
        )
    }
}

export default About;