import React from 'react';
import Signup from './Signup';
import Title from './TitleText';
//import Sound from 'react-sound';
//import BackgroundSound from './sound/background_music.wav';


class Main extends React.Component {
    //state = {
        //playMusic: "PLAYING",
        //musicVolume: 50
    //}

    //handleSoundButton = (status) => {
        //this.setState({playMusic: status})
    //}


    render() {
        //let soundButton = null

        //if (this.state.playMusic === "PLAYING") {
            //soundButton = <div className="soundButton" onClick={() => this.handleSoundButton("PAUSE")}><i className="fa fa-volume-up" /></div>
        //} else {
           // soundButton = <div className="soundButton soundOff" onClick={() => this.handleSoundButton("PLAYING")}><i className="fa fa-volume-off" /></div>
        //}
        

        let mainView = null;
        
            mainView = [
                <Title key='title' />,
                <Signup key='signup' regDone={this.props.regDone} triggerStory={this.props.triggerStory} />]
                
        return (
            <div>  
                {mainView}
            </div>
        )
    }
}

export default Main;

//<Sound url={BackgroundSound} playStatus={this.state.playMusic} volume={this.state.musicVolume} loop={true} autoLoad={true} />