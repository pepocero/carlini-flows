import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      const response = await fetch('/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      })
    }

    setTimeout(() => {
      setStatus({ loading: false, success: false, error: false, message: '' })
    }, 5000)
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2>¿Listo para Transformar tu Empresa?</h2>
            <p>
              Contáctanos hoy y descubre cómo nuestras soluciones personalizadas pueden 
              llevar tu empresa al siguiente nivel tecnológico.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@solucionesit.com">info@solucionesit.com</a>
                </div>
              </div>
              <div className="contact-method">
                <FaPhone />
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:+34900000000">+34 900 000 000</a>
                </div>
              </div>
              <div className="contact-method">
                <FaMapMarkerAlt />
                <div>
                  <h4>Ubicación</h4>
                  <p>Disponible en toda España</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>Solicita una Consultoría Gratuita</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Nombre Completo</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Correo Electrónico</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="phone">Teléfono</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="company">Empresa</label>
                </div>
              </div>

              <div className="form-group">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web-development">Aplicación Web a Medida</option>
                  <option value="ai-digitalization">Digitalización con IA</option>
                  <option value="crm-customization">Personalización de CRM</option>
                  <option value="consultation">Consultoría General</option>
                </select>
                <label htmlFor="service" className="select-label">Servicio de Interés</label>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder=" "
                />
                <label htmlFor="message">Cuéntanos sobre tu proyecto</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={status.loading}>
                <FaPaperPlane />
                {status.loading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>

              {status.message && (
                <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

