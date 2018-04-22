import React, { Component } from 'react';
import './App.css';
import './Fog.css';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Main from './components/Main';
import Fog from './Fog';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {
  
   state = {
     is_registered: false,
     showStory: false
  };
  
  componentDidMount () {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount () {
    document.body.style.overflow = "visible";
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
          <div className="fixed-bottom">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
