import React from 'react';
import Controls from './Controls';
import tamagotchi from './images/tamagotchi.png'
import Mametchi from './images/Mametchi.png'
import DeadMametchi from './images/Mametchi-dead.png'
import HappyMametchi from './images/Mametchi-happy.png'
import SadMametchi from './images/Mametchi_sad.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tamagotchi.css';


class Tamagotchi extends React.Component{

constructor(props){
  super(props);
  this.state ={
    currentHunger: 20,
    currentMood: 20,
    currentCleanliness: 20,
    status: 'alive',
    image: Mametchi,
    timer: 0

  }
  this.feed = this.feed.bind(this);
  this.play = this.play.bind(this);
  this.clean = this.clean.bind(this);
  this.increaseTime = this.increaseTime.bind(this);
}
componentDidMount(){
  setInterval(()=>{
    this.increaseTime()
    if (this.state.timer % 2) {
      this.decreasePlay()
    }else if (this.state.timer % 3){
      this.decreaseFeed()
    }else if (this.state.timer % 4) {
      this.decreaseClean()
    }
  },1000)
setInterval(()=>{
  this.updateImage()
  console.log('image');
},100)
}



feed(){
  let newHunger = this.state.currentHunger
  newHunger -= 2
  this.setState({currentHunger: newHunger})
}

play(){
  let newMood = this.state.currentMood
  newMood -= 5
  this.setState({currentMood: newMood})
}

clean(){
  let newCleanliness = this.state.currentCleanliness
  newCleanliness -= 3
  this.setState({currentCleanliness: newCleanliness})
}



updateImage(){
    if (this.state.currentMood >= 100 || this.state.currentHunger >= 100 || this.state.currentCleanliness >= 100) {
      this.setState({image: DeadMametchi})
    } else if (this.state.currentMood <= 25 && this.state.currentHunger <= 25 && this.state.currentCleanliness <= 25 ) {
      this.setState({image: HappyMametchi})
    } else if (this.state.currentMood >= 75 || this.state.currentHunger >= 75 || this.state.currentCleanliness >= 75 ) {
      this.setState({image: SadMametchi})
    } else {
      this.setState({image: Mametchi})
    }
}

decreaseFeed(){
  let newHunger = this.state.currentHunger
  if (this.state.currentHunger < 100) {
    newHunger += 4
    this.setState({currentHunger: newHunger})

  } else {
    let newStatus = 'dead'
    this.setState({status: newStatus})
  }

}


decreasePlay(){
  let newMood = this.state.currentMood
  if (this.state.currentMood < 100) {
    newMood += 10
    this.setState({currentMood: newMood})

  }else {
    let newStatus = 'dead'
    this.setState({status: newStatus})
  }

}

decreaseClean(){
  let newCleanliness = this.state.currentCleanliness
  if (this.state.currentCleanliness < 100) {
    newCleanliness += 6
    this.setState({currentCleanliness: newCleanliness})
  }else {
    let newStatus = 'dead'
    this.setState({status: newStatus})
  }
}

increaseTime(){
  let newTimer = this.state.timer
  newTimer ++
  this.setState({timer: newTimer})
}



render(){
  let characterDiv = {
    display: 'flex',
    justifyContent: 'center',
  }

  let characterImg = {
    marginTop: '34%',
    height: '250px',
    width: '150px',
  }

  let characterButtons = {
    color: '#ae0459'
  }
let feedButtonDiv = {
 marginLeft: '34.5%',
 marginTop: "10%",
}

let cleanButtonDiv ={
marginLeft: '57.5%',
marginTop: '-6.5%'
}

let playButtonDiv ={
marginLeft: '46.5%',
marginTop: '-1%',
}

let playButton ={
borderRadius: '50%',
backgroundColor: 'rgba(0,0,0,0)',
borderColor: 'rgba(0,0,0,0)',
color: '#ff1a8c',
// textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
}

let feedButton ={
borderRadius: '50%',
backgroundColor: 'rgba(0,0,0,0)',
borderColor: 'rgba(0,0,0,0)',
color: '#ff1a8c',
// textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',

}

let cleanButton ={

borderRadius: '50%',
backgroundColor: 'rgba(0,0,0,0)',
borderColor: 'rgba(0,0,0,0)',
color: '#ff1a8c',
// textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
}


let statusBars = {
display: 'flex',
flexFlow: 'row wrap',
height: "80px",
marginTop: '3.75%'
}

let foodMeter = {
border: '1px solid black',
height: '100px',
width: '25px',
backgroundColor: 'green',
marginLeft: '36.5%'



}

let foodStatus = {
  border: '1px solid green',
  height: `${this.state.currentHunger}px`,
  width: '24px',
  backgroundColor: 'white'

}


let happyMeter = {
  border: '1px solid black',
  height: '100px',
  width: '25px',
  backgroundColor: 'green',
  marginLeft: '10.5%'

}
let happyStatus = {
  border: '1px solid green',
  height: `${this.state.currentMood}px`,
  width: '24px',
  backgroundColor: 'white'

}


let cleanMeter = {
  border: '1px solid black',
  height: '100px',
  width: '25px',
  backgroundColor: 'green',
  marginLeft: '9%',

}
let cleanStatus = {
  border: '1px solid green',
  height: `${this.state.currentCleanliness}px`,
  width: '24px',
  backgroundColor: 'white'

}

  // this.decreasePlay();
  // this.decreaseFeed();
  // this.updateImage();
  return (
    <div>
      <div style={characterDiv}>
        <img style={characterImg}src={this.state.image} />
      </div>
      <div style={statusBars}>
        <div style={foodMeter}>
          <div style={foodStatus}>
          </div>
        </div>
        <div style={happyMeter}>
          <div style={happyStatus}>
          </div>
        </div>
        <div style={cleanMeter}>
          <div style={cleanStatus}>
          </div>
        </div>
      </div>
      <div style={characterButtons}>
        <div style={feedButtonDiv}>
          <button onClick={this.feed}style={feedButton} >Feed</button>
        </div>
        <div style={playButtonDiv}>
          <button onClick={this.play}style={playButton}>Play</button>
        </div>
        <div style={cleanButtonDiv}>
          <button onClick={this.clean}style={cleanButton}>Clean</button>
        </div>
      </div>
    </div>
  );
}

}

export default Tamagotchi;
