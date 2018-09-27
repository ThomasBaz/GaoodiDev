import React from 'react';
import ReactDOM from 'react-dom';
import './css/MailBox.css';

class ContactLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		return(
			<div className="aContactInMailBox">
				<img className="roundImg" src={this.props.imgUrl} />
				<p>
					{this.props.name}
				</p>
			</div>
		)
	}
}

class MailBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		return(
			<div className="MailBoxContainer">
				<div className="MailBoxContacts">
					<div className="MailBoxTitle">
						Messagerie
					</div>
					<div className="MailBoxContactsContent scrollableDiv">
						<ContactLine name={"Max la menace"} imgUrl={"https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg"} />
						<ContactLine name={"Juju l'embrouille"} imgUrl={"https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg"} />
						<ContactLine name={"Nodin le coquin"} imgUrl={"https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg"} />
						<ContactLine name={"Tomitom moi"} imgUrl={"https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg"} />
					</div>
				</div>
				<div className="MailBoxMessages">
					<div className="MailBoxTitle">
						A ...
					</div>
					<div className="MailBoxMessagesContent scrollableDiv">
						
					</div>
				</div>
				<div className="MailBoxTrad">
					<div className="MailBoxTitle">
						Dictoinnaire
					</div>
					<div className="MailBoxTradContent scrollableDiv">
						
					</div>
				</div>
			</div>
		);
	}
}

export default MailBox;