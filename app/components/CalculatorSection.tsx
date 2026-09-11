"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { BorderBeam } from "./ui/BorderBeam";

export default function CalculatorSection() {
  const [viewsCount, setViewsCount] = useState<number>(35000);
  const [offerPrice, setOfferPrice] = useState<number>(297);
  const [model, setModel] = useState<"standard" | "full">("standard");

  // Heuristic conversion rate on optimized VSL funnel: 0.8% of engaged viewers
  const conversionRate = 0.008;
  const monthlyBuyers = Math.max(2, Math.round(viewsCount * conversionRate * 0.25));
  const totalMonthlyBackend = monthlyBuyers * offerPrice;
  const operatorSplit = model === "full" ? 0.5 : 0.3;
  const creatorTake = totalMonthlyBackend * (1 - operatorSplit);

  const handleCtaClick = () => {
    if (typeof window === "undefined") return;
    const form = document.getElementById("register");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>[SYNDICATE_LEDGER // REV_SHARE_SIMULATOR]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Model Your Backend Cashflow
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Plug your audience metrics into our economics engine to simulate the monthly cashflow unlocked by a high-ticket VSL and qualification funnel.
          </p>
        </div>

        {/* Syndicate Terminal Card */}
        <div className="relative rounded-3xl bg-[#090c12] border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
          <BorderBeam size={320} duration={14} colorFrom="#f59e0b" colorTo="#e11d48" />

          {/* Model Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400 block mb-1">
                [OPERATIONAL_FRAMEWORK]
              </span>
              <p className="text-sm font-medium text-white">
                {model === "standard"
                  ? "Backend Launch Mandate (70% Creator / 30% Shadow Operator)"
                  : "Full-Stack Sovereign Co-Op (50/50 Co-Operating Partner)"}
              </p>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-black border border-white/10 font-mono text-xs">
              <button
                type="button"
                onClick={() => setModel("standard")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  model === "standard"
                    ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-950/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                70/30 Mandate
              </button>
              <button
                type="button"
                onClick={() => setModel("full")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  model === "full"
                    ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-950/40"
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
                <label htmlFor="views-range" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  [MONTHLY_VIEWS]
                </label>
                <span className="text-sm font-mono font-bold text-white px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  {viewsCount.toLocaleString("en-GB")} views
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                <span>5k</span>
                <span>100k</span>
                <span>250k</span>
              </div>
            </div>

            {/* Slider 2: Offer Ticket Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="price-range" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  [ASSET_TICKET_SIZE]
                </label>
                <span className="text-sm font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                <span>£97 (Blueprint)</span>
                <span>£497 (Course)</span>
                <span>£1,997 (Cohort)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black border border-white/10 grid sm:grid-cols-3 gap-6 text-center sm:text-left mb-8 font-mono">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">
                [EST_MONTHLY_BUYERS]
              </span>
              <div className="text-2xl font-bold text-white">
                ~{monthlyBuyers} <span className="text-xs font-normal text-slate-500">acquisitions</span>
              </div>
            </div>

            <div>
              <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">
                [TOTAL_GROSS_REVENUE]
              </span>
              <div className="text-2xl font-bold text-slate-300">
                £{totalMonthlyBackend.toLocaleString("en-GB")}
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6">
              <span className="text-xs text-amber-400 uppercase tracking-widest block mb-1">
                [CREATOR_TAKE_HOME]
              </span>
              <div className="text-3xl font-extrabold text-amber-400">
                £{Math.round(creatorTake).toLocaleString("en-GB")}
                <span className="text-xs text-slate-400 font-normal block mt-1">
                  ({Math.round((1 - operatorSplit) * 100)}% via Stripe Connect)
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40"
          >
            <span>[INITIATE CONFIDENTIAL PARTNER AUDIT]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
