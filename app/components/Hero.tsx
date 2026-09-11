"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import SectionReveal from "./SectionReveal";

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (elementId: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SectionReveal
      id="top"
      className="hero-section relative min-h-screen overflow-hidden bg-[var(--color-bg)] flex items-center pt-24 pb-20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-rose-500/10 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-slate-800/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container-wide mx-auto w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={shouldReduceMotion ? undefined : contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Master Headline */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-black leading-[1.04] tracking-[-0.03em] text-white mb-8 text-balance"
          >
            You Make the Content.{" "}
            <span className="text-rose-400 font-black">
              We Operate the Business in the Shadows.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-[clamp(1.125rem,1.4vw,1.35rem)] leading-[1.65] text-slate-300 mb-10 max-w-2xl mx-auto text-pretty font-normal"
          >
            Most creators leak 40% of their audience to naked Calendly links and text-heavy pages. We engineer high-converting 7-minute VSL funnels, turnkey digital products, and automated backend lead engines — on a pure <strong>20% – 50% revenue share split</strong> with zero upfront retainers.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <button
              type="button"
              onClick={() => handleScrollTo("calculator")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-base flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <span>Calculate Unlocked Revenue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("register")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-rose-400" />
              <span>Get Free Shadow Audit</span>
            </button>
          </motion.div>

          {/* Executive Proof Bar */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="border-y border-white/10 py-6 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-left"
          >
            <div className="sm:border-r sm:border-white/10 sm:pr-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-400 block mb-1">
                Zero Upfront Risk
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pure 20%–50% revenue share. We invest our own time and engineering; we only earn when you make money.
              </p>
            </div>

            <div className="sm:border-r sm:border-white/10 sm:pr-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 block mb-1">
                Zero Technical Overhead
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                You record your content. We script, build, wire, and manage the entire backend ecosystem.
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 block mb-1">
                100% Brand Ownership
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your audience, AdSense, community, and intellectual property remain strictly yours forever.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
