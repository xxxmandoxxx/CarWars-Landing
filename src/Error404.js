import React from 'react';
import { Link } from 'react-router-dom';
import ErrorWrapper from './components/Presale/utils/Web3ErrorWrapper';

const error404 = (props) => {
    return(
        <ErrorWrapper>
            <div>
                <h2>404</h2>
                <p>Seems like you are lost. The pre-sale is this way:</p>
                <Link to="/presale"><h4>PRE-SALE</h4></Link>
            </div>
        </ErrorWrapper>
    )
};

export default error404;