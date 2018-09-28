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

class MessageLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		let classes = "messageLine";
		if(this.props.from == "me") {
			classes += " sendedMsg";
		} else {
			classes += " recievedMsg";
		}

		return(
			<div className={classes}>
				{this.props.msgContent}
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
					<div className="MailBoxMessagesContent">
						<div className="messagesContainer ">
							<MessageLine from={"me"} msgContent={"Hello ! comment ça va ?"}/>
							<MessageLine from={"him"} msgContent={"Hey ! Super et toi ?"}/>
							<MessageLine from={"me"} msgContent={"Tip top !"}/>
							<MessageLine from={"him"} msgContent={"Génial !"}/>
							<MessageLine from={"me"} msgContent={"Je fais juste un petit test avec un message un peu plus conséquent, histoire de voir si le css suit bien et que ça n'a pas trop une salle geule (en gros)."}/>
							<MessageLine from={"him"} msgContent={"Je vois ça. C'est pas trop mal ;) "}/>
						</div>
						<div className="sendMessageContainer ">
							<textarea placeholder={"Ecrivez un message ..."}  className="mailBoxMessageInput"></textarea>
							<button className="mailBoxSendMessageBtn">
								{"Envoyer"}
							</button>
						</div>
					</div>
				</div>
				<div className="MailBoxTrad">
					<div className="MailBoxTitle">
						Dictoinnaire
					</div>
					<div className="MailBoxTradContent">
						<div className="langSelection">
							{"Depuis :"}
							<select id="fromLocale">
								<option value="eng">Anglais</option> 
								<option value="fr" selected>Français</option>
								<option value="es">Espagnol</option>
							</select>
							{"Vers :"}
							<select id="toLocale">
								<option value="eng" selected>Anglais</option> 
								<option value="fr">Français</option>
								<option value="es">Espagnol</option>
							</select>
						</div>
						<textarea placeholder={"Texte à traduire"}  className="mailBoxMessageInput"></textarea>
						<div className="separatorLine"/>
						<textarea readOnly className="mailBoxMessageInput">{"Text to traduce"}</textarea>
					</div>
				</div>
			</div>
		);
	}
}

export default MailBox;