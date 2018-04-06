import React from 'react';
import './SocialBar.css';

const socialbar = () => {
    return (
        <div className="socialbar">
            <div className='row'>
                <a href="https://t.me/ethergames_au" target="_blank" rel="noopener noreferrer">
                    <img src="./img/telegram.png" alt="Telegram Logo" />
                </a>
                <a href="https://discord.gg/9wqx5aE" target="_blank" rel="noopener noreferrer">
                    <img src="./img/discord.png" alt="Discord Logo" />
                </a>
                <a href="https://www.instagram.com/ethergames/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/instagram.png" alt="Instagram Logo" />
                </a>
                <a href="https://www.facebook.com/ethergamesau/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/facebook.png" alt="Facebook Logo" />
                </a>
                <a href="https://twitter.com/ethergames_au" target="_blank" rel="noopener noreferrer">
                    <img src="./img/twitter.png" alt="Twitter Logo"/>
                </a>
                <a href="https://www.linkedin.com/company/ether-games-au/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/linkedin.png" alt="LinkedIn Logo" />
                </a>
                <a href="https://www.reddit.com/user/Ether_Games/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/reddit.png" alt="Reddit Logo" />
                </a>
            </div>
        </div>
    )
}

export default socialbar;