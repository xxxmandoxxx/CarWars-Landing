import React from "react";
import './Footer.css';
import SocialBar from './SocialBar'

const footer = () => {
    return (
        <div className="footer fixed-botto animated fadeInUp">
            <div className="logo-container">
                <a href="https://www.ethergames.com.au" target="_blank" rel="noopener noreferrer" >
                    <img src="./img/ether-games-logo.png" className="pull-left ether-logo" alt="Ether Games Logo" />
                </a>
            </div>
            <div className="footer-text">
                &copy; 2018 Ether Games Pty Ltd <br/>
                By signing up to our mailing list you agree 
                to our <a className="no-style" href="https://www.ethergames.com.au/privacypolicy" target="_blank">privacy policy.</a>. We won't do anything shady with your 
                email address. We will keep it within MailChimp and every now and then, 
                we will send you an email which will contain mostly good news. 
                We will also tell you some secrets via email so keep an eye open for them. 
                Thanks for reading this tiny footnote. 
                Here is a <a className="no-style" href="https://ideactivatemc.net/attachments/flat-800x800-075-f-u1-jpg.5110/">potato.</a>  
            </div>
            
            <SocialBar />
            <div className="fotter-text-mobile">
            <a className="no-style" href="https://www.ethergames.com.au/privacypolicy" target="_blank">Privacy policy.</a>
             <span>&nbsp;&nbsp;&copy; 2018 Ether Games Pty Ltd</span> 
            </div>
        </div>
    )
}

export default footer;

