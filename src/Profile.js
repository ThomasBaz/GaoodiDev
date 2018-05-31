import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundImg from './BackgroundImg.js'
import VerticalRegion from './VerticalRegion.js'
import CenterRegion from './CenterRegion.js'
import './css/Profile.css';

class Profile extends React.Component {

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
			<div className="ProfileContainer">
                <BackgroundImg locale={this.props.locale}/>
                <VerticalRegion locale={this.props.locale}/>
                <CenterRegion locale={this.props.locale}/>
			</div>
		);
	}
}

export default Profile;
