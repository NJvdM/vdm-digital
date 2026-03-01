---
name: mastering-website-design
description: Guides the agent to build beautiful, high-performing websites and UIs using a 5-dimension design framework covering layout patterns, visual styles, color palettes, typography pairings, and animations. Use when the user asks to "build a website", "create a landing page", "design a UI", or wants a premium, modern web interface.
---

# Master Websites — AI-Powered Design Intelligence

> Build gorgeous, modern UIs using a structured 5-dimension design framework with 67+ design styles, 95+ color palettes, and proven interaction patterns.

## When to Use This Skill

- User asks to build, design, or style a website or web app
- User wants a landing page, dashboard, portfolio, or any UI
- User requests a "premium", "modern", or "beautiful" design
- User mentions a specific aesthetic (glassmorphism, brutalism, dark mode, etc.)
- User wants to improve the look & feel of an existing site

---

## Workflow

When the user requests a website or UI, follow this design-first approach:

- [ ] **1. Clarify the product type** — Determine the pattern & layout (Dimension 1)
- [ ] **2. Pick the aesthetic** — Choose or confirm the visual style (Dimension 2)
- [ ] **3. Set the palette** — Select colors matching the brand mood (Dimension 3)
- [ ] **4. Choose typography** — Pair fonts to the brand voice (Dimension 4)
- [ ] **5. Layer in animations** — Add micro-interactions and scroll effects (Dimension 5)
- [ ] **6. Build** — Implement using the selected dimensions
- [ ] **7. Polish** — Review against the anti-patterns checklist

---

## Instructions

Structure every design around these **5 Core Dimensions**:

### DIMENSION 1 — Pattern & Layout (The Skeleton)

Pick the layout pattern that matches the product type. Don't just say "landing page" — be specific:

| Product Type | Pattern | Layout |
|---|---|---|
| **SaaS (General)** | Hero → Features → Social Proof → CTA | Full-width hero, 3-column features, testimonial carousel, sticky CTA |
| **Micro SaaS** | Minimal & Direct + Live Demo | Centered hero with embedded demo, minimal nav, single CTA |
| **E-commerce (Luxury)** | Feature-Rich Showcase + Immersive Gallery | Full-screen hero slider, grid gallery, product details with zoom |
| **Fintech / Crypto** | Conversion-Optimized + Trust Signals | Split hero (visual + form), live stats, trust indicators |
| **Analytics Dashboard** | Bento Grid + Actionable Insights | Modular card system, hierarchical info, quick filters |
| **Portfolio / Agency** | Storytelling + Case Studies | Full-screen sections, horizontal scroll galleries, immersive transitions |

---

### DIMENSION 2 — Style & Aesthetic (The Skin)

Choose the visual vocabulary. Here are the primary styles:

**Glassmorphism**
- `backdrop-filter: blur(10px)`, `rgba` backgrounds, layered cards
- Best for: Modern apps, dashboards, overlays, modals

**Aurora UI**
- Multi-stop gradients, animated hue rotation, glow effects
- Best for: Landing pages, hero sections, creative portfolios

**Soft UI / Neumorphism 2.0**
- Inset + outset `box-shadow`, monochromatic palette, tactile feel
- Best for: Mobile apps, minimalist interfaces, wellness apps

**Linear / Vercel Aesthetic**
- `#0A0A0A` background, `#1A1A1A` cards, `#333` borders, white text
- Best for: Developer tools, SaaS platforms, technical products

**Bento Grid**
- CSS Grid, varying card sizes, consistent 16–24px gaps
- Best for: Dashboards, feature showcases, content-heavy pages

**Liquid Glass**
- SVG blobs, `backdrop-filter`, animated transforms, fluid shapes
- Best for: Creative agencies, modern SaaS, interactive experiences

**More styles**: Brutalism · Y2K Revival · Claymorphism · Gradient Mesh · Minimalist Luxury · Cyberpunk · Organic/Biomorphic

---

### DIMENSION 3 — Color & Theme (The Palette)

Match colors to the emotional tone. Use the **60-30-10 rule** (dominant / secondary / accent).

#### Ready-Made Palettes

**Trust & Professionalism** (Finance, Healthcare, Enterprise)
```css
--primary: #0F172A;   /* Navy */
--cta: #0369A1;       /* Blue */
--background: #F8FAFC; /* Light Grey */
--text: #1E293B;      /* Slate */
--accent: #3B82F6;    /* Bright Blue */
```

**Vibrant & Modern** (Tech Startups, Creative Tools)
```css
--primary: #6366F1;   /* Indigo */
--cta: #10B981;       /* Emerald */
--background: #FFFFFF; /* White */
--text: #1E293B;      /* Slate */
--accent: #F59E0B;    /* Amber */
```

**Luxury & Premium** (High-end Products, Fashion)
```css
--primary: #1C1917;   /* Stone Dark */
--cta: #CA8A04;       /* Gold */
--background: #FAFAF9; /* Cream */
--text: #292524;      /* Warm Black */
--accent: #78716C;    /* Taupe */
```

**Healthcare / Wellness** (Medical, Fitness, Mental Health)
```css
--primary: #0891B2;   /* Cyan */
--cta: #059669;       /* Health Green */
--background: #FFFFFF; /* Clean White */
--text: #0F172A;      /* Deep Blue */
--accent: #06B6D4;    /* Bright Cyan */
```

