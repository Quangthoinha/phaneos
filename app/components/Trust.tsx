"use client";

import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";
import { ShieldCheck, Lock, UserCheck, EyeOff } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "100% Brand & Audience Ownership",
    description:
      "You own your YouTube channel, Instagram page, email subscribers, and digital intellectual property forever. We are purely your backstage growth and monetization partner.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Financial Risk — £0 Upfront",
    description:
      "No retainer fees, no setup costs, no hidden software charges. We invest our own time and engineering into building your backend. We only earn a percentage of newly generated revenue.",
  },
  {
    icon: UserCheck,
    title: "High-Integrity Audience Protection",
    description:
      "We never push sleazy, scammy tactics onto your audience. Every funnel, VSL, and digital product is crafted to elevate your authority and deliver life-changing real value to your viewers.",
  },
  {
    icon: EyeOff,
    title: "Discreet Shadow Operation",
    description:
      "We operate behind the scenes. Your audience doesn't see a middleman; they see their favorite creator launching a world-class, professional digital ecosystem.",
  },
];

export default function Trust() {
  return (
    <SectionReveal
      id="trust"
      className="relative bg-[var(--color-bg)] py-20 md:py-28"
    >
      <div className="container-wide w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <StaggerReveal className="xl:col-span-4">
            <span className="badge-glass mb-4 text-emerald-400 font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 w-fit">
              <EyeOff className="w-3.5 h-3.5" />
              <span>Creator First</span>
            </span>
            <h2 className="heading-section font-bold leading-[1.12] tracking-tight text-white mb-5">
              Protecting Your Community and Brand Above All Else
            </h2>
            <p className="text-section leading-relaxed text-slate-400 mb-6">
              Creators spend years building genuine trust with their audience. Our entire business model is built to protect that trust while unlocking the revenue you rightfully deserve.
            </p>
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <strong className="block mb-1 font-bold text-emerald-200">The Shadow Operator Pact:</strong>
              We build the systems. You keep the audience. We win together on real performance.
            </div>
          </StaggerReveal>

          <div className="xl:col-span-8 grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <StaggerReveal key={point.title} staggerIndex={index}>
                  <div className="glass-card rounded-3xl p-6 sm:p-7 h-full border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-rose-400 mb-5">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2.5">
                        {point.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </StaggerReveal>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
