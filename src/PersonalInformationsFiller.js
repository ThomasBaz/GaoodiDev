import React from 'react';
import ReactDOM from 'react-dom';
import './css/PersonalInformations.css';

class PersonalInformationsStandartLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'value': ''
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
        this.setState({value: e.target.value});
	}
	
	componentDidMount() {
		if(this.props.value && (this.props.value != "")) {
			this.setState({value: this.props.value});
		}
	}

	render() {
		const name = this.props.name;
		const placeholder = this.props.placeholder;

		return(
			<div className='PersonalInformationsStandartLine'>
				<div className='textPersonalInformationsFiller'>{name} *</div>
				<input type='text' className="inputChangeMp" value={this.state.value} placeholder={placeholder} onChange={this.handleChange}/>
			</div>
		);
	};
}

class PersonalInformationsMultipleChoiceLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'values': []
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		let clickedValue = e.target.value;
		let index = this.state.values.indexOf(clickedValue);
		let newVal = [];
		if(index != -1) {
			for(var i in this.state.values) {
				if(i != index) newVal.push(this.state.values[i]);
			}
		} else {
			newVal = [...this.state.values, clickedValue];
		}
		this.setState({'values': newVal});
	}
	
	componentDidMount() {
		if(this.props.value && (this.props.value != "")) {
			this.setState({'values': this.props.values});
		}
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
		let values = this.state.values;
		let selectPart;

		const choices = this.props.choices.map(
			function(aChoice, index) {
				return(<option value={aChoice} key={index}>{aChoice}</option>);
			}
		);

		if(!values || (values.length == 0)) {
			if(multSelect) {
				selectPart = (
					<select className="multipleChoiceQuestion" size={6} name="secureQuestions" onClick={this.handleChange} multiple>
						  <option value="" selected disabled hidden>{fullText[this.props.locale].text1}</option>
						{choices}
					</select>
				);
			} else {
				selectPart = (
					<select className="multipleChoiceQuestion" name="secureQuestions" onClick={this.handleChange}>
						  <option value="" selected disabled hidden>{fullText[this.props.locale].text1}</option>
						{choices}
					</select>
				);
			}
		} else {
			if(multSelect) {
				selectPart = (
					<select value={this.state.values} className="multipleChoiceQuestion" size={6} name="secureQuestions" onClick={this.handleChange} multiple>
						{choices}
					</select>
				);
			} else {
				selectPart = (
					<select value={this.state.values} className="multipleChoiceQuestion" name="secureQuestions" onClick={this.handleChange} >
						{choices}
					</select>
				);
			}
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

		this.state = {
			'value': ''
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
        this.setState({value: e.target.value});
	}
	
	componentDidMount() {
		if(this.props.value && (this.props.value != "")) {
			this.setState({value: this.props.value});
		}
	}

	render() {
		const name = this.props.name;

		return(
			<div className='PersonalInformationsMpLine'>
				<div className='textPersonalInformationsFiller'>{name} *</div>
				<input type='password' className="inputChangeMp" value={this.state.value} onChange={this.handleChange}/>
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
		let defaultValues = {
			"firstName": "",
			"lastName": "",
			"birthDate": "",
			"gender": "",
			"E-mail": "",
			"country": "",
			"city": "",
			"postCode": "",
			"password": "",
			"languages1": "",
			"languages2": "",
			"securityQuestion": "",
			"securityAnswer": ""
		};

		if(this.props.existingValues) {
			for(var aName in this.props.existingValues) {
				defaultValues[aName] = this.props.existingValues[aName];
			}
		}

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
				'text17': 'conditions générales de vente',
				'text18': 'Je parle courament (y compris ma langue maternelle)',
				'text19': 'J\'ai des connaissances de bases de',
				'text20': 'Choisir une question de sécurité',
				'countries': [
					'France',
					'Canada',
					'Angleterre',
					'USA',
					'Belgique',
					'Australie'
				],
				'genders': [
					'Homme',
					'Femme'
				],
				'languages' : [
					"Chinois Mandarin",
					"Espanol",
					"Anglais",
					"Hindi / ourdou",
					"Arabe",
					"Bengali",
					"Portugais",
					"Russe",
					"Japonais",
					"Allemand",
					"Javanais",
					"Punjabi",
					"Wu",
					"Français",
					"Telugu",
					"Vietnamien",
					"Marathi",
					"Coréen",
					"Tamil",
					"Italien",
					"Turc",
					"Cantonais / yue"
				],
				"questions":  [
					"Comment s'appelait votre meilleur ami lorsque vous étiez adolescent ?",
					"Comment s'appelait votre premier animal de compagnie ?",
					"Quel est le premier plat que vous avez appris à cuisiner ?",
					"Quel est le premier film que vous avez vu au cinéma ?",
					"Où êtes-vous allé la première fois que vous avez pris l'avion ?",
					"Comment s'appelait votre instituteur préféré à l'école primaire ?",
					"Quel serait selon vous le métier idéal ?",
					"Quel est le livre pour enfants que vous préférez ?",
					"Quel était le modèle de votre premier véhicule ?",
					"Quel était votre surnom lorsque vous étiez enfant ?",
					"Quel était votre personnage ou acteur de cinéma préféré lorsque vous étiez étudiant ?",
					"Quel était votre chanteur ou groupe préféré lorsque vous étiez étudiant ?",
					"Dans quelle ville vos parents se sont-ils rencontrés ?",
					"Comment s'appelait votre premier patron ?",
					"Quel est le nom de la rue où vous avez grandi ?",
					"Quel est le nom de la première plage où vous vous êtes baigné ?",
					"Quel est le premier album que vous avez acheté ?",
					"Quel est le nom de votre équipe de sport préférée ?",
					"Quel était le métier de votre grand-père ?"
				]
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
				'text17': 'general conditions of sale',
				'text18': 'I speak fluently (including my mother tongue)',
				'text19': 'I have basic knowledge of',
				'text20': 'Choose a security question',
				'countries': [
					'France',
					'Canada',
					'England',
					'USA',
					'Belgium',
					'Australia'
				],
				'genders': [
					'Boy',
					'Girl'
				],
				'languages' :  [
					"Mandarin Chinese",
					"Spanish",
					"English",
					"Hindi/Urdu",
					"Arabic",
					"Bengali",
					"Portuguese",
					"Russian",
					"Japanese",
					"German",
					"Javanese",
					"Punjabi",
					"Wu",
					"French",
					"Telugu",
					"Vietnamese",
					"Marathi",
					"Korean",
					"Tamil",
					"Italian",
					"Turkish",
					"Cantonese/Yue"
				],
				"questions":  [
					"What was your best friend's name when you were a teenager?",
					"What was your first pet name?",
					"What's the first dish you've learned to cook?",
					"What is the first film you saw at the cinema?",
					"Where did you go the first time you flew?",
					"What was your favorite teacher's name in primary school?",
					"What would be the ideal job for you?",
					"Which children's book do you prefer?",
					"What was the model of your first vehicle?",
					"What was your nickname when you were a child?",
					"What was your favorite character or movie actor when you were a student?",
					"What was your favorite singer or band when you were a student?",
					"In which city did your parents meet?",
					"What was your first boss's name?",
					"What is the name of the street where you grew up?",
					"What is the name of the first beach where you bathed?",
					"What is the first album you bought?",
					"What is the name of your favorite sports team?",
					"What was your grandfather's job?"
				]
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
					<PersonalInformationsStandartLine name={text.text1} placeholder={text.text1} value={defaultValues["firstName"]}/>
					<PersonalInformationsStandartLine name={text.text2} placeholder={text.text2} value={defaultValues["lastName"]}/>
					<PersonalInformationsMultipleChoiceLine locale={this.props.locale} multSelect={false} choices={text.genders} name={text.text4} value={defaultValues["gender"]}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title3}</div>
					<div className='subTitlePersonalInformationsFiller'>{text.subTitle2}</div>
					<PersonalInformationsStandartLine name={text.text5} placeholder={text.text5} value={defaultValues["E-mail"]}/>
					<PersonalInformationsStandartLine name={text.text6} placeholder={text.text6}/>
					<PersonalInformationsMultipleChoiceLine locale={this.props.locale} multSelect={false} choices={text.countries} name={text.text7} value={defaultValues["country"]}/>
					<PersonalInformationsStandartLine name={text.text8} placeholder={text.text8} value={defaultValues["city"]}/>
					<PersonalInformationsStandartLine name={text.text9} placeholder={text.text9} value={defaultValues["postCode"]}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title4}</div>
					<PersonalInformationsMultipleChoiceLine locale={this.props.locale} multSelect={true} choices={text.languages} name={text.text18} value={defaultValues["languages1"]}/>
					<PersonalInformationsMultipleChoiceLine locale={this.props.locale} multSelect={true} choices={text.languages} name={text.text19} value={defaultValues["languages2"]}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title5}</div>
					<div className='subTitlePersonalInformationsFiller'>{text.subTitle4}</div>
					<PersonalInformationsMpLine name={text.text12} placeholder={text.text12} value={defaultValues["password"]}/>
					<PersonalInformationsMpLine name={text.text13} placeholder={text.text13}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title6}</div>
					<PersonalInformationsMultipleChoiceLine locale={this.props.locale} multSelect={false} choices={text.questions} name={text.text20} value={defaultValues["securityQuestion"]}/>
					<PersonalInformationsStandartLine name={text.text10} placeholder={text.text10} value={defaultValues["securityAnswer"]}/>
				</div>
				<div className='blockInfoContainer'>
					<div className='titlePersonalInformationsFiller'>{text.title7}</div>
					<div>
						<input type="checkbox" />
						<label className='textPersonalInformationsFiller'>{text.text14}<a className='greenText'>{text.text15}</a> {text.text16} <a className='greenText'>{text.text17}</a></label>
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