import React from 'react';
import ReactDOM from 'react-dom';
import './css/ModifyMP.css';

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
		return (
			<div id='changeMPContainer'>
			  <form id='changeMPForm' onSubmit={this.handleSubmit}>
			    <label>
					<p id='changeMPTitle'>Modifier votre mot de passe.</p>
					<p id='changeMPText'>Doit contenir au mois 1 majuscule et 1 nombre</p>
					<p className='changeMPFormSubTitle'>Nouveau mot de passe</p>
					<input className='inputChangeMp' type="password" onChange={this.handleTitleChange} />
					<p className='changeMPFormSubTitle'>Répétez le nouveau mot de passe</p>
					<input className='inputChangeMp' type="password" onChange={this.handleMessageChange} />
			    </label>
			    <div id='divContactForm'>
				    <button id='returnMPFormBtn'>Retour</button> 
				    <input id='inputChangeMPForm' type="submit" value="Valider" />
			    </div>
			  </form>
			</div>
		);
	}
}
export default ModifyMP;