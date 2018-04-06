import React from 'react';
import './ThankYou.css';


const thankyou = () => {
    return(
        <div className="thankyou-container animated fadeIn">
            <div className="thankyou-text">
                <span className='title'>Thank you for registering.</span><br/> We will let you know when we are ready to take you to the moon.
                <div>
                <p>Join our Telegram and Discord:</p>
                <a href="https://t.me/ethergames_au" target="_blank" rel="noopener noreferrer">
                    <img src="./img/telegram.png" alt="Telegram Logo" />
                </a>
                <a href="https://discord.gg/9wqx5aE" target="_blank" rel="noopener noreferrer">
                    <img src="./img/discord.png" alt="Discord Logo" />
                </a>
                </div>
            </div>
        </div>
        
    )
}

export default thankyou;