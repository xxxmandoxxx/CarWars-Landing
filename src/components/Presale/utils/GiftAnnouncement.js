import React from 'react';
import AccouncementWrapper from './AnnouncementWrapper';
import './GiftAnnouncement.css';

const giftAnnouncement = (props) => {
    return(
            <AccouncementWrapper>
                <div className="giftAnnouncement">
                    <div className="giftAnnouncement-text">
                        Wow! Someone has given you a gift. You have {props.gifts} gifts waiting for you. Please claim them now.
                    </div>
                    <div className="giftAnnouncement-button">
                    <button onClick={props.claimPkgs} ref={props.claimRef} >CLAIM NOW</button>
                    </div>
                </div>
            </AccouncementWrapper>
    )
};

export default giftAnnouncement;