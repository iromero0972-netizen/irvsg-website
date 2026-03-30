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
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const workflows = [
  { icon: '📋', name: 'Pedidos Nuevos', flow: 'Formulario → N8N → Gmail → Dashboard' },
  { icon: '⚡', name: 'Decisiones Admin', flow: 'Dashboard → N8N → Confirmación' },
  { icon: '📸', name: 'Social Media IA', flow: 'Claude API → Contenido → Email' },
]

const metrics = [
  { num: '100%', label: 'Pedidos capturados digitalmente' },
  { num: '0', label: 'Órdenes perdidas desde el lanzamiento' },
  { num: '3', label: 'Workflows activos en producción' },
  { num: '72h', label: 'De concepto a go-live total' },
]

export default function CaseStudy() {
  const ref = useReveal()

  return (
    <section id="caso" className="py-24 bg-navy border-y border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-6">
              Caso de Éxito Real · Katy, TX
            </div>
            <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-3 opacity-80">// Andy's Bakery</div>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl mb-5 tracking-tight">
              De pedidos en papel a operación <span className="text-gold">100% automatizada</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-7">
              Transformamos una pastelería artesanal en un negocio digital-first: pedidos online con confirmaciones automáticas, dashboard de administración con PIN de acceso, y contenido de Instagram generado por IA cada semana.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {metrics.map((m, i) => (
                <div key={i} className="bg-cyan/5 border border-cyan/12 rounded-lg p-4">
                  <div className="font-mono-jetbrains font-bold text-2xl text-cyan mb-1">{m.num}</div>
                  <div className="text-white/50 text-xs">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Workflows */}
            <div className="space-y-3">
              {workflows.map((w, i) => (
                <div key={i} className="flex items-center gap-3 bg-navy-mid rounded-lg px-4 py-3 transition-transform duration-200 hover:translate-x-1.5 cursor-default">
                  <span className="text-xl flex-shrink-0">{w.icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{w.name}</div>
                    <div className="text-white/40 text-xs font-mono-jetbrains">{w.flow}</div>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span className="bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full">● Activo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — images */}
          <div className="flex flex-col gap-4">
            <img src="/irvsg-website/images/vr-strategy.jpg" alt="IA con estrategia global" loading="lazy"
              className="w-full h-52 object-cover rounded-xl border border-white/8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/irvsg-website/images/robot-problem-solving.jpg" alt="IA resolviendo problemas" loading="lazy"
              className="w-full h-52 object-cover rounded-xl border border-white/8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  )
}
