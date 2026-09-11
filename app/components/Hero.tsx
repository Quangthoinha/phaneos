"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 px-6 md:px-12 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Understated Audience Scope Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono tracking-wider text-slate-400 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Partnering with creators reaching 1k – 20k views per video
        </motion.div>

        {/* Master Headline: Large, confident, pure */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8 text-balance"
        >
          You make the content.{" "}
          <span className="text-slate-400 font-normal block sm:inline">
            We build the business behind it.
          </span>
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-12 text-pretty"
        >
          phaneos operates as a silent backend partner for creators and experts. We convert viewer attention into high-margin digital products and qualified client funnels on a pure revenue-share basis. No retainers. Zero upfront risk.
        </motion.p>

        {/* Crisp, deliberate CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            type="button"
            onClick={() => handleScrollTo("register")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-slate-950 hover:bg-slate-200 font-medium text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Apply for Partnership</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("thesis")}
            className="w-full sm:w-auto px-7 py-4 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm tracking-wide transition-all cursor-pointer"
          >
            How the Model Works
          </button>
        </motion.div>

        {/* 3 Understated Core Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-slate-900 text-left max-w-3xl mx-auto"
        >
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Fee Model</div>
            <div className="text-sm text-slate-200 font-medium">Zero Upfront Retainers</div>
            <div className="text-xs text-slate-400 mt-1">100% aligned revenue share on new cashflow</div>
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Ownership</div>
            <div className="text-sm text-slate-200 font-medium">100% Creator IP & Audience</div>
            <div className="text-xs text-slate-400 mt-1">Your channels, list, and brand stay strictly yours</div>
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Time to Launch</div>
            <div className="text-sm text-slate-200 font-medium">14-Day Deployment</div>
            <div className="text-xs text-slate-400 mt-1">We build and test your backend within two weeks</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
