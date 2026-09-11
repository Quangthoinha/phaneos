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

          {/* Live Conversion Architecture Comparison */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="mb-14 p-5 sm:p-7 rounded-2xl bg-slate-900/90 border border-white/10 text-left max-w-3xl mx-auto shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                The Conversion Architecture Shift
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                14-Day Deployment Standard
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/20">
                <span className="text-rose-400 font-bold uppercase tracking-wider block mb-2">
                  Typical Solo Creator Funnel
                </span>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Raw Linktree or naked Calendly in bio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>40% audience drop-off due to choice overload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Tire-kickers flooding calendar; &lt;50% show-up</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/30">
                <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-2">
                  phaneos Shadow Ecosystem
                </span>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>7-minute VSL explaining your unique mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Sub-60s pre-qualification filter (91.4% show-up)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Automated £97–£497 digital asset fulfillment</span>
                  </li>
                </ul>
              </div>
            </div>
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
