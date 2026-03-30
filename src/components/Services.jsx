import { useEffect, useRef } from 'react'

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

const services = [
  {
    num: '01', tag: 'Operaciones', color: 'cyan',
    title: 'Automatización de Pedidos',
    desc: 'Captura órdenes 24/7 desde cualquier canal, envía confirmaciones automáticas y notifica a tu equipo en tiempo real.',
    img: '/irvsg-website/images/ai-boardroom.jpg',
    items: ['Formulario web + integración multicanal', 'Confirmación automática al cliente', 'Dashboard en tiempo real', 'Alertas de pedidos nuevos'],
  },
  {
    num: '02', tag: 'Atención al Cliente', color: 'gold',
    title: 'Asistentes Virtuales IA',
    desc: 'Un chatbot entrenado con la información de tu negocio responde preguntas, califica prospectos y agenda citas — las 24 horas.',
    img: '/irvsg-website/images/ai-team.jpg',
    items: ['Responde FAQs automáticamente', 'Califica leads antes de pasarlos a ti', 'Agenda citas en tu calendario', 'Escalada inteligente a humano'],
  },
  {
    num: '03', tag: 'Finanzas & Contabilidad', color: 'green',
    title: 'Automatización Contable',
    desc: 'Con más de 30 años como CPA entendemos tus números. Automatizamos captura de datos, reportes financieros y alertas clave.',
    img: '/irvsg-website/images/robot-finance.jpg',
    items: ['Reporte semanal de ventas automático', 'Alertas de márgenes y flujo de caja', 'Exportación a QuickBooks / Google Sheets', 'Dashboard financiero en tiempo real'],
  },
  {
    num: '04', tag: 'Marketing', color: 'purple',
    title: 'Social Media con IA',
    desc: 'Generamos contenido de Instagram y Facebook personalizado para tu negocio usando IA — listo para publicar, cada semana.',
    img: '/irvsg-website/images/smart-building.jpg',
    items: ['3–5 posts semanales generados con IA', 'Adaptado a tu marca y audiencia', 'Imágenes + captions + hashtags', 'Programación automática de publicaciones'],
  },
]

const colorMap = {
  cyan: { border: 'hover:border-cyan/40', tag: 'bg-cyan/10 text-cyan', bar: 'from-cyan', num: 'text-cyan/10' },
  gold: { border: 'hover:border-gold/40', tag: 'bg-gold/10 text-gold', bar: 'from-gold', num: 'text-gold/10' },
  green: { border: 'hover:border-emerald-400/40', tag: 'bg-emerald-400/10 text-emerald-400', bar: 'from-emerald-400', num: 'text-emerald-400/10' },
  purple: { border: 'hover:border-purple-400/40', tag: 'bg-purple-400/10 text-purple-400', bar: 'from-purple-400', num: 'text-purple-400/10' },
}

export default function Services() {
  const sectionRef = useReveal()

  return (
    <section id="servicios" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef}>
          <div className="text-cyan text-xs font-mono-jetbrains font-bold tracking-widest mb-4 opacity-80">// Soluciones</div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">Automatización que genera resultados reales</h2>
          <p className="text-white/50 text-lg font-light max-w-xl mb-14">
            No vendemos software genérico. Diseñamos, construimos y mantenemos flujos de automatización personalizados para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {services.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <ServiceCard key={i} s={s} c={c} delay={i * 100} />
            )
          })}
        </div>

        {/* Services video */}
        <div className="rounded-2xl overflow-hidden border border-white/8">
          <video className="w-full" autoPlay muted loop playsInline>
            <source src="/irvsg-website/videos/services-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ s, c, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className={`relative bg-navy-card border border-white/8 ${c.border} rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1`}>
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.bar} to-transparent`}></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`font-mono-jetbrains font-bold text-5xl leading-none ${c.num}`}>{s.num}</div>
          <span className={`${c.tag} text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`}>{s.tag}</span>
        </div>
        <img src={s.img} alt={s.title} loading="lazy"
          className="w-full h-36 object-cover rounded-lg mb-5 opacity-80" />
        <h3 className="font-outfit font-bold text-xl mb-2">{s.title}</h3>
        <p className="text-white/50 text-sm mb-4 leading-relaxed">{s.desc}</p>
        <ul className="space-y-2">
          {s.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-white/70">
              <span className="text-cyan mt-0.5 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
