import  React  from 'react';
import './Signup.css';


class Signup extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, props) {

            event.preventDefault();
            const data = new FormData(event.target);
            const email = document.forms["SignUp"]["EMAIL"].value;
          
            if (email !== '') {
                fetch('https://ethergames.us12.list-manage.com/subscribe/post?u=619ab88092ca6b350e3234e44&amp;id=9fcdb4f337', {
                method: 'POST',
                body: data,
                });
                this.props.regDone();
            }
           

    }

    render() {
    return (
        <div className="signup-box animated fadeIn">
        <p className="sub-title">Gain exclusive access to the first builds of the newly discovered ancient machines</p>
            <div id="mc_embed_signup">
                <form onSubmit={this.handleSubmit} name="SignUp">
                    <div id="mc_embed_signup_scroll">
                        <div>
                            <div className="outer-wrapper">
                                <div className="email-wrapper">
                                    <input autoFocus type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email here" autoComplete="off" minLength="3" maxLength="64"/>
                                </div>
                                <div className="button-wrapper">
                                    <button type="submit"  name="subscribe" id="mc-embedded-subscribe" className="email-button"></button>
                                </div>
                            </div>
                           
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response"></div>
                            <div className="response" id="mce-success-response"></div>
                        </div>
                        <div className="out-of-screen"  aria-hidden="true"><input type="text" name="b_619ab88092ca6b350e3234e44_9fcdb4f337" tabIndex="-1" value="" /></div>
                        
                    </div>
                </form>
            </div>
            <p className="StoryClick" onClick={() => this.props.triggerStory()}><span>Need a little more info?</span></p>
        </div>
    )
}}

export default Signup;

