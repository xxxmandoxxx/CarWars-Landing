import React from 'react';
import { Link } from 'react-router-dom';
import './JoinPresale.css';

const joinPresale = (props) => {
    return(
        <div className="JoinPresale">
            <h2>Pre-Sale is live!</h2>
             <Link to="/presale" className="buttonShine JoinPresale-btn">Buy Pre-Sale Packages</Link>
        </div>
    )
};

export default joinPresale;