# FCC Front End Libraries: Drum Machine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task
Use front-end libraries to build a drum machine application that can take key presses and mouse clicks to play sound files.

## Stack Used:
 - React
 - SASS

## Process:
1. Add an event listener to the document to listen for key presses
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

2. Create the drumpad layout
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
