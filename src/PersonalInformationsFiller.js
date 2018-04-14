import React from 'react';
import ReactDOM from 'react-dom';
import './css/PersonalInformations.css';

class PersonalInformationsStandartLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.name;
		const value = this.props.value;

		return(
			<div className='PersonalInformationsStandartLine'>
				<div className='textPersonalInformationsFiller'>{name} *</div>
				<input type='text' className="inputChangeMp" placeholder={value}/>
			</div>
		);
	};
}

class PersonalInformationsMultipleChoiceLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.name;
		const value = this.props.value;

		return(
			<div className='PersonalInformationsMultipleChoiceLine'>
			</div>
		);
	};
}

class PersonalInformationsMpLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.name;
		const value = this.props.value;

		return(
			<div className='PersonalInformationsMpLine'>
			</div>
		);
	};
}

class PersonalInformationsFiller extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const fullText = {
			'fr': {
				'title1': 'Renseignements Généraux',
				'title2': 'Informations générales',
				'title3': 'Mes coordonnées',
				'title4': 'Connaissances linguistiques',
				'title5': 'Mot de passe',
				'title6': 'Question de sécurité',
				'title7': 'Conditions générales d\'utilisation',
				'bigText1': 'Enregistre-toi et trouve en toute simplicité le correspondant idéal pour pouvoir faire un échange',
				'bigText2': 'Pour garantir un maximum de sécurité, chaque profil est vérifié et aucune coordonnée, information personnelle ne sont divulguées.',
				'bigText3': 'Cependant si un profil vous paraît suspect, n’hésitez pas à le signaler.',
				'bigText4': 'En remplissant le formulaire d\'enregistrement, tu t\'engages à respecter notre Philosophie. Tu n\'es autorisé(e) à créer qu\'un seul profil.',
				'bigText5': 'Il est explicitement interdit de créer un profil pour une tierce personne.',
				'bigText6': 'Tu possèdes déjà un profil mais tu rencontres un problème ? Dans ce cas, n\'essaie pas de créer un nouveau profil mais contacte notre équipe. Nous serons ravis de t\'aider !',
				'text1': 'Prénom',
				'text2': 'Nom de famille',
				'text3': 'Date de naissance',
				'text4': 'Sexe',
			},
			'en':  {
				'title1': 'Economisez jusqu\'à 75% de votre budjet',
				'title2': '100% Sécurisé',
				'bigText1': '',
				'bigText2': '',
				'bigText3': '',
				'bigText4': '',
				'bigText5': '',
				'bigText6': '',
				'text7': '',
			}
		}

		let text = fullText[this.props.locale];

		return(
			<div className='PersonalInformationsFillerContainer'>
				<div className='bigTitlePersonalInformationsFiller'>{text.title1}</div>
				<div className='firstBlockInfoContainer'>
					<div className='bigTextPersonalInformationsFiller'>{text.bigText1}</div>
					<div className='bigTextPersonalInformationsFiller'>{text.bigText2}</div>
					<div className='bigTextPersonalInformationsFiller'>{text.bigText3}</div>
					<div className='bigTextPersonalInformationsFiller'>{text.bigText4}</div>
					<div className='bigTextPersonalInformationsFiller'>{text.bigText5}</div>
					<br />
					<div className='bigTextPersonalInformationsFiller'>{text.bigText6}</div>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title2}</div>
					<PersonalInformationsStandartLine name={text.text1} value={text.text1}/>
					<PersonalInformationsStandartLine name={text.text2} value={text.text2}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title3}</div>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title4}</div>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title5}</div>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title6}</div>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title7}</div>
				</div>
			</div>
		);
	};
}

export default PersonalInformationsFiller;