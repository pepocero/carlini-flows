import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Process.css'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      number: 1,
      title: 'Análisis y Consultoría',
      description: 'Estudiamos a fondo tu empresa, procesos actuales y necesidades específicas para diseñar la solución perfecta.'
    },
    {
      number: 2,
      title: 'Diseño y Planificación',
      description: 'Creamos un plan detallado con mockups, arquitectura técnica y cronograma del proyecto para tu aprobación.'
    },
    {
      number: 3,
      title: 'Desarrollo Ágil',
      description: 'Desarrollamos tu solución con metodologías ágiles, permitiéndote ver avances constantes y realizar ajustes.'
    },
    {
      number: 4,
      title: 'Pruebas y Optimización',
      description: 'Realizamos pruebas exhaustivas y optimizamos el rendimiento antes del lanzamiento oficial.'
    },
    {
      number: 5,
      title: 'Implementación y Capacitación',
      description: 'Ponemos en marcha la solución y capacitamos a tu equipo para que aprovechen todas sus funcionalidades.'
    },
    {
      number: 6,
      title: 'Soporte Continuo',
      description: 'Brindamos soporte técnico permanente, actualizaciones y mejoras continuas según evolucionen tus necesidades.'
    }
  ]

  return (
    <section id="proceso" className="process">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Nuestro Proceso</h2>
          <p className="section-subtitle">
            Un enfoque sistemático que garantiza el éxito de tu proyecto
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

