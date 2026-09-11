"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, EyeOff, PlayCircle } from "lucide-react";
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
          {/* Top Live Pill */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 mb-8 backdrop-blur-md shadow-sm"
          >
            <EyeOff className="w-3.5 h-3.5 text-rose-400" />
            <span>2026 Shadow Operating Model — Accepting 5 Select Creators & Experts</span>
          </motion.div>

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
            Stop leaking 40% of your audience to naked Calendly links and text-heavy pages. We architect high-converting 7-minute VSL funnels, turnkey AI digital products, and automated backend lead engines — on a pure <strong>20% – 50% revenue share split</strong>.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              type="button"
              onClick={() => handleScrollTo("calculator")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-rose-950/50 hover:shadow-rose-900/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Calculate Unlocked Revenue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("register")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl glass-card text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-rose-400" />
              <span>Get Free Shadow Audit</span>
            </button>
          </motion.div>

          {/* 3 Tactile Proof Cards (Apple Glassmorphic Style) */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white mb-0.5">20% – 50% Rev-Share</h2>
                <p className="text-xs text-slate-400">Zero upfront fees. We only earn when we grow your monthly revenue.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white mb-0.5">100% Brand Ownership</h2>
                <p className="text-xs text-slate-400">Your audience, content, and IP remain 100% yours forever.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white mb-0.5">Top Achiever Playbook</h2>
                <p className="text-xs text-slate-400">We benchmark and clone what the top 1% in your niche are executing.</p>
              </div>
            </div>
          </motion.div>

          {/* Trust Metric Banner */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Sweet Spot: 1,000 – 10,000 Views / Video
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              7-Minute VSL & Sub-60s Funnel Architecture
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Zero Tech or Operational Burden for Creator
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
