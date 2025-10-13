import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Advantages from './components/Advantages/Advantages'
import Process from './components/Process/Process'
import AISolutions from './components/Technologies/Technologies'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga inicial
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <span className="loader-text">Carlini Flows</span>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Advantages />
      <Process />
      <AISolutions />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

