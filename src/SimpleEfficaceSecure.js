import React from 'react';
import ReactDOM from 'react-dom';
import FacebookConnectButton from './FacebookConnectButton.js';
import PgrComponent from './PgrComponent.js';
import './css/SimpleEfficaceSecure.css';
import './css/font.css';

class SimpleEfficaceSecure extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const parts = ["simple", "efficace", "secure"];

		const fullText = {
			'fr': {
				'simple': {'src': 'img/400/simple_400.png', 'title': 'Simple', 'subTitle': 'Un système de match', 'text': 'Les questions du test de personnalité permettent d’analyser au mieux votre personnalité et de vous mettre en relation uniquement avec des jeunes qui vous correspondent et avec qui vous pouvez partager des points communs.'},
				'efficace': {'src': 'img/400/efficace_400.png', 'title': 'Efficace', 'subTitle': 'Réservé aux jeunes de 13 à 25 ans', 'text': 'GAOODI met en relation uniquement des jeunes, de 13 à 25 ans, qui veulent trouver un correspondant pour faire un échange linguistique et culturel.'},
				'secure': {'src': 'img/400/secure_400.png', 'title': 'Sécurisé', 'subTitle': '100% Sécurisé', 'text': 'chez GAOODI, la sécurité est au centre de nos préoccupations. Tous les profils sont vérifiés manuellement avant d’être approuvés. Trouvez un correspondant en toute sécurité !'}
			},
			'en':  {
				'simple': {'src': 'img/400/simple_400.png', 'title': 'Simple', 'subTitle': 'Un système de match', 'text': 'Les questions du test de personnalité permettent d’analyser au mieux votre personnalité et de vous mettre en relation uniquement avec des jeunes qui vous correspondent et avec qui vous pouvez partager des points communs.'},
				'efficace': {'src': 'img/400/efficace_400.png', 'title': 'Efficace', 'subTitle': 'Réservé aux jeunes de 13 à 25 ans', 'text': 'GAOODI met en relation uniquement des jeunes, de 13 à 25 ans, qui veulent trouver un correspondant pour faire un échange linguistique et culturel.'},
				'secure': {'src': 'img/400/secure_400.png', 'title': 'Sécurisé', 'subTitle': '100% Sécurisé', 'text': 'chez GAOODI, la sécurité est au centre de nos préoccupations. Tous les profils sont vérifiés manuellement avant d’être approuvés. Trouvez un correspondant en toute sécurité !'}
			}
		}

		const listItem = parts.map(
			(name) => <PgrComponent key={name} src={fullText[this.props.locale][name]['src']} title={fullText[this.props.locale][name]['title']} subTitle={fullText[this.props.locale][name]['subTitle']} text={fullText[this.props.locale][name]['text']} />
		);
		
		return(
			<div className="SimpleEfficaceSecure">
				{listItem}
			</div>
		);
	}
}

export default SimpleEfficaceSecure;
/*{this.state.names.map(
					(name) => <PgrComponent name={name} />
	            )}*/
