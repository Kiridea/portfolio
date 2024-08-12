import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:projectId" element={<ProjectDetails />}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App
