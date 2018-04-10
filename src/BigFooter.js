import React from 'react';
import ReactDOM from 'react-dom';
import Subscribe from './Subscribe.js';
import './css/BigFooter.css';
import './css/font.css';

class BigFooter extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {

		const fullText = {
			'fr': {
				'title1': 'Economisez jusqu\'à 75% de votre budjet',
				'title2': '100% Sécurisé',
				'text1': 'Rentrez facilement en contact avec une famille et laissez votre enfant partir à l’aventure',
				'text2': 'Visitez de nouveaux pays en partageant le quotidien d’une famille locale',
				'text3': 'Vivez d’authentiques vacances en immersion 100% total et devenez en retour cette famille qui accueille',
				'text4': 'Réalisez autant d’échanges que vous souhaitez',
				'text5': 'Profils vérifés',
				'text6': 'Recherche d’antécédents des parents avant d’approuver le profil',
				'text7': 'Seulement reservé pour les jeunes de 13 à 25 ans',
			},
			'en':  {
				'title1': 'Economisez jusqu\'à 75% de votre budjet',
				'title2': '100% Sécurisé',
				'text1': '',
				'text2': '',
				'text3': '',
				'text4': '',
				'text5': '',
				'text6': '',
				'text7': '',
			}
		}

		return(
			<div className="BigFooter">
				<div id="bluePart"/>
				<div id="greyPart">
					<div className="title">{fullText[this.props.locale].title1}</div>
					<div className="subTitle">{fullText[this.props.locale].text1}</div>
					<div className="subTitle">{fullText[this.props.locale].text2}</div>
					<div className="subTitle">{fullText[this.props.locale].text3}</div>
					<div className="subTitle">{fullText[this.props.locale].text4}</div>
					<div className="title">{fullText[this.props.locale].title2}</div>
					<div className="subTitle">{fullText[this.props.locale].text5}</div>
					<div className="subTitle">{fullText[this.props.locale].text6}</div>
					<div className="subTitle">{fullText[this.props.locale].text7}</div>
				</div>
				<Subscribe locale={this.props.locale}/>
			</div>
		);
	}
}

export default BigFooter;