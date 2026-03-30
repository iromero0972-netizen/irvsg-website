import { useEffect, useRef } from 'react'

const WA_LINK = 'https://wa.me/19546997514?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20negocio'

export default function CTA() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'scale(0.97)'
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'scale(1)'
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contacto" className="py-24 bg-navy relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div ref={ref} className="bg-gradient-to-br from-cyan/8 to-gold/5 border border-cyan/18 rounded-2xl p-12">
          <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-4 opacity-80">// Siguiente paso</div>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl mb-5 tracking-tight">
            ¿Cuántas horas estás perdiendo<br />
            <span className="text-gold">esta semana?</span>
          </h2>
          <p className="text-white/55 font-light mb-10 leading-relaxed">
            Agenda una llamada de diagnóstico gratuita de 30 minutos. Identificamos qué automatizar primero y te damos un plan de acción — sin costo ni compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-wa hover:opacity-90 text-white px-8 py-4 rounded-lg font-bold transition-all hover:-translate-y-0.5">
              💬 Escribir por WhatsApp
            </a>
            <a href="mailto:iromero0972@gmail.com"
              className="flex items-center justify-center gap-2 border border-cyan/30 hover:border-cyan/60 text-cyan px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              ✉️ iromero0972@gmail.com
            </a>
          </div>
          <p className="text-white/40 text-sm">📍 Katy, Texas · Respuesta en menos de 24 horas</p>
        </div>
      </div>
    </section>
  )
}
