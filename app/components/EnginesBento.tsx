"use client";

import React, { useState } from "react";
import { Play, Check, ShieldCheck, CreditCard, Cpu, Layers, ArrowRight } from "lucide-react";
import { BentoGrid } from "./ui/BentoGrid";

const vslBeats = [
  { time: "0:00 - 1:15", title: "Pattern-Interrupt Hook", desc: "Names the exact symptom your audience struggles with daily." },
  { time: "1:15 - 3:30", title: "The Hidden Mechanism", desc: "Reveals why traditional solutions fail and frames your philosophy." },
  { time: "3:30 - 5:15", title: "The Proprietary Shift", desc: "Presents your framework as the definitive, repeatable solution." },
  { time: "5:15 - 7:00", title: "Intake Qualification Call", desc: "Directs high-intent viewers to the sub-60s qualification filter." },
];

export default function EnginesBento() {
  const [activeBeat, setActiveBeat] = useState(0);

  return (
    <section id="engines" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>02 / System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            The Three Backstage Engines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything we engineer is custom-built around your intellectual property. We never deploy cookie-cutter templates or generic courses.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <BentoGrid className="md:grid-cols-3 gap-6">
          {/* Card 1: VSL Storyboard (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <Play className="w-4 h-4 fill-rose-500/20" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">The 7-Minute Qualification VSL</h3>
                    <p className="text-xs text-slate-400 font-mono">Converts raw attention into high-ticket buyers</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  91.4% Retention Target
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Most viewers bounce from raw bio links. We script, produce, and optimize a 7-minute video asset that educates, disarms skepticism, and filters tyre-kickers before they ever reach a checkout or calendar.
              </p>

              {/* Interactive VSL Timeline Selector */}
              <div className="grid sm:grid-cols-4 gap-2 mb-4">
                {vslBeats.map((beat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveBeat(idx)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      activeBeat === idx
                        ? "bg-slate-800 border-rose-500/50 shadow-md shadow-rose-950/30"
                        : "bg-slate-950/60 border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="text-xs font-mono text-rose-400 mb-1">{beat.time}</div>
                    <div className="text-xs font-semibold text-white leading-snug">{beat.title}</div>
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-300">
                <span className="font-semibold text-white">Active Chapter Focus: </span>
                {vslBeats[activeBeat].desc}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Includes full scriptwriting, slide design & audio tuning</span>
              <span className="text-emerald-400 font-mono font-medium">14-Day Delivery</span>
            </div>
          </div>

          {/* Card 2: Digital Product Packaging (1 column) */}
          <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">High-Margin Digital Products</h3>
              <p className="text-xs text-slate-400 font-mono mb-4">Turnkey £500 – £3,000 Programs</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We extract your proprietary expertise into interactive Notion systems, templates, or cohorts that command premium prices without 1-on-1 time drain.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Curriculum architecture & slides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Notion OS student workspace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Automated checkout & onboarding</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              Zero platform lock-in. 100% your IP.
            </div>
          </div>

          {/* Card 3: Invisible Operations (1 column) */}
          <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Stripe Connect Direct Splits</h3>
              <p className="text-xs text-slate-400 font-mono mb-4">Instant point-of-sale payouts</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                No invoices, no waiting 30 days. Payments route directly through your Stripe Connect account with complete ledger transparency.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Creator Share</span>
                  <span className="text-emerald-400 font-bold font-mono">70% Direct</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Operator Split</span>
                  <span className="text-slate-300 font-mono">30% Auto-routed</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              100% financial transparency.
            </div>
          </div>

          {/* Card 4: Pre-Qualification Intake Filter (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sub-60s Pre-Qualification Intake Gate</h3>
                  <p className="text-xs text-slate-400 font-mono">Zero tyre-kickers. 95%+ qualified calls.</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Instead of a naked Calendly link that invites low-intent viewers, we install a dynamic 3-question filter. It vets budget, urgency, and fit before anyone can book a call or purchase a backend tier.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="text-rose-400 font-semibold mb-1">01 / Intent Filter</div>
                  <p className="text-slate-400">Filters out casual browsers seeking free consulting.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="text-blue-400 font-semibold mb-1">02 / Budget Validation</div>
                  <p className="text-slate-400">Ensures prospect can afford your £1k–£3k programs.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="text-emerald-400 font-semibold mb-1">03 / Auto-Disqualification</div>
                  <p className="text-slate-400">Re-routes unqualified leads to your low-ticket blueprint.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Keeps your calendar protected and pristine</span>
              <span className="text-rose-400 font-mono">Automated Zapier / n8n pipelines</span>
            </div>
          </div>
        </BentoGrid>
      </div>
    </section>
  );
}
