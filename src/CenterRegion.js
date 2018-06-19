import React from 'react';
import ReactDOM from 'react-dom';
import './css/CenterRegion.css';

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
			},
			'en':  {
			}
		}
		
		return(
			<div className="AskQuestionContainer">
			</div>
		);
	}
}

class PhotoViewer extends React.Component {

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
			<div className="PhotoViewerContainer">
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
				<AskQuestion />
				<PhotoViewer />
				<MatchInfos locale="fr" askValue="0" foundedValue="0" validatedValue="0"/>
			</div>
		);
	}
}

export default CenterRegion;
