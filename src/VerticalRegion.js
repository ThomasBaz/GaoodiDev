import React from 'react';
import ReactDOM from 'react-dom';
import './css/VerticalRegion.css';

class VerticalRegion extends React.Component {

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
			<div className="VerticalRegionContainer">
				<ImgProfile profileImg={null}/>
				<div className="vertTitle">Prenom. N</div>
				<div className="vertSubTitle">Pays - Ville</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertInfo">info</div>
				<div className="vertMessages">Mes messages...</div>
				<div className="vertFriends">Mes amis du monde...</div>
				<div className="vertLeisures">Mes passions...</div>
			</div>
		);
	}
}

class ImgProfile extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
<<<<<<< HEAD
            "hover": false
=======
            "url": 'img/120/icone_photo.png'
>>>>>>> 386df78846c4a41d26a3a5ba7f28da415ed0aac6
		}
		
		this.handleEnter = this.handleEnter.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleLeave() {
<<<<<<< HEAD
        this.setState({hover: false});
    }

    handleEnter() {
        this.setState({hover: true});
=======
        this.setState({url: 'img/120/icone_photo.png'});
    }

    handleEnter() {
        this.setState({url: 'img/120/icone_photo_click.png'});
>>>>>>> 386df78846c4a41d26a3a5ba7f28da415ed0aac6
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
<<<<<<< HEAD
						<img src='img/120/icone_photo.png' style={{display: this.state.hover ? 'none' : 'block' }}/>
						<img src='img/120/icone_photo_click.png' style={{display: this.state.hover ? 'block' : 'none' }}/>
=======
						<img src={this.state.url}/>
>>>>>>> 386df78846c4a41d26a3a5ba7f28da415ed0aac6
					</label>
					<input id="profile_img_input" type="file"/>
				</div>
			);
		}
	
		return(
			<div className="ImgProfileContainer">
				{img}
			</div>
		);
	}
}

export default VerticalRegion;