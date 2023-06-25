import React, { useEffect } from "react";
import './style.scss'


const Drumpad = () => {
  const keyArray = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
  return(
    <div className="drumpad-container">
      {keyArray.map(i => {
        return <div className="drumpad-button">{i}</div>
      })}
    </div>
  )
}

function App() {

  useEffect(() => {
    return () => {
      document.addEventListener('keydown', e => {
        console.log(e.key)
      })
    }
  }, [])
  
  

  return (
    <div className="container">
      <Drumpad />
    </div>
  );
}

export default App;
