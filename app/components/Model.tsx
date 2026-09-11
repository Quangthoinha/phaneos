"use client";

import { Check, X, Shield, Lock, Award, Zap } from "lucide-react";

const comparisonRows = [
  {
    feature: "Upfront Cost",
    agency: "£3,000 – £8,000 / month",
    diy: "$497 – $1,997 one-off course",
    phaneos: "£0 (Zero). We invest upfront.",
  },
  {
    feature: "Incentive Alignment",
    agency: "They get paid whether you make £0 or £50k",
    diy: "The guru profits when you buy the course",
    phaneos: "Pure rev-share: we only profit when you make sales",
  },
  {
    feature: "Who Does The Heavy Lifting",
    agency: "You manage them and approve countless drafts",
    diy: "100% on your shoulders to build and fix tech",
    phaneos: "We build, write, wire, and test everything",
  },
  {
    feature: "IP & Audience Ownership",
    agency: "Often tied to proprietary agency funnels",
    diy: "Course platform owns your student data",
    phaneos: "100% Creator owned forever (channel, list, IP)",
  },
  {
    feature: "Launch Speed",
    agency: "60 – 90 days of onboarding meetings",
    diy: "Indefinite procrastination",
    phaneos: "14-Day deployment standard",
  },
];

const guarantees = [
  {
    title: "100% Creator Ownership",
    desc: "You retain exclusive ownership of your YouTube channel, social accounts, email list, community, and intellectual property. No shared equity, no lock-in.",
  },
  {
    title: "Zero Retainers, Ever",
    desc: "We never invoice for hours, software setups, or consulting. Our compensation is strictly a 30% cut of newly unlocked revenue generated through the systems we build.",
  },
  {
    title: "Hands-Off Execution",
    desc: "You record the video and provide your subject-matter expertise. We handle copywriting, landing page design, checkout integration, and automated fulfillment.",
  },
  {
    title: "Protected Audience Trust",
    desc: "We refuse high-pressure sales tactics, fake countdown timers, or scammy offers. Everything we build is designed to strengthen your long-term reputation with your community.",
  },
];

export default function Model() {
  return (
    <section id="model" className="py-24 px-6 md:px-12 bg-[#090a0f] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3">
            Pure Alignment
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Why Revenue Share is Better Than an Agency
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Agencies charge you thousands every month regardless of whether you make a single penny. We take on the financial risk ourselves: we only make money when you do.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-20">
          <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-mono text-xs uppercase tracking-wider bg-white/[0.02]">
                <th className="py-4 px-6 font-semibold">Comparison</th>
                <th className="py-4 px-6 font-normal">Traditional Agency</th>
                <th className="py-4 px-6 font-normal">DIY Course / Alone</th>
                <th className="py-4 px-6 font-bold text-rose-400 bg-rose-500/5">phaneos Partnership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                  <td className="py-4 px-6 text-slate-400">{row.agency}</td>
                  <td className="py-4 px-6 text-slate-400">{row.diy}</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold bg-rose-500/5">{row.phaneos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Guarantees */}
        <div className="pt-12 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center sm:text-left">
            Our 4 Core Commitments to Every Creator
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {guarantees.map((g, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0f1219] border border-white/5 space-y-2">
                <h4 className="text-base font-bold text-white tracking-tight">
                  {g.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