**Creative / Playful** (Consumer Apps, Entertainment)
```css
--primary: #EC4899;   /* Pink */
--cta: #8B5CF6;       /* Purple */
--background: #FEF3C7; /* Warm Cream */
--text: #1F2937;      /* Charcoal */
--accent: #F59E0B;    /* Orange */
```

**Dark Mode Excellence**
```css
--background: #0A0A0A;       /* True Black */
--surface: #1A1A1A;          /* Card Background */
--border: #333333;           /* Subtle Borders */
--text: #FFFFFF;             /* Pure White */
--text-secondary: #A3A3A3;   /* Grey */
--accent: #3B82F6;           /* Blue or #10B981 Green */
/* Ensure 15:1 contrast ratio for text */
```

#### Color Rules
- ✅ Use semantic tokens (`--color-success`, `--color-error`)
- ✅ Ensure WCAG AA (4.5:1 for text)
- ❌ Never use more than 3 primary colors
- ❌ Never use pure `#000` on `#FFF` — too harsh
- ❌ Never use low-contrast grey text (`#CCC` on `#FFF`)

---

### DIMENSION 4 — Typography (The Voice)

Pair fonts to match brand personality:

| Voice | Headings | Body | Personality |
|---|---|---|---|
| **Modern / Tech** | Inter (Variable) | Roboto or System UI | Clean, scalable, professional |
| **Elegant / Luxury** | Playfair Display | Montserrat | Sophisticated, editorial |
| **Friendly / Consumer** | Poppins | Open Sans | Approachable, warm |
| **Brutalist / Bold** | Space Grotesk | JetBrains Mono | Raw, unconventional |
| **Editorial / Content** | Merriweather | Source Sans Pro | Readable, trustworthy |

Monospace (for code): `JetBrains Mono` or `IBM Plex Mono`

---

### DIMENSION 5 — Animations & Interactions (The Soul)

This dimension transforms "good" into "Pro Max". Layer these in:

#### Micro-Interactions

**Buttons**
```css
/* Hover: scale + lift */
transform: scale(1.02) translateY(-2px);
box-shadow: 0 8px 24px rgba(0,0,0,0.15);
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Card Hover**
```css
/* Lift + shadow + optional tilt */
transform: translateY(-4px);
box-shadow: 0 12px 32px rgba(0,0,0,0.12);
/* Image inside: transform: scale(1.05) with overflow: hidden */
```

**Input Focus**
```css
/* Ring glow */
outline: 3px solid rgba(var(--accent-rgb), 0.5);
box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.15);
```

#### Scroll Animations

**Staggered Reveal**
- `opacity: 0 → 1` + `translateY(20px → 0)`
- Stagger delay: `100ms` between elements
- Trigger at 20% viewport intersection
- Duration: `600ms`, easing: `ease-out`

**Parallax** (subtle only)
- Background scroll at `0.5×`, foreground at `1.2×`
- Max 20–30px movement
- Use `transform`, never `position`

#### Page Transitions
- Fade: `opacity 200ms`
- Modal entrance: backdrop `opacity 200ms`, then content `scale(0.95→1) 300ms`

#### Loading States
- Skeleton shimmer: linear gradient animation, `1.5s infinite`
- Match skeleton shapes to final content layout

#### Advanced Effects

**Border Beam** (Linear/Vercel style)
```css
background: linear-gradient(90deg, transparent, #3B82F6, transparent);
animation: beam 2s infinite;
```

**Glassmorphism Blur**
```css
backdrop-filter: blur(10px) saturate(180%);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

#### Performance Rules
- ✅ Only animate `transform` and `opacity` (GPU accelerated)
- ✅ Set `will-change` on animated elements
- ✅ Use `requestAnimationFrame` for JS animations
- ❌ Never animate `width`, `height`, or `position`
- ❌ No animations longer than `500ms` for interactions

#### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Anti-Patterns Checklist

Before shipping, verify none of these are present:

### Design
- [ ] No animations blocking user actions
- [ ] No transitions > 300ms for interactions
- [ ] No light grey text on white backgrounds
- [ ] WCAG AA contrast met (4.5:1 for text)
- [ ] No more than 3 primary colors
- [ ] No more than 2 font families
- [ ] Consistent spacing (8px grid system)

### UX
- [ ] All icons have labels or tooltips
- [ ] No hamburger menus on desktop
- [ ] Tap targets ≥ 44×44px on mobile
- [ ] No hover-dependent interactions on touch devices
- [ ] No labels inside inputs (accessibility)
- [ ] No validation only on submit — use inline validation
- [ ] No disabled submit buttons — show errors instead

### Performance
- [ ] Images optimized (WebP, lazy loading)
- [ ] No render-blocking resources
- [ ] No layout shifts (CLS < 0.1)
- [ ] No heavy animations on page load
- [ ] `prefers-reduced-motion` respected

### Accessibility
- [ ] Keyboard navigation works throughout
- [ ] All images have alt text
- [ ] Color is not the sole information conveyor
- [ ] Focus indicators visible (min 3px, 3:1 contrast)

---

## Resources

- Color palette reference: See `resources/palettes.md`
- Animation recipes: See `resources/animations.md`
- Simply copy and paste your desired sections → [Google AI Studio](https://aistudio.google.com/apps)
