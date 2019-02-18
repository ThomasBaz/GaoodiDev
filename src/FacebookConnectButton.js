import React from 'react';
import ReactDOM from 'react-dom';
import './css/FacebookConnectButton.css';
import './css/font.css';

class FacebookConnectButton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			emailValue : '',
			firstNameValue : '',
			familyNameValue : '',
			passwordValue : ''
		};

        this.handleSubmit = this.handleSubmit.bind(this);
	}

	clickFacebookButton() {
		console.log("CLICKED");
	}

    handleSubmit(e) {
        console.log('Email address submitted: ' + this.state.emailValue);
        console.log('First name submitted: ' + this.state.firstNameValue);
        console.log('Family name submitted: ' + this.state.familyNameValue);
        console.log('Password submitted: ' + this.state.passwordValue);

        // Prevent default so the default form submission doesn't
        // get triggered.
        e.preventDefault();
    }

	render() {
		return (
			<button className="facebookButton">
				<img src="/img/facebook_blanc.png" height="15px" width="15px"  onClick={this.clickFacebookButton}/>
				Se connecter avec facebook
			</button>
		);
	}
}

export default FacebookConnectButton;