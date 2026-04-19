# Impact Nexus — Website Design Specification
**Version:** 1.0  
**Status:** Ready for Development  
**Stack:** Next.js (App Router) + Tailwind CSS  

---

## 1. Brand Identity

### Company
**Impact Nexus** is a product-driven tech company building digital solutions that solve real-world problems across healthcare, fintech, and commerce.

### Tagline
> "Building digital solutions that actually matter."

### Personality
Minimal. Bold. Technical credibility without arrogance. Not flashy — purposeful.

---

## 2. Design Tokens

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#06070d` | Page background |
| `--bg2` | `#0d0f1a` | Alternate section background |
| `--bg3` | `#111420` | Hover states |
| `--surface` | `#161926` | Cards, panels |
| `--border` | `rgba(255,255,255,0.07)` | Default borders |
| `--border-hover` | `rgba(255,255,255,0.14)` | Hover borders |
| `--text` | `#f0f1f5` | Primary text |
| `--muted` | `#6b7280` | Secondary text, metadata |
| `--subtle` | `#9ca3af` | Body paragraphs, descriptions |
| `--accent` | `#5b6ef5` | Primary brand color (indigo-blue) |
| `--accent2` | `#8b5cf6` | Gradient endpoint (violet) |
| `--accent-glow` | `rgba(91,110,245,0.18)` | Glow fills |
| `--green` | `#10b981` | Live status |
| `--amber` | `#f59e0b` | In-development status |

### Gradient — Hero Text
```css
background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Gradient — Accent Glow (Radial)
```css
background: radial-gradient(ellipse, rgba(91,110,245,0.12) 0%, transparent 70%);
```

---

## 3. Typography

| Role | Family | Weight | Size |
|---|---|---|---|
| Display / Headings | **Syne** | 700–800 | 58px (hero), 36px (section), 20px (card) |
| Body / UI | **DM Sans** | 400, 500 | 14–16px (body), 12–13px (small) |
| Labels / Tags | DM Sans | 600 | 9–11px, letter-spacing: 1.5–1.8px, uppercase |

### Import
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

### Tailwind Config
```js
// tailwind.config.js
fontFamily: {
  display: ['Syne', 'sans-serif'],
  body: ['DM Sans', 'sans-serif'],
}
```

---

## 4. Component Structure

```
/app
  layout.tsx          ← Root layout, font imports, metadata
  page.tsx            ← Homepage (assembles all sections)

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections
    Hero.tsx
    About.tsx
    Products.tsx
    Vision.tsx
  /ui
    Badge.tsx          ← Status badges (Live / In Development)
    ProductCard.tsx    ← Reusable product card
    PillarCard.tsx     ← About section pillars
    StatCard.tsx       ← About section stats
    VisionCard.tsx     ← Mission/Approach/Who cards
    Button.tsx         ← Primary + Ghost variants
    SectionTag.tsx     ← Small uppercase label above headings
```

---

## 5. Section Specifications

### 5.1 Navbar
- **Layout:** Flex, space-between, sticky, `backdrop-blur-md`
- **Left:** Logo — "Impact**Nexus**" (accent color on "Nexus")
- **Right:** Nav links + CTA button
- **Links:** About, Products, Vision, "Get in Touch →" (filled button)
- **Mobile:** Hamburger menu, collapse to full-width drawer
- **Background:** `rgba(6,7,13,0.9)` with blur on scroll
- **Border-bottom:** 1px `var(--border)`

### 5.2 Hero
- **Layout:** Full-width, left-aligned content, centered glow effects behind
- **Elements:**
  - Pill label: "Product-Driven Tech Company" (indigo tint)
  - H1: 58px, Syne 800, gradient highlight on key words
  - Subtext: 16px, `--subtle`, max-width 480px
  - Two CTAs: Primary "View Products →" + Ghost "Get in Touch"
- **Background effects:**
  - Central top glow radial (indigo, 600px wide)
  - Right secondary glow (violet, 360px)
- **Mobile:** H1 drops to 32px, buttons stack full-width

### 5.3 About
- **Layout:** 2-column grid (text + pillars), `gap-[60px]`
- **Left column:**
  - Section tag: "ABOUT"
  - H2: "We don't build features. We solve problems."
  - Paragraph body
  - 2×2 stat grid: 3 Products, 1 Live, AI-first, UK-based
- **Right column:** 3 pillar cards (icon + title + text)
- **Background:** `var(--bg2)`, top/bottom 1px borders
- **Mobile:** Single column, stats grid stays 2×2, pillars stack

### 5.4 Products
- **Layout:** 3-column card grid
- **Each card contains:**
  - Status badge (In Development / Live)
  - Product name (Syne 700, 20px)
  - Description (13px, `--muted`)
  - "Learn more →" link
  - Subtle top-edge gradient line (indigo or green)
  - Radial glow behind card top
- **Background:** Default page background

| Product | Status | Accent |
|---|---|---|
| ArrivaUK | In Development | Amber badge |
| UnitrackPay | In Development | Amber badge |
| Mhiras Collection | Live | Green badge |

- **Mobile:** Single column stack

### 5.5 Vision / Mission
- **Layout:** 2-column grid (quote block + 3 cards)
- **Left:**
  - Section tag: "VISION"
  - Pull quote (Syne 700, 28px), left-border accent (3px indigo)
  - Body paragraph below
- **Right:** 3 stacked cards: Mission, Approach, Who we serve
- **Background:** `var(--bg2)`, top/bottom borders
- **Mobile:** Single column, quote first, cards below

### 5.6 Footer
- **Layout:** Flex space-between
- **Left:** Logo + copyright
- **Right:** Privacy, Terms, Contact links
- **Border-top:** 1px `var(--border)`
- **Mobile:** Center-aligned, stacked

---

## 6. UI Components Detail

### Badge Component
```tsx
// components/ui/Badge.tsx
type BadgeProps = {
  status: 'live' | 'development'
}

