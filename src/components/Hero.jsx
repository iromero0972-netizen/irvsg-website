import { useEffect, useRef } from 'react'

const WA_LINK = 'https://wa.me/19546997514?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20negocio'

function useCounter(target, duration = 1500, suffix = '') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let start = 0
      const step = () => {
        start += target / (duration / 16)
        if (start >= target) { el.textContent = target + suffix; return }
        el.textContent = Math.floor(start) + suffix
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, suffix])
  return ref
}

export default function Hero() {
  const ref90 = useCounter(90, 1200, '%')
  const ref72 = useCounter(72, 1000, 'h')
  const ref30 = useCounter(30, 1200, '+')
  const ref100 = useCounter(100, 1300, '%')

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay muted loop playsInline
      >
        <source src="/irvsg-website/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60 z-[1]"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl z-[1]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-[1]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/25 rounded-full px-4 py-1.5 text-cyan text-xs font-semibold tracking-wider mb-8">
            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse"></span>
            AGENCIA DE AUTOMATIZACIÓN IA · KATY, TEXAS
          </div>

          {/* Headline */}
          <h1 className="font-outfit font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            Menos tareas<br/>
            manuales.{' '}
            <span className="text-gold">Más tiempo</span><br/>
            <span className="text-cyan">para crecer.</span>
          </h1>

          {/* Sub */}
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Automatizamos los procesos operativos, administrativos y contables de tu PYME
            con Inteligencia Artificial. Resultados reales en 72 horas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-wa hover:opacity-90 text-white px-8 py-4 rounded-lg font-bold text-base transition-all hover:-translate-y-0.5">
              💬 Diagnóstico Gratis
            </a>
            <a href="#caso"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-medium text-base transition-all hover:-translate-y-0.5">
              Ver Caso de Éxito →
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/8">
            {[
              { ref: ref90, label: 'Reducción de tareas manuales' },
              { ref: ref72, label: 'Primer workflow activo' },
              { ref: ref30, label: 'Años como CPA' },
              { ref: ref100, label: 'Enfocado en PYMEs TX' },
            ].map(({ ref, label }, i) => (
              <div key={i} className="text-center">
                <div ref={ref} className="font-mono-jetbrains font-bold text-3xl md:text-4xl text-cyan mb-1">0</div>
                <div className="text-white/50 text-xs leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating image thumbnails */}
        <div className="hidden lg:flex absolute bottom-16 left-8 gap-3">
          <img src="/irvsg-website/images/lobby-office.jpg" alt="IRVSG Office"
            className="w-28 h-20 object-cover rounded-xl border border-white/10 shadow-2xl opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
          <img src="/irvsg-website/images/lobby-robot.jpg" alt="IRVSG Robot"
            className="w-28 h-20 object-cover rounded-xl border border-white/10 shadow-2xl opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
