import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const steps = [
  { n: '1', title: 'Diagnóstico', desc: 'Mapeamos tus procesos actuales e identificamos qué automatizar primero para el mayor impacto en menos tiempo.' },
  { n: '2', title: 'Diseño', desc: 'Diseñamos el flujo completo antes de construir. Sin sorpresas. Plan de rollback incluido en todo proyecto.' },
  { n: '3', title: 'Build & Testing', desc: 'Construimos en ambiente de pruebas, testeamos casos extremos y hacemos demo contigo antes del lanzamiento.' },
  { n: '4', title: 'Go-Live + Soporte', desc: 'Lanzamiento supervisado, capacitación a tu equipo y soporte continuo con optimizaciones mensuales.' },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="proceso" className="py-24 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-4 opacity-80">// Metodología</div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">De idea a automatización en 4 pasos</h2>
          <p className="text-white/50 text-lg font-light max-w-xl mb-14">
            Metodología probada, sin improvisación. Cada proyecto sigue 4 pilares obligatorios antes de ir a producción.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((s, i) => (
            <StepCard key={i} s={s} delay={i * 120} />
          ))}
        </div>

        {/* Decoration images */}
        <div className="grid sm:grid-cols-2 gap-4">
          <img src="/irvsg-website/images/data-center.jpg" alt="Data center IRVSG" loading="lazy"
            className="w-full h-48 object-cover rounded-xl border border-white/8 opacity-70 hover:opacity-90 transition-opacity" />
          <img src="/irvsg-website/images/ir-chip.jpg" alt="IR chip technology" loading="lazy"
            className="w-full h-48 object-cover rounded-xl border border-white/8 opacity-70 hover:opacity-90 transition-opacity" />
        </div>
      </div>
    </section>
  )
}

function StepCard({ s, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 rounded-full border border-cyan/40 group-hover:border-cyan group-hover:bg-cyan/10 flex items-center justify-center mx-auto mb-5 transition-all duration-300">
        <span className="font-mono-jetbrains font-bold text-cyan text-lg">{s.n}</span>
      </div>
      <h4 className="font-outfit font-bold text-base mb-2">{s.title}</h4>
      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
    </div>
  )
}
