import React, {Component} from 'react';

class Presale extends Component {

    constructor(props) {
        super(props);


    }

    render() {

        return(
            <div>
                Presale {this.props.accounts[0]}
            </div>
        )
    }
}

export default Presale;