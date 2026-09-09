"use client";

import { ArrowRight, Check, Sparkles, Percent, EyeOff } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const tiers = [
  {
    model: "Backend Monetization Launch",
    rate: "70 / 30",
    period: "Creator takes 70% • £0 Upfront",
    summary: "Turn your audience into an automated digital product revenue engine.",
    description:
      "Ideal for creators with 1k–10k views who have never monetized beyond AdSense. We package your expertise into a 3DS digital product (Notion OS, templates, private vault) with automated checkout and email delivery.",
    features: [
      "Turnkey Digital Product & SOP Vault creation",
      "Stripe / Whop payment routing with auto-split",
      "Conversion-optimized landing page with social proof",
      "5-Day automated email nurture sequence",
      "14-Day deployment from kickoff to first sale",
    ],
    cta: "Apply for 70/30 Launch",
    modelValue: "rev-share-30",
    popular: false,
  },
  {
    model: "Full-Stack Shadow Operating",
    rate: "50 / 50",
    period: "Equal Co-Op Split • £0 Upfront",
    summary: "You produce the content. We build and run the entire backend business.",
    description:
      "Our flagship partnership for ambitious creators. We architect your complete high-ticket monetization engine: 7-minute VSL, 3-question filter funnel, sub-60s CRM lead routing, client onboarding, and community management.",
    features: [
      "High-converting 7-Minute VSL script & production",
      "Pre-qualification funnel (kills naked Calendly links)",
      "Sub-60s SMS/Email lead routing & CRM automation",
      "We handle customer onboarding & fulfillment support",
      "Weekly revenue reporting & continuous A/B testing",
    ],
    cta: "Apply for 50/50 Co-Op",
    modelValue: "full-shadow-operator",
    popular: true,
  },
];

function scrollToRegister(model: string) {
  if (typeof window === "undefined") return;

  const newHash = `#register?model=${encodeURIComponent(model)}`;
  history.pushState(null, "", newHash);
  window.dispatchEvent(new Event("hashchange"));

  const form = document.getElementById("register");
  if (!form) return;

  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CommissionTiers() {
  return (
    <SectionReveal id="benefits" className="relative bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container-wide w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <StaggerReveal className="xl:col-span-4">
            <span className="badge-glass mb-4 text-rose-400 font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 w-fit">
              <EyeOff className="w-3.5 h-3.5" />
              <span>Partnership Models</span>
            </span>
            <h2 className="heading-section font-bold leading-[1.12] tracking-tight text-white mb-5">
              Pure Win-Win Revenue Share. Zero Upfront Retainers.
            </h2>
            <p className="text-section leading-relaxed text-slate-400 mb-6">
              Unlike traditional agencies that charge £5k/month retainers before delivering a single pound of profit, a Shadow Operator only wins when you win.
            </p>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-rose-400 shrink-0" />
                <span>You keep 100% of your current AdSense & brand sponsorships</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>We only split newly unlocked backend digital revenue</span>
              </div>
            </div>
          </StaggerReveal>

          <div className="xl:col-span-8 grid md:grid-cols-2 gap-6">
            {tiers.map((tier, index) => (
              <StaggerReveal key={tier.model} staggerIndex={index}>
                <article
                  className={`glass-card rounded-3xl p-7 md:p-8 flex flex-col h-full relative transition-all duration-300 ${
                    tier.popular
                      ? "border-rose-500/30 bg-gradient-to-b from-rose-950/20 via-slate-900/60 to-slate-900/90 shadow-rose-950/30 shadow-2xl"
                      : "border-white/10"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-rose-900/50">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  )}

                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                      {tier.model}
                    </span>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        {tier.rate}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {tier.period}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300 mb-6">
                      {tier.description}
                    </p>

                    <div className="pt-5 border-t border-white/10">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                        What We Deliver In The Shadows:
                      </span>
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <span className="mt-0.5 inline-flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 p-1 shrink-0">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToRegister(tier.modelValue)}
                    className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all cursor-pointer ${
                      tier.popular
                        ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg shadow-rose-900/30"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight size={16} />
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
