import React from 'react';
import ReactDOM from 'react-dom';
import './css/BackgroundImg.css';

class BackgroundImg extends React.Component {

	constructor(props) {
        super(props);
                
		this.state = {
            "url": 'img/120/icone_photo.png'
        }
        
		this.handleEnter = this.handleEnter.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
    }
    
    handleLeave() {
        this.setState({url: 'img/120/icone_photo.png'});
    }

    handleEnter() {
        this.setState({url: 'img/120/icone_photo_click.png'});
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
                    <label onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className='NewBg' for="file-input">
                        <img src={this.state.url}/>
                        {fullText[this.props.locale].text}
                    </label>
                    <input id="profile_img_input" type="file"/>
                </div>
			</div>
		);
	}
}

export default BackgroundImg;
