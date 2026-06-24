"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Logo from "./Logo";
import AnimatedButton from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <footer className="relative bg-[var(--color-ink)] text-white">
      {/* Closing conversion CTA */}
      <ScrollReveal className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="max-w-[75ch]">
            <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-balance mb-5">
              Your clients are already asking about AI.
            </h2>
            <p className="text-[clamp(1rem,1vw,1.125rem)] leading-[1.65] text-white/80 mb-8 max-w-[55ch]">
              Be the agency that has a clear answer. Partner with phaneosAI and start offering AI integration under your own brand.
            </p>
            <AnimatedButton href="#register" variant="primary" className="py-4 px-8">
              Become a Partner
            </AnimatedButton>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="max-w-[45ch]">
            <motion.a
              href="#top"
              className="inline-block mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Logo variant="light" size={40} />
            </motion.a>
            <p className="text-base leading-[1.65] text-white/70 mb-4">
              AI integration partner for agencies worldwide. Expand your service offering without expanding your headcount.
            </p>
            <p className="text-sm text-white/50">
              Early stage. Building alongside pioneering agencies.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <motion.a
              href="mailto:partner@phaneosai.com"
              className="inline-flex items-center gap-2 text-base text-white/80 hover:text-[var(--color-primary)] transition-colors"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail size={18} />
              partner@phaneosai.com
            </motion.a>
            <motion.a
              href="https://linkedin.com/company/phaneosai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-white/80 hover:text-[var(--color-primary)] transition-colors"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} phaneosAI. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-white/50" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
