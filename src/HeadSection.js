import React from 'react';
import ReactDOM from 'react-dom';
import './css/HeadSection.css';

class HeadSection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			"emailValue": "",
			"passwordValue": "",
			"display": "none"
		}

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleDisplayChange = this.handleDisplayChange.bind(this);
	}

    handleEmailChange(e) {
        this.setState({emailValue: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({passwordValue: e.target.value});
    }

    handleDisplayChange() {
    	if(this.state.display === 'none') {
        	this.setState({display: 'block'});
	    } else {
        	this.setState({display: 'none'});
	    }
    }

	render() {
		
		let style = {
			'display': this.state.display
		}
		//let text = fullText[this.props.locale];

		return (
			<nav className='HeadSectionContainer'>
				<p>GAOODI</p>
				<div className="formContainer">
					<form >
						<input className="connectionInput" type="text" placeholder={this.props.text.mail} onChange={this.handleEmailChange} />
						<input className="connectionInput" type="password" placeholder={this.props.text.password} onChange={this.handlePasswordChange} />
						<input id="buttonConnect" type="submit" value={this.props.text.go} />
					</form>
					<div className='selector' onMouseEnter={this.handleDisplayChange} onMouseLeave={this.handleDisplayChange}>
						<div className='flagPart'>
							<img id='currentLocale' src={this.props.text.urlFlag}/>
						</div>
						<img className='arrowPart' height='15px'src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png'/>
						<div className='dispRel' style={style} >
							<div id='choice'>
								<div className='aChoice' onClick={this.props.handleLocaleChangeToFr}>
									<img src='img/150/langue_fr_150.png'/>
								</div>
								<div className='aChoice' onClick={this.props.handleLocaleChangeToEng}>
									<img src='img/150/langue_eng_150.png'/>
								</div>
							</div>
						</div>
					</div>
					<button id="FAQ">{this.props.text.faq}</button>
				</div>
			</nav>
		)
	}
}

export default HeadSection;