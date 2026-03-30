export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <img src="/irvsg-website/images/logo.png" alt="IR Virtual Solution Group" className="h-20 w-auto"
          style={{ mixBlendMode: 'screen' }} />
        <p className="text-white/50 text-sm">Automatización con IA para PYMEs · Katy, Texas</p>
        <p className="text-white/30 text-xs">© 2026 IR Virtual Solution Group LLC · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
