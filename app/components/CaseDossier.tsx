"use client";

import React, { useState } from "react";
import { FileText, Eye, ShieldCheck, TrendingUp, Lock } from "lucide-react";

export default function CaseDossier() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="dossier" className="py-24 px-6 md:px-12 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
      {/* Subtle amber ambient illumination */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Dossier Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
              <Lock className="w-3 h-3" />
              <span>DECLASSIFIED_DOSSIER // CASE #842</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Reality of a Shadow Deployment
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setRevealed(!revealed)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-white/10 hover:border-amber-500/40 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-all cursor-pointer w-fit"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{revealed ? "Re-Redact Details" : "Hover or Click to Reveal Redacted Data"}</span>
          </button>
        </div>

        {/* Dossier File Card */}
        <div className="rounded-2xl bg-[#090c12] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden font-sans">
          {/* Top Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-white/5 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block">CREATOR NICHE</span>
              <span className="text-slate-200">
                {revealed ? "B2B Notion Architecture" : <span className="redacted-bar">B2B Systems Eng</span>}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">AUDIENCE SCALE</span>
              <span className="text-slate-200">
                {revealed ? "4,800 avg views / video" : <span className="redacted-bar">4.8k views/vid</span>}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">PARTNER MODEL</span>
              <span className="text-amber-400 font-semibold">70/30 Revenue Share</span>
            </div>
            <div>
              <span className="text-slate-500 block">UPFRONT RETAINER</span>
              <span className="text-emerald-400 font-bold">£0.00 (Zero)</span>
            </div>
          </div>

          {/* Before vs After Audit Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left: The Before State */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#05070a] border border-rose-500/20 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-rose-400 uppercase tracking-wider">
                <span>[STATE_01: PRE-INTERVENTION]</span>
                <span className="text-rose-500 font-bold">&times; LEAKING REVENUE</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>AdSense Revenue:</strong> £340 – £480/month (insufficient for full-time focus).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>Bio Link:</strong> Raw Linktree with 8 competing links; 74% bounce rate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>Booking Quality:</strong> Naked Calendly flooded with tyre-kickers; 42% no-show rate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>Backend Asset:</strong> $0. No digital product or high-ticket offer packaged.</span>
                </li>
              </ul>
            </div>

            {/* Right: The After State */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#05070a] border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 uppercase tracking-wider">
                <span>[STATE_02: SHADOW OPERATING]</span>
                <span className="text-emerald-400 font-bold">&check; PROTOCOL ACTIVE</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span><strong>7-Min VSL Asset:</strong> Engineered custom video explaining creator&apos;s unique framework.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span><strong>Intake Qualification Gate:</strong> Sub-60s 3-question filter; show-up rate surged to 94%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span><strong>Packaged Digital Asset:</strong> £1,497 Notion Executive OS Sprint with turnkey delivery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span><strong>Stripe Point-of-Sale Splits:</strong> Automated 70% direct routing to creator&apos;s account.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Financial Outcome Banner */}
          <div className="p-6 rounded-xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                60-Day Verified Backend Run Rate
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-3">
                <span>£19,460 / mo</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                  +3,900% vs AdSense
                </span>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-white/10 sm:pl-6">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Creator Net Take-Home (70%)
              </span>
              <div className="text-2xl font-bold text-amber-400 font-mono">
                £13,622 / mo
              </div>
              <span className="text-xs text-slate-400 font-mono block">Zero retainer billed. Zero IP lost.</span>
            </div>
          </div>

          {/* Confidential Stamp Watermark */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-slate-500">
            <span>FILE: PHANEOS_REF_UK_0842 // INTERNAL RECORD</span>
            <div className="confidential-stamp">
              <span>CONFIDENTIAL // SOVEREIGN GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
