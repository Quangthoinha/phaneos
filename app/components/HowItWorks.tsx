"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const steps = [
  {
    title: "Register as a partner",
    description:
      "Fill out the short form. We send partner docs, email templates, and proposed meeting times for the first onboarding call.",
  },
  {
    title: "Introduce your client",
    description:
      "When you spot an AI opportunity, introduce the client by email or internal form. You choose referral-only or co-sell.",
  },
  {
    title: "Earn commission",
    description:
      "Commission is paid when the client contract is signed. Co-selling earns 25%; referrals earn 12%. No hidden fees, no complexity.",
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
            <h2 className="heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              Simple enough to start without training
            </h2>
            <p className="text-section leading-[1.65] text-[var(--color-muted)]">
              From sign-up to commission in three steps. No heavy onboarding, no complicated reporting.
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
