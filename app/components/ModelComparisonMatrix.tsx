"use client";

import React from "react";
import { XCircle, CheckCircle2, ShieldAlert, Zap } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const comparisonData = [
  {
    dimension: "Upfront Investment & Payroll",
    inHouse: "£85,000 – £120,000/yr per AI engineer + £15k recruiter fee",
    phaneos: "£0 upfront cost. 100% pure profit on revenue share.",
  },
  {
    dimension: "Time to First Client Pitch",
    inHouse: "3 to 6 months sourcing, hiring, and testing prompts",
    phaneos: "This week. We join your client calls with turnkey decks.",
  },
  {
    dimension: "Client Relationship Risk",
    inHouse: "High risk of experimental mistakes damaging your reputation",
    phaneos: "Zero risk. Ironclad legal non-circumvention guarantee.",
  },
  {
    dimension: "Technical Quality & Compliance",
    inHouse: "You carry liability for hallucinations and data leaks",
    phaneos: "Human-in-the-loop review + UK GDPR zero-retention architecture.",
  },
  {
    dimension: "Agency Profit Margin",
    inHouse: "Low or negative until 8+ clients cover fixed salary overhead",
    phaneos: "Instant 25% co-selling or 12% referral on every contract.",
  },
];

export default function ModelComparisonMatrix() {
  return (
    <SectionReveal id="comparison" className="relative py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="container-wide w-full">
        <StaggerReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-glass mb-4 text-[var(--color-muted)] uppercase tracking-wider text-xs">
            Commercial Comparison
          </span>
          <h2 className="heading-section font-bold tracking-tight text-[var(--color-ink)] mb-5">
            Building In-House vs Partnering with phaneosAI
          </h2>
          <p className="text-section text-[var(--color-muted)] leading-relaxed">
            Why leading digital, creative, and consulting agencies choose co-selling over taking on risky fixed technical overhead.
          </p>
        </StaggerReveal>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900/90 border-b border-white/10 p-5 md:p-6 text-sm font-semibold">
            <div className="col-span-12 md:col-span-4 text-slate-400">Decision Metric</div>
            <div className="col-span-6 md:col-span-4 text-rose-300 flex items-center gap-1.5 mt-2 md:mt-0">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Hiring In-House AI Team</span>
            </div>
            <div className="col-span-6 md:col-span-4 text-emerald-300 flex items-center gap-1.5 mt-2 md:mt-0">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Partnering with phaneosAI</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <div 
                key={row.dimension}
                className={`grid grid-cols-12 p-5 md:p-6 text-xs sm:text-sm items-center transition-colors ${
                  idx % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                } hover:bg-white/[0.05]`}
              >
                <div className="col-span-12 md:col-span-4 font-semibold text-white mb-2 md:mb-0">
                  {row.dimension}
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 text-slate-400 flex items-start gap-2 pr-4 mb-2 sm:mb-0">
                  <XCircle className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
                  <span>{row.inHouse}</span>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 text-slate-200 font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-emerald-100/90">{row.phaneos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
