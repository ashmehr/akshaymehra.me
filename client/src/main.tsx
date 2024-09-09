import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ButtonContainer from './components/ButtonContainer/ButtonContainer.tsx'
import About from './components/About/About.tsx'
import Blog from './components/Blog/Blog.tsx'
import Contact from './components/Contact/Contact.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ButtonContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/blog" element={ <Blog /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>\
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
