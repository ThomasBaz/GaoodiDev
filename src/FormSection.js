import React from 'react';
import './css/FormSection.css';
import './css/font.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class FormSection extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			emailValue : '',
			firstNameValue : '',
			familyNameValue : '',
			passwordValue : 'Mot de passe'
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleFamilyNameChange = this.handleFamilyNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(e) {
        this.setState({emailValue: e.target.value});
    }

    handleFirstNameChange(e) {
        this.setState({firstNameValue: e.target.value});
    }

    handleFamilyNameChange(e) {
        this.setState({familyNameValue: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({passwordValue: e.target.value});
    }

    handleSubmit(e) {
        console.log('Email address submitted: ' + this.state.emailValue);
        console.log('First name submitted: ' + this.state.firstNameValue);
        console.log('Family name submitted: ' + this.state.familyNameValue);
        console.log('Password submitted: ' + this.state.passwordValue);

        // Prevent default so the default form submission doesn't
        // get triggered.
		e.preventDefault();
		// ToDo navigate to /newProfile avec les infos déjà renseignées de remplies
		//history.push('/newProfile');
    }

	render() {

		const fullText = {
			'FormSection': {
				'fr': {
					'mail': 'E-mail',
					'name': 'Prénom',
					'familyName': 'Nom de famille',
					'password': 'Mot de passe',
					'submit': 'Continuer',
					'text1': 'Inscris-toi',
					'text2': 'dès aujourd\'hui !'
				},
				'en': {
					'mail': 'E-mail',
					'name': 'Name',
					'familyName': 'Family name',
					'password': 'Password',
					'submit': 'Continue',
					'text1': 'Sign in',
					'text2': 'now !'
				}
			}
		}

		let text = fullText.FormSection[this.props.locale];

		return (
			<form className="container" onSubmit={this.handleSubmit}>
				<div className="label">
                    {text.text1} <br/> {text.text2}
                </div>
				<input className="input" type="text" placeholder={text.mail} onChange={this.handleEmailChange} />
				<input className="input" type="text" placeholder={text.name} onChange={this.handleFirstNameChange} />
				<input className="input" type="text" placeholder={text.familyName} onChange={this.handleFamilyNameChange} />
				<input className="input" type="password" placeholder={text.password} onChange={this.handlePasswordChange} />
				<input className="button" type="submit" value={text.submit} />
			</form>
		);
	}
}

export default FormSection;

//ReactDOM.render(<FormSection />, document.getElementById('outer'));