import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
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

    // Configuración EmailJS (desde variables de entorno)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Verificar que las variables estén configuradas
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Error de configuración del servicio de email. Contacta al administrador.'
      })
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' })
      }, 5000)
      return
    }

    try {
      // Enviar email directamente con EmailJS desde el navegador
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: 'pepocero@gmail.com'
        },
        publicKey
      )

      if (result.status === 200) {
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
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      })
    }

    setTimeout(() => {
      setStatus({ loading: false, success: false, error: false, message: '' })
    }, 5000)
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <motion.div 
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2>¿Listo para Transformar tu Empresa?</h2>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                    placeholder=" "
                  />
                  <label htmlFor="phone">Teléfono (opcional)</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="company">Empresa (opcional)</label>
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

