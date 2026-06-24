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

Partner registrations are submitted through a server action (`app/actions/partner.ts`) that:

1. Sends an email notification via [Resend](https://resend.com).
2. Appends a row to the [partner registrations Google Sheet](https://docs.google.com/spreadsheets/d/1mBYZ78MJUtpqwfXzPo0haH-KteKbn9Sz6h9R-UWsSsk/edit?usp=sharing).

### Resend setup

1. Copy `.env.example` to `.env.local`.
2. Add your `RESEND_API_KEY`.
3. Optionally override `PARTNER_INBOX_EMAIL` and `FROM_EMAIL`.

### Google Sheets setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a **Service Account**.
2. Enable the **Google Sheets API** for your project.
3. Create a JSON key for the service account and note:
   - `client_email` → set as `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → set as `GOOGLE_PRIVATE_KEY` (paste the full key including `-----BEGIN...-----`)
4. Open the [registrations spreadsheet](https://docs.google.com/spreadsheets/d/1mBYZ78MJUtpqwfXzPo0haH-KteKbn9Sz6h9R-UWsSsk/edit?usp=sharing), click **Share**, and invite the service account email with **Editor** access.
5. Make sure the sheet contains a tab named `Registrations` (or set `GOOGLE_SHEET_NAME` to a custom name).

In development without a Resend key, the server action logs the payload to the console and returns success so the UI flow can still be tested. In production, a missing Resend key returns a real error. The Google Sheets log is best-effort: a failed sheet append is logged but does not block the form submission.

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `RESEND_API_KEY` | — | Resend API key for sending registration emails |
| `PARTNER_INBOX_EMAIL` | `partner@phaneosai.com` | Inbox that receives partner registrations |
| `FROM_EMAIL` | `onboarding@phaneosai.com` | Verified sender domain in Resend |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | — | Service account `client_email` for Google Sheets API |
| `GOOGLE_PRIVATE_KEY` | — | Service account `private_key` for Google Sheets API |
| `GOOGLE_SHEET_ID` | `1mBYZ78MJUtpqwfXzPo0haH-KteKbn9Sz6h9R-UWsSsk` | Target spreadsheet ID |
| `GOOGLE_SHEET_NAME` | `Registrations` | Sheet tab name |

## SEO & accessibility

- Complete Next.js metadata API: Open Graph, Twitter card, canonical, robots, sitemap, JSON-LD.
- Skip-to-content link and focus-visible rings.
- Semantic headings, ARIA labels, and reduced-motion fallbacks.
- `public/og-image.png` — 1200×630 Open Graph image.

## Deployment

Configure your host to run `npm run build` and serve the `out/` directory. Update `metadataBase` in `app/layout.tsx` and the canonical domain in `app/sitemap.ts` to match your production URL.
