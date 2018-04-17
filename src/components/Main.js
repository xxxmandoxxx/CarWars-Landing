import React from 'react';
import Signup from './Signup';
import Title from './TitleText'


class Main extends React.Component {
    render() {
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