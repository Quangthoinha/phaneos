---
name: phaneosAI
description: AI integration partner landing page for agencies
colors:
  primary: "oklch(0.55 0.180 13.5)"
  primary-hover: "oklch(0.48 0.160 13.5)"
  primary-subtle: "oklch(0.94 0.020 13.5)"
  accent: "oklch(0.25 0.020 50)"
  accent-light: "oklch(0.85 0.025 80)"
  bg: "oklch(1.00 0.000 0)"
  surface: "oklch(0.97 0.002 13.5)"
  ink: "oklch(0.12 0.005 13.5)"
  muted: "oklch(0.40 0.005 13.5)"
  success: "oklch(0.55 0.160 145)"
  warning: "oklch(0.70 0.140 85)"
  error: "oklch(0.55 0.180 25)"
typography:
  display:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 3vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  3xl: "3rem"
  4xl: "4rem"
  5xl: "6rem"
  6xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
    typography: "{typography.title}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
    typography: "{typography.title}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: phaneosAI

## 1. Overview

**Creative North Star: "The Light Room"**

The phaneosAI landing page is designed as a clean, well-lit room where a difficult decision becomes obvious. The light is the value agencies pull from AI — the sun in the logo — but the room itself is calm, architectural, and human-scaled. There is no tech noise, no dashboard chrome, no startup hustle. Every section gets one clear idea; nothing competes for attention.

The system is built for expert credibility. Type is confident but not loud. Color is used with discipline: red appears where a choice is made, and nowhere else by accident. Motion is scroll-driven and gentle; it paces the story rather than decorating it. The overall feeling is that of sitting across from a senior operator who has done this before and is not trying to sell you anything you don't need.

**Key Characteristics:**
- Single sans-serif family (Manrope) used across display, body, and labels.
- Pure white background with warm-tinted neutrals carried at very low chroma.
- Red primary used as a conversion signal, not a surface color.
- Flat, tonal layering; shadows are reserved for hover/lift responses.
- Hero image is the dominant visual; no decorative icon grids.
- Scroll-driven narrative with `prefers-reduced-motion` fallback to static reveals.

## 2. Colors

The palette is intentionally small. Warm charcoal and pure white carry the page; a single saturated red marks commitment points. Neutral tints lean toward the brand's warm hue so the white never feels cold, but chroma stays low enough that the background reads as white, not cream.

### Primary
- **Committed Red** (`oklch(0.55 0.180 13.5)`): The brand's only accent. Reserved for primary CTAs, the logo sun, the active milestone dot, and key emphasis. Its scarcity is the point.
- **Red Hover** (`oklch(0.48 0.160 13.5)`): Darker, slightly desaturated red for button hover and active states.
- **Red Subtle** (`oklch(0.94 0.020 13.5)`): Low-chroma tint for tags, badges, and soft backgrounds behind primary content.

### Neutral
- **Pure White** (`oklch(1.00 0.000 0)`): Body background. Deliberately at chroma 0 to avoid the warm-neutral AI cliché; warmth comes from imagery and accent.
- **Warm Surface** (`oklch(0.97 0.002 13.5)`): Card and alternate-section background. Tinted barely toward the brand's warm hue.
- **Deep Ink** (`oklch(0.12 0.005 13.5)`): Primary text, headings, footer background.
- **Muted Ink** (`oklch(0.40 0.005 13.5)`): Body copy, descriptions, secondary text. Chosen to hit ≥4.5:1 on white and ≥3:1 on the accent dark section.

### Functional
- **Accent Dark** (`oklch(0.25 0.020 50)`): Used for the trust section background, where light text sits on a deep warm charcoal.
- **Accent Light** (`oklch(0.85 0.025 80)`): Soft highlight for logo coin and small warm accents.
- **Success**, **Warning**, **Error**: Standard form/status roles; kept at moderate chroma so they don't compete with the brand red.

### Named Rules
**The Signal Rarity Rule.** The primary red may not cover more than 10% of any viewport. If a section feels "red-heavy," replace surface color with white or surface-neutral and use red only for the CTA and one intentional focal point.

## 3. Typography

**Display/Body/Label Font:** Manrope (system-ui fallback)

