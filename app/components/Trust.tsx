"use client";

import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";
import { Check } from "lucide-react";

const charterClauses = [
  {
    title: "100% Creator IP & Audience Ownership",
    summary: "Strict bilateral covenant. Your audience is permanently yours.",
    detail:
      "You retain exclusive, perpetual ownership of your YouTube channel, Instagram handle, email lists, Stripe account, and brand IP. We operate as a backstage technical and growth operator with strict non-circumvention terms.",
  },
  {
    title: "Zero Retainer Fees — 100% Performance Aligned",
    summary: "No monthly retainers, no setup charges, no upfront risk.",
    detail:
      "We invest our own engineering, VSL scripting, and automation infrastructure into your brand. We only earn a 20%–50% share of newly generated revenue that we directly unlock for your business.",
  },
  {
    title: "Discreet Shadow Operating Mandate",
    summary: "Invisible backstage operations. Zero middleman branding.",
    detail:
      "Your audience sees only you. In the shadows, we manage the funnels, intake qualification, CRM routing, and digital asset delivery without injecting external agency branding into your community.",
  },
  {
    title: "High-Integrity Audience Protection",
    summary: "No high-pressure tactics or cheap cash grabs.",
    detail:
      "We never push sleazy, scammy tactics onto your audience. Every funnel, 7-minute VSL, and digital product is engineered to elevate your authority and deliver verifiable, life-changing real value to your viewers.",
  },
];

export default function Trust() {
  return (
    <SectionReveal
      id="trust"
      className="relative bg-[var(--color-bg)] py-20 md:py-28 border-t border-white/10"
    >
      <div className="container-wide w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <StaggerReveal className="xl:col-span-5">
            <h2 className="heading-section font-bold leading-[1.12] tracking-tight text-white mb-5">
              The Shadow Operator Bilateral Charter
            </h2>
            <p className="text-section leading-relaxed text-slate-400 mb-8">
              Creators spend years cultivating genuine trust with their audience. Our operating model is engineered to safeguard that trust with transparent, legally backed covenants.
            </p>
            <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-xs text-slate-300">
              <strong className="block mb-1.5 font-bold text-white text-sm">The 2026 Operator Covenant:</strong>
              <p className="leading-relaxed text-slate-400">
                You make great content. We build and run the backend business. We only profit when your monthly revenue increases.
              </p>
            </div>
          </StaggerReveal>

          <div className="xl:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {charterClauses.map((clause, index) => (
              <StaggerReveal key={clause.title} staggerIndex={index}>
                <div className="py-6 sm:py-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 p-1 shrink-0">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <h3 className="text-base font-bold text-white">
                          {clause.title}
                        </h3>
                        <span className="text-xs text-rose-400/90 font-medium">
                          {clause.summary}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[65ch]">
                        {clause.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
