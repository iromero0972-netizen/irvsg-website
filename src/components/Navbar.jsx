import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/19546997514?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20negocio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#caso', label: 'Caso de Éxito' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/98 shadow-lg shadow-black/30 py-3' : 'bg-navy/80 py-4'
    } backdrop-blur-xl border-b border-white/5`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/irvsg-website/images/logo.png" alt="IRVSG" className="h-9 w-auto" />
          <span className="font-outfit font-bold text-sm text-white/80 hidden sm:block leading-tight">
            IR Virtual<br/>Solution Group
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-wa hover:opacity-90 text-white px-4 py-2 rounded-md text-sm font-bold transition-opacity">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Diagnóstico Gratis
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-white/80 border-b border-white/5 text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-wa text-white px-4 py-3 rounded-md text-sm font-bold">
            💬 Diagnóstico Gratis por WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
