"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, EyeOff } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

export default function CommissionCalculator() {
  const [viewsCount, setViewsCount] = useState<number>(30000);
  const [offerPrice, setOfferPrice] = useState<number>(297);
  const [model, setModel] = useState<"standard" | "full">("standard");

  // Heuristic conversion rate on optimized VSL funnel: 0.8% of engaged viewers
  const conversionRate = 0.008;
  const monthlyBuyers = Math.max(2, Math.round(viewsCount * conversionRate * 0.25)); // 25% of views reach MOF/BOF
  const totalMonthlyBackend = monthlyBuyers * offerPrice;
  const operatorSplit = model === "full" ? 0.50 : 0.30;
  const creatorTake = totalMonthlyBackend * (1 - operatorSplit);
  const operatorTake = totalMonthlyBackend * operatorSplit;

  const handleCtaClick = () => {
    if (typeof window === "undefined") return;
    const newHash = `#register?model=${model === "full" ? "full-shadow-operator" : "rev-share-30"}`;
    history.pushState(null, "", newHash);
    window.dispatchEvent(new Event("hashchange"));

    const form = document.getElementById("register");
    if (form) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(form, { offset: -76, duration: 1.1 });
      } else {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <SectionReveal id="calculator" className="relative py-20 md:py-28 bg-[var(--color-bg)] overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container-wide relative z-10 w-full">
        <StaggerReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 badge-glass mb-4 text-[var(--color-primary)]">
            <EyeOff className="w-4 h-4" />
            <span>Interactive Shadow Rev-Share Model</span>
          </div>
          <h2 className="heading-section font-bold tracking-tight text-[var(--color-ink)] mb-5">
            How Much Hidden Backend Revenue Are You Leaving on the Table?
          </h2>
          <p className="text-section text-[var(--color-muted)] leading-relaxed">
            Most creators with 2k–10k views rely on AdSense or broken Calendly links. Plug your metrics in to see the monthly recurring revenue a Shadow Operator unlocks for you.
          </p>
        </StaggerReveal>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative">
          {/* Top Tag & Model Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted)] block mb-1">
                Select Partnership Model
              </span>
              <p className="text-sm font-medium text-[var(--color-ink)]">
                {model === "full" 
                  ? "Full-Stack Shadow Operating (50/50 Co-Op — We build, launch & run everything)" 
                  : "Backend Monetization Launch (70% Creator / 30% Shadow Operator)"}
              </p>
            </div>

            <div className="flex items-center p-1.5 rounded-full bg-slate-900/80 border border-white/10">
              <button
                type="button"
                onClick={() => setModel("standard")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  model === "standard"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                70/30 Split
              </button>
              <button
                type="button"
                onClick={() => setModel("full")}
                className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  model === "full"
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-rose-900/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                50/50 Co-Op
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid md:grid-cols-2 gap-8 py-8">
            {/* Slider 1: Views Count */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="views-slider" className="text-sm font-medium text-slate-300">
                  Monthly Video / Content Views:
                </label>
                <span className="text-lg font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  {viewsCount.toLocaleString("en-GB")} views
                </span>
              </div>
              <input
                id="views-slider"
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={viewsCount}
                onChange={(e) => setViewsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>5k Views</span>
                <span>75k Views</span>
                <span>150k Views</span>
              </div>
            </div>

            {/* Slider 2: Average Offer Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="price-slider" className="text-sm font-medium text-slate-300">
                  Backend Digital Offer / Community Price:
                </label>
                <span className="text-lg font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  £{offerPrice}
                </span>
              </div>
              <input
                id="price-slider"
                type="range"
                min="97"
                max="997"
                step="50"
                value={offerPrice}
                onChange={(e) => setOfferPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>£97 (Notion/SOP)</span>
                <span>£497 (Mastermind)</span>
                <span>£997 (High-Ticket)</span>
              </div>
            </div>
          </div>

          {/* Result Showcase Card */}
          <div className="mt-2 rounded-2xl p-6 md:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-muted)] flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Your Take-Home Monthly Cash ({model === "full" ? "50%" : "70%"} Split)
              </span>
              <div className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tight">
                +£{Math.round(creatorTake).toLocaleString("en-GB")}
                <span className="text-base md:text-lg font-normal text-rose-400 ml-2">/month</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>• Total Unlocked Backend: <strong className="text-slate-200">£{Math.round(totalMonthlyBackend).toLocaleString("en-GB")}/mo</strong></span>
                <span>• Shadow Operator Share: <strong className="text-slate-300">£{Math.round(operatorTake).toLocaleString("en-GB")}/mo</strong></span>
                <span>• Upfront Cost to Creator: <strong className="text-emerald-400">£0</strong></span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full md:w-auto px-7 py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-rose-900/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Apply for {model === "full" ? "50/50 Co-Op" : "70/30 Partnership"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Guarantees under calculator */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/5 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>£0 Upfront Fee — Pure Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>You keep 100% of your AdSense & Brand Deals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Turnkey 14-day backend launch</span>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
