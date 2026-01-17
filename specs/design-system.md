# Design System Specification

## Brand Identity

**Name:** Montra Money
**Tagline:** "Your AI-first personal finance companion"
**Style:** Mint Minimalism - clean, approachable, premium

---

## Color Palette

### Primary Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Primary | #A8DFC4 | --color-primary | CTAs, links, accents |
| Primary Dark | #7DCAB0 | --color-primary-dark | Hover states, active |
| Primary Light | #D4F0E3 | --color-primary-light | Backgrounds, chips |

### Neutral Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Charcoal | #1A1F24 | --color-charcoal | Headlines, primary text |
| Charcoal Light | #3D4852 | --color-charcoal-light | Secondary text |
| Muted Grey | #677487 | --color-muted | Body text |
| Light Grey | #9CA3AF | --color-light | Placeholders, helpers |
| Background | #F7F9F8 | --color-bg | Page background |
| Surface | #FFFFFF | --color-surface | Cards, inputs |

### Semantic Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Success | #94D3A2 | --color-success | Positive states |
| Warning | #F5C17D | --color-warning | Alerts, caution |
| Error | #E07A5F | --color-error | Errors (supportive tone) |

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #F7F9F8 0%, #D4F0E3 100%);
--gradient-cta: linear-gradient(135deg, #A8DFC4 0%, #7DCAB0 100%);
--gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F7F9F8 100%);
```

---

## Typography

### Font Families
```css
--font-display: 'Space Grotesk', sans-serif;  /* Logo/wordmark only */
--font-sans: 'Inter', system-ui, sans-serif;  /* All UI text */
```

### Type Scale
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| display-xl | 64px | 700 | 1.1 | Hero headlines |
| display-lg | 48px | 700 | 1.15 | Section headlines |
| display-md | 36px | 600 | 1.2 | Subsection headlines |
| heading-lg | 28px | 600 | 1.3 | Card titles |
| heading-md | 22px | 600 | 1.35 | Feature titles |
| heading-sm | 18px | 600 | 1.4 | Small headings |
| body-lg | 18px | 400 | 1.6 | Lead paragraphs |
| body-md | 16px | 400 | 1.6 | Body text |
| body-sm | 14px | 400 | 1.5 | Secondary text |
| caption | 12px | 500 | 1.4 | Labels, metadata |
| overline | 12px | 600 | 1.4 | Section labels (uppercase, tracking: 0.1em) |

### Responsive Type
```css
/* Mobile first, scale up */
h1: clamp(36px, 8vw, 64px);
h2: clamp(28px, 6vw, 48px);
h3: clamp(22px, 4vw, 36px);
```

---

## Spacing System

8dp base unit grid:
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Section Spacing
- Section padding: 80px (mobile: 48px)
- Container max-width: 1200px
- Container padding: 24px

---

## Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

| Element | Radius |
|---------|--------|
| Buttons | 12px |
| Cards | 16px |
| Inputs | 12px |
| Chips/Pills | 9999px |
| Avatars | 9999px |
| Modals | 24px |

---

## Shadows
```css
--shadow-sm: 0 1px 2px rgba(20, 40, 120, 0.05);
--shadow-md: 0 4px 12px rgba(20, 40, 120, 0.08);
--shadow-lg: 0 8px 24px rgba(20, 40, 120, 0.12);
--shadow-xl: 0 16px 48px rgba(20, 40, 120, 0.16);
```

Note: Shadows use mint-tinted opacity (#142878) for brand cohesion.

---

## Components

### Buttons

**Primary Button**
```css
background: var(--color-primary);
color: var(--color-charcoal);
padding: 14px 28px;
border-radius: 12px;
font-weight: 600;
font-size: 16px;
transition: all 0.2s ease;

&:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

**Secondary Button**
```css
background: transparent;
color: var(--color-charcoal);
border: 2px solid var(--color-charcoal);
/* Same padding/radius as primary */

&:hover {
  background: var(--color-charcoal);
  color: white;
}
```

**Ghost Button**
```css
background: transparent;
color: var(--color-primary-dark);
padding: 14px 28px;

&:hover {
  background: var(--color-primary-light);
}
```

### Cards
```css
background: var(--color-surface);
border-radius: 16px;
padding: 24px;
box-shadow: var(--shadow-sm);
transition: all 0.3s ease;

&:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Input Fields
```css
background: var(--color-surface);
border: 1.5px solid #E5E7EB;
border-radius: 12px;
padding: 14px 16px;
font-size: 16px;

&:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-light);
}
```

---

## Icons

Use Lucide React icons for consistency with the app.
- Size: 20px (inline), 24px (standalone)
- Stroke width: 1.5-2
- Color: currentColor (inherits text color)

---

## Animation

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Motion Principles
- Subtle, purposeful animations
- Prefer transforms and opacity (GPU accelerated)
- Respect prefers-reduced-motion
- Entrance animations: fade + slight slide (8-16px)

---

## Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

Mobile-first approach: design for mobile, enhance for larger screens.

---

## Accessibility

- Minimum contrast ratio: 4.5:1 (body), 3:1 (large text)
- Focus states: visible outline or ring
- Touch targets: minimum 44x44px
- Semantic HTML elements
- ARIA labels where needed
- Skip navigation link
- Alt text for all images

---

## Image Guidelines

- Format: WebP with JPEG/PNG fallbacks
- Hero images: max 1920px wide
- Feature images: max 800px wide
- Icons: SVG preferred
- Lazy load below-fold images
- Use next/image for optimization
