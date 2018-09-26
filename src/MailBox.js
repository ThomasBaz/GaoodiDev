import React from 'react';
import ReactDOM from 'react-dom';
import './css/MailBox.css';

class MailBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		return(
			<div className="MailBoxContainer">
				<div className="MailBoxContacts"></div>
				<div className="MailBoxMessages"></div>
				<div className="MailBoxTrad"></div>
			</div>
		);
	}
}

export default MailBox;