import React, { Component } from 'react';
import './App.css';
import './Fog.css';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Main from './components/Main';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-116684519-1');
ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {
  
   state = {is_registered: false};
  
  regDone() {
    this.setState({is_registered: true});
  }

  render() {
    let view = ''
    if (this.state.is_registered === true) {
       view = <ThankYou />
    } else {
       view = <Main regDone={this.regDone.bind(this)} />
    }

    return (
      <div className="App">
        <div className="container">
          {view}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
