import { motion } from 'framer-motion'
import { FaRocket, FaInfoCircle } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-glow hero-glow-3"></div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text-main">Carlini Flows</span>
            <br />
            <span className="hero-subtitle-inline">Transformamos tu Empresa con</span>
            <br />
            <span className="gradient-text-secondary">Inteligencia Artificial</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Soluciones informáticas personalizadas para pequeñas y medianas empresas. 
            Desarrollamos aplicaciones web a medida que se adaptan perfectamente a tus necesidades específicas.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => handleScrollToSection('contacto')} 
              className="btn btn-primary btn-large"
            >
              <FaRocket /> Comenzar Ahora
            </button>
            <button 
              onClick={() => handleScrollToSection('servicios')} 
              className="btn btn-secondary btn-large"
            >
              <FaInfoCircle /> Conocer Más
            </button>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Personalizado</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
            <div className="stat">
              <div className="stat-number">+50</div>
              <div className="stat-label">Proyectos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

