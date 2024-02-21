import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import loremIpsum from './assets/loremipsum';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>

    <div id="home">
      <h1>Akshay Mehra</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    
    <div id="about">
      About! {loremIpsum}
    </div>
    <div id="projects"> Projects! {loremIpsum}</div>
    <div id="contact"> Contact! {loremIpsum}</div>
    </>
  )
}

export default App
