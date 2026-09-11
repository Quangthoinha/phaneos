"use client";

import { ShieldCheck, Award, Lock, FileCheck } from "lucide-react";

const comparisonRows = [
  {
    dimension: "Upfront Investment",
    agency: "£3,000 – £10,000 / month",
    course: "$497 – $1,997 one-time fee",
    phaneos: "£0.00 (Zero). We invest upfront.",
  },
  {
    dimension: "Incentive Alignment",
    agency: "Bills hourly retainers whether you make £0 or £100k",
    course: "Platform profits at moment of sale",
    phaneos: "Pure rev-share: we only profit when you get paid",
  },
  {
    dimension: "Execution Burden",
    agency: "You manage, review, and babysit account managers",
    course: "100% of curriculum build falls on you",
    phaneos: "Backstage execution: we script, build, wire & operate",
  },
  {
    dimension: "Audience & IP Ownership",
    agency: "Often locked into proprietary agency hosting",
    course: "Platform owns audience data & customer relationship",
    phaneos: "100% Creator owned in perpetuity (channels, list, IP)",
  },
  {
    dimension: "Deployment Standard",
    agency: "60 – 90 days of onboarding alignment meetings",
    course: "Indefinite DIY procrastination",
    phaneos: "14-Day deployment standard",
  },
];

const covenants = [
  {
    code: "COVENANT_01",
    title: "100% Sovereign IP & Audience Title",
    description:
      "You retain permanent, exclusive ownership of your YouTube channel, social accounts, email list, community, and intellectual property. No shared equity, no lock-in clauses.",
  },
  {
    code: "COVENANT_02",
    title: "Zero Retainers in Perpetuity",
    description:
      "We never invoice for consulting, software integrations, or advisory hours. Our compensation is strictly a minority split of newly unlocked backend cashflow.",
  },
  {
    code: "COVENANT_03",
    title: "Covert Shadow Operating Mandate",
    description:
      "We operate invisibly. Your audience sees only your authentic voice, face, and methodology. We never plaster our agency logo over your brand or digital assets.",
  },
  {
    code: "COVENANT_04",
    title: "Audience Reputation Protection",
    description:
      "We refuse high-pressure countdown timers, fake scarcity, and low-grade offers. Every backend asset engineered must strengthen your audience's long-term trust.",
  },
];

export default function Model() {
  return (
    <section id="model" className="py-24 px-6 md:px-12 bg-[#05070a] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              <span>[BILATERAL_FRAMEWORK // THE_CHARTER]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Aligned Incentives. Zero Retainers.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Traditional agencies profit even when creators fail. We rejected that model to operate as a true backstage syndicate.
            </p>
          </div>

          <div className="confidential-stamp">
            <span>SOVEREIGN CO-OP GUARANTEE</span>
          </div>
        </div>

        {/* Comparison Matrix */}
        <div className="overflow-x-auto mb-20 pb-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-mono text-xs uppercase tracking-wider">
                <th className="py-4 pr-6 font-normal">[DIMENSION]</th>
                <th className="py-4 px-6 font-normal">Traditional Agency</th>
                <th className="py-4 px-6 font-normal">DIY Course Guru</th>
                <th className="py-4 pl-6 font-bold text-amber-400">phaneos Shadow Partner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-6 font-medium text-white font-mono text-xs">{row.dimension}</td>
                  <td className="py-4 px-6 text-slate-400">{row.agency}</td>
                  <td className="py-4 px-6 text-slate-400">{row.course}</td>
                  <td className="py-4 pl-6 text-emerald-400 font-medium">{row.phaneos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Covenants Grid */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-8">
            [THE_FOUR_SOVEREIGN_COVENANTS]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {covenants.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090c12] border border-white/5 hover:border-amber-500/30 transition-colors space-y-2.5"
              >
                <div className="text-xs font-mono text-amber-400/80">[{c.code}]</div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {c.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
