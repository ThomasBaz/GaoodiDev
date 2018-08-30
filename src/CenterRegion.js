import React from 'react';
import ReactDOM from 'react-dom';
import './css/CenterRegion.css';
import Carousel from 'nuka-carousel';
import Progress from 'react-progressbar';
import Draggable from 'react-draggable';

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
			<div className="AskQuestionContainer" onClick={this.props.showQuestionnary}>
				<div className="AskQuestionFirstLine">
					<p>{fullText[this.props.locale]["title"]}</p>
					<img src="../img/120/question.png"/>
					<div className="pbContainer">
						<div className="pbValue">{this.props.completion}%</div>
						<Progress className="customPgBar" completed={this.props.completion} />
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
			(anUrl, index) => <img key={index} className="PhotoViewerImg" src={anUrl} />
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

class QuestionForQuestionnary extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const answersBtn = this.props.answers.map(
			(anAnswer, index) => <button key={index} className="blancBtn">{anAnswer}</button>
		);

		return(
			<div className="aQuestionContainer">
				{this.props.question}
				<div className="answersContainer">
					{answersBtn}
				</div>
			</div>
		);
	}
}

class CenterRegion extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			questionnaryHided: true
		};

		this.hideQuestionnary = this.hideQuestionnary.bind(this);
		this.showQuestionnary = this.showQuestionnary.bind(this);
		this.submitAnswers = this.submitAnswers.bind(this);
	}

	hideQuestionnary() {
		console.log("hideQuestionnary");
		if(!this.state.questionnaryHided) {
			this.setState({questionnaryHided: true});
		}
	}

	showQuestionnary() {
		console.log("showQuestionnary");
		if(this.state.questionnaryHided) {
			this.setState({questionnaryHided: false});
		}
	}

	submitAnswers() {
		this.setState({questionnaryHided: true});
	}

	render() {
		const fullText = {
			'fr': {
			},
			'en':  {
			}
		}

		/*let allQuestionAndAnswers = this.props.answers.map(
			(anAnswer, index) => <QuestionForQuestionnary key={index} className="blancBtn" />
		);*/
		
		return(
			<div className="CenterRegionContainer">
				<Presentation locale='fr' />
				<AskQuestion locale='fr' completion={20} showQuestionnary={this.showQuestionnary}/>
				<Draggable
					axis="both"
					defaultPosition={{x: -100, y: 0}}
					bounds={{top: -250, left: -500, right: 350, bottom: 500}}>
					<div style={{display: this.state.questionnaryHided ? 'none' : 'block' }} className="DraggableQuestionnary">
						<div className="handle topBlueBorder"></div>
						<div className="questionsPart">
							<QuestionForQuestionnary key={1} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3"]} />
							<QuestionForQuestionnary key={2} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3"]} />
							<QuestionForQuestionnary key={3} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3  to try", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3"]} />
							<QuestionForQuestionnary key={4} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3"]} />
							<QuestionForQuestionnary key={5} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3", "answer 1", "answer 2", "answer 3"]} />
							<QuestionForQuestionnary key={6} question="Intitulé de la question ?" answers={["answer 1", "answer 2", "answer 3"]} />
							<div className="QuestionnaryFooter">
								<button onClick={this.hideQuestionnary} className="submitQuestionnaryBtn">Valider</button>
							</div>
						</div>
					</div>
				</Draggable>
				<PhotoViewer images={["https://uploads.lebonbon.fr/source/2017/paris/octobre/tim-flach-portrait-animaux-disparition-2.png", "https://www.lepal.com/uploads/media/default/0001/01/b2e9889b070dabc0656cbe9f99d3f1747cd9bc4c.jpeg", "https://www.jardiland.com/media/catalog/category/AdobeStock_123791724_1.jpeg", "https://static.mmzstatic.com/wp-content/uploads/2017/04/animaux-intelligents-anecdotes.jpg", "https://cache.marieclaire.fr/data/photo/w1000_ci/4y/tests-animaux-cosmetiques.jpg"]}/>
				<MatchInfos locale="fr" askValue="0" foundedValue="0" validatedValue="0"/>
				<button disabled className="bigButton findCorres">Trouver mon correspondant</button>
				<button className="bigButton finishProfile">Finaliser mon profil</button>
			</div>
		);
	}
}

export default CenterRegion;
