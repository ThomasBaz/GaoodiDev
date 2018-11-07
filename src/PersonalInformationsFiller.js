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
		const multSelect = this.props.multSelect;
		let selectPart;
		if(multSelect) {
			selectPart = (
				<select className="multipleChoiceQuestion" size={6} name="secureQuestions" multiple>
  					<option value="" selected disabled hidden>- Séléctionner -</option>
					<option value="q1">Volvo</option>
					<option value="q2">Saab</option>
					<option value="q3">Fiat</option>
					<option value="q4">Audi</option>
				</select>
			);
		} else {
			selectPart = (
				<select className="multipleChoiceQuestion" name="secureQuestions" >
  					<option value="" selected disabled hidden>- Séléctionner -</option>
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
				'text11': '',
				'text12': 'Mot de passe (doit contenir 8 caractères minimum et au moins une majuscule)',
				'text13': 'Confirmer le mot de passe',
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
						<label className='textPersonalInformationsFiller'>J'ai lu et j'accepte les <a className='greenText'>conditions générales d'utilisation</a> et les <a className='greenText'>conditions générales de vente</a></label>
					</div>
				</div>
				<div className='creationBtnContainer'>
					<button className='CreateProfilBtn'>Création du profil</button>
				</div>
			</div>
		);
	};
}

export default PersonalInformationsFiller;