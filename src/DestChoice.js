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

        let options = ages.map(function(num) {
            if((num>=min)&&(num<=max)) {
                return (selectedValue==num?<option value={num} selected>{num}</option>:<option value={num}>{num}</option>);
            }
        });

        return (
            <select onChange={this.props.handleSelectChange} className="selectAge">
                {options}
            </select>
		);
	}
}

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
            to: 25
		};

		this.setActive = this.setActive.bind(this);
		this.handleMinSelectChange = this.handleMinSelectChange.bind(this);
        this.handleMaxSelectChange = this.handleMaxSelectChange.bind(this);
        this.submitDestAndAge = this.submitDestAndAge.bind(this);
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
                        <SelectAge name='fromAge' min={13} max={this.state.to} selectedValue={this.state.from} handleSelectChange={this.handleMinSelectChange} />
                        {fullText[this.props.locale].text3}
                        <SelectAge name='toAge' min={this.state.from} max={25} selectedValue={this.state.to} handleSelectChange={this.handleMaxSelectChange} />
                    </div>
                </div>
                <button onClick={this.submitDestAndAge} className='hereWeGoBtn'>{fullText[this.props.locale].btnText}</button>
			</div>
		);
	}
}
export default DestChoice;