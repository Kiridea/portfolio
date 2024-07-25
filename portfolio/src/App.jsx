import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App
