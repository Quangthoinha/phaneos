"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator, Check } from "lucide-react";

export default function CalculatorSection() {
  const [viewsCount, setViewsCount] = useState<number>(30000);
  const [offerPrice, setOfferPrice] = useState<number>(297);

  // Realistic conversion: ~0.8% of engaged viewers reach offer, 25% purchase = 0.2% net conversion on views
  const estimatedBuyers = Math.max(2, Math.round(viewsCount * 0.002));
  const totalRevenue = estimatedBuyers * offerPrice;
  const creatorEarnings = totalRevenue * 0.7; // 70% to creator
  const phaneosShare = totalRevenue * 0.3; // 30% to operator

  const handleApplyClick = () => {
    if (typeof window === "undefined") return;
    const form = document.getElementById("register");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 bg-[#090a0f] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3">
            Revenue Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How Much Could Your Channel Earn?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            YouTube AdSense pays roughly £3–£5 per 1,000 views. When you introduce a high-converting digital product or service, even a tiny 0.2% buyer conversion turns your views into serious recurring cashflow.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="rounded-3xl bg-[#0f1219] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Sliders Grid */}
          <div className="grid md:grid-cols-2 gap-10 pb-10 border-b border-white/10">
            {/* Slider 1: Views */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="calc-views" className="text-sm font-semibold text-slate-200">
                  Average Monthly Video Views:
                </label>
                <span className="text-base font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono">
                  {viewsCount.toLocaleString("en-GB")}
                </span>
              </div>
              <input
                id="calc-views"
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={viewsCount}
                onChange={(e) => setViewsCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>5k</span>
                <span>75k</span>
                <span>150k</span>
              </div>
            </div>

            {/* Slider 2: Product Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="calc-price" className="text-sm font-semibold text-slate-200">
                  Target Product / Offer Price:
                </label>
                <span className="text-base font-bold text-rose-400 px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono">
                  £{offerPrice}
                </span>
              </div>
              <input
                id="calc-price"
                type="range"
                min="97"
                max="997"
                step="50"
                value={offerPrice}
                onChange={(e) => setOfferPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>£97 (Template / Guide)</span>
                <span>£297 (System)</span>
                <span>£997 (Cohort)</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="py-8 grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Estimated Monthly Sales
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                ~{estimatedBuyers} <span className="text-xs font-normal text-slate-400">customers</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Total Monthly Revenue
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-slate-300 font-mono">
                £{totalRevenue.toLocaleString("en-GB")}
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                Your Take-Home (70%)
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                £{Math.round(creatorEarnings).toLocaleString("en-GB")}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">
                Paid directly into your Stripe account
              </span>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <strong className="text-white">Zero upfront cost:</strong> We build the funnel, product framework, and tech for free. We only earn our 30% cut when you make sales.
            </div>

            <button
              type="button"
              onClick={handleApplyClick}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs whitespace-nowrap transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <span>See If Your Channel Qualifies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
