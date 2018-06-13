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
				
			},
			'en': {

			}
		}

		return(
			<div className="PaymentContainer">
				
			</div>
		);
	}
}

export default Payment;