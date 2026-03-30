import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const problems = [
  { icon: '📱', title: 'Pedidos perdidos entre mensajes', desc: 'Anotas órdenes a mano, las pierdes entre WhatsApps y olvidas dar seguimiento a clientes importantes.' },
  { icon: '🔁', title: 'Respuestas repetitivas infinitas', desc: 'Contestas las mismas preguntas de horarios, precios y disponibilidad una y otra vez, todos los días.' },
  { icon: '📊', title: 'Reportes que nunca están listos', desc: 'Terminas el mes sin saber exactamente cuánto vendiste, cuánto debes, o cuál producto te da más margen.' },
  { icon: '📲', title: 'Redes sociales abandonadas', desc: 'Sabes que debes publicar, pero nunca tienes tiempo ni energía para crear contenido consistente.' },
]

export default function Problems() {
  const sectionRef = useReveal()

  return (
    <section className="relative py-24 bg-navy-mid overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/irvsg-website/images/analytics-dashboards.jpg" alt="" aria-hidden="true"
          className="w-full h-full object-cover opacity-5" loading="lazy" />
        <div className="absolute inset-0 bg-navy-mid/95"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-4 opacity-80">// El problema</div>
        <h2 className="font-outfit font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">¿Te suena familiar?</h2>
        <p className="text-white/50 text-lg font-light max-w-xl mb-14">
          Los dueños de PYMEs pierden entre 15–25 horas semanales en tareas que la IA puede hacer mejor, más rápido y sin errores.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="bg-navy/60 border border-white/6 rounded-xl p-6 hover:border-gold/25 hover:-translate-y-[3px] transition-all duration-300">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-outfit font-bold text-base mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-14">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"></div>
          <span className="text-cyan text-xs font-bold tracking-widest whitespace-nowrap">IRVSG LO RESUELVE CON IA</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
