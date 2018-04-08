import React from 'react';
import Signup from './Signup';
import Title from './TitleText'
import Story from './Story';

class Main extends React.Component {
    render() {
        let mainView = null;
        if (this.props.showStory) {
            mainView = <Story triggerStory={this.props.triggerStory}/>
        } else {
            mainView = [
                <Title key='title' />,
                <Signup key='signup' regDone={this.props.regDone} triggerStory={this.props.triggerStory} />]
        }

        return (
            <div>
                {mainView}
            </div>
        )
    }
}

export default Main;