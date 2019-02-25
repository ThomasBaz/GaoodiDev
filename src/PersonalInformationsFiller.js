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
		const fullText = {
			'fr': {
				'text1': '- Séléctionner -'
			},
			"en": {
				'text1': '- Select -'
			}
		}
		const name = this.props.name;
		const multSelect = this.props.multSelect;
		let selectPart;
		if(multSelect) {
			selectPart = (
				<select className="multipleChoiceQuestion" size={6} name="secureQuestions" multiple>
  					<option value="" selected disabled hidden>{fullText[this.props.locale].text1}</option>
					<option value="q1">Volvo</option>
					<option value="q2">Saab</option>
					<option value="q3">Fiat</option>
					<option value="q4">Audi</option>
				</select>
			);
		} else {
			selectPart = (
				<select className="multipleChoiceQuestion" name="secureQuestions" >
  					<option value="" selected disabled hidden>{fullText[this.props.locale].text1}</option>
					<option value="q1">Volvo</option>
					<option value="q2">Saab</option>
					<option value="q3">Fiat</option>
					<option value="q4">Audi</option>
				</select>
			);
		}

		return(
			<div className='PersonalInformationsStandartLine'>
				<div className='textPersonalInformationsFiller'>{name} *</div>
				{selectPart}
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
				<div className='textPersonalInformationsFiller'>{name} *</div>
				<input type='password' className="inputChangeMp"/>
			</div>
		);
	};
}

class PersonalInformationsFiller extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.scrollTo(0,0);
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
				'subTitle1': 'Ton nom complet n’est visible que par notre équipe. Ta date de naissance ne sera pas affichée dans le profil.',
				'subTitle2': 'Tes coordonnées ne sont visibles que par notre équipe. Elles n\'apparaissent pas dans ton profil',
				'subTitle3': 'Dans le premier encadré, selectionne ta langue maternelle et les langues que tu parles couramment. Dans le deuxième, indique les langues dont tu as quelques notions',
				'subTitle4': 'Choisis un mot de passe qui te permettre par la suite de te connecter à ton profil. Veille à choisir des mots de passe différents pour chacune de tes activités en ligne.',
				'text1': 'Prénom',
				'text2': 'Nom de famille',
				'text3': 'Date de naissance',
				'text4': 'Sexe',
				'text5': 'Adresse e-mail',
				'text6': 'Confirmez votre adresse e-mail',
				'text7': 'Pays de résidence',
				'text8': 'Ville',
				'text9': 'Code postal',
				'text10': 'Ta réponse',
				'text11': 'Création du profil',
				'text12': 'Mot de passe (doit contenir 8 caractères minimum et au moins une majuscule)',
				'text13': 'Confirmer le mot de passe',
				'text14': 'J\'ai lu et j\'accepte les ',
				'text15': 'conditions générales d\'utilisation ',
				'text16': 'et les ',
				'text17': 'conditions générales de vente'
			},
			'en':  {
				'title1': 'General Information',
				'title2': 'General informations',
				'title3': 'My details',
				'title4': 'Languages',
				'title5': 'Password',
				'title6': 'Security Question',
				'title7': 'Terms of Service',
				'bigText1': 'Register and find with ease the ideal correspondent to be able to make an exchange',
				'bigText2': 'To ensure maximum security, each profile is checked and no contact information, personal information is disclosed.',
				'bigText3': 'However if a profile seems suspicious, do not hesitate to report it.',
				'bigText4': 'By filling out the registration form, you are committed to respecting our Philosophy. You are only allowed to create one profile.',
				'bigText5': 'It is explicitly forbidden to create a profile for a third person.',
				'bigText6': 'Do you already have a profile but are you having a problem ? In this case, do not try to create a new profile but contact our team. We will be happy to help you !',
				'subTitle1': 'Your full name is visible only by our team. Your date of birth will not be displayed in the profile.',
				'subTitle2': 'Your coordinates are visible only by our team. They do not appear in your profile',
				'subTitle3': 'In the first box, select your mother tongue and the languages ​​you speak fluently. In the second, indicate the languages ​​of which you have some notions',
				'subTitle4': 'Choose a password that will allow you to connect to your profile. Make sure you choose different passwords for each of your online activities.',
				'text1': 'First name',
				'text2': 'Last name',
				'text3': 'Birth date',
				'text4': 'Gender',
				'text5': 'E-mail adress',
				'text6': 'Confirm your e-mail adress',
				'text7': 'Country of residence',
				'text8': 'City',
				'text9': 'Post code',
				'text10': 'Your answer',
				'text11': 'Profile creation',
				'text12': 'Password (must contain at least 8 characters and at least one capital letter)',
				'text13': 'Confirm password',
				'text14': 'I have read and I accept ',
				'text15': 'the general conditions of use ',
				'text16': 'and the ',
				'text17': 'general conditions of sale'
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
					<div className='subTitlePersonalInformationsFiller'>{text.subTitle1}</div>
					<PersonalInformationsStandartLine name={text.text1} value={text.text1}/>
					<PersonalInformationsStandartLine name={text.text2} value={text.text2}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title3}</div>
					<div className='subTitlePersonalInformationsFiller'>{text.subTitle2}</div>
					<PersonalInformationsStandartLine name={text.text5} value={text.text5}/>
					<PersonalInformationsStandartLine name={text.text6} value={text.text6}/>
					<PersonalInformationsStandartLine name={text.text7} value={text.text7}/>
					<PersonalInformationsStandartLine name={text.text8} value={text.text8}/>
					<PersonalInformationsStandartLine name={text.text9} value={text.text9}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title4}</div>
					<PersonalInformationsMultipleChoiceLine multSelect={true} name='Choisir une question de sécurité'/>
					<PersonalInformationsMultipleChoiceLine multSelect={true} name='Choisir une question de sécurité'/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title5}</div>
					<div className='subTitlePersonalInformationsFiller'>{text.subTitle4}</div>
					<PersonalInformationsMpLine name={text.text12} value={text.text12}/>
					<PersonalInformationsMpLine name={text.text13} value={text.text13}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title6}</div>
					<PersonalInformationsMultipleChoiceLine multSelect={false} name='Choisir une question de sécurité'/>
					<PersonalInformationsStandartLine name={text.text10} value={text.text10}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title7}</div>
					<div>
						<input type="checkbox" />
						<label className='textPersonalInformationsFiller'>{text.title14}<a className='greenText'>{text.title15}</a> {text.title16} <a className='greenText'>{text.title17}</a></label>
					</div>
				</div>
				<div className='creationBtnContainer'>
					<button className='CreateProfilBtn'>{text.text11}</button>
				</div>
			</div>
		);
	};
}

export default PersonalInformationsFiller;