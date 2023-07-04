import React, { useState } from "react";
import './style.scss'

const validCodes = [ 81, 87, 69, 65, 83, 68, 90, 88, 67 ]

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: "Heater-2",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]


const Drumpad = ({drum, setDrum, volume, setVolume}) => {

  document.addEventListener('keydown', e => {
    playSound(e);
    if(validCodes.includes(e.keyCode)) {
      setDrum(soundBank.find(x => x.keyCode === e.keyCode).id);
    }
  })
    


  const handleClick = (e) => {
    let sound = document.getElementById(e.target.innerHTML[0]);
    console.log(e.target)
    setDrum(soundBank.find(x => x.id.concat('-button') === e.target.id).id);

    // sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  const playSound = async (e) => {
    if(validCodes.includes(e.keyCode)) {
      console.log(e.key)
      let sound = document.getElementById(e.key.toUpperCase());
      // await sound.pause();
      sound.currentTime = 0;
      await sound.play();
    }
  }

  return(
    <div className="drumpad-container">
      {soundBank.map(i => {
        return (
          <>
            <div onClick={(e)=>handleClick(e)} className="drumpad-button drum-pad" id={i.id+'-button'}>{i.keyTrigger}
              <audio className="drumpad-sound clip" id={i.keyTrigger} src={i.url} volume={volume} />
            </div>
          </>
        )
      })}
    </div>
  )
}

const Display = ({drum, volume, setVolume}) => {

  const handleVolume = (event) => {
    setVolume(event.target.value);
    const audio = document.getElementsByTagName('audio');
    for(let i = 0; i < audio.length; i++) {
      audio[i].volume = event.target.value
    }
  }


  return (
    <div className="controls-container" id="display">
      <div className="display-container">
        <p>{drum}</p>
      </div>
      <div className="volume-container">
        <input onMouseUp={e=>handleVolume(e)} type='range' className="volume-slider" min="0" max="1" step="0.1" />
      </div>
    </div>
  )
}

function App() {
  const [drum, setDrum] = useState('--')
  const [volume, setVolume] = useState('1')
  
  return (
    <div className="wrapper" id="drum-machine">
      <div className="parent-container">
        <Drumpad drum={drum} setDrum={setDrum} volume={volume} setVolume={setVolume}/>
        <Display drum={drum} volume={volume} setVolume={setVolume}/>
      </div>
    </div>
  );
}

export default App;

