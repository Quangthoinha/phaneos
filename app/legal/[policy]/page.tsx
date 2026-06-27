import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { marked } from "marked";
import type { Metadata } from "next";

const POLICIES = [
  "privacy-policy",
  "terms-of-service",
  "acceptable-use-policy",
  "ai-usage-policy",
  "partner-program-policy",
  "security-policy",
  "data-processing-addendum",
];

const TITLES: Record<string, string> = {
  "privacy-policy": "Privacy Policy — phaneosAI",
  "terms-of-service": "Terms of Service — phaneosAI",
  "acceptable-use-policy": "Acceptable Use Policy — phaneosAI",
  "ai-usage-policy": "AI Usage Policy — phaneosAI",
  "partner-program-policy": "Partner Program Policy — phaneosAI",
  "security-policy": "Security Policy — phaneosAI",
  "data-processing-addendum": "Data Processing Addendum — phaneosAI",
};

export async function generateStaticParams() {
  return POLICIES.map((policy) => ({ policy }));
}

const DESCRIPTIONS: Record<string, string> = {
  "privacy-policy":
    "phaneosAI Privacy Policy: how we collect, use, and protect personal data. GDPR Article 13/14 and Vietnam PDPD compliant.",
  "terms-of-service":
    "phaneosAI Terms of Service: general terms for using our website and AI integration services.",
  "acceptable-use-policy":
    "phaneosAI Acceptable Use Policy: rules for using our services, including prohibited and high-risk AI use cases.",
  "ai-usage-policy":
    "phaneosAI AI Usage Policy: how we use AI, our no-training commitment, human oversight, and EU AI Act alignment.",
  "partner-program-policy":
    "phaneosAI Partner Program Policy: commission tiers, deal registration, relationship protection, and clawbacks.",
  "security-policy":
    "phaneosAI Security Policy: security controls, access management, incident response, and subprocessor safeguards.",
  "data-processing-addendum":
    "phaneosAI Data Processing Addendum: controller/processor terms, SCCs, subprocessor list, and breach notification.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ policy: string }>;
}): Promise<Metadata> {
  const { policy } = await params;
  const title = TITLES[policy] || "Legal — phaneosAI";
  const description = DESCRIPTIONS[policy] || "Legal document for phaneosAI.";

  return {
    title,
    description,
    alternates: {
      canonical: `/legal/${policy}`,
    },
    openGraph: {
      title,
      description,
      url: `/legal/${policy}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ policy: string }>;
}) {
  const { policy } = await params;

  if (!POLICIES.includes(policy)) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "public", "legal", `${policy}.md`);
  let content: string;

  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }

  // Rewrite relative .md links to route paths.
  content = content.replace(
    /\]\((\.\/|\.\.\/)?([^)]+)\.md\)/g,
    (_match, _prefix, slug) => `](/legal/${slug.replace(/^\.\//, "").replace(/^\.\.\//, "")})`
  );

  const html = await marked(content, {
    gfm: true,
    breaks: false,
  });

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-ink)]/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-6 flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]"
          >
            phaneosAI
          </a>
          <a
            href="/legal"
            className="text-sm font-medium text-[var(--color-ink)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            Legal
          </a>
        </div>
      </header>

      <article className="max-w-[800px] mx-auto px-5 md:px-6 py-12 md:py-20 legal-prose">
        <div
          className="[&_h1]:text-[clamp(2rem,3vw,2.75rem)] [&_h1]:font-bold [&_h1]:tracking-[-0.02em] [&_h1]:leading-[1.15] [&_h1]:mb-6 [&_h1]:text-balance
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-[-0.01em]
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:text-base [&_p]:leading-[1.75] [&_p]:mb-4 [&_p]:text-[var(--color-ink)]/90
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:space-y-2
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-6 [&_ol]:space-y-2
            [&_li]:text-base [&_li]:leading-[1.7] [&_li]:text-[var(--color-ink)]/90
            [&_a]:text-[var(--color-primary)] [&_a]:font-medium [&_a]:underline-offset-2 [&_a:hover]:no-underline
            [&_hr]:border-[var(--color-ink)]/10 [&_hr]:my-8
            [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-6
            [&_th]:text-left [&_th]:font-semibold [&_th]:p-3 [&_th]:border-b [&_th]:border-[var(--color-ink)]/10 [&_th]:bg-[var(--color-ink)]/[0.03]
            [&_td]:p-3 [&_td]:border-b [&_td]:border-[var(--color-ink)]/10 [&_td]:align-top
            [&_strong]:font-semibold [&_strong]:text-[var(--color-ink)]
            [&_em]:italic"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

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
