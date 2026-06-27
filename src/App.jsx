import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import NavBar from './components/navbar'

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
