import React, { useEffect } from "react";
import './style.scss'

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'w',
    id: "Heater-2",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'e',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'a',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 's',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'd',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'x',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'c',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]


const Drumpad = () => {

  useEffect(() => {
    return () => {
      document.addEventListener('keydown', e => {
      console.log(e)
      // console.log(e.keyCode)
      playSound(e);
      })
    }
  }, [])

  const handleClick = (e) => {
    console.log(typeof e.target.innerHTML)
    let sound = document.getElementById(e.target.innerHTML+'-sound');
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  const playSound = (e) => {
    console.log(e.key+'-sound')
    let sound = document.getElementById(e.key+'-sound');
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  return(
    <div className="drumpad-container">
      {soundBank.map(i => {
        return (
          <>
            <div onClick={(e)=>handleClick(e)} className="drumpad-button" id={i.id+'-button'}>{i.keyTrigger}</div>
            <audio className="drumpad-sound" id={i.keyTrigger+'-sound'} src={i.url}></audio>
          </>
        )
      })}
    </div>
  )
}

const Display = () => {
  return (
    <div className="controls-container">
      <div className="display-container">
        Placeholder text
      </div>
      <div className="volume-container">
        <input type='range' className="volume-slider" />
      </div>
    </div>
  )
}

function App() {
  
  return (
    <div className="wrapper">
      <div className="parent-container">
        <Drumpad />
        <Display />
      </div>
    </div>
  );
}

export default App;