Manrope is used as a single family across all roles. The design relies on weight, size, and tracking contrast rather than font pairing. This keeps the system calm and avoids the common "two almost-identical sans-serifs" mistake.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 4.5vw, 5rem)`, line-height 1.1, letter-spacing -0.03em): Hero headline only.
- **Headline** (700, `clamp(2rem, 3vw, 3.5rem)`, line-height 1.15, letter-spacing -0.02em): Section headings.
- **Title** (600, `clamp(1.25rem, 1.5vw, 1.5rem)`, line-height 1.3): Card titles, FAQ questions, form labels.
- **Body** (400, `clamp(1rem, 1vw, 1.125rem)`, line-height 1.65): Paragraphs and descriptions. Max line length 65ch.
- **Label** (600, 0.875rem, line-height 1.5, letter-spacing 0.05em, uppercase): Small all-caps eyebrow. Used sparingly — not above every section.

### Named Rules
**The One Voice Rule.** Typography communicates hierarchy through weight and size, never through all-caps body copy or multiple font families. The single exception is the short uppercase Label role.

## 4. Elevation

The system is flat by default. Depth is created through tonal layering (white → warm surface → deep ink) and through the hero image, which is the only element allowed to feel atmospheric. Elevation changes happen in response to state, not as decoration.

### Shadow Vocabulary
- **Lift shadow** (`0 12px 24px -8px rgba(0, 0, 0, 0.08)`): Applied on card hover via `AnimatedCard`. Soft, ambient, never harsh.
- **Hero image shadow** (`shadow-2xl shadow-[var(--color-primary)]/10`): A diffuse red-tinted glow behind the hero image to lift it from the white wall.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. Shadows appear only as a response to hover, focus, or scroll-driven lift. No persistent card shadows, no decorative drop shadows on static sections.

## 5. Components

### Buttons
- **Shape:** Medium rounded corners (`0.5rem` / `rounded-md`), generous padding (`0.875rem 1.5rem`).
- **Primary:** Committed Red background with pure white text. Used for the main conversion CTA.
- **Secondary:** Deep Ink background with white text. Used for secondary actions inside cards.
- **Outline:** Transparent background, muted border, ink text. Used for secondary navigation CTAs.
- **Hover / Focus:** Background shift to hover color; subtle scale (`1.02`) on hover and `0.98` on tap via Framer Motion. Focus-visible uses a 2px primary outline with 2px offset.
- **Disabled:** No scale animation; reduced opacity, cursor not-allowed.

### Cards
- **Corner Style:** `0.75rem` / `rounded-lg`.
- **Background:** Warm Surface.
- **Border:** Transparent at rest; on hover, a faint primary-tinted border (`var(--color-primary) / 0.2`) appears.
- **Shadow Strategy:** No shadow at rest. Lift shadow appears on hover.
- **Internal Padding:** `1.5rem` to `2rem` depending on viewport.

### Inputs / Fields
- **Style:** White background, muted border (`var(--color-muted) / 0.5`), `0.5rem` radius.
- **Focus:** Primary-colored border with a 2px primary ring at 20% opacity.
- **Error:** Error-colored border with an error message below the field.
- **Select:** Native select with a custom chevron SVG background.

### Navigation
- **Header:** Sticky, white with subtle blur, 1px surface border below.
- **Logo:** SVG mark + wordmark "phaneosAI" in bold Manrope.
- **Links:** Muted ink at rest, deep ink on hover. Small vertical nudge on hover.
- **Mobile:** Full-width dropdown with large touch targets, animated open/close.

### Logo / Signature Component
- A solid-geometric SVG: a figure reaches into a sun and pulls out a coin. It is used as the brand mark in the header, footer, and as a floating hero accent.

## 6. Do's and Don'ts

### Do:
- **Do** keep the primary red rare and intentional — CTAs, logo sun, active milestone dot.
- **Do** let the hero image carry the visual weight of the page.
- **Do** use one idea per fold in the scroll narrative.
- **Do** ensure body text on white uses the Muted Ink token or darker for ≥4.5:1 contrast.
- **Do** respect `prefers-reduced-motion` by falling back to static content and disabling pinned scroll sections.
- **Do** write copy in English across all surfaces and metadata.

### Don't:
- **Don't** use gradient-text headlines or decorative gradient backgrounds.
- **Don't** use floating chatbot widgets, "AI made easy" clichés, or big-number metric grids.
- **Don't** place a tiny uppercase eyebrow above every section heading.
- **Don't** use glassmorphism, neon accents, or purple gradients.
- **Don't** use side-stripe borders greater than 1px as a colored accent on cards.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding.
- **Don't** use corporate-consulting jargon, dense diagrams, or stock handshake imagery.
