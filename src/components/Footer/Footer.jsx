import { FaCode } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaCode />
              <span>Soluciones IT</span>
            </div>
            <p>
              Transformamos empresas mediante tecnología personalizada, 
              digitalización inteligente y soluciones innovadoras con IA.
            </p>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Desarrollo Web</a></li>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Digitalización IA</a></li>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Personalización CRM</a></li>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Consultoría IT</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Sobre Nosotros</a></li>
              <li><a href="#proceso" onClick={(e) => handleNavClick(e, 'proceso')}>Metodología</a></li>
              <li><a href="#ventajas" onClick={(e) => handleNavClick(e, 'ventajas')}>Por qué Elegirnos</a></li>
              <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Aviso Legal</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Soluciones IT. Todos los derechos reservados.</p>
          <p className="footer-credit">Desarrollado con <span className="heart">❤️</span> y tecnología de vanguardia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

