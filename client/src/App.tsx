import './App.css'

function App() {

  return (
    <>
    <div className="BlurCircle"></div>
    <div id="Home">
      <h1 className="NameHeader">Akshay Mehra
        <span id="caret">|</span></h1>
      <h2 className="SubHeader">Software Engineer | Manager</h2>
    </div>
    <div className="ButtonContainer">
      <div className="Button">
        <a href="#home">Home</a>
      </div>
      <div className="Button">
        <a href="#about">About</a>
      </div>
      <div className="Button">
        <a href="#projects">Projects</a>
      </div>
      <div className="Button">
        <a href="#contact">Contact</a>
      </div>
    </div>
    </>
  )
}

export default App
