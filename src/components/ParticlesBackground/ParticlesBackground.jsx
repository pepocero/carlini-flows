import { useEffect, useRef } from 'react'
import './ParticlesBackground.css'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let scrollY = 0

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Detectar scroll
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    // Clase Particle
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        // Calcular posición absoluta considerando el scroll
        const absoluteY = this.y + scrollY
        const viewportY = this.y
        
        // Solo dibujar en Hero (primeros 100vh) o Footer (últimos 400px - solo el footer oscuro)
        const pageHeight = document.documentElement.scrollHeight
        const heroZone = absoluteY < window.innerHeight
        const footerZone = absoluteY > pageHeight - 400  // Solo en los últimos 400px (footer)
        
        if (heroZone || footerZone) {
          const opacity = heroZone ? this.opacity * 1.5 : this.opacity
          ctx.fillStyle = `rgba(0, 217, 255, ${opacity})`
          ctx.beginPath()
          ctx.arc(this.x, viewportY, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Crear partículas
    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    // Conectar partículas cercanas
    const connectParticles = () => {
      const pageHeight = document.documentElement.scrollHeight
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            // Calcular si ambas partículas están en Hero o Footer
            const absoluteY1 = particles[i].y + scrollY
            const absoluteY2 = particles[j].y + scrollY
            
            const inHeroZone = absoluteY1 < window.innerHeight && absoluteY2 < window.innerHeight
            const inFooterZone = absoluteY1 > pageHeight - 400 && absoluteY2 > pageHeight - 400  // Solo últimos 400px
            
            if (inHeroZone || inFooterZone) {
              const lineOpacity = inHeroZone ? 0.35 : 0.2
              ctx.strokeStyle = `rgba(0, 217, 255, ${lineOpacity * (1 - distance / 120)})`
              ctx.lineWidth = inHeroZone ? 1.5 : 1
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }
      }
    }

    // Animar
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

export default ParticlesBackground

