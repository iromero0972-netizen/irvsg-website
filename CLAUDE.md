# CLAUDE.md — IR Virtual Solution Group Website
## Contexto del Proyecto para Claude Code

> Este archivo le dice a Claude Code todo lo que necesita saber sobre este proyecto
> cada vez que se abra la carpeta. No borrar ni modificar sin autorización de Ignacio.

---

## ¿Qué es este proyecto?

Sitio web oficial de **IR Virtual Solution Group (IRVSG)** — agencia de automatización
con IA para PYMEs en Texas. Es el activo de ventas principal de la empresa.

**Dueño del proyecto:** Ignacio Romero — CEO & Founder, IRVSG · Katy, Texas  
**Rol de Claude Code:** AI Engineer / Builder  
**Metodología:** IRVSG Manual v2.0 (4 Pilares obligatorios)

---

## Stack Técnico

| Componente | Tecnología |
|-----------|-----------|
| HTML | Puro, semántico, sin frameworks |
| CSS | Custom properties (variables), sin librerías |
| JavaScript | Vanilla JS, sin dependencias npm |
| Fuentes | Google Fonts — Syne + DM Sans |
| Deploy | GitHub Pages (static) |
| Repositorio | github.com/iromero0972-netizen/irvsg-website |

**REGLA CRÍTICA:** No agregar npm, webpack, ni frameworks. El sitio debe ser
un solo `index.html` + `assets/css/main.css` + `assets/js/main.js`. Sin build step.

---

## Estructura de Archivos

```
irvsg-website/
├── index.html              ← Página principal (único archivo HTML)
├── CLAUDE.md               ← Este archivo
├── .gitignore
└── assets/
    ├── css/
    │   └── main.css        ← Todos los estilos
    ├── js/
    │   └── main.js         ← JavaScript (nav, scroll, animaciones)
    └── img/
        └── .gitkeep        ← Carpeta para imágenes futuras
```

---

## Variables Críticas — Actualizar Antes de Deploy

```
WhatsApp: 18327000000  →  número real de Ignacio (formato: 1 + área + número)
Email:    ignacio@irvsg.com  →  confirmar que es correcto
Dominio:  TBD (irvsg.com o irvirtualsolutions.com)
```

Para buscar y reemplazar el número de WhatsApp:
```bash
grep -n "18327000000" index.html
sed -i 's/18327000000/NUMERO_REAL/g' index.html
```

---

## Secciones del Sitio (en orden)

1. **NAV** — Logo + links + botón WhatsApp (fixed, backdrop-filter)
2. **HERO** — Headline principal + 2 CTAs + 3 stats
3. **PAIN** — 4 pain points del cliente ideal
4. **SERVICES** — 4 servicios con cards individuales
5. **PROCESO** — 4 pasos del proceso IRVSG
6. **CASO** — Andy's Bakery case study con flow visual
7. **WHY** — 4 razones para elegir IRVSG
8. **CONTACTO** — CTA final con WhatsApp + Email
9. **FOOTER** — Logo + tagline + copyright

---

## Design System

| Variable CSS | Valor | Uso |
|---|---|---|
| `--navy` | `#08131F` | Fondo principal |
| `--navy-mid` | `#0D1E2F` | Fondo secciones alternadas |
| `--navy-card` | `#0F2034` | Cards de servicios |
| `--electric` | `#00C4FF` | Acento principal (electric blue) |
| `--gold` | `#F5A623` | Acento secundario |
| `--green` | `#00E096` | Acento terciario / éxito |
| `--wa-green` | `#25D366` | WhatsApp (siempre este color) |
| `--muted` | `#7A8FA8` | Texto secundario |
| `--font-display` | Syne 800 | Títulos y números |
| `--font-body` | DM Sans 300/400/500 | Texto general |

---

## Servicios IRVSG (no cambiar sin autorización)

1. **Automatización de Pedidos** — tag: Operaciones (electric)
2. **Asistentes Virtuales IA** — tag: Atención al Cliente (gold)
3. **Automatización Administrativa y Contable** — tag: Finanzas & Contabilidad (green)
4. **Social Media con IA** — tag: Marketing (purple)

---

## Contexto de Negocio Importante

- **Cliente piloto documentado:** Andy's Bakery (pastelería de la hija de Ignacio)
- **Sistema en producción:** N8N local en localhost:5678, 3 workflows activos
- **GitHub real del cliente:** `iromero0972-netizen/andys-bakery-`
- **Plataforma de automatización:** N8N exclusivamente (Make.com descartado)
- **Mercado objetivo:** PYMEs en Texas, principalmente área Houston/Katy

---

## Comandos Frecuentes

```bash
# Verificar sitio localmente
open index.html
# O con servidor local:
python3 -m http.server 8080
# Luego abrir: http://localhost:8080

# Ver en móvil simulado
# Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)

# Deploy
git add . && git commit -m "feat: [descripción]" && git push origin main

# Verificar que GitHub Pages esté activo
gh api repos/iromero0972-netizen/irvsg-website/pages
```

---

## Reglas de Modificación (IRVSG Manual v2.0)

- ✅ Siempre testear en Chrome + móvil antes de hacer commit
- ✅ Commits en inglés con prefijo: `feat:`, `fix:`, `style:`, `content:`
- ✅ No romper el responsive — probar en 375px, 768px y 1280px
- ❌ No agregar dependencias externas sin autorización de Ignacio
- ❌ No cambiar el número de WhatsApp ni el email sin confirmación
- ❌ No modificar el Case Study de Andy's Bakery sin validación
- ❌ No hacer deploy a producción sin checklist completo

---

## Definition of Done (DoD) para cualquier cambio

- [ ] Sitio abre sin errores en Chrome
- [ ] Responsive funciona en móvil (375px)
- [ ] Todos los links de WhatsApp y email funcionan
- [ ] Animaciones de scroll se activan correctamente
- [ ] Menú móvil abre y cierra
- [ ] `git status` limpio antes del push

---

*CLAUDE.md generado por Claude Chat (Automation Architect) · IRVSG Manual v2.0*
*Última actualización: 2026-03-30*
