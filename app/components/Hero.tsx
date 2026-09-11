"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

export default function Hero() {
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
      className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 md:px-12 bg-[#090a0f] text-white"
    >
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Simple, honest trust pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>For YouTube creators & experts getting 1k – 30k views per video</span>
        </div>

        {/* Clear, direct headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8 text-balance">
          You make the videos.{" "}
          <span className="text-rose-400 block sm:inline">
            We build the £10k–£30k/mo business behind them.
          </span>
        </h1>

        {/* Straightforward explanation */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Most creators rely on pennies from AdSense and raw bio links that lose 70% of viewers. We package your expertise into digital products, build high-converting sales funnels, and handle operations on pure revenue share.
        </p>

        {/* The Golden Rule */}
        <div className="text-sm sm:text-base font-semibold text-slate-200 mb-10">
          Zero upfront retainers. If you don&apos;t make money, we don&apos;t make money.
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => handleScrollTo("calculator")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40"
          >
            <Calculator className="w-4 h-4" />
            <span>Estimate Your Channel&apos;s Revenue</span>
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("how-it-works")}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 font-medium text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Clear Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white">£0 Upfront Cost</div>
              <div className="text-xs text-slate-400 mt-0.5">We invest our own time and tools upfront.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white">100% Creator Ownership</div>
              <div className="text-xs text-slate-400 mt-0.5">Your channel, email list, and audience stay yours.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white">14-Day Turnaround</div>
              <div className="text-xs text-slate-400 mt-0.5">From agreement to your first live offer in two weeks.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
