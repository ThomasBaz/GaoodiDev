import React from 'react';
import ReactDOM from 'react-dom';
import './css/ModifyMP.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ModifyMP extends React.Component {
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
				'text1': 'Modifier votre mot de passe.',
				'text2': 'Doit contenir au mois 1 majuscule et 1 nombre',
				'text3': 'Nouveau mot de passe',
				'text4': "Répétez le nouveau mot de passe",
				'text5': "Retour",
				'text6': "Valider"
			},
			'en':  {
				'text1': 'Modify password.',
				'text2': 'Must contain at least 1 uppercased letter and 1 number',
				'text3': 'New password',
				'text4': "Repeat password",
				'text5': "Back",
				'text6': "Submit"
			}
		};
		return (
			<div id='changeMPContainer'>
			  <form id='changeMPForm' onSubmit={this.handleSubmit}>
			    <label>
					<p id='changeMPTitle'>{fullText[this.props.locale].text1}</p>
					<p id='changeMPText'>{fullText[this.props.locale].text2}</p>
					<p className='changeMPFormSubTitle'>{fullText[this.props.locale].text3}</p>
					<input className='inputChangeMp' type="password" onChange={this.handleTitleChange} />
					<p className='changeMPFormSubTitle'>{fullText[this.props.locale].text4}</p>
					<input className='inputChangeMp' type="password" onChange={this.handleMessageChange} />
			    </label>
			    <div id='divContactForm'>
				   	<Link to="/userInfo">
					   <button id='returnMPFormBtn'>{fullText[this.props.locale].text5}</button>
					</Link>
				    <input id='inputChangeMPForm' type="submit" value={fullText[this.props.locale].text6} />
			    </div>
			  </form>
			</div>
		);
	}
}
export default ModifyMP;