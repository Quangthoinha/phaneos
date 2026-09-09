"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

export default function CommissionCalculator() {
  const [clientCount, setClientCount] = useState<number>(4);
  const [avgDealSize, setAvgDealSize] = useState<number>(35000);
  const [model, setModel] = useState<"referral" | "co-selling">("co-selling");

  const rate = model === "co-selling" ? 0.25 : 0.12;
  const totalPipeline = clientCount * avgDealSize;
  const agencyCommission = totalPipeline * rate;
  const savedEngineerCost = 85000; // Average UK AI engineer salary (£85k)

  const handleCtaClick = () => {
    if (typeof window === "undefined") return;
    const newHash = `#register?model=${model}`;
    history.pushState(null, "", newHash);
    window.dispatchEvent(new Event("hashchange"));

    const form = document.getElementById("register");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <Calculator className="w-4 h-4" />
            <span>Interactive Partner ROI Model</span>
          </div>
          <h2 className="heading-section font-bold tracking-tight text-[var(--color-ink)] mb-5">
            Calculate Your Agency's New AI Revenue Stream
          </h2>
          <p className="text-section text-[var(--color-muted)] leading-relaxed">
            See how much recurring commission your agency generates by unlocking AI for the clients you already retain — without hiring a single technical specialist.
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
                {model === "co-selling" 
                  ? "Co-selling (25% split, we join pitches together)" 
                  : "Referral (12% split, 100% hands-off intro)"}
              </p>
            </div>

            <div className="flex items-center p-1.5 rounded-full bg-slate-900/80 border border-white/10">
              <button
                type="button"
                onClick={() => setModel("referral")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  model === "referral"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Referral (12%)
              </button>
              <button
                type="button"
                onClick={() => setModel("co-selling")}
                className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  model === "co-selling"
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-rose-900/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Co-selling (25%)
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid md:grid-cols-2 gap-8 py-8">
            {/* Slider 1: Client Count */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="client-count-slider" className="text-sm font-medium text-slate-300">
                  Client Accounts Introduced:
                </label>
                <span className="text-lg font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  {clientCount} {clientCount === 1 ? "Client" : "Clients"}
                </span>
              </div>
              <input
                id="client-count-slider"
                type="range"
                min="1"
                max="15"
                step="1"
                value={clientCount}
                onChange={(e) => setClientCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 Client</span>
                <span>8 Clients</span>
                <span>15 Clients</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Size */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="deal-size-slider" className="text-sm font-medium text-slate-300">
                  Avg Annual AI Scope / Retainer:
                </label>
                <span className="text-lg font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  £{avgDealSize.toLocaleString()}
                </span>
              </div>
              <input
                id="deal-size-slider"
                type="range"
                min="10000"
                max="80000"
                step="5000"
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>£10,000</span>
                <span>£45,000</span>
                <span>£80,000</span>
              </div>
            </div>
          </div>

          {/* Result Showcase Card */}
          <div className="mt-2 rounded-2xl p-6 md:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-muted)] flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Your Estimated Annual Agency Profit ({model === "co-selling" ? "25%" : "12%"})
              </span>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-400">
                £{agencyCommission.toLocaleString()}
                <span className="text-base md:text-lg font-normal text-slate-400 ml-2">/year</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-3">
                <span>• Total Gross AI Pipeline: <strong className="text-slate-200">£{totalPipeline.toLocaleString()}</strong></span>
                <span>• Tech Payroll Overhead: <strong className="text-emerald-400">£0</strong></span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full md:w-auto px-7 py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-rose-900/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Lock In {model === "co-selling" ? "25% Co-selling" : "12% Referral"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Guarantees under calculator */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/5 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Paid within 30 days of client payment</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Non-Circumvention Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>White-label or Co-branded options</span>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
