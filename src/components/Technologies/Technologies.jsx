import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRobot, FaComments, FaChartLine, FaFileAlt, FaCog, FaLightbulb } from 'react-icons/fa'
import './Technologies.css'

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const aiSolutions = [
    {
      icon: <FaComments />,
      title: 'Chatbots Inteligentes',
      description: 'Asistentes virtuales 24/7 que atienden a tus clientes, resuelven dudas frecuentes y generan leads automáticamente.',
      benefits: ['Atención 24/7', 'Reducción de costos', 'Respuestas instantáneas']
    },
    {
      icon: <FaFileAlt />,
      title: 'Automatización Documental',
      description: 'Procesamiento inteligente de facturas, contratos y documentos. Extracción de datos, clasificación y archivo automático.',
      benefits: ['Ahorro de tiempo', 'Menos errores', 'Búsqueda inteligente']
    },
    {
      icon: <FaChartLine />,
      title: 'Análisis Predictivo',
      description: 'IA que analiza tus datos históricos para predecir ventas, tendencias de clientes y optimizar inventario.',
      benefits: ['Decisiones basadas en datos', 'Previsión de demanda', 'Optimización de recursos']
    },
    {
      icon: <FaRobot />,
      title: 'Automatización de Procesos (RPA)',
      description: 'Robots que automatizan tareas repetitivas: envío de emails, actualización de sistemas, generación de reportes.',
      benefits: ['Elimina tareas repetitivas', 'Mayor productividad', 'Disponibilidad continua']
    },
    {
      icon: <FaCog />,
      title: 'Asistentes de Workflow',
      description: 'IA que optimiza flujos de trabajo, asigna tareas automáticamente y prioriza según urgencia e impacto.',
      benefits: ['Eficiencia operativa', 'Priorización inteligente', 'Seguimiento automático']
    },
    {
      icon: <FaLightbulb />,
      title: 'Generación de Contenido IA',
      description: 'Creación automática de descripciones de productos, emails personalizados, reportes y contenido marketing.',
      benefits: ['Contenido personalizado', 'Ahorro de tiempo', 'Mejora de conversión']
    }
  ]

  return (
    <section id="ia" className="technologies">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title gradient-text">Soluciones con Inteligencia Artificial</h2>
          <p className="section-subtitle tech-subtitle">
            Implementamos IA de última generación para automatizar, optimizar y transformar tu empresa
          </p>
        </motion.div>

        <div className="ai-solutions-grid">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="ai-solution-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="ai-icon-wrapper">
                <div className="ai-icon">{solution.icon}</div>
              </div>
              <h3>{solution.title}</h3>
              <p className="ai-description">{solution.description}</p>
              <div className="ai-benefits">
                <div className="benefits-label">Beneficios:</div>
                <ul>
                  {solution.benefits.map((benefit, i) => (
                    <li key={i}>
                      <span className="benefit-check">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

