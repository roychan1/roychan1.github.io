import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import NavBar from './components/navbar'

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App
