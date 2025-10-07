import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBullseye, FaPuzzlePiece, FaBrain, FaChartLine, FaHandshake, FaGraduationCap } from 'react-icons/fa'
import './Advantages.css'

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const advantages = [
    {
      icon: <FaBullseye />,
      title: '100% Personalizado',
      description: 'No usamos plantillas genéricas. Cada solución se diseña desde cero específicamente para tu empresa y sus procesos únicos.'
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Sin Huecos Funcionales',
      description: 'A diferencia de los CRM genéricos, cubrimos absolutamente todas tus necesidades sin dejar nada sin resolver.'
    },
    {
      icon: <FaBrain />,
      title: 'Tecnología de Vanguardia',
      description: 'Implementamos las últimas tecnologías, incluyendo IA y machine learning, para mantener tu empresa competitiva.'
    },
    {
      icon: <FaChartLine />,
      title: 'ROI Comprobable',
      description: 'Nuestras soluciones están diseñadas para generar retorno de inversión mediante ahorro de tiempo y aumento de productividad.'
    },
    {
      icon: <FaHandshake />,
      title: 'Soporte Continuo',
      description: 'No te dejamos solo después del desarrollo. Ofrecemos soporte técnico continuo y actualizaciones constantes.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Capacitación Incluida',
      description: 'Capacitamos a tu equipo para que aprovechen al máximo todas las funcionalidades de las soluciones implementadas.'
    }
  ]

  return (
    <section id="ventajas" className="advantages">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">¿Por qué Elegirnos?</h2>
          <p className="section-subtitle">
            Nuestra diferencia está en la personalización total y el enfoque en resultados reales
          </p>
        </motion.div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="advantage-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages

