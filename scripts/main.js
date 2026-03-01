/**
 * VDM Digital — Main JavaScript
 * Handles: scroll reveals, navbar effects, stat counters, mobile nav, form validation
 */

// =========================================================
// SCROLL REVEAL — Staggered IntersectionObserver
// =========================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  let revealIndex = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = revealIndex * 80;
        revealIndex++;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);

        // Reset stagger index after a batch
        clearTimeout(window._revealResetTimer);
        window._revealResetTimer = setTimeout(() => { revealIndex = 0; }, 300);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// =========================================================
// NAVBAR — Scroll effect + transparency
// =========================================================
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Trigger on load in case already scrolled
  if (window.scrollY > 20) nav.classList.add('nav--scrolled');
}

// =========================================================
// MOBILE NAV TOGGLE
// =========================================================
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// =========================================================
// STAT COUNTER ANIMATION
// =========================================================
function initStatCounters() {
  const stats = document.querySelectorAll('[data-count]');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(easedProgress * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// =========================================================
// SMOOTH SCROLL for anchor links
// =========================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// =========================================================
// CONTACT FORM VALIDATION
// =========================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: { 
      el: form.querySelector('#name'), 
      error: form.querySelector('#name-error'),
      validate: (v) => v.trim().length >= 2 ? '' : 'Please enter your name'
    },
    email: { 
      el: form.querySelector('#email'), 
      error: form.querySelector('#email-error'),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email'
    },
    budget: { 
      el: form.querySelector('#budget'), 
      error: form.querySelector('#budget-error'),
      validate: (v) => v ? '' : 'Please select a budget range'
    },
    message: { 
      el: form.querySelector('#message'), 
      error: form.querySelector('#message-error'),
      validate: (v) => v.trim().length >= 10 ? '' : 'Please tell us a bit more (at least 10 characters)'
    }
  };

  // Inline validation on blur
  Object.values(fields).forEach(({ el, error, validate }) => {
    if (!el || !error) return;
    el.addEventListener('blur', () => {
      const msg = validate(el.value);
      error.textContent = msg;
      el.classList.toggle('error', !!msg);
    });
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) {
        const msg = validate(el.value);
        error.textContent = msg;
        if (!msg) el.classList.remove('error');
      }
    });
  });

  // Form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let hasErrors = false;
    Object.values(fields).forEach(({ el, error, validate }) => {
      if (!el || !error) return;
      const msg = validate(el.value);
      error.textContent = msg;
      el.classList.toggle('error', !!msg);
      if (msg) hasErrors = true;
    });

    if (hasErrors) return;

    // Simulate submission
    const submitBtn = form.querySelector('#contact-submit-btn');
    const btnText = submitBtn.querySelector('.btn__text');
    const btnLoader = submitBtn.querySelector('.btn__loader');
    const btnArrow = submitBtn.querySelector('.btn__arrow');

    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnLoader.hidden = false;
    btnArrow.style.display = 'none';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success
    form.hidden = true;
    document.getElementById('form-success').hidden = false;
  });
}

// =========================================================
// FLOATING PARTICLES
// =========================================================
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const PARTICLE_COUNT = 30;
  const colors = [
    'rgba(59,130,246,0.5)',
    'rgba(139,92,246,0.4)',
    'rgba(6,182,212,0.4)',
    'rgba(255,255,255,0.15)'
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const dot = document.createElement('div');
    dot.className = 'particle';

    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];

    dot.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -5%;
      background: ${color};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;

    container.appendChild(dot);
  }
}

// =========================================================
// MOUSE PARALLAX on hero mockup
// =========================================================
function initMouseParallax() {
  const mockup = document.querySelector('.hero__mockup-img');
  const hero = document.querySelector('.hero');
  if (!mockup || !hero) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let rafId = null;
  hero.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = x * 8;
      const rotateX = -y * 6;
      const translateY = -y * 8;

      mockup.style.transform = `translateY(${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    mockup.style.transition = 'transform 0.6s ease-out';
    mockup.style.transform = '';
    setTimeout(() => { mockup.style.transition = ''; }, 600);
  });
}

// =========================================================
// FEATURE CARD TILT (subtle 3D on hover)
// =========================================================
function initCardTilt() {
  const cards = document.querySelectorAll('.feature-card--has-image');
  if (!cards.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.4s ease-out';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
}

// =========================================================
// TEXT TYPING EFFECT — hero title
// =========================================================
function initTypingEffect() {
  const el = document.querySelector('.hero__title-gradient');
  if (!el) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const text = el.textContent;
  el.textContent = '';
  el.style.borderRight = '2px solid var(--accent)';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, 50 + Math.random() * 30);
    } else {
      // Blink cursor then remove
      setTimeout(() => { el.style.borderRight = 'none'; }, 1500);
    }
  };

  // Delay until hero becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(type, 600);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(el);
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbar();
  initMobileNav();
  initStatCounters();
  initSmoothScroll();
  initContactForm();
  initParticles();
  initMouseParallax();
  initCardTilt();
  initTypingEffect();
});
