import React from 'react';

const announcementWrapper = (props) => {
    return(
        <div className="AnnouncementWrapper">
            {props.children}
        </div>
    )
};

export default announcementWrapper;