import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLaptopCode, FaRobot, FaTools } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Aplicaciones Web a Medida',
      description: 'Desarrollamos aplicaciones web completamente personalizadas que se ajustan a los procesos específicos de tu empresa, sin limitaciones de plantillas genéricas.',
      features: ['Diseño personalizado', 'Funcionalidades específicas', 'Escalable y modular']
    },
    {
      icon: <FaRobot />,
      title: 'Digitalización con IA',
      description: 'Incorporamos inteligencia artificial y automatización para optimizar procesos, reducir tareas repetitivas y aumentar la eficiencia de tu empresa.',
      features: ['Automatización inteligente', 'Análisis predictivo', 'Asistentes virtuales'],
      featured: true
    },
    {
      icon: <FaTools />,
      title: 'Personalización de CRM',
      description: 'Adaptamos y mejoramos sistemas CRM genéricos para cubrir todos los huecos y necesidades específicas que tu empresa requiere.',
      features: ['Integración completa', 'Módulos personalizados', 'Capacitación incluida']
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales que cubren todas las necesidades tecnológicas de tu empresa
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${service.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {service.featured && <div className="featured-badge">Más Popular</div>}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

