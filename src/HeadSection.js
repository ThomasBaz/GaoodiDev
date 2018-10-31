import React from 'react';
import ReactDOM from 'react-dom';
import './css/HeadSection.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MessageSmallImg extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const count = this.props.messageCount < 10 ? this.props.messageCount : "9+";

		return(
			<div className="imgMessageHeaderLoggedContainer">
				<img className="imgHeaderLogged" src="img/120/icone_messanger.png" />
				<div className="smallMessageCount">{count}</div>
			</div>
		);
	}
}

class HeadSection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			"emailValue": "",
			"passwordValue": "",
			"display": "none",
			"dropdown": "none"
		}

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleDisplayChange = this.handleDisplayChange.bind(this);
		this.handleDropdownChange = this.handleDropdownChange.bind(this);
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
	
	handleDropdownChange() {
    	if(this.state.dropdown === 'none') {
        	this.setState({dropdown: 'block'});
	    } else {
        	this.setState({dropdown: 'none'});
	    }
    }

	render() {
		
		let style = {
			'display': this.state.display
		}

		let styleDropdown = {
			'display': this.state.dropdown
		}

		let notLoggedPart = (
			<form >
				<input className="connectionInput" type="text" placeholder={this.props.text.mail} onChange={this.handleEmailChange} />
				<input className="connectionInput" type="password" placeholder={this.props.text.password} onChange={this.handlePasswordChange} />
				<input id="buttonConnect" type="submit" value={this.props.text.go} />
			</form>
		);

		let loggedPart = (
			<div className="imgHeaderLoggedContainer">
				<img className="imgHeaderLogged" src="img/120/icone_user.png" />
				<MessageSmallImg messageCount={10} />
				<div className="dropdown" onMouseEnter={this.handleDropdownChange} onMouseLeave={this.handleDropdownChange}>
					<img className="imgHeaderLogged smallProfileImg" src="https://i.ytimg.com/vi/FG_Rxe4KQfY/hqdefault.jpg" />
					<div id="myDropdown" className="dropdown-content" style={styleDropdown}>
						<a href="#">Mes infos</a>
						<a href="#">Mon profil</a>
						<a href="#">Mon messages</a>
						<a href="#">Mes amis</a>
						<a href="#">Se déconnecter</a>
						<a className="paddTop5" href="#">Nous contacter</a>
					</div>
				</div>
			</div>
		);

		return (
			<nav className='HeadSectionContainer'>
				<Link className="linkNoUnderline" to="/">
					<p>GAOODI</p>
				</Link>
				<div className="formContainer">
					{this.props.isLogged ? loggedPart : notLoggedPart}
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
					<Link to="/FAQ">
						<button id="FAQ">{this.props.text.faq}</button>
					</Link>
				</div>
			</nav>
		)
	}
}

export default HeadSection;