import React from 'react';
import ReactDOM from 'react-dom';
import './css/ContactForm.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			message: ''
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(event) {
		this.setState({title: event.target.value});
	}

	handleMessageChange(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		alert('A message was submitted, ' + this.state.title + ' :' + this.state.message);
		event.preventDefault();
	}

	render() {
		const fullText = {
			'fr': {
				'text1': 'Nous contacter',
				'text2': 'Titre du message',
				"text3": 'Message',
				"text4": 'Retour',
				"text5": 'Envoyer'
			},
			'en':  {
				'text1': 'Submit',
				'text2': 'Find my correspondent',
				"text3": 'Finalize my profile'
			}
		};

		return (
			<div id='formContainer'>
			  <form id='contactForm' onSubmit={this.handleSubmit}>
			    <label>
					<p id='contactFormId'>{fullText[this.props.locale].text1}</p>
					<p className='contactFormSubTitle'>{fullText[this.props.locale].text2}</p>
					<input id='titleInput' type="text" onChange={this.handleTitleChange} />
					<p className='contactFormSubTitle'>{fullText[this.props.locale].text3}</p>
					<textarea id='messageInput' type="text" onChange={this.handleMessageChange} />
			    </label>
			    <div id='divContactForm'>
						<Link to="/profile">
				   		<button id='returnFormBtn'>{fullText[this.props.locale].text4}</button> 
						</Link>
				    <input id='inputContactForm' type="submit" value={fullText[this.props.locale].text5} />
			    </div>
			  </form>
			</div>
		);
	}
}
export default ContactForm;