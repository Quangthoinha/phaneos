"use client";

import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";
import { ShieldCheck, Lock, UserCheck, MessageSquareCode } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "Ironclad Non-Circumvention Protection",
    description:
      "We sign a bilateral legal partner agreement before entering any client room. We never pitch, contact, or service your clients independently under any circumstances. Your clients remain 100% yours.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-PII & UK GDPR Article 28 Compliance",
    description:
      "We enforce zero-data-retention provider tiers across Anthropic and OpenAI. Client proprietary data is never used to train external models, and all data processing complies with UK GDPR & DPA 2018 standards.",
  },
  {
    icon: UserCheck,
    title: "Mandatory Human-in-the-Loop QA Gate",
    description:
      "No autonomous agent output or code deliverable is sent to your client without senior technical operator review. You never have to worry about embarrassing AI hallucinations or reputational damage.",
  },
  {
    icon: MessageSquareCode,
    title: "Dedicated Partner Slack Connect Channel",
    description:
      "Direct, real-time communication channel between our lead operators and your agency founders. Sub-4-hour response SLAs on proposal drafting, client questions, and technical scoping.",
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
            <span className="badge-glass mb-4 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
              Legal & Trust Vault
            </span>
            <h2 className="heading-section font-bold leading-[1.12] tracking-tight text-white mb-5">
              Protecting Your Agency's Reputation Above All Else
            </h2>
            <p className="text-section leading-relaxed text-slate-400 mb-6">
              Agency founders are rightly protective of the client relationships they spent years nurturing. phaneosAI is architected from the ground up to eliminate commercial and operational risk.
            </p>
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <strong className="block mb-1 font-bold text-emerald-200">The Partner Promise:</strong>
              If you introduce a lead or co-sell an account, you maintain sole client ownership for the lifetime of that relationship.
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
