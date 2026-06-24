# phaneosAI Website

A production-ready, static-export landing page for **phaneosAI** — an AI integration partner for agencies.

Built with Next.js 16 App Router, React 19, TypeScript strict mode, Tailwind CSS v4, and Framer Motion for micro-interactions.

## Design system

- **Visual style**: "The Light Room" — flat tonal layering, restrained red signal, generous whitespace, no glassmorphism or gradient text.
- **Typography**: Manrope (Google Fonts).
- **Color tokens**: defined in OKLCH in `app/globals.css` using Tailwind v4 `@theme inline`.
- **Motion**: visibility-first scroll reveals via `IntersectionObserver` + CSS transitions; Framer Motion only for hover/tap micro-interactions. Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & test

```bash
npm run build      # static export
npm run lint       # ESLint
npx playwright test # E2E on Desktop + Mobile Chrome
```

## Partner form backend

Partner registrations are submitted through a server action (`app/actions/partner.ts`) that sends email via [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Add your `RESEND_API_KEY`.
3. Optionally override `PARTNER_INBOX_EMAIL` and `FROM_EMAIL`.

In development without a Resend key, the server action logs the payload to the console and returns success so the UI flow can still be tested. In production, a missing key returns a real error.

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `RESEND_API_KEY` | — | Resend API key for sending registration emails |
| `PARTNER_INBOX_EMAIL` | `partner@phaneosai.com` | Inbox that receives partner registrations |
| `FROM_EMAIL` | `onboarding@phaneosai.com` | Verified sender domain in Resend |

## SEO & accessibility

- Complete Next.js metadata API: Open Graph, Twitter card, canonical, robots, sitemap, JSON-LD.
- Skip-to-content link and focus-visible rings.
- Semantic headings, ARIA labels, and reduced-motion fallbacks.
- `public/og-image.png` — 1200×630 Open Graph image.

## Deployment

Configure your host to run `npm run build` and serve the `out/` directory. Update `metadataBase` in `app/layout.tsx` and the canonical domain in `app/sitemap.ts` to match your production URL.
