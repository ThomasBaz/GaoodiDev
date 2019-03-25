import React from 'react';
import ReactDOM from 'react-dom';
import './css/TerminateContract.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TerminateContract extends React.Component {
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
				'definitively': {
					'title1': 'Êtes-vous sûr de vouloir résilier définitivement votre abonnement ?',
					'subTitle': 'Votre profil sera définitivement supprimé, vous ne pourrez plus y accéder.',
					'text': 'Cette action résillera votre abonnement à partir dès aujourd\'hui. Nous supprimerons votre profil et vos informations de notre base de	données, de façon définitif. Vous pourrez vous réabonner à tout moment mais il faudra vous recréer un profil à partir de zéro..	ATTENTION- Vous vous êtes engagé à payer pour l\'année, vous ne serez pas remboursé pour les mois non utilisé',
					'title2': 'Si oui, pouvez vous nous dire le motif de votre résiliement ?',
					'yes': 'Oui',
					'cancel': 'Annuler',
					'submit': 'Valider'
				}, 
				'temporarly': {
					'title1': 'Êtes-vous sûr de vouloir résilier votre abonnement ?',
					'subTitle': 'Votre profil deviendra inactif, vous pourrez toutefois y accéder à tout moment.',
					'text': 'Cette action résillera votre abonnement à partir de xxxxx. Nous garderons dans notre base de données votre profil, vous pourrez réactiver votre abonnement à tout moment sans perdre vos informations.',
					'title2': 'Si oui, pouvez vous nous dire le motif de votre résiliement ?',
					'yes': 'Oui',
					'cancel': 'Annuler',
					'submit': 'Valider'				
				}
			},
			'en':  {
				'definitively': {
					'title1': 'Are you sure you want to permanently cancel your subscription ?',
					'subTitle': 'Your profile will be permanently deleted, you will not be able to access it anymore.',
					'text': 'This action will close your subscription from today. We will delete your profile and information from our database in a definitive way. You can re-subscribe at any time but you will have to recreate a profile from scratch. ATTENTION- You have committed to pay for the year, you will not be refunded for the months not used',
					'title2': 'If so, can you tell us the reason for your cancellation ?',
					'yes': 'Yes',
					'cancel': 'Cancel',
					'submit': 'Submit'
				}, 
				'temporarly': {
					'title1': 'Are you sure you want to cancel your subscription ?',
					'subTitle': 'Your profile will become inactive, however you can access it at any time.',
					'text': 'This action will wipe your subscription from xxxxx. We will keep in your database your profile, you can reactivate your subscription at any time without losing your information.',
					'title2': 'If so, can you tell us the reason for your cancellation ?',
					'yes': 'Yes',
					'cancel': 'Cancel',
					'submit': 'Submit'	
				}
			}
		}

		return (
			<div id='TerminateContractContainer'>
				<div className='TerminateContractSubContainer'>
					<div className='TerminateContractUpContainer'>
						<div className='TerminateContractTitle'>{fullText[this.props.locale][this.props.terminationType].title1}</div>
						<div className='TerminateContractSubTitle'>{fullText[this.props.locale][this.props.terminationType].subTitle}</div>
						<div className='TerminateContractText'>{fullText[this.props.locale][this.props.terminationType].text}</div>
						<div className='TerminateContractBtnWrapper'>
							<button className='TerminateContractBtn'>{fullText[this.props.locale][this.props.terminationType].yes}</button>
							<Link className="linkNoUnderline" to="/userInfo">
								<button className='TerminateContractBtn'>{fullText[this.props.locale][this.props.terminationType].cancel}</button> 
							</Link>
						</div>
					</div>
					<div className='TerminateContractSubTitle'>{fullText[this.props.locale][this.props.terminationType].title2}</div>
					<textarea id='terminateMessageInput' type="text" onChange={this.handleMessageChange} />
				  <div className='TerminateContractBtnWrapper2'>
						<button onClick={this.handleSubmit} className='TerminateContractBtn'>{fullText[this.props.locale][this.props.terminationType].submit}</button> 
					</div>
				</div>
			</div>
		);
	}
}
export default TerminateContract;