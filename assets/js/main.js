// ════════════════════════════════════════════
// IRVSG — Main JavaScript
// IR Virtual Solution Group · 2026
// ════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. NAV SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── 2. MOBILE MENU TOGGLE
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ── 3. SMOOTH ACTIVE SECTION HIGHLIGHT
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navItems.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = '#00C4FF';
          }
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function (s) { observer.observe(s); });

  // ── 4. FADE-IN ON SCROLL (cards, steps, etc.)
  const fadeEls = document.querySelectorAll(
    '.pain-card, .service-card, .step, .why-card, .result, .caso-badge'
  );
  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease ' + (i * 0.05) + 's, transform 0.5s ease ' + (i * 0.05) + 's';
    fadeObserver.observe(el);
  });

  // ── 5. WHATSAPP NUMBER — Update with real number
  // Replace 18327000000 with your real WhatsApp number (no dashes, no spaces)
  // Example: 18327123456
  // Update all wa.me links in the HTML file directly.

});
