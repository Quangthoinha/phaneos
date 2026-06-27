import type { Metadata } from "next";

const DOCS = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect personal data. GDPR Article 13/14 and Vietnam PDPD compliant.",
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    description:
      "General terms for using phaneosAI's website and services.",
  },
  {
    slug: "acceptable-use-policy",
    title: "Acceptable Use Policy",
    description:
      "Rules for using our services, including prohibited and high-risk AI use cases.",
  },
  {
    slug: "ai-usage-policy",
    title: "AI Usage Policy",
    description:
      "How we use AI, our no-training commitment, human oversight, and EU AI Act alignment.",
  },
  {
    slug: "partner-program-policy",
    title: "Partner Program Policy",
    description:
      "Commission tiers, deal registration, relationship protection, and clawbacks.",
  },
  {
    slug: "security-policy",
    title: "Security Policy",
    description:
      "Security controls, access management, incident response, and subprocessor safeguards.",
  },
  {
    slug: "data-processing-addendum",
    title: "Data Processing Addendum",
    description:
      "Controller/processor terms, SCCs, subprocessor list, and breach notification.",
  },
];

export const metadata: Metadata = {
  title: "Legal & Compliance",
  description:
    "Legal and compliance documents for phaneosAI, including Privacy Policy, Terms of Service, AI Usage Policy, Partner Program Policy, Security Policy, and Data Processing Addendum.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Legal & Compliance — phaneosAI",
    description:
      "Privacy Policy, Terms of Service, AI Usage Policy, Partner Program Policy, Security Policy, and Data Processing Addendum for phaneosAI.",
    url: "/legal",
  },
  robots: { index: true, follow: true },
};

export default function LegalIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-ink)]/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-6">
          <a
            href="/"
            className="text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]"
          >
            phaneosAI
          </a>
        </div>
      </header>

      <section className="max-w-[800px] mx-auto px-5 md:px-6 py-12 md:py-20">
        <h1 className="text-[clamp(2rem,3vw,2.75rem)] font-bold tracking-[-0.02em] leading-[1.15] text-balance mb-4">
          Legal & Compliance
        </h1>
        <p className="text-lg leading-[1.65] text-[var(--color-ink)]/80 mb-12 max-w-[60ch]">
          Clear, up-to-date policies that govern how phaneosAI operates and how we protect your data.
        </p>

        <div className="grid gap-4">
          {DOCS.map((doc) => (
            <a
              key={doc.slug}
              href={`/legal/${doc.slug}`}
              className="group block p-6 rounded-2xl border border-[var(--color-ink)]/10 bg-white/50 hover:bg-white hover:border-[var(--color-primary)]/30 transition-colors"
            >
              <h2 className="text-lg font-semibold tracking-[-0.01em] text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {doc.title}
              </h2>
              <p className="text-base leading-[1.65] text-[var(--color-ink)]/70">
                {doc.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-[var(--color-ink)]/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-ink)]/60">
            © {new Date().getFullYear()} phaneosAI
          </p>
          <a
            href="/"
            className="text-sm font-medium text-[var(--color-ink)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            Back to homepage
          </a>
        </div>
      </footer>
    </main>
  );
}
