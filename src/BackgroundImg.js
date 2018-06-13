import React from 'react';
import ReactDOM from 'react-dom';
import './css/BackgroundImg.css';

class BackgroundImg extends React.Component {

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
		const fullText = {
			'fr': {
                'text': 'Ajouter une image d\'arrière plan'
			},
			'en':  {
                'text': 'Add a background image'
			}
        }

		return(
			<div className="BackgroundImgContainer">
                <div className='NewBg'>
                    <label onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className='NewBg' htmlFor="file-input">
<<<<<<< HEAD
                        <img src='img/120/icone_photo_click.png' style={{display: this.state.hover ? 'block' : 'none' }}/>
                        <img src='img/120/icone_photo.png' style={{display: this.state.hover ? 'none' : 'block' }}/>
=======
                        <img src={this.state.url}/>
>>>>>>> 386df78846c4a41d26a3a5ba7f28da415ed0aac6
                        {fullText[this.props.locale].text}
                    </label>
                    <input id="file-input" type="file"/>
                </div>
			</div>
		);
	}
}

export default BackgroundImg;
