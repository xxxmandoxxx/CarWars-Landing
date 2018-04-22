import React, {Component} from 'react';
import './About.css';

import PresaleDetails from './components/Presale/Components/PresaleDetails';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class About extends Component {

    render () {
        return(
            <div className="About animated fadeIn">
                <PresaleDetails site="About"/>      
            </div>
        )
    }
}

export default About;