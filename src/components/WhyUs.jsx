import { useEffect, useRef } from 'react'

function useReveal(delay = 0) {
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
  return ref
}

const reasons = [
  { icon: '📐', title: '30+ Años como CPA', desc: 'Entendemos tus números, tus procesos y tus riesgos — no solo el código. Hablamos el idioma de los negocios.' },
  { icon: '🛡️', title: 'Metodología de 4 Pilares', desc: 'Cero improvisación. Cada automatización pasa por investigación, diseño, testing y retroalimentación obligatoria.' },
  { icon: '📍', title: 'Local en Texas', desc: 'Basados en Katy, TX. Trabajamos con negocios de la región que hablan tu idioma — literal y de negocios.' },
  { icon: '⚡', title: 'Resultados en 72 Horas', desc: 'Tu primer workflow activo en 3 días. Sin meses de "implementación" ni presupuestos sorpresa al final.' },
]

export default function WhyUs() {
  const headerRef = useReveal()

  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef}>
          <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-4 opacity-80">// Por qué elegirnos</div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">Trabajamos diferente</h2>
          <p className="text-white/50 text-lg font-light max-w-xl mb-14">
            No somos freelancers genéricos. Somos una agencia especializada con metodología probada y más de 30 años de experiencia en negocios reales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {reasons.map((r, i) => (
            <ReasonCard key={i} r={r} delay={i * 100} />
          ))}
        </div>

        {/* Decoration images */}
        <div className="grid sm:grid-cols-2 gap-4">
          <img src="/irvsg-website/images/robot-precision.jpg" alt="Precisión IA" loading="lazy"
            className="w-full h-40 object-cover rounded-xl border border-white/8 opacity-60 hover:opacity-90 transition-all duration-300 hover:border-gold/20" />
          <img src="/irvsg-website/images/robot-problem-solving.jpg" alt="IA resolviendo problemas" loading="lazy"
            className="w-full h-40 object-cover rounded-xl border border-white/8 opacity-60 hover:opacity-90 transition-all duration-300 hover:border-gold/20" />
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ r, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="flex gap-4 bg-navy/70 border border-white/7 hover:border-gold/25 rounded-xl p-6 transition-colors">
      <div className="text-3xl flex-shrink-0">{r.icon}</div>
      <div>
        <h4 className="font-outfit font-bold text-base mb-1.5">{r.title}</h4>
        <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
      </div>
    </div>
  )
}
