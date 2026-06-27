import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://phaneosai.com";
const SITE_NAME = "phaneosAI";
const DEFAULT_DESCRIPTION =
  "phaneosAI helps agencies sell and deliver AI integration services to their clients. Referral 12%. Co-selling 25%. You keep the relationship; we bring the AI expertise.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI Integration Partner for Agencies`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "AI integration partner",
    "AI agency partner program",
    "AI services for agencies",
    "AI workflow automation",
    "LLM integration",
    "AI co-selling",
    "AI referral partner",
    "white-label AI services",
    "agency AI enablement",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — AI Integration Partner for Agencies`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — AI Integration Partner for Agencies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@phaneosai",
    creator: "@phaneosai",
    title: `${SITE_NAME} — AI Integration Partner for Agencies`,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.png`,
        description: DEFAULT_DESCRIPTION,
        email: "hello@phaneos.cloud",
        sameAs: [
          "https://www.linkedin.com/in/phaneos-ai-undefined-b50bb4416/?skipRedirect=true",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/legal?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-3 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
