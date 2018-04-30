import React, {Component} from 'react';
import PresaleLoading from './PresaleLoading';
import Slider from 'react-rangeslider';
import PresalePanelWrapper from '../utils/PresalePanelWrapper';
import ToolTipWrapper from "../utils/ToolTipWrapper";
import blueprint from '../img/blueprint.png'


import 'react-rangeslider/lib/index.css';
import './PresaleForm.css';
import '../utils/Toggle.css';

class PresaleForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            pkgAmount: 1,
            multiplier: 0.001,
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
            this.setState({multiplier: 0.001})
        } else {
            this.setState({multiplier: 0})
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
                <h4 className="pkg-title">You currently own: {this.props.pkgOwned} / 25 Pkgs <br /></h4>
    
                <form onSubmit={this.formSubmitHandler} className="PresaleForm-form">
                    <Slider min={1} max={this.props.pkgAllowed} onChange={this.handleSliderOnChange} value={this.state.pkgAmount} />
                    <button type='submit' className="buttonShine">Buy {this.state.pkgAmount} Packages</button>
                     <div className="PresaleForm-safetycheck">
                        <ToolTipWrapper tooltiptext="When confirming the transaction in MetaMask or Portis, please confirm that the address matches what is posted on our social media channels.">
                            Safety Check
                        </ToolTipWrapper>
                    </div>
                   
                    <input type='number' min='0' max='10' step="any" name="ethAmount" hidden="true" readOnly="true" value={this.props.currentPrice * this.state.pkgAmount + this.state.multiplier}/>
                    <input type='number' min='1' max='25' name='upTo' hidden='true' readOnly="true" value={this.state.pkgAmount}/>
                    
                </form> 

                <ToolTipWrapper tooltiptext="This will add ETH 0.001 to the transaction to prevent sniping. Any excess ETH will be refunded in full.">
                    Prioritise transaction:
                </ToolTipWrapper>
                <div className="switch">
                    <input type="checkbox" name="securePkg" onChange={this.setMultiplierHandler} defaultChecked="true"/>
                    <label htmlFor="toggle"><i></i></label>
                    <span></span>
                </div>
                <div className="total"><span>Total: {(this.props.currentPrice * this.state.pkgAmount + this.state.multiplier).toFixed(5)} ETH</span></div>
                <div className="presale-image presale-image-mini">
                            <img src={blueprint} alt="loot crate" width="80%"/>
                </div>
                
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