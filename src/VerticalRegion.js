import React from 'react';
import ReactDOM from 'react-dom';
import './css/VerticalRegion.css';
import LeasureBox from './LeasureBox.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CountChip extends React.Component {

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
			<div className="countChipContainer">
				{this.props.count}
			</div>
		);
	}
}

class VerticalRegion extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			"leasureClicked": false,
			"selectedLeisures": []
		}

		this.handleClickMsg = this.handleClickMsg.bind(this);
		this.handleClickFriends = this.handleClickFriends.bind(this);
		this.handleClickLeisures = this.handleClickLeisures.bind(this);
		this.updateChosenLeisures = this.updateChosenLeisures.bind(this);
	}

	handleClickMsg() {
		// On redirige vers la messagerie
	}
	
	handleClickFriends() {
		// ??
	}
	
	handleClickLeisures() {
		// Affiche une dialog qui permet d'ajouter des passions
		if(this.state.leasureClicked) {
			this.setState({leasureClicked : false});
		} else {
			this.setState({leasureClicked : true});
		}
	}

	updateChosenLeisures(leisureUrlArray) {
		this.setState({selectedLeisures : leisureUrlArray});
	}

	render() {
		const fullText = {
			'fr': {
				'text1': 'Mes messages...',
				'text2': 'Mes amis du monde...',
				'text3': 'Mes passions...'
			},
			'en':  {
				'text1': 'My messages...',
				'text2': 'My friends...',
				'text3': 'My passions...'
			}
		}

		let imgLeisures = this.state.selectedLeisures.map(
			(anUrl, index) => <img key={index} className="selectedLeisure" src={anUrl} />
		);
		
		return(
			<div className="VerticalRegionContainer">
				<ImgProfile profileImg={null} verified={true}/>
				<div className="vertTitle">Prenom. N</div>
				<div className="vertSubTitle">Pays - Ville</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<Link className="linkNoUnderline" to="/messages">
					<div className="vertMessages">
						{fullText[this.props.locale].text1}
						<CountChip count={0}/>
					</div>
				</Link>
				<div className="vertFriends">
						{fullText[this.props.locale].text2}
					<CountChip count={0}/>
				</div>
				<div className="vertLeisures" onClick={this.handleClickLeisures}>
					{fullText[this.props.locale].text3}
					<div className="selectedLeisureContainer">
						{imgLeisures}
					</div>
				</div>
				<LeasureBox display={this.state.leasureClicked} selectedLeisures={this.state.selectedLeisures} closeBox={this.handleClickLeisures} propagateLeisureChanges={this.updateChosenLeisures}/>
			</div>
		);
	}
}

class ImgProfile extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			"hover": false
		}
		
		this.handleEnter = this.handleEnter.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleLeave() {
        this.setState({hover: false});
    }

    handleEnter() {
        this.setState({hover: true});
    }

	render() {

		let img;
		if(this.props.profileImg) {
			img = (
				<div className="blueCircle" >
					<img className="ImgProfile" src={this.props.profileImg}/>
				</div>
			);
		} else {
			img = (
				<div className="blueCircle" >
					<label onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className='NewBg' htmlFor="profile_img_input">
						<img src='/img/120/icone_photo.png' style={{display: this.state.hover ? 'none' : 'block' }}/>
						<img src='/img/120/icone_photo_click.png' style={{display: this.state.hover ? 'block' : 'none' }}/>
					</label>
					<input id="profile_img_input" type="file"/>
				</div>
			);
		}
	
		return(
			<div className="ImgProfileContainer">
				{img}
				<img className="IsVerified" src="/img/240/verifié_240.png" style={{display: this.props.verified ? 'block' : 'none' }}/>
			</div>
		);
	}
}

export default VerticalRegion;