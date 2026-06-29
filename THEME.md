# phaneosAI — Design Tokens

Brand identity and visual design system for the phaneosAI agency partner landing site.

---

## Brand

- **Name:** phaneosAI
- **Tagline:** AI Integration Partner for Agencies
- **Positioning:** Agencies sell AI services under their brand; phaneosAI provides the expertise.
- **Primary CTA:** "Become a Partner"
- **URL:** https://phaneosai.com
- **Contact email:** hello@phaneos.cloud

---

## Color Palette

All colors are defined in `app/globals.css` as CSS custom properties using `oklch()`.

| Token | oklch value | Approx hex | Usage |
|-------|-------------|------------|-------|
| `--color-bg` | `oklch(1.00 0.000 0)` | `#ffffff` | Page background, light surfaces |
| `--color-surface` | `oklch(0.97 0.002 13.5)` | `#f7f7f7` | Cards, alternate section backgrounds |
| `--color-ink` | `oklch(0.12 0.005 13.5)` | `#1f1f1f` | Primary text, headings |
| `--color-muted` | `oklch(0.40 0.005 13.5)` | `#666666` | Secondary text, descriptions |
| `--color-primary` | `oklch(0.55 0.180 13.5)` | `#b83d5b` | Primary brand color, CTAs, accent links |
| `--color-primary-hover` | `oklch(0.48 0.160 13.5)` | `#a03550` | Button/link hover states |
| `--color-primary-subtle` | `oklch(0.94 0.020 13.5)` | `#f9eef1` | Subtle primary backgrounds |
| `--color-accent` | `oklch(0.25 0.020 50)` | `#3d2e2b` | Dark trust section, footer background |
| `--color-accent-light` | `oklch(0.85 0.025 80)` | `#f0e6e3` | Soft accents on dark surfaces |
| `--color-success` | `oklch(0.55 0.160 145)` | `#2d8a4e` | Success states |
| `--color-warning` | `oklch(0.70 0.140 85)` | `#c9a227` | Warning states |
| `--color-error` | `oklch(0.55 0.180 25)` | `#c44545` | Error states |
| `--color-shadow` | `oklch(0.50 0.000 0 / 0.08)` | `rgba(0,0,0,0.08)` | Shadows |

### CSS variables

```css
:root {
  --background: var(--color-bg);
  --foreground: var(--color-ink);
}
```

---

## Typography

- **Primary font:** `Manrope` (Google Fonts)
- **Weights used:** 400, 500, 600, 700
- **Fallback stack:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Type scale

| Token | Value |
|-------|-------|
| `--text-xs` | `clamp(0.75rem, 0.8vw, 0.875rem)` |
| `--text-sm` | `clamp(0.875rem, 0.9vw, 1rem)` |
| `--text-base` | `clamp(1rem, 1vw, 1.125rem)` |
| `--text-md` | `clamp(1.125rem, 1.25vw, 1.375rem)` |
| `--text-lg` | `clamp(1.5rem, 2vw, 2.25rem)` |
| `--text-xl` | `clamp(2rem, 3vw, 3.5rem)` |
| `--text-2xl` | `clamp(2.5rem, 4.5vw, 5rem)` |

### Hero heading

```css
font-size: clamp(2.5rem, 5vw, 5.5rem);
font-weight: 700;
line-height: 1.05;
letter-spacing: -0.03em;
```

### Section headings

```css
font-size: clamp(1.75rem, 2.4vw, 2.75rem);
font-weight: 700;
line-height: 1.15;
letter-spacing: -0.02em;
```

---

## Spacing

| Token | Value |
|-------|-------|
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2rem |
| `--space-7` | 3rem |
| `--space-8` | 4rem |
| `--space-9` | 6rem |
| `--space-10` | 8rem |
| `--space-11` | 12rem |

### Section padding

```css
padding-top: 4rem;    /* py-16 */
padding-bottom: 4rem; /* py-16 */
```

On larger screens:

```css
padding-top: 6rem;    /* md:py-24 */
padding-bottom: 6rem; /* md:py-24 */
```

---

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | 0.375rem |
| `--radius-md` | 0.5rem |
| `--radius-lg` | 0.75rem |
| `--radius-xl` | 1rem |
| `--radius-full` | 9999px |

---

## Easing

| Token | Value |
|-------|-------|
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--ease-out-quint` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## Layout

- **Max container width:** `min(92vw, 1600px)`
- **Header height:** `clamp(3.5rem, 5.5vh, 5rem)` (≈ 56px–80px)
- **Hero min-height:** `100vh`
- **Grid gap:** `1.5rem` to `3rem` depending on breakpoint

### Header behavior

- Position: `fixed`, top 0, full width
- Background: `#ffffff` solid
- Z-index: `99999`
- Box shadow: `0 2px 10px rgba(0, 0, 0, 0.05)`
- Hero offset: `padding-top: var(--header-height)`

---

## Components

### Buttons

**Primary**

```css
background: var(--color-primary);
color: white;
border-radius: var(--radius-md);
padding: 0.875rem 1.5rem;
font-weight: 500;
hover: var(--color-primary-hover);
```

**Outline/Secondary**

```css
border: 1px solid var(--color-muted);
color: var(--color-ink);
background: transparent;
hover: border-color var(--color-primary), text var(--color-primary);
```

### Cards

```css
background: var(--color-surface);
border-radius: var(--radius-lg);
padding: var(--space-6);
```

### Badge/Pill

```css
background: var(--color-primary);
color: var(--color-bg);
border-radius: var(--radius-full);
padding: 0.5rem 0.875rem;
font-size: var(--text-xs);
font-weight: 600;
```

---

## Logo

The current logo direction is a **minimalist icon**: a person carrying/embracing a large glowing coin with a `$` symbol, surrounded by radiating lines. It represents "agency partners bringing AI value to clients".

Reference style: simple line icon, single color, rounded stroke caps, 2.2px stroke weight, no gradients.

File location: `app/components/logo/LogoMark.tsx`

### Logo usage

- **Header:** icon + wordmark "phaneosAI" (primary color on "AI")
- **Footer:** light variant on dark background
- **Favicon:** icon only

---

## Social / Meta

- **Open Graph:** 1200×630
- **Twitter card:** summary_large_image
- **Profile avatar:** 400×400
- **Favicon:** 32×32 PNG + 16×16 PNG + SVG

---

## Notes for Continuation

- Stack: Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
- Animations: Framer Motion + IntersectionObserver + CSS transitions
- Font loaded via `next/font/google` as CSS variable `--font-manrope`
- Use `oklch()` for all colors to match the existing system
- Prefer `container-wide` utility for section containers
- Maintain `scroll-padding-top: var(--header-height)` for anchor links
