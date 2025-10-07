import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaDatabase, FaBrain } from 'react-icons/fa'
import './Technologies.css'

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const techCategories = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      tags: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      tags: ['Node.js', 'Python', 'PHP', 'Java', 'Express', 'FastAPI']
    },
    {
      icon: <FaDatabase />,
      title: 'Bases de Datos',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Redis', 'Firebase']
    },
    {
      icon: <FaBrain />,
      title: 'IA & ML',
      tags: ['OpenAI', 'TensorFlow', 'ChatGPT API', 'Azure AI', 'Langchain', 'Hugging Face']
    }
  ]

  return (
    <section className="technologies">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title gradient-text">Tecnologías que Utilizamos</h2>
          <p className="section-subtitle tech-subtitle">
            Trabajamos con las herramientas más modernas y confiables del mercado
          </p>
        </motion.div>

        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="tech-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="tech-category-header">
                <div className="tech-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="tech-tags">
                {category.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

