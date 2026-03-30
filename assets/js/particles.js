// ════════════════════════════════════════════
// IRVSG — Neural Network Particle Animation
// Represents: AI automation connecting systems
// ════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    particleCount: 55,
    connectionDistance: 140,
    particleSpeed: 0.35,
    particleRadius: 2.2,
    lineOpacity: 0.18,
    colors: {
      particle: '#00C4FF',
      particleAlt: '#F5A623',
      line: '#00C4FF',
      glow: 'rgba(0, 196, 255, 0.6)'
    }
  };

  let canvas, ctx, particles = [], animId, W, H;

  function init() {
    canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    createParticles();
    animate();
    window.addEventListener('resize', debounce(resize, 200));
    canvas.addEventListener('mousemove', onMouse);
  }

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    if (particles.length) {
      particles.forEach(function (p) {
        if (p.x > W) p.x = W * Math.random();
        if (p.y > H) p.y = H * Math.random();
      });
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
        vy: (Math.random() - 0.5) * CONFIG.particleSpeed,
        r: CONFIG.particleRadius + Math.random() * 1.2,
        isAlt: Math.random() < 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }
  }

  let mouseX = -1000, mouseY = -1000;
  function onMouse(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);

    // Update and draw connections
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      // Bounce
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      p.x = Math.max(0, Math.min(W, p.x));
      p.y = Math.max(0, Math.min(H, p.y));

      // Mouse repulsion
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        p.x += (dx / dist) * 1.2;
        p.y += (dy / dist) * 1.2;
      }

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const ddx = p.x - q.x;
        const ddy = p.y - q.y;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < CONFIG.connectionDistance) {
          const alpha = (1 - d / CONFIG.connectionDistance) * CONFIG.lineOpacity;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(0, 196, 255, ' + alpha + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw particles on top
    particles.forEach(function (p) {
      const pulsed = p.r + Math.sin(p.pulse) * 0.5;
      const color = p.isAlt ? CONFIG.colors.particleAlt : CONFIG.colors.particle;

      // Glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsed * 4);
      grad.addColorStop(0, p.isAlt ? 'rgba(245,166,35,0.3)' : 'rgba(0,196,255,0.25)');
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulsed * 4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulsed, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    animId = requestAnimationFrame(animate);
  }

  function debounce(fn, ms) {
    let t;
    return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
