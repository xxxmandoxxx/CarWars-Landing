import React, {Component} from 'react';
import $ from 'jquery';
import {helper} from './helper';
import JoinUs from "../Presale/utils/JoinUs";

import './Faq.css';

class Faq extends Component {

    componentDidMount () {
        helper($)
    }

    componentWillUnmount () {
        $(window).off('scroll')
    }

    render() {
        return(
            <div className='container background-dark'>
                <h1 className="faq-title-big">FAQ</h1>
                <div className="FAQContainer">
                    <section className="cd-faq">
                        <ul className="cd-faq-categories">
                            <li><a href="#gettingstarted">Getting started</a></li>
                            <li><a href="#presale">Pre-Sale</a></li>
                        </ul>

                        <div className="cd-faq-items">
                            <ul id="gettingstarted" className="cd-faq-group">
                                <li className="cd-faq-title"><h2>Getting started</h2></li>
                                <li>
                                    <a className="cd-faq-trigger" href="#0">What do I need to play CarWars?</a>
                                    <div className="cd-faq-content">
                                    Here’s what you need to get started:< br/>

                                    A computer or laptop running the desktop version of Chrome or Firefox
                                    MetaMask, a digital wallet used specifically with web apps
                                    Ether, a form of digital payment that powers CarWars
                                    </div> 
                                </li>
                                <li>
                                    <a className="cd-faq-trigger" href="#0">Installing MetaMask, your digital wallet</a>
                                    <div className="cd-faq-content">
                                    <div className="Faq-answer"><p>To use CarWars, you will need to install MetaMask, a digital wallet. You will need to put money in it to make your first purchase.</p><p><strong>Note:</strong> A digital wallet like MetaMask acts like a bank account—treat it with respect and make sure you don’t forget your password or the seed words.</p><iframe width="100%" height="315" title="Install Metamask" src="https://www.youtube.com/embed/tfETpi-9ORs?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen=""></iframe></div>
                                   </div> 
                                </li>
                           

                                <li>
                                    <a className="cd-faq-trigger" href="#0">Why is MetaMask locked?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Occasionally the ‘Pre-Sale’ and 'My Account' pages displays a lock screen. This happens because MetaMask automatically locks your account after a certain period of time. To unlock simply click on the MetaMask extension and type in your password.</p>
                                            <img src="../../img/screenshot-locked.png" alt="Unlock Metamask Screenshot" />
                                        </div>
                                    </div> 
                                </li>

                                  <li>
                                    <a className="cd-faq-trigger" href="#0">Reinstalling MetaMask</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Some users need to uninstall and reinstall MetaMask because they’ve experienced a bug. If you kept your seed words, this is very easy! Just delete the extension, reinstall it, and import your twelve seed words. Then you’ll set the password you want to use (this can be the same one you used before or a whole new password).</p>
                                        </div>
                                    </div> 
                                </li>

                                  <li>
                                    <a className="cd-faq-trigger" href="#0">Getting Ether, your digital currency</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p><strong>For U.S. citizens only:</strong> you can buy ether (ETH) in MetaMask. ETH is a digital currency that enables our game to run.</p>
                                            <img src="../../img/screenshot-buy-usa.png" alt="Screenshot Buy ETH" />
                                            <p><strong>For everyone else:</strong> you will need to purchase ETH from <a href="https://blockgeeks.com/guides/best-cryptocurrency-exchanges" target="_blank" rel="noopener noreferrer">an exchange</a>, and then transfer the ETH from your exchange wallet to your MetaMask wallet. Unfortunately, you cannot play CarWars with only an exchange account.</p><p>You cannot use USD/CAD to buy pre-sale packages—currencies need to be converted into ETH first.</p>
                                        </div>
                                    </div> 
                                </li>

                                  <li>
                                    <a className="cd-faq-trigger" href="#0">How to send ETH to MetaMask</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p><strong>For U.S. citizens only:</strong> you are able to purchase ETH directly from 
                                            the MetaMask wallet using the Coinbase widget. This is more convenient and doesn’t require you to 
                                            create two accounts.</p><p><strong>For everyone else:</strong> you need to buy ETH 
                                            from an exchange using normal fiat currency. Copy your MetaMask address by clicking on the large
                                             ‘...’ next to your account, then select ‘Copy Address to clipboard’. Go to your exchange, 
                                             click ‘Accounts’, and select your ETH Wallet and click ‘send’. Paste the MetaMask address in the box with 
                                             the amount you’d like to transfer.</p><iframe width="100%" height="315" title="Send ETH" src="https://www.youtube.com/embed/PtdMDtCVck0?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen=""></iframe>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                            <a href="#0" className="cd-close-panel move-left">Close</a>

                            <ul id="presale" className="cd-faq-group">
                                <li className="cd-faq-title"><h2>Pre-Sale</h2></li>
                                <li>
                                    <a className="cd-faq-trigger" href="#0">How do I sign up?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>You can sign up to our mailing list via our homepage. Fill in your email address and click the "START" button to submit. We will then send you information about CarWars.</p>
                                            <JoinUs />
                                        </div>
                                    </div> 
                                </li>
                            
                                <li>
                                    <a className="cd-faq-trigger" href="#0">How can I participate in the Pre-Sale?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>We will announce the Pre-Sale via email as well as in our social media channels. Once the Pre-Sale has started you will see a link on our homepage.</p>
                                        </div>
                                    </div> 
                                </li>
                            
                                <li>
                                    <a className="cd-faq-trigger" href="#0">How can I buy Pre-Sale packages?</a>
                                    <div className="cd-faq-content">
                                            <div className="Faq-answer">
                                                <p>To buy packages, go to our Pre-Sale site. Select the amount of packages you want to buy and click "Buy Pakcages". This will generate a transaction request. Portis or MetaMask will ask you to sign this transaction. Check gas details and click "Submit" to sign transaction.</p>
                                                <img src="../../img/Pre-Sale_screenshot.jpg" alt="Pre-Sale Form" />
                                                <p>Once the transaction has been sent to the network, you will see a loading screen. You can skip the loading screen as it can take some time until your transaction has been verified. You can check all your transactions on the "My Account" page</p>
                                                <img src="../../img/waiting_for_Transaction.jpg" alst="Pre-Sale Loading" />
                                            </div>
                                        </div> 
                                </li>

                                <li>
                                    <a className="cd-faq-trigger" href="#0">How many packages will be available?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>We have a hard cap of 5000 Pre-Sale packages. We won't release more than that.</p>
                                        </div>
                                    </div> 
                                </li>
                            
                                <li>
                                    <a className="cd-faq-trigger" href="#0">How many packages can I buy?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Each wallet address can hold up to 25 Pre-Sale packages.</p>
                                        </div>
                                    </div> 
                                </li>
                            
                                <li>
                                    <a className="cd-faq-trigger" href="#0">How much does a package cost?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Pre-Sale packages don't have a specific price. Each time packages are sold, the price increases slightly. The earlier you join the Pre-Sale, the more you will save.</p>
                                            <p><strong>Tip: </strong>The more packages you buy with one transaction, the more you will save. You will receive all packages at the current package price.</p>
                                        </div>
                                    </div> 
                                </li>
                            
                                <li>
                                    <a className="cd-faq-trigger" href="#0">What's in a package?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Each Pre-Sale package contains 3 blueprints. Each of these blueprints cary a special mark which will never be seen again after the Pre-Sale. These blueprints can than be sent to the Factory and you will receive the representing car.</p>
                                        </div>
                                    </div> 
                                </li>

                                 <li>
                                    <a className="cd-faq-trigger" href="#0">What does "Guarantee Package" do?</a>
                                    <div className="cd-faq-content">
                                        <div className="Faq-answer">
                                            <p>Each time a package is sold, the price of a package increases slightly. When you send a transaction to the network, you end up in a que and there might be other players buying packages at the same time. If they get processed before you, the price will have gone up and the amount send in your transaction won't be enough to buy the selected amount of packages. "Guarantee Price" adds 0.01 ETH to your transaction to prevent this from happening.</p>
                                            <p>All unused funds will be refunded to your wallet. We will never keep any access ETH sent to our contracts.</p>
                                        </div>
                                    </div> 
                                </li>
                            </ul> 

                        </div>
                        
                    
                    </section>
                </div>
            </div>
                )
    }
}

export default Faq;