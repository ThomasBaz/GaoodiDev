import React from 'react';
import ReactDOM from 'react-dom';
import './css/Payment.css';

class Payment extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('Payment handler  !!');
	}

	render() {

		const fullText = {
			'fr': {
				"title1": "Un abonnement annuel à prix unique",
				"title2": "Récapitulatif de votre commande",
				"text1": "Aucun coût additionnel ne vous sera demandé. Avec GAOODI vous pouvez faire autant d'échanges que vous le souhaitez par an.",
				"text2": "Votre abonnement de 150$ vous sera facturé annuellement.",
				"text3": "1 an d'abonnement à GAOODI",
				"text4": "Profil vérifié et sécurisé",
				"text5": "Demande de match illimitée",
				"text6": "Echanges illimités",
				"text7": "TOTAL",
				"text8": "150 $",
				"text9": "Code promo",
				"text10": "J'ai lu et j'accepte les ",
				"text11": "conditions générales de vente",
				"text12": "Carte de crédit",
				"text13": "Numéro de carte de crédit",
				"text14": "Date d'expiration",
				"text15": "CVV",
				"text16": "Payer par carte de crédit",
				"text17": "Sécurisation SSL",
				"text18": "Payer avec",
				"text19": "Ou"
			},
			'en': {
				"title1": "An annual subscription at a single price",
				"title2": "Summary of your order",
				"text1": "No additional cost will be required. With GAOODI you can do as many exchanges as you want per year.",
				"text2": "Your $ 150 subscription will be billed annually.",
				"text3": "1 year subscription to GAOODI",
				"text4": "Verified and secure profile",
				"text5": "Unlimited match request",
				"text6": "Unlimited exchanges",
				"text7": "TOTAL",
				"text8": "150 $",
				"text9": "Promo code",
				"text10": "I have read and I accept",
				"text11": "Terms of Sales",
				"text12": "Credit card",
				"text13": "Credit Card Number",
				"text14": "Expiration date",
				"text15": "CVV",
				"text16": "Pay by credit card",
				"text17": "SSL securing",
				"text18": "Pay with",
				"text19": "Or"
			}
		}

		return(
			<div className="PaymentContainer">
				<div className="PaymentBox">
					<div className="PaymentArea">
						<div className="PaymentTitle">{fullText[this.props.locale].title1}</div>
						<div className="PaymentText mediumPaddingTop">{fullText[this.props.locale].text1}</div>
						<button id="btnPaypal">{fullText[this.props.locale].text18}</button>
						<div className="PaymentHorizontalDelimiter"></div>
					</div>
					<div id="verticalDelimiter"/>
					<div className="PaymentSummary">
						<div className="PaymentTitle textCenter">{fullText[this.props.locale].title2}</div>
						<div className="PaymentSmallText textCenter smallPaddingTop">{fullText[this.props.locale].text2}</div>
						<div className="randomText largePaddingTop">{fullText[this.props.locale].text3}</div>
						<div className="PaymentV mediumPaddingTop">
							<img src="/img/240/verifié_240.png"/>
							<div className="PaymentText">{fullText[this.props.locale].text4}</div>
						</div>
						<div className="PaymentV">
							<img src="/img/240/verifié_240.png"/>
							<div className="PaymentText">{fullText[this.props.locale].text5}</div>
						</div>
						<div className="PaymentV">
							<img src="/img/240/verifié_240.png"/>
							<div className="PaymentText">{fullText[this.props.locale].text6}</div>
						</div>
						<div className="PaymentVerticalDelimiter"></div>
						<div className="PaymentV smallPaddingTop">
							<div className="PaymentTitle">{fullText[this.props.locale].text7}</div>
							<div className="PaymentTitle flexEnd">{fullText[this.props.locale].text8}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Payment;