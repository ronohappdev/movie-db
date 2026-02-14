import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Favorites from './routes/Favorites'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/favorites" element = {<Favorites />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact" element = {<Contact />}/>
        
     </Routes>
 

    </>
  )
}

export default App
