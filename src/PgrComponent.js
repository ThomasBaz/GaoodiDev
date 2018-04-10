import React from 'react';
import ReactDOM from 'react-dom';
import './css/PgrComponent.css';
import './css/font.css';

class PgrComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return(
			<div className="PgrComponent">
				<img src={this.props.src}/>
				<div className="title">{this.props.title}</div>
				<div className="subTitle">{this.props.subTitle}</div>
				<div className="text">{this.props.text}</div>
			</div>
		);
	}
}

export default PgrComponent;