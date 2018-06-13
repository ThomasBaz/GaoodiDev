import React from 'react';
import ReactDOM from 'react-dom';
import './css/BackgroundImg.css';

class BackgroundImg extends React.Component {

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
                        <img src='img/120/icone_photo_click.png' style={{display: this.state.hover ? 'block' : 'none' }}/>
                        <img src='img/120/icone_photo.png' style={{display: this.state.hover ? 'none' : 'block' }}/>
                        {fullText[this.props.locale].text}
                    </label>
                    <input id="file-input" type="file"/>
                </div>
			</div>
		);
	}
}

export default BackgroundImg;
