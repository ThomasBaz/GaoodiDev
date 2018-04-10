import React from 'react';
import ReactDOM from 'react-dom';
import './css/VidPres.css';

class VidPres extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const url = {
			'fr': 'https://player.vimeo.com/video/226716095',
			'en': 'https://player.vimeo.com/video/225837314'
		}
		return (
			<div className="containerVidPres">
				<iframe id="VidPres" src={url[this.props.locale]} webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
			</div>
		)
	}
}

export default VidPres;