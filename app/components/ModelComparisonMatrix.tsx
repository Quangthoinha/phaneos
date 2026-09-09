"use client";

import React from "react";
import { XCircle, CheckCircle2, AlertTriangle, Zap, EyeOff } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const comparisonData = [
  {
    dimension: "Creator Time & Energy Focus",
    alone: "Burnout: 60% of time lost wrestling with funnels, webhooks, and tech stack bugs",
    shadow: "100% Creator Focus: You make content & record; we handle 100% of the backend",
  },
  {
    dimension: "Funnel Conversion Architecture",
    alone: "Naked Calendly link in bio + text-heavy page (40% audience drop-off)",
    shadow: "7-minute VSL + 3-question qualification filter + sub-60s automated nurture",
  },
  {
    dimension: "Monetization Streams",
    alone: "Unpredictable AdSense RPM ($3–$10) & waiting for random brand deals",
    shadow: "Turnkey digital products & high-ticket mastermind generating £10k–£50k/mo",
  },
  {
    dimension: "Upfront Financial Risk",
    alone: "Paying £5,000–£10,000 to freelance developers with zero revenue guarantee",
    shadow: "£0 Upfront Setup Fee. We only get paid when you generate new revenue",
  },
  {
    dimension: "Launch Velocity",
    alone: "Months of procrastination, unfinished Notion pages, and stalled launches",
    shadow: "Live within 14 days using proven Top Achiever benchmark architectures",
  },
];

export default function ModelComparisonMatrix() {
  return (
    <SectionReveal id="comparison" className="relative py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="container-wide w-full">
        <StaggerReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-glass mb-4 text-rose-400 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 w-fit mx-auto">
            <EyeOff className="w-3.5 h-3.5" />
            <span>The Shadow Operating Difference</span>
          </span>
          <h2 className="heading-section font-bold tracking-tight text-[var(--color-ink)] mb-5">
            Trying to Do Everything Alone vs Partnering with a Shadow Operator
          </h2>
          <p className="text-section text-[var(--color-muted)] leading-relaxed">
            Content creators shouldn't be full-time software engineers, copywriters, and CRM admins. Here is why the top 1% of creators partner with shadow operators.
          </p>
        </StaggerReveal>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900/90 border-b border-white/10 p-5 md:p-6 text-sm font-semibold">
            <div className="col-span-12 md:col-span-4 text-slate-400">Operating Reality</div>
            <div className="col-span-6 md:col-span-4 text-rose-300 flex items-center gap-1.5 mt-2 md:mt-0">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Solo Creator (Doing Everything)</span>
            </div>
            <div className="col-span-6 md:col-span-4 text-emerald-300 flex items-center gap-1.5 mt-2 md:mt-0">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>With a Shadow Operator</span>
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
                  <span>{row.alone}</span>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 text-slate-200 font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-emerald-100/90">{row.shadow}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
