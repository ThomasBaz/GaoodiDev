import React from 'react';
import ReactDOM from 'react-dom';
import './css/FinalizeRegistration.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FinalizeRegistration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};

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
		alert('A message was submitted, ' + this.state.message);
		event.preventDefault();
	}

	render() {

		const fullText = {
			'fr': {
				"title": "Finaliser mon inscription",
				"text1": "Par soucis de sécurité, nous demandons à chaque famille une pièce d'identité valide de l'enfant concerné. Si tu as moins de 18 ans, la pièce d'identité d'un parent présent sur au moins une photo de ton profil sera aussi nécéssaire. Nous rappelons que ceci est un projet familial.\nAttention à bien respecter cette règle sinon le profil ne sera pas validé par nos équipes.",
				"text2": "Ma pièce d'identité",
				"text3": "Pièce d'identité d'un des parents (présent sur au moins une des photos du profil)",
				"text4": "Joindre",
				"text5": "Retour",
				"text6": "Finaliser",
				"text7": "Profil vérifié"
			},
			'en':  {
				"title": "Finalize my registration",
				"text1": "For security reasons, we ask each family for a valid ID of the child concerned. If you are under 18, a parent's ID on at least one picture of your profile will also be required. We remind you that this is a family project.\nPlease comply with this rule otherwise the profile will not be validated by our teams.",
				"text2": "My ID",
				"text3": "ID of one of the parents (present on at least one of the profile pictures)",
				"text4": "Join",
				"text5": "Back",
				"text6": "Finalize",
				"text7": "Verified profile"
			}
		}

		return (
			<div id='FinalizeRegistrationContainer'>
				<div className='FinalizeRegistrationSubContainer'>
					<div className='FinalizeRegistrationTitle'>{fullText[this.props.locale].title}</div>
					<div className='FinalizeRegistrationText greyBorderRadius'>{fullText[this.props.locale].text1}</div>
					<div className="FinalizeRegistrationLine">
						<div className='fontSemiBMedium'>{fullText[this.props.locale].text7}</div>
						<img className="smallIcon" src="/img/240/verifié_240.png"/>
					</div>
					<div className="greyBorderRadius">
						<div className="FinalizeRegistrationBtnLine marginSides">
							<div className='fontRegSmall'>{fullText[this.props.locale].text2}</div>
							<label for="file-upload1" class="greyBorderRadius whiteBtn">
								{fullText[this.props.locale].text4}
							</label>
							<input id="file-upload1" type="file"/>
						</div>
						<div className="FinalizeRegistrationBtnLine marginSides">
							<div className='fontRegSmall'>{fullText[this.props.locale].text3}</div>
							<label for="file-upload2" class="greyBorderRadius whiteBtn">
								{fullText[this.props.locale].text4}
							</label>
							<input id="file-upload2" type="file"/>
						</div>
					</div>
					<div className="FinalizeRegistrationBtnLine">
						<button className='blueBtn'>{fullText[this.props.locale].text5}</button>
						<button className='blueBtn'>{fullText[this.props.locale].text6}</button>
					</div>
				</div>
			</div>
		);
	}
}
export default FinalizeRegistration;