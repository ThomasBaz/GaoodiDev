import React from 'react';
import ReactDOM from 'react-dom';
import './css/PersonalInformations.css';

class PersonalInformationsLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.name;
		const value = this.props.value;

		return(
			<div className='PersonalInformationsLine'>
				<p className='PersonalInformationsName'>{name}</p>
				<p className='PersonalInformationsValue'>{value}</p>
			</div>
		);
	};
}

class PersonalInformations extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		/*const generalInfos = this.props.generalInfos;
		const contactInfos = this.props.contactInfos;
		const languages = this.props.languagesInfos;*/

		return(
			<div className='PersonalInformationsContainer'>
				<div className='PersonalInformationsModifyBtn'>
					<button>Modifier</button>
				</div>
				<div className='TitleAndLine'>
					<span>Informations générales</span>
				</div>
				<PersonalInformationsLine name='Prénom' value='Prénom' />
				<PersonalInformationsLine name='Nom de famille' value='N******' />
				<PersonalInformationsLine name='Date de naissance' value='18/02/2002' />
				<PersonalInformationsLine name='Sexe' value='Fille' />
				<div className='TitleAndLine'>
					<span>Mes coordonnées</span>
				</div>
				<PersonalInformationsLine name='Adresse mail' value='blabla@hotmail.fr' />
				<PersonalInformationsLine name='Pays de résidence' value='France' />
				<PersonalInformationsLine name='Ville' value='Dourdan' />
				<PersonalInformationsLine name='Code postal' value='91410' />
				<div className='informationsLineWithBorder'>
					<p className='PersonalInformationsName'>Adresse e-mail d'un des parents</p>
					<p className='PersonalInformationsValue'>Adresse e-mail du parent</p>
				</div>
				<div className='TitleAndLine'>
					<span>Connaissances linguistiques</span>
				</div>
				<PersonalInformationsLine name='Je parle courament (y comprit ma langue maternelle)' value='Français' />
				<PersonalInformationsLine name="j'ai aussi des connaissances de base de" value='Anglais, Espagnol' />
				<div className='TitleAndLine'>
					<span>Mot de passe</span>
				</div>
				<div className='PersonalInformationsMP'>
					<p className='PersonalInformationsName'>*******</p>
					<button className='PersonalInformationsMPBtn'>Modifier</button>
				</div>
				<div className='TitleAndLine'>
					<span>Abonnement</span>
				</div>
				<PersonalInformationsLine name='1x abonnement annuel' value='150$' />
				<button className='resBtn'>Résilier -- (profil inactif)</button>
				<p className='smallTxt'>Cette action résillera votre abonnement à partir de xxxxx. Nous garderons dans notre base de données votre profil, vous pourrez réactiver votre abonnement
à tout moment sans perdre vos informations.</p>
				<button className='resBtn'>Résilier -- (supprimer profil)</button>
				<p className='smallTxt'>Cette action résillera votre abonnement dès aujourd’hui. Nous supprimerons votre profil et vos informations de notre base de données, de façon définitif.
Vous pourrez vous réabonner à tout moment mais il faudra vous recréer un pro􀃶l à partir de zéro..<br/>
ATTENTION - Vous vous êtes engagé à payer pour l’année, vous ne serez pas remboursé pour les mois non utilisé.</p>
			</div>
		);
	};
}

export default PersonalInformations;