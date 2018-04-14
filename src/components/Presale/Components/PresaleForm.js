import React, {Component} from 'react';

class PresaleForm extends Component {

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.buyPackageUpTo(event);
    }

    render() {
        
        if (this.props.loading) {
            return(
                <div className="PresaleForm">
                    <div className='container'>
                        loading...
                    </div>
                </div>
            )
     
        } else if (!this.props.pkgLimit){
        return (
            <div className="PresaleForm">
                <div className='container'>
                    {this.props.account}
                    {this.props.pkgOwned}
                    <form onSubmit={this.formSubmitHandler} className="PresaleForm-form">
                        <input type='number' min='0' max='10' step="any" name="ethAmount"/>
                        <input type='number' min='0' max='25' name='upTo' defaultValue='5'/>
                        <button type='submit'>Buy</button>
                    </form>
                </div>
            </div>
        )} else {
            return (
            <div className="PresaleForm">
                <div className='container'>
                    {this.props.pkgOwned}
                    You reached the limit of 25 packages
                </div>
            </div>)
        } 
    }
}

export default PresaleForm;