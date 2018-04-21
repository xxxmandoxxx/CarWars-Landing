import React from 'react';
import { Link } from 'react-router-dom';
const myAccountInfo = (props) => {
    return(
        <div className="myAccountInfo">
        <h3>You currently own  <span className="blue"><strong>{props.pkgOwned}</strong></span>  packages!</h3>
        <Link to="/presale" className="btn btn-primary">Buy more packages</Link>
        </div>
    )
};

export default myAccountInfo;