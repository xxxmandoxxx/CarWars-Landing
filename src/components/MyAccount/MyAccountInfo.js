import React from 'react';
import { Link } from 'react-router-dom';
import JoinUs from '../Presale/utils/JoinUs';
import MyAccountMessageHelper from './utils/MyAccountMessageHelper';

const myAccountInfo = (props) => {
    return(
        <div className="myAccountInfo">
            <MyAccountMessageHelper amount={props.pkgOwned}/>
            <Link to="/presale" className="btn btn-primary margin-top-md">Buy more packages</Link>
            <JoinUs />
        </div>
    )
};

export default myAccountInfo;