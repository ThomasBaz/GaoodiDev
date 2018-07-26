import React from 'react';
import ReactDOM from 'react-dom';
import './css/CenterRegion.css';
import Carousel from 'nuka-carousel';
import Progress from 'react-progressbar';

class Presentation extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			contentText: ''
		};

		this.handleContentTextChange = this.handleContentTextChange.bind(this);
	}

	handleContentTextChange(event) {
		this.setState({contentText: event.target.value});
	}

	render() {
		const fullText = {
			'fr': {
				'placeholder': 'Je me présente ...'
			},
			'en':  {
				'placeholder': 'I introduce myself ...'
			}
		}
		
		return(
			<textarea className="PresentationContainer" placeholder={fullText[this.props.locale].placeholder} onChange={this.handleContentTextChange} />
		);
	}
}

class AskQuestion extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const fullText = {
			'fr': {
				'title': 'Posez moi des questions !',
				'text': 'Plus il y aura de reponses, plus la recherche sera précise. Il faut au moins atteindre 70% de réponses pour pouvoir lancer une recherche de correspondant :)'
			},
			'en':  {
				'title': 'Ask me some questions !',
				'text': 'The more answers you give, more precise the research will be. You must reach at least 70% answer rate to be able to initiate a matching research :)'
			}
		}
		
		return(
			<div className="AskQuestionContainer">
				<div className="AskQuestionFirstLine">
					<p>{fullText[this.props.locale]["title"]}</p>
					<img src="../img/120/question.png"/>
					<div className="pbContainer">
						<div className="pbValue">40%</div>
						<Progress className="customPgBar" completed={80} />
					</div>
				</div>
				<p className="AskQuestionText">{fullText[this.props.locale]["text"]}</p>
			</div>
		);
	}
}

class PhotoViewer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const images = this.props.images.map(
			(anUrl) => <img className="PhotoViewerImg" src={anUrl} />
		);
		
		return(
			<div className="PhotoViewerContainer">
				<Carousel 
							renderCenterLeftControls={({ previousSlide }) => (
								<button className="prevBtn" onClick={previousSlide}></button>
							)}
							renderCenterRightControls={({ nextSlide }) => (
								<button className="nextBtn" onClick={nextSlide}></button>
							)}>
					{images}
				</Carousel>
			</div>
		);
	}
}

class MatchInfos extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const fullText = {
			'fr': {
				ask: 'Demande de correspondant',
				founded: 'Match trouvé',
				validated: 'Match validé'
			},
			'en':  {
				ask: 'Correspondent\'s request',
				founded: 'Founded matches',
				validated: 'Validated matches'
			}
		}
		
		return(
			<div className="MatchInfosContainer">
				<div className="aMatchInfoLine">
					<div>{fullText[this.props.locale].ask}</div>
					<div>{this.props.askValue}</div>
				</div>
				<div className="aMatchInfoLine">
					<div>{fullText[this.props.locale].founded}</div>
					<div>{this.props.foundedValue}</div>
				</div>
				<div className="aMatchInfoLine">
					<div>{fullText[this.props.locale].validated}</div>
					<div>{this.props.validatedValue}</div>
				</div>
			</div>
		);
	}
}

class CenterRegion extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const fullText = {
			'fr': {
			},
			'en':  {
			}
		}
		
		return(
			<div className="CenterRegionContainer">
				<Presentation locale='fr' />
				<AskQuestion locale='fr' />
				<PhotoViewer images={["https://uploads.lebonbon.fr/source/2017/paris/octobre/tim-flach-portrait-animaux-disparition-2.png", "https://www.lepal.com/uploads/media/default/0001/01/b2e9889b070dabc0656cbe9f99d3f1747cd9bc4c.jpeg", "https://www.jardiland.com/media/catalog/category/AdobeStock_123791724_1.jpeg", "https://static.mmzstatic.com/wp-content/uploads/2017/04/animaux-intelligents-anecdotes.jpg", "https://cache.marieclaire.fr/data/photo/w1000_ci/4y/tests-animaux-cosmetiques.jpg"]}/>
				<MatchInfos locale="fr" askValue="0" foundedValue="0" validatedValue="0"/>
				<button disabled className="bigButton findCorres">Trouver mon correspondant</button>
				<button className="bigButton finishProfile">Finaliser mon profil</button>
			</div>
		);
	}
}

export default CenterRegion;
