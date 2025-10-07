import { useState, useEffect } from 'react'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <FaCode className="logo-icon" />
            <span className="logo-text">Soluciones IT</span>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onTouchEnd={(e) => {
              e.preventDefault()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="nav-link">Inicio</a></li>
            <li><a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="nav-link">Servicios</a></li>
            <li><a href="#ventajas" onClick={(e) => handleNavClick(e, 'ventajas')} className="nav-link">Ventajas</a></li>
            <li><a href="#proceso" onClick={(e) => handleNavClick(e, 'proceso')} className="nav-link">Proceso</a></li>
            <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')} className="btn btn-primary">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

