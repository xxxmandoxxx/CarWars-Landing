import React, {Component} from 'react';
import PresaleLoading from './PresaleLoading';
import Slider from 'react-rangeslider';
import PresalePanelWrapper from '../utils/PresalePanelWrapper';


import 'react-rangeslider/lib/index.css';
import './PresaleForm.css';
import '../utils/Toggle.css';

class PresaleForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            pkgAmount: 1,
            multiplier: 1,
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.buyPackageUpTo(event);
    }

    handleSliderOnChange = (value) => {
        this.setState({
            pkgAmount: value,
        })
    }

    setMultiplierHandler = (value) => {
        
        if (value.target.checked) {
            this.setState({multiplier: 1.05})
        } else {
            this.setState({multiplier: 1})
        }
    }

    render() {

        
        if (this.props.loading) {
            return(
                <PresalePanelWrapper>
                        <PresaleLoading txHash={this.props.txHash} skip={this.props.skip} />
                </PresalePanelWrapper>
            )
     
        } else if (!this.props.pkgLimit){
        return (
            <PresalePanelWrapper>
                <h4 className="pkg-title">You currently own: {this.props.pkgOwned} Pkgs <br /></h4>
                Current Package Price: {(this.props.currentPrice)} <br />
            
                <Slider min={1} max={this.props.pkgAllowed} onChange={this.handleSliderOnChange} value={this.state.pkgAmount} />
                Packages: {this.state.pkgAmount}<br />
                
                <form onSubmit={this.formSubmitHandler} className="PresaleForm-form">
                   Guarantee purchase:
                    <div className="switch">
                        <input type="checkbox" name="securePkg" onChange={this.setMultiplierHandler}/>
                        <label htmlFor="toggle"><i></i></label>
                        <span></span>
                    </div>
                    <input type='number' min='0' max='10' step="any" name="ethAmount" hidden="true" readOnly="true" value={this.props.currentPrice * this.state.pkgAmount * this.state.multiplier}/>
                    <input type='number' min='1' max='25' name='upTo' hidden='true' readOnly="true" value={this.state.pkgAmount}/>
                    <div className="total"><h4>Total: {(this.props.currentPrice * this.state.pkgAmount * this.state.multiplier).toFixed(5)}ETH </h4><br /></div>
                    <button type='submit' className="btn btn-primary">Buy {this.state.pkgAmount} Packages</button>
                </form>
                
            </PresalePanelWrapper>
                           
        )} else {
            return (
            <PresalePanelWrapper>
                <h4>You reached the limit of 25 packages</h4>
            </PresalePanelWrapper>
            )
        } 
    }
}

export default PresaleForm;