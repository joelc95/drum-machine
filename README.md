# FCC Front End Libraries: Drum Machine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task
Use front-end libraries to build a drum machine application that can take key presses and mouse clicks to play sound files.

## Stack Used:
 - React
 - SASS

## Process:
1. Create sound bank array to hold all of our drum sound info
```js
  // These are the keycodes for our accepted keys (Q, W, E, A, S, D, Z, X, C)
  const validCodes = [ 81, 87, 69, 65, 83, 68, 90, 88, 67 ]

  // Here we create an array to hold useful info for each key and its sound file
  const soundBank = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
  ]
```

2. Add an event listener to the document to listen for key presses
```js
  document.addEventListener('keydown', e => {
    // This function will fetch the sound file
    // at the url and play it
    playSound(e);
    // If the key pressed is within our 9 valid
    // keys, then we set the current state to that
    // drum. This is so we can display the drum name.
    if(validCodes.includes(e.keyCode)) {
      setDrum(soundBank.find(x => x.keyCode === e.keyCode).id);
    }
  })
```

3. Create the drumpad layout
```js
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
```

4. Create click handler function to be added to each drumpad
```js
  const handleClick = (e) => {
    let sound = document.getElementById(e.target.innerHTML[0]);
    console.log(e.target)
    setDrum(soundBank.find(x => x.id.concat('-button') === e.target.id).id);

    // sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
```