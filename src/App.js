import React, { Component } from 'react';
import './App.css';
import './Fog.css';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Main from './components/Main';
import Fog from './Fog';
import PresaleDetails from './components/Presale/Components/PresaleDetails';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {
  
   state = {
     is_registered: false,
     showStory: false,
     animated: false
  };

 
carClickHandler = (event) => {
    event.preventDefault();
    const animated = this.state.animated
    this.setState({animated: !animated})
}
  
  componentDidMount () {
    //document.body.style.overflow = "hidden";
  }

  componentWillUnmount () {
    //document.body.style.overflow = "visible";
  }

  regDone() {
    this.setState({is_registered: true});
  }

  triggerStoryHandler = () => {
    const currentState = this.state.showStory;
    this.setState({showStory: !currentState})
  }

  render() {
    let view = ''
    if (this.state.is_registered === true) {
       view = <ThankYou />
    } else {
       view = <Main regDone={this.regDone.bind(this)}  />
    }
   

    return (
      <div className="App">
        <div className="container">
          <Fog />
          {view}
        </div>
        <PresaleDetails site="About" animated={this.state.animated} clickImage={this.carClickHandler}/> 
      </div>
    );
  }
}

export default App;
