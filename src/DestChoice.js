import React from 'react';
//import ReactDOM from 'react-dom';
import './css/DestChoice.css';


class SelectAge extends React.Component {
	constructor(props) {
        super(props);
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
        const ages = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        let min = this.props.min;
        let max = this.props.max;
        let selectedValue = this.props.selectedValue;

        let options = ages.map(function(num, index) {
            if((num>=min)&&(num<=max)) {
                return (selectedValue==num?<option key={index} value={num} selected>{num}</option>:<option key={index} value={num}>{num}</option>);
            }
        });

        return (
            <select onChange={this.props.handleSelectChange} className="selectAge">
                {options}
            </select>
		);
	}
}

class CustomRadioBtn extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        const fullText = {
            'fr': {
                'choice1': 'Qui ne parle pas courament ma langue maternelle',
                'choice2': 'Qui parle courament ma langue maternelle',
                'choice3': 'Les deux possibilités me conviennent'
            },
            'en':  {
                'choice1': 'Who doesn\'t speak fluently my mother language',
                'choice2': 'Who speak fluently my mother language',
                'choice3': 'Both are okay'
            }
        }

        return (
            <div onSelect={this.props.select} className='customRadioBtn'>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="langChoice1" name="lang" value={fullText[this.props.locale]['choice1']}/>
                    <label htmlFor="langChoice1">{fullText[this.props.locale]['choice1']}</label>
                </div>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="langChoice2" name="lang" value={fullText[this.props.locale]['choice2']}/>
                    <label htmlFor="langChoice2">{fullText[this.props.locale]['choice2']}</label>
                </div>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="langChoice3" name="lang" value={fullText[this.props.locale]['choice3']}/>
                    <label htmlFor="langChoice3">{fullText[this.props.locale]['choice3']}</label>
                </div>
            </div>
        );
    }
};

class CustomRadioBtn2 extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        const fullText = {
            'fr': {
                'choice1': 'Une fille',
                'choice2': 'Un garçon',
                'choice3': 'Peu importe'
            },
            'en':  {
                'choice1': 'A girl',
                'choice2': 'A boy',
                'choice3': 'Both are okay'
            }
        }

        return (
            <div className='customRadioBtn'>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="genderChoice1" name="gender" value={fullText[this.props.locale]['choice1']}/>
                    <label htmlFor="genderChoice1">{fullText[this.props.locale]['choice1']}</label>
                </div>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="genderChoice2" name="gender" value={fullText[this.props.locale]['choice2']}/>
                    <label htmlFor="genderChoice2">{fullText[this.props.locale]['choice2']}</label>
                </div>
                <div className='inLineFlex'>
                    <input onClick={this.props.select} type="radio" id="genderChoice3" name="gender" value={fullText[this.props.locale]['choice3']}/>
                    <label htmlFor="genderChoice3">{fullText[this.props.locale]['choice3']}</label>
                </div>
            </div>
        );
    }
};

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
            activeCountry: null,
            from: 13,
            to: 25,
            lang: null,
            gender: null
		};

		this.setActive = this.setActive.bind(this);
		this.handleMinSelectChange = this.handleMinSelectChange.bind(this);
        this.handleMaxSelectChange = this.handleMaxSelectChange.bind(this);
        this.submitDestAndAge = this.submitDestAndAge.bind(this);
        this.changeCorresLang = this.changeCorresLang.bind(this);
        this.changeCorresGender = this.changeCorresGender.bind(this);
	}

    setActive(event) {
        this.setState({activeCountry: event.target.parentElement.children[1].innerText});
    }
    
    handleMinSelectChange(event) {
        this.setState({from: event.target.value});
    }
    
    handleMaxSelectChange(event) {
        this.setState({to: event.target.value});
    }
    
    submitDestAndAge() {
        console.log('Selected country :' + this.state.activeCountry + ', from ' + this.state.from + ' to ' + this.state.to + ' yo');
        console.log('Language wished :' + this.state.lang);
        console.log('Gender wished :' + this.state.gender);
    }

    changeCorresLang(event) {
        this.setState({lang: event.target.value});
    }

    changeCorresGender(event) {
        this.setState({gender: event.target.value});
    }

	render() {
		const fullText = {
			'fr': {
                'title': 'Choisis ta Destination',
                'text1': 'Je souhaite un correspondant...',
                'text2': 'entre',
                'text3': 'et',
                'text4': 'Je souhaite un correspondant...',
                'btnText': 'C\'est partit !'
			},
			'en':  {
                'title': 'Choose your Destination',
                'text1': 'I wish someone...',
                'text2': 'between',
                'text3': 'and',
                'text4': 'I\'m looking for someone...',
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
                        <SelectAge name='fromAge' min={13} max={this.state.to} selectedValue={this.state.from} handleSelectChange={this.handleMinSelectChange} />
                        {fullText[this.props.locale].text3}
                        <SelectAge name='toAge' min={this.state.from} max={25} selectedValue={this.state.to} handleSelectChange={this.handleMaxSelectChange} />
                    </div>
                </div>
                <div className='ageChoiceContainer'>
                    {fullText[this.props.locale].text4}
                    <CustomRadioBtn select={this.changeCorresLang} locale={this.props.locale}/>
                </div>
                <div className='ageChoiceContainer'>
                    {fullText[this.props.locale].text4}
                    <CustomRadioBtn2 select={this.changeCorresGender} locale={this.props.locale}/>
                </div>
                <button onClick={this.submitDestAndAge} className='hereWeGoBtn'>{fullText[this.props.locale].btnText}</button>
			</div>
		);
	}
}
export default DestChoice;