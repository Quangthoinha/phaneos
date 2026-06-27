"use client";

import { ArrowRight, Check } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const tiers = [
  {
    model: "Referral",
    summary: "You introduce. We sell and deliver. You earn 12%.",
    description:
      "Best when you want to stay hands-off. Pass us a warm lead and we handle the rest — proposal, delivery, support, and billing.",
    features: [
      "Passive commission on the first contract",
      "No sales calls or project work required",
      "Client relationship stays with you",
    ],
    cta: "Choose referral",
    modelValue: "referral",
  },
  {
    model: "Co-selling",
    summary: "We sell together. You keep the client. You earn 25%.",
    description:
      "Best when you want to deepen the client relationship. We join meetings, build the proposal, and co-deliver the AI work.",
    features: [
      "Shared meetings and joint proposals",
      "Higher commission from active selling",
      "You remain the visible partner throughout",
    ],
    cta: "Choose co-selling",
    modelValue: "co-selling",
  },
];

function scrollToRegister(model: string) {
  if (typeof window === "undefined") return;

  const newHash = `#register?model=${encodeURIComponent(model)}`;
  history.pushState(null, "", newHash);
  window.dispatchEvent(new Event("hashchange"));

  const form = document.getElementById("register");
  if (!form) return;

  const html = document.documentElement;
  const originalSnap = html.style.scrollSnapType;
  html.style.scrollSnapType = "none";

  form.scrollIntoView({ behavior: "smooth", block: "start" });

  setTimeout(() => {
    html.style.scrollSnapType = originalSnap || "";
  }, 650);
}

export default function CommissionTiers() {
  return (
    <SectionReveal id="benefits" className="relative bg-[var(--color-bg)] flex items-center">
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <StaggerReveal className="xl:col-span-5">
            <h2 className="heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              Two ways to earn from the clients you already have
            </h2>
            <p className="text-section leading-[1.65] text-[var(--color-muted)]">
              No new AI hires. No technology investment. Just the relationships you have already built.
            </p>
          </StaggerReveal>

          <div className="xl:col-span-7 grid xl:grid-cols-2 gap-4">
            {tiers.map((tier, index) => (
              <StaggerReveal key={tier.model} staggerIndex={index}>
                <article className="group relative bg-[var(--color-surface)] rounded-xl p-6 md:p-8 flex flex-col h-full transition-colors hover:bg-[var(--color-primary-subtle)]">
                  <div className="flex-1">
                    <span className="badge-primary mb-4">
                      {tier.summary}
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-4 mb-4">
                      {tier.model}
                    </h3>
                    <p className="text-base leading-[1.65] text-[var(--color-muted)] mb-5">
                      {tier.description}
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[var(--color-ink)]">
                          <span className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] p-0.5 text-white shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="text-base leading-[1.5]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToRegister(tier.modelValue)}
                    aria-label={`Select ${tier.model} partnership model`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-muted)] px-6 py-3.5 text-base font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] group"
                  >
                    {tier.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </article>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
