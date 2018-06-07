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
			},
			'en':  {
			}
		}
		
		return(
			<div className="MatchInfosContainer">
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
				<MatchInfos />
			</div>
		);
	}
}

export default CenterRegion;
