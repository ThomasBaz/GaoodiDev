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
		const fullText = {
			'fr': {
				'text1': 'Messagerie',
				'text2': 'A ...',
				'text3': 'Ecrivez un message ...',
				'text4': "Envoyer",
				'text5': "Dictoinnaire",
				'text6': "Depuis :",
				'text7': "Vers :",
				'lang1': "Anglais",
				'lang2': "Français",
				'lang3': "Espagnol"
			},
			'en':  {
				'text1': 'Mailbox',
				'text2': 'To ...',
				'text3': 'Write a message ...',
				'text4': "Send",
				'text5': "Dictionary",
				'text6': "From :",
				'text7': "To :",
				'lang1': "English",
				'lang2': "French",
				'lang3': "Spanish"
			}
		};

		return(
			<div className="MailBoxContainer">
				<div className="MailBoxContacts">
					<div className="MailBoxTitle">
						{fullText[this.props.locale].text1}
					</div>
					<div className="MailBoxContactsContent scrollableDiv">
						<ContactLine name={"Max la menace"} imgUrl={"https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg"} />
						<ContactLine name={"Juju l'embrouille"} imgUrl={"http://www.nintendo-master.com/galerie/upload/data/2d341f9be827014d4af2d8a37e6cb39e.jpg"} />
						<ContactLine name={"Nodin le coquin"} imgUrl={"https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png"} />
						<ContactLine name={"Tomitom moi"} imgUrl={"https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png"} />
					</div>
				</div>
				<div className="MailBoxMessages">
					<div className="MailBoxTitle">
						{fullText[this.props.locale].text2}
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
							<textarea placeholder={fullText[this.props.locale].text3}  className="mailBoxMessageInput"></textarea>
							<button className="mailBoxSendMessageBtn">
								{fullText[this.props.locale].text4}
							</button>
						</div>
					</div>
				</div>
				<div className="MailBoxTrad">
					<div className="MailBoxTitle">
						{fullText[this.props.locale].text5}
					</div>
					<div className="MailBoxTradContent">
						<div className="langSelection">
							{fullText[this.props.locale].text6}
							<select id="fromLocale">
								<option value="eng">{fullText[this.props.locale].lang1}</option> 
								<option value="fr" selected>{fullText[this.props.locale].lang2}</option>
								<option value="es">{fullText[this.props.locale].lang3}</option>
							</select>
							{fullText[this.props.locale].text7}
							<select id="toLocale">
								<option value="eng" selected>{fullText[this.props.locale].lang1}</option> 
								<option value="fr">{fullText[this.props.locale].lang2}</option>
								<option value="es">{fullText[this.props.locale].lang3}</option>
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