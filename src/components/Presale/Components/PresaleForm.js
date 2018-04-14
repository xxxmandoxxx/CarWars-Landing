import React, {Component} from 'react';
import PresaleLoading from './PresaleLoading';

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
                        <PresaleLoading txHash={this.props.txHash} />
                    </div>
                </div>
            )
     
        } else if (!this.props.pkgLimit){
        return (
            <div className="PresaleForm">
                <div className='container'>
                    {this.props.account}<br />
                    {this.props.currentPrice}
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