const config = {
  live: {
    label: 'Live',
    classes: 'bg-green-500/10 border border-green-500/25 text-green-400'
  },
  development: {
    label: 'In Development',
    classes: 'bg-amber-500/10 border border-amber-500/25 text-amber-400'
  }
}
```

### Button Component
```tsx
// components/ui/Button.tsx
type ButtonProps = {
  variant: 'primary' | 'ghost'
  children: React.ReactNode
  href?: string
}
```

### ProductCard Component
```tsx
// components/ui/ProductCard.tsx
type ProductCardProps = {
  name: string
  description: string
  status: 'live' | 'development'
  linkLabel: string
  href: string
}
```

---

## 7. Motion & Effects

| Effect | Implementation |
|---|---|
| Hero glow | CSS `radial-gradient` positioned absolute, pointer-events: none |
| Card top line | CSS `::before` pseudo-element with linear-gradient |
| Card glow | Absolute positioned div inside card, radial gradient |
| Scroll reveal | Framer Motion `motion.div` with `initial={{ opacity: 0, y: 20 }}` + `whileInView` |
| Hover states | Tailwind `hover:border-white/[0.14]` transition |
| Nav on scroll | `useScroll` hook → toggle blur + border |

### Framer Motion — Scroll Reveal Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

---

## 8. Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 768px` (mobile) | Single column, stacked CTAs, hamburger nav |
| `768px – 1024px` (tablet) | Hybrid: 2-col about, 1-col products |
| `> 1024px` (desktop) | Full 2/3-col layouts, sticky nav |

### Mobile-specific rules
- Nav: hamburger → slide-in drawer
- Hero H1: `text-[32px]` 
- Section padding: `px-5 py-9`
- Products: `grid-cols-1`
- About: `grid-cols-1`, stats stay `grid-cols-2`

---

## 9. SEO & Metadata

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Impact Nexus — Building Digital Solutions That Matter',
  description: 'Impact Nexus is a product-driven tech company building scalable digital tools for healthcare, fintech, and commerce.',
  openGraph: {
    title: 'Impact Nexus',
    description: 'Elegant digital solutions for the people who need them most.',
    url: 'https://impactnexus.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  }
}
```

---

## 10. File & Page Structure

```
/app
  globals.css         ← CSS variables, resets, base styles
  layout.tsx          ← Font imports, metadata, root layout
  page.tsx            ← Renders all sections in order

/public
  favicon.ico
  og-image.png        ← 1200×630 OG image

/styles
  globals.css         ← Tailwind directives + custom vars
```

---

## 11. Product Data (Static — Can Move to CMS)

```ts
// lib/products.ts
export const products = [
  {
    name: 'ArrivaUK',
    description: 'A digital platform simplifying the arrival and settlement experience for newcomers to the UK.',
    status: 'development' as const,
    href: '#',
    linkLabel: 'Learn more',
  },
  {
    name: 'UnitrackPay',
    description: 'Smart payment and tracking for university students and institutions — transparent fee management.',
    status: 'development' as const,
    href: '#',
    linkLabel: 'Learn more',
  },
  {
    name: 'Mhiras Collection',
    description: 'A curated thrift e-commerce platform making pre-loved fashion accessible and sustainable.',
    status: 'live' as const,
    href: 'https://mhirascollection.com',
    linkLabel: 'Visit store',
  },
]
```

---

## 12. Dependencies

```json
{
  "next": "^14",
  "react": "^18",
  "tailwindcss": "^3",
  "framer-motion": "^11",
  "clsx": "^2",
  "tailwind-merge": "^2"
}
```

---

## 13. Development Notes

- Use `cn()` utility (clsx + tailwind-merge) for conditional class merging
- All section-level animations should use `whileInView` with `once: true` — no repeat triggers
- Glow effects are CSS-only — no JS needed
- Badge pulse animation for "Live" badge: subtle CSS keyframe on the dot
- Card hover: `transition-all duration-200` on border color only — no scale transforms (feels more professional than scaling)
- The nav CTA should scroll to a `#contact` section anchor (build this section later or link to a contact form)

---

*Powered by Impact Nexus — impactnexus.io*
