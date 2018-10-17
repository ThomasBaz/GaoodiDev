import React from 'react';
//import ReactDOM from 'react-dom';
import './css/DestChoice.css';

class DestImg extends React.Component {
	constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(event) {
        if(event.target.className == 'DestImgContainer') {
            event.target.children[1].className = 'centeredTextSelected';
        } else {
            event.target.parentElement.children[1].className = 'centeredTextSelected';
        }
    }
    
    handleMouseLeave(event) {
        let currentNode;
        if(event.target.className == 'DestImgContainer') {
            currentNode = event.target.children[1];
        } else {
            currentNode = event.target.parentElement.children[1];
        }
        if(this.props.active) {
            currentNode.className = 'centeredTextSelected';
        } else {
            currentNode.className = 'centeredText';
        }
    }

	render() {
        return (
			<div onClick={this.props.setActive} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className='DestImgContainer'>
                <img className={this.props.active?'DestImgSelected':'DestImgContainerImg'} src={this.props.imgUrl}/>
                <div className={this.props.active?'centeredTextSelected':'centeredText'}>{this.props.country}</div>
			</div>
		);
	}
}

class DestChoice extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            dest: null,
            activeCountry: null
		};

		this.chooseDest = this.chooseDest.bind(this);
		this.setActive = this.setActive.bind(this);
	}

	chooseDest(event) {
		this.setState({dest: event.target.value});
    }
    
    setActive(event) {
        this.setState({activeCountry: event.target.parentElement.children[1].innerText});
	}

	render() {
		const fullText = {
			'fr': {
                'title': 'Choisis ta Destination',
                'text1': 'Je souhaite un correspondant...',
                'text2': 'entre',
                'text3': 'et',
                'btnText': 'C\'est partit !'
			},
			'en':  {
                'title': 'Choose your Destination',
                'text1': 'I wish someone...',
                'text2': 'between',
                'text3': 'and',
                'btnText': 'Here we go !'
			}
        }

        let activeCountry = this.state.activeCountry;
        let funcSetActive = this.setActive;
        
        let images = this.props.countryInfos.map(function(aCountyInfos, index) {
            if(activeCountry == aCountyInfos.name) {
                return <DestImg active={true} setActive={funcSetActive} key={index} imgUrl={aCountyInfos.url} country={aCountyInfos.name}/>
            } else {
                return <DestImg active={false} setActive={funcSetActive} key={index} imgUrl={aCountyInfos.url} country={aCountyInfos.name}/>
            }
        });

		return (
			<div className='DestChoiceContainer'>
                {fullText[this.props.locale].title}
                {images}
                <div className='ageChoiceContainer'>
                    {fullText[this.props.locale].text1}
                    <div className='ageChoiceLine'>
                        {fullText[this.props.locale].text2}
                        {fullText[this.props.locale].text3}
                    </div>
                </div>
                <button className='hereWeGoBtn'>{fullText[this.props.locale].btnText}</button>
			</div>
		);
	}
}
export default DestChoice;