import React from 'react';
import './AnnouncementWrapper.css';

const announcementWrapper = (props) => {
    return(
        <div className="AnnouncementWrapper animated bounceInDown">
            {props.children}
        </div>
    )
};

export default announcementWrapper;