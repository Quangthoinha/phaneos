"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { BorderBeam } from "./ui/BorderBeam";

export default function CalculatorSection() {
  const [viewsCount, setViewsCount] = useState<number>(35000);
  const [offerPrice, setOfferPrice] = useState<number>(297);
  const [model, setModel] = useState<"standard" | "full">("standard");

  // Conversion logic: 0.8% of engaged viewers convert on a qualified VSL funnel
  const conversionRate = 0.008;
  const monthlyBuyers = Math.max(2, Math.round(viewsCount * conversionRate * 0.25));
  const totalMonthlyBackend = monthlyBuyers * offerPrice;
  const operatorSplit = model === "full" ? 0.5 : 0.3;
  const creatorTake = totalMonthlyBackend * (1 - operatorSplit);
  const operatorTake = totalMonthlyBackend * operatorSplit;

  const handleCtaClick = () => {
    if (typeof window === "undefined") return;
    const form = document.getElementById("register");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Economics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How Much Backend Revenue Are You Leaking?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Most creators with 1k–20k views rely on pennies from AdSense or lose 70% of viewers to raw Linktree links. Plug in your metrics to calculate the cashflow a Shadow Operator unlocks.
          </p>
        </div>

        {/* Calculator Card with Magic UI BorderBeam */}
        <div className="relative rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
          <BorderBeam size={300} duration={14} colorFrom="#f43f5e" colorTo="#3b82f6" />

          {/* Model Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 block mb-1">
                Partnership Structure
              </span>
              <p className="text-sm font-medium text-white">
                {model === "standard"
                  ? "Digital Product Launch (70% Creator / 30% Shadow Operator)"
                  : "Full-Stack Co-Op (50/50 Revenue Share — Full Operation)"}
              </p>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-white/10">
              <button
                type="button"
                onClick={() => setModel("standard")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  model === "standard"
                    ? "bg-white text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                70/30 Launch
              </button>
              <button
                type="button"
                onClick={() => setModel("full")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  model === "full"
                    ? "bg-rose-500 text-white font-semibold shadow-md shadow-rose-900/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                50/50 Co-Op
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid md:grid-cols-2 gap-8 py-8">
            {/* Slider 1: Views Count */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="views-range" className="text-sm font-medium text-slate-300">
                  Monthly Content Views:
                </label>
                <span className="text-sm font-mono font-bold text-white px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  {viewsCount.toLocaleString("en-GB")}
                </span>
              </div>
              <input
                id="views-range"
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={viewsCount}
                onChange={(e) => setViewsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                <span>5,000</span>
                <span>100,000</span>
                <span>250,000</span>
              </div>
            </div>

            {/* Slider 2: Offer Ticket Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="price-range" className="text-sm font-medium text-slate-300">
                  Backend Asset Price:
                </label>
                <span className="text-sm font-mono font-bold text-emerald-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  £{offerPrice}
                </span>
              </div>
              <input
                id="price-range"
                type="range"
                min="97"
                max="1997"
                step="50"
                value={offerPrice}
                onChange={(e) => setOfferPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                <span>£97 (Blueprint)</span>
                <span>£497 (Course)</span>
                <span>£1,997 (Cohort)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-white/10 grid sm:grid-cols-3 gap-6 text-center sm:text-left mb-8">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Estimated Monthly Buyers
              </span>
              <div className="text-2xl font-bold text-white font-mono">
                ~{monthlyBuyers} <span className="text-xs font-normal text-slate-400">buyers/mo</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Total Unlocked Revenue
              </span>
              <div className="text-2xl font-bold text-slate-300 font-mono">
                £{totalMonthlyBackend.toLocaleString("en-GB")}
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Your Take-Home Profit
              </span>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                £{Math.round(creatorTake).toLocaleString("en-GB")}
                <span className="text-xs text-slate-400 font-normal block mt-1">
                  ({Math.round((1 - operatorSplit) * 100)}% directly to your Stripe)
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40"
          >
            <span>Apply to Unlock This Revenue on Zero Retainer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
