import React, {Component} from 'react';
import './About.css';

import PresaleDetails from './components/Presale/Components/PresaleDetails';



import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class About extends Component {

    state = {
        animated: false
    }


    carClickHandler = (event) => {
        event.preventDefault();
        const animated = this.state.animated
        this.setState({animated: !animated})
    }

    render () {
        return(
            <div className="About animated fadeIn">
            <div id="carImage"></div>
                <PresaleDetails site="About" animated={this.state.animated} clickImage={this.carClickHandler}/> 
            </div>
        )
    }
}

export default About;