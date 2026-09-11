"use client";

import { Mail } from "lucide-react";
import Logo from "./logo";
import AnimatedButton from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#calculator", label: "Revenue Calculator" },
    { href: "#model", label: "Why Rev-Share" },
    { href: "#faq", label: "FAQ" },
    { href: "/legal", label: "Legal" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-100 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(225,29,72,0.06),transparent_70%)]" />

      {/* Closing conversion CTA */}
      <ScrollReveal className="relative border-b border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="max-w-[75ch]">
            <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-balance mb-5 text-white">
              Stop Leaving £10k–£50k/mo on the Table.
            </h2>
            <p className="text-[clamp(1rem,1vw,1.125rem)] leading-[1.65] text-slate-300 mb-8 max-w-[55ch]">
              You make the content. We engineer, launch, and manage your entire backend monetization machine in the shadows on a pure 20%–50% revenue-share basis.
            </p>
            <AnimatedButton href="#register" variant="primary" className="py-4 px-8 text-base font-semibold shadow-xl shadow-rose-950/40">
              Claim Your Free Shadow Funnel Audit
            </AnimatedButton>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <StaggerReveal className="max-w-[45ch]">
            <a
              href="#top"
              className="inline-block mb-4 hover:opacity-90 transition-opacity"
              aria-label="phaneosAI - Back to top"
            >
              <Logo size={40} />
            </a>
            <p className="text-base leading-[1.65] text-slate-300 mb-4">
              Backstage growth and operating partner for creators & niche experts. We unlock scalable backend cashflow through 7-minute VSLs and AI digital products.
            </p>
            <p className="text-sm text-slate-400">
              Zero Upfront Fees. 100% Brand Ownership. Operating in the shadows.
            </p>
          </StaggerReveal>

          <StaggerReveal staggerIndex={1} className="flex flex-col md:items-end gap-4">
            <a
              href="mailto:hello@phaneos.cloud"
              className="inline-flex items-center gap-2 text-base text-slate-200 hover:text-white transition-colors"
            >
              <Mail size={18} className="text-[var(--color-primary)]" />
              hello@phaneos.cloud
            </a>
            <a
              href="https://www.linkedin.com/in/phaneos-ai-undefined-b50bb4416/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-slate-200 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-slate-300">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </StaggerReveal>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} phaneosAI. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-400" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
