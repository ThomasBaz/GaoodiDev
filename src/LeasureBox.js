import React from 'react';
import ReactDOM from 'react-dom';
import './css/LeasureBox.css';

class LeasureBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			contentText: ''
		};

		this.submitChanges = this.submitChanges.bind(this);
		this.clickIcon = this.clickIcon.bind(this);
	}

	submitChanges(event) {
		console.log("submit button clicked");
		//this.setState({contentText: event.target.value});
	}

	clickIcon(event) {
		debugger
		console.log("Icon clicked");
		//this.setState({contentText: event.target.value});
	}

	render() {
		const fullText = {
			'fr': {
			},
			'en':  {
			}
		}

		const iconLst = ["png_icone/001-chess.png",         "png_icone/002-sausage.png",        "png_icone/004-trekker.png",     "png_icone/008-pan.png",       "png_icone/014-float.png",       "png_icone/024-sack-race.png",   "png_icone/033-bonfire.png",       "png_icone/053-moose.png",     "png_icone/079-crow.png",         "png_icone/cassette-player.png",    "png_icone/seed.png",
						 "png_icone/001-dance.png",         "png_icone/002-waffle.png",         "png_icone/004-ufo.png",         "png_icone/008-surf.png",      "png_icone/015-golf.png",        "png_icone/024-tiger.png",       "png_icone/033-gorilla.png",       "png_icone/054-snail.png",     "png_icone/080-dolphin.png",      "png_icone/chef-hat.png",           "png_icone/smiley.png",
						 "png_icone/001-drizzle.png",       "png_icone/003-rainy-day.png",      "png_icone/005-headphones.png",  "png_icone/008-ticket.png",    "png_icone/016-pirogue.png",     "png_icone/025-ostrich.png",     "png_icone/034-kangaroo.png",      "png_icone/055-cat.png",       "png_icone/085-turtle.png",       "png_icone/coffee-machine.png",     "png_icone/write.png",
						 "png_icone/001-eight-ball.png",    "png_icone/003-speaker.png",        "png_icone/005-poker.png",       "png_icone/009-diving.png",    "png_icone/017-tennis.png",      "png_icone/025-tent-1.png",      "png_icone/034-tent.png",          "png_icone/058-bear.png",      "png_icone/086-crab.png",         "png_icone/computer-screen-1.png",
						 "png_icone/001-rainbow.png",       "png_icone/003-swimming-pool.png",  "png_icone/005-roulette.png",    "png_icone/009-donut.png",     "png_icone/018-pig.png",         "png_icone/026-restaurant.png",  "png_icone/035-mountain.png",      "png_icone/059-horse.png",     "png_icone/088-flamingo.png",     "png_icone/image.png",
						 "png_icone/001-restaurant.png",    "png_icone/003-tea-cup.png",        "png_icone/005-whisk.png",       "png_icone/009-gamepad.png",   "png_icone/018-soccer.png",      "png_icone/026-wolf.png",        "png_icone/036-hedgehog.png",      "png_icone/060-deer.png",      "png_icone/090-bat.png",          "png_icone/ipod.png",
						 "png_icone/001-video-camera.png",  "png_icone/003-toad.png",           "png_icone/006-hearts.png",      "png_icone/009-zebra.png",     "png_icone/019-rest-area.png",   "png_icone/027-zip-wire.png",    "png_icone/036-trampoline.png",    "png_icone/061-camel.png",     "png_icone/093-penguin.png",      "png_icone/magic-wand.png",
						 "png_icone/002-beach.png",         "png_icone/003-tomatoe.png",        "png_icone/006-hockey.png",      "png_icone/010-bowling.png",   "png_icone/020-basketball.png",  "png_icone/028-jet-ski.png",     "png_icone/037-donkey.png",        "png_icone/062-cow.png",       "png_icone/095-butterfly.png",    "png_icone/music-note.png",
						 "png_icone/002-cold.png",          "png_icone/003-water-gun.png",      "png_icone/006-mole.png",        "png_icone/011-dog.png",       "png_icone/020-squirrel.png",    "png_icone/029-parachute.png",   "png_icone/037-dumbbell.png",      "png_icone/064-rabbit.png",    "png_icone/backpack.png",         "png_icone/noun_1136114_cc.png",
						 "png_icone/002-dart.png",          "png_icone/004-croissant.png",      "png_icone/006-pancakes.png",    "png_icone/011-whistle.png",   "png_icone/021-archery.png",     "png_icone/030-puzzle.png",      "png_icone/039-hippopotamus.png",  "png_icone/066-fish-1.png",    "png_icone/book.png",             "png_icone/paint-palette.png",
						 "png_icone/002-hand.png",          "png_icone/004-pizza.png",          "png_icone/007-baseball.png",    "png_icone/012-running.png",   "png_icone/022-bathroom.png",    "png_icone/031-eel.png",         "png_icone/043-whale.png",         "png_icone/069-snake.png",     "png_icone/camera-photo.png",     "png_icone/pawprint.png",
						 "png_icone/002-headphones.png",    "png_icone/004-singing.png",        "png_icone/007-coffee-cup.png",  "png_icone/013-monkey.png",    "png_icone/022-owl.png",         "png_icone/031-ping-pong.png",   "png_icone/050-panda.png",         "png_icone/074-rat.png",       "png_icone/camera-polaroid.png",  "png_icone/pen-fountain.png",
						 "png_icone/002-rugby.png",         "png_icone/004-sunny-day.png",      "png_icone/007-pacman.png",      "png_icone/013-training.png",  "png_icone/023-fast-food.png",   "png_icone/032-beach.png",       "png_icone/052-lion.png",          "png_icone/077-elephant.png",  "png_icone/camera-video.png",     "png_icone/picture-frame.png"]

		let iconCollection = iconLst.map(
			(url, index) => <img key={index} onClick={this.clickIcon} className="leasureIcon" src={url}/>
		);

		if(this.props.display) {
			return(
				<div className="LeasureBoxContainer">
					<div className="IconContainer">{iconCollection}</div>
					<div className="ExtraContainer"></div>
					<button id="submitLeasureChangesBtn" onClick={this.submitChanges}>Valider</button>
				</div>
			);
		} else {
			return(
				<div style={{display: "none"}} />
			);
		}
	}
}

export default LeasureBox;