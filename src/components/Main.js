import React from 'react';
import Signup from './Signup';
import Title from './TitleText'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Title  />
                <Signup regDone={this.props.regDone} />
            </div>
        )
    }
}

export default Main;