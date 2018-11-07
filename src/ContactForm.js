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
		return (
			<div id='formContainer'>
			  <form id='contactForm' onSubmit={this.handleSubmit}>
			    <label>
					<p id='contactFormId'>Nous contacter</p>
					<p className='contactFormSubTitle'>Titre du message</p>
					<input id='titleInput' type="text" onChange={this.handleTitleChange} />
					<p className='contactFormSubTitle'>Message</p>
					<textarea id='messageInput' type="text" onChange={this.handleMessageChange} />
			    </label>
			    <div id='divContactForm'>
						<Link to="/profile">
				   		<button id='returnFormBtn'>Retour</button> 
						</Link>
				    <input id='inputContactForm' type="submit" value="Envoyer" />
			    </div>
			  </form>
			</div>
		);
	}
}
export default ContactForm;