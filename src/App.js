import React, { Component } from 'react';
import './css/App.css';
import locale from './locale.js';
import HeadSection from './HeadSection.js';
import FormSection from './FormSection.js';
import VidPres from './VidPres.js';
import SimpleEfficaceSecure from './SimpleEfficaceSecure.js';
import BigFooter from './BigFooter.js';
import Faq from './Faq.js';
import ModifyMP from './ModifyMP.js';
import ContactForm from './ContactForm.js';
import PersonalInformations from './PersonalInformations.js';
import PersonalInformationsFiller from './PersonalInformationsFiller.js';
import TerminateContract from './TerminateContract.js';
import Profile from './Profile.js';
import MailBox from './MailBox.js';
import DestChoice from './DestChoice';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/*const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "locale": "fr",
      "logged": true
    }

    this.handleLocaleChangeToFr = this.handleLocaleChangeToFr.bind(this);
    this.handleLocaleChangeToEng = this.handleLocaleChangeToEng.bind(this);
    this.handleLoggout = this.handleLoggout.bind(this);
    this.handleLoggin = this.handleLoggin.bind(this);
  }

  handleLocaleChangeToFr() {
    this.setState({locale: 'fr'});
  }

  handleLocaleChangeToEng() {
    this.setState({locale: 'en'});
  }

  handleLoggout() {
    this.setState({logged: false});
  }

  handleLoggin() {
    this.setState({logged: true});
  }

  render() {
    
    const url = {
      'fr': "/img/1080/M03_P01_couv_FR.jpg",
      'en': "/img/1080/M03_P01_couv_ENG.jpg"
    }

    const fullText = {
      'fr': "GAOODI c'est quoi ?",
      'en': "GAOODI what is it ?"
    }

    const fullText2 = {
      'fr': {
        'mail': 'E-mail',
        'go': 'GO !',
        'password': 'Mot de passe',
        'faq': 'FAQ',
        'urlFlag': '/img/150/langue_fr_150.png'
      },
      'en': {
        'mail': 'E-mail',
        'go': 'GO !',
        'password': 'Password',
        'faq': 'FAQ',
        'urlFlag': '/img/150/langue_eng_150.png'
      }
    }

    const Home = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <div id="imgContainer">
            <img src={url[this.state.locale]} width="100%" height="auto" z-index="1"/>
            <div id="imgLabel">{fullText[this.state.locale]}</div>
        </div>
        <FormSection locale={this.state.locale}/>
        <VidPres locale={this.state.locale}/>
        <SimpleEfficaceSecure locale={this.state.locale}/>
        <BigFooter locale={this.state.locale}/>
      </div>
    );

    const FAQ = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <Faq locale={this.state.locale} />
      </div>
    );

    const AccountCreation = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <PersonalInformationsFiller locale={this.state.locale}/>
      </div>
    );

    const MessageBox = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <MailBox locale={this.state.locale} />
      </div>
    );

    const UserInfo = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <PersonalInformations locale={this.state.locale}/>
      </div>
    );

    const UserProfile = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <Profile locale={this.state.locale}/>
      </div>
    );

    const Destination = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <DestChoice countryInfos={[{url: '/img/1080/CANADA_1080.png', name: 'CANADA'}, {url: '/img/1080/FRANCE_1080.png', name: 'FRANCE'}, {url: '/img/1080/USA_1080.png', name: 'USA'}, {url: '/img/1080/Belgique_1080.png', name: 'BELGIQUE'}]} locale={this.state.locale}/>
      </div>
    );

    const CloseContract = ({ match }) => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <TerminateContract locale={this.state.locale} terminationType={match.params.type}/>
      </div>
    );

    const modifyPassword = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <ModifyMP />
      </div>
    );

    const Contact = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <ContactForm />
      </div>
    );

    const NoMatch = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLoggout={this.handleLoggout} handleLoggin={this.handleLoggin} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <img className="notFound" src="/img/400/404.png" />
      </div>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/newProfile" component={AccountCreation}/>
          <Route exact path="/messages" component={MessageBox} />
          <Route exact path="/userInfo" component={UserInfo} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/terminateContract/:type" component={CloseContract} />
          <Route exact path="/modifyPassword" component={modifyPassword} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;