import React from 'react';
import ReactDOM from 'react-dom';
import './css/Subscribe.css';
import './css/font.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Subscribe extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('Go to sign in  !!');
	}

	render() {

		const fullText = {
			'fr': {
				'label1': 'Inscris-toi et commence l\'expérience dès maintenant',
				'label2': '12',
				'label3': ' mois',
				'label4': '150 $',
				'label5': 'Je m\'inscris',
				'label6': 'Payez en une seule fois et échangez autant de fois que vous le souhaitez.',
				'label7': 'Aucuns autres frais',
				'label8': 'Garantie GAOODI :',
				'label9': 'Nous nous engageons à vous offrir l\'année suivante si vous ne réalisez aucuns échanges lors de votre année d\'abonnement.'
			},
			'en': {
				'label1': 'Sign up and start the experience right now',
				'label2': '12',
				'label3': ' months',
				'label4': '150 $',
				'label5': 'I\'m registering',
				'label6': 'Pay in one go and exchange as many times as you want.',
				'label7': 'No other fees',
				'label8': 'Guarantee GAOODI :',
				'label9': 'We promise to offer you the following year if you do not trade during your subscription year.'
			}
		}

		return(
			<div className="Subscribe">
				<div id="labelSubscribe">{fullText[this.props.locale].label1}</div>
				<img src="/img/720/prix_P01.png" />
				<p id="months"><b>{fullText[this.props.locale].label2}</b>{fullText[this.props.locale].label3}</p>
				<p id="price">{fullText[this.props.locale].label4}</p>
				<Link className="linkNoUnderline" to="/newProfile">
					<button className="button" onClick={this.handleClick}>{fullText[this.props.locale].label5}</button>
				</Link>
				<p>{fullText[this.props.locale].label6}</p>
				<p>{fullText[this.props.locale].label7}</p>
				<div id="warrantyGaoodi"><h1>{fullText[this.props.locale].label8}</h1>{fullText[this.props.locale].label9}</div>
			</div>
		);
	}
}

export default Subscribe;