# Animation Recipes

Copy-paste ready animation snippets for common UI patterns.

---

## Button Hover — Scale + Lift

```css
.btn {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:hover {
  transform: scale(1.02) translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

## Card Hover — Lift + Shadow

```css
.card {
  transition: transform 300ms ease, box-shadow 300ms ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}
.card img {
  transition: transform 500ms ease;
}
.card:hover img {
  transform: scale(1.05);
}
```

## Input Focus — Ring Glow

```css
input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
```

## Staggered Fade-In on Scroll

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

## Skeleton Loader Shimmer

```css
.skeleton {
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
  border-radius: 8px;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Border Beam (Linear/Vercel Style)

```css
.beam-card {
  position: relative;
  overflow: hidden;
}
.beam-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  animation: beam 2s infinite;
  opacity: 0.6;
  z-index: -1;
}
@keyframes beam {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

## Glassmorphism Blur

```css
.glass {
  backdrop-filter: blur(10px) saturate(180%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

## Modal Entrance

```css
.backdrop {
  opacity: 0;
  transition: opacity 200ms ease;
}
.backdrop.open { opacity: 1; }

.modal {
  transform: scale(0.95);
  opacity: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.modal.open {
  transform: scale(1);
  opacity: 1;
}
```

## Reading Progress Bar

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--accent);
  transition: width 100ms linear;
  z-index: 9999;
}
```

```js
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.progress-bar').style.width = pct + '%';
});
```

---

## Reduced Motion

Always include this at the end of your stylesheet:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
