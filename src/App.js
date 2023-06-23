
function App() {
  window.addEventListener('keyup', (e) => {
    console.log(e.keyCode)
  })

  return (
    <div style={{
      border: 'solid 2px',
      height: '100px',
      width: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      A
    </div>
  );
}

export default App;
