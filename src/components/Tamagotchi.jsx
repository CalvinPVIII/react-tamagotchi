import React from 'react';
import Controls from './Controls';
import tamagotchi from './images/tamagotchi.png'
import Mametchi from './images/Mametchi.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tamagotchi.css';


class Tamagotchi extends React.Component{

constructor(props){
  super(props);
  this.state ={
    currentHunger: 20,
    currentMood: 20,
    currentCleanliness: 20,
    status: 'alive'

  }
  this.feed = this.feed.bind(this);
  this.play = this.play.bind(this);
  this.clean = this.clean.bind(this);
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



decreaseFeed(){
  setInterval(() => {
  let newHunger = this.state.currentHunger
if (this.state.currentHunger < 100) {
  newHunger += 4
  this.setState({currentHunger: newHunger})

} else {
  let newStatus = 'dead'
  this.setState({currentStatus: newStatus})
}
}, 1000);
}


decreasePlay(){
  setInterval(() => {

  let newMood = this.state.currentMood
  if (this.state.currentMood < 100) {
    newMood += 10
    this.setState({currentMood: newMood})

  }else {
    let newStatus = 'dead'
    this.setState({currentStatus: newStatus})
  }
},1000);
}

decreaseClean(){
  setInterval(() =>{

  let newCleanliness = this.state.currentCleanliness
  if (this.state.currentCleanliness < 100) {
    newCleanliness += 6
    this.setState({currentCleanliness: newCleanliness})

  }else {
    let newStatus = 'dead'
    this.setState({currentStatus: newStatus})
  }
}, 1000);
}



render(){
  let characterDiv = {
    display: 'flex',
    justifyContent: 'center',
  }

  let characterImg = {
    marginTop: '28%',
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
marginTop: '5%'
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
this.decreaseFeed()
this.decreasePlay()
this.decreaseClean()
  return (
    <div>
      <div style={characterDiv}>
        <img style={characterImg}src={Mametchi} />
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
