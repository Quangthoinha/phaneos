"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const steps = [
  {
    title: "1. 7-Minute Content & Conversion Audit",
    description:
      "We analyze your 10 most recent posts, inspect your audience drop-off points (naked Calendly links, underpriced digital offers), and benchmark your monetization potential against the Top 1% achievers in your niche.",
  },
  {
    title: "2. We Build the Entire Backend (Days 1–10)",
    description:
      "Zero technical work required from you. In the shadows, we script your 7-minute VSL, build high-converting landing pages, configure 3-question intake qualification filters, and package turnkey AI/Notion digital products.",
  },
  {
    title: "3. Launch & Split the Profits (Days 11–14+)",
    description:
      "You post a 60-second organic shoutout to your community. High-intent buyers enter the automated funnel. Revenue is automatically split at the point of sale via Stripe Connect (50/50 or 70/30). £0 upfront fee, 100% aligned performance.",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionReveal
      id="how-it-works"
      className="relative bg-[var(--color-surface)] flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16">
          <StaggerReveal className="xl:col-span-5">
            <span className="badge-glass mb-4 text-[var(--color-primary)] font-semibold text-xs uppercase tracking-wider">
              The 14-Day Deployment Roadmap
            </span>
            <h2 className="heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              From Content Audit to Backend Cashflow in 3 Steps
            </h2>
            <p className="text-section leading-[1.65] text-[var(--color-muted)]">
              You stay in the spotlight creating what your audience loves. We operate discreetly in the shadows engineering the conversion architecture.
            </p>
          </StaggerReveal>

          <div className="xl:col-span-7">
            <div className="space-y-0 divide-y divide-[var(--color-muted)]/20">
              {steps.map((step, index) => {
                const isOpen = openIndex === index;
                const number = String(index + 1).padStart(2, "0");
                return (
                  <StaggerReveal key={step.title} staggerIndex={index}>
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="w-full text-left py-6 md:py-8 group"
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        <span
                          className={`text-sm font-semibold tabular-nums tracking-tight shrink-0 w-8 ${
                            isOpen ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"
                          }`}
                          aria-hidden="true"
                        >
                          {number}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4 mb-1">
                            <h3 className="text-lg md:text-xl font-semibold text-[var(--color-ink)]">
                              {step.title}
                            </h3>
                            <span className="shrink-0 text-[var(--color-muted)]" aria-hidden="true">
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                          </div>
                          <div
                            className={`grid transition-all ${
                              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                            style={{
                              transitionDuration: "0.25s",
                              transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                            }}
                          >
                            <div className="overflow-hidden">
                              <p className="text-base leading-[1.65] text-[var(--color-muted)] max-w-[55ch] pt-1">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </StaggerReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
