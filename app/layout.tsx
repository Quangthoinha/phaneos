import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "phaneosAI",
  url: "https://phaneosai.com",
  description:
    "AI integration partner for agencies. Referral 12%. Co-selling 25%. Agencies keep the client relationship; phaneosAI delivers the AI expertise.",
  email: "hello@phaneos.cloud",
  sameAs: ["https://www.linkedin.com/in/phaneos-ai-undefined-b50bb4416/?skipRedirect=true"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://phaneosai.com"),
  title: "phaneosAI — AI Integration Partner for Agencies",
  description:
    "Help your agency sell AI strategy, workflow automation, custom agents, and LLM integration to existing clients. Referral 12%. Co-selling 25%. You keep the relationship; we bring the AI expertise.",
  openGraph: {
    title: "phaneosAI — AI Integration Partner for Agencies",
    description:
      "Help your agency sell AI services to existing clients. Referral 12%. Co-selling 25%. You keep the relationship.",
    type: "website",
    locale: "en_US",
    siteName: "phaneosAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "phaneosAI — AI Integration Partner for Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "phaneosAI — AI Integration Partner for Agencies",
    description:
      "Help your agency sell AI services to existing clients. Referral 12%. Co-selling 25%. You keep the relationship.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify(structuredData),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
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
