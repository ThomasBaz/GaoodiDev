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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "locale": "fr",
      "logged": false
    }

    this.handleLocaleChangeToFr = this.handleLocaleChangeToFr.bind(this);
    this.handleLocaleChangeToEng = this.handleLocaleChangeToEng.bind(this);
  }

  handleLocaleChangeToFr(e) {
    debugger
    this.setState({locale: 'fr'});
  }

  handleLocaleChangeToEng(e) {
    debugger
    this.setState({locale: 'en'});
  }

  render() {
    
    const url = {
      'fr': "./img/1080/M03_P01_couv_FR.jpg",
      'en': "./img/1080/M03_P01_couv_ENG.jpg"
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
        'urlFlag': 'img/150/langue_fr_150.png'
      },
      'en': {
        'mail': 'E-mail',
        'go': 'GO !',
        'password': 'Password',
        'faq': 'FAQ',
        'urlFlag': 'img/150/langue_eng_150.png'
      }
    }

    const Home = () => (
      <div className="AppContainer">
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
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
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={this.state.logged}/>
        <Faq />
      </div>
    );

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/FAQ" component={FAQ} />
        </div>
      </Router>
    );
  }
}

export default App;



        /*
        
        <div className="AppContainer">
          <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={true}/>
          <DestChoice countryInfos={[{url: 'img/1080/CANADA_1080.png', name: 'CANADA'}, {url: 'img/1080/FRANCE_1080.png', name: 'FRANCE'}, {url: 'img/1080/USA_1080.png', name: 'USA'}, {url: 'img/1080/Belgique_1080.png', name: 'BELGIQUE'}]} locale={this.state.locale}/>
        </div>

        <Faq />
        <ContactForm/>

         /*</Router>
      <div>
        <HeadSection handleLocaleChangeToFr={this.handleLocaleChangeToFr} handleLocaleChangeToEng={this.handleLocaleChangeToEng} text={fullText2[this.state.locale]} locale={this.state.locale} isLogged={true}/>
        <div id="imgContainer">
            <img src={url[this.state.locale]} width="100%" height="auto" z-index="1"/>
            <div id="imgLabel">{fullText[this.state.locale]}</div>
        </div>
        <FormSection locale={this.state.locale}/>
        <VidPres locale={this.state.locale}/>
        <SimpleEfficaceSecure locale={this.state.locale}/>
        <BigFooter locale={this.state.locale}/>
        <Faq />
        <ContactForm/>
        <ModifyMP />
        <PersonalInformations/>
        <PersonalInformationsFiller locale={this.state.locale}/>
        <TerminateContract locale={this.state.locale} terminationType={'definitively'}/>
        <MailBox />
      </div>*/