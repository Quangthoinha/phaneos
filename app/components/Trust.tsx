"use client";

import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";
import { Shield, Handshake, FileText } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "You keep the relationship",
    description:
      "We never contact your client directly without permission. You remain the owner of the relationship, always.",
  },
  {
    icon: Handshake,
    title: "Co-sell on your terms",
    description:
      "You decide how involved you want to be. Just pass along an introduction, or join the pitch and close the deal together.",
  },
  {
    icon: FileText,
    title: "Clear contract, clear commission",
    description:
      "12% referral and 25% co-sell rates are written into the partner agreement. No hidden fees, no confusing terms.",
  },
];

export default function Trust() {
  return (
    <SectionReveal
      id="trust"
      className="relative bg-[var(--color-accent)] text-white flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-20">
          <StaggerReveal className="xl:col-span-5">
            <h2 className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-balance mb-5">
              You keep the relationship.
              <br />
              We handle the AI.
            </h2>
            <p className="section-heading text-section leading-[1.65] text-white max-w-prose">
              This is what agencies worry about most when bringing in a third-party partner. phaneosAI is designed to remove that risk from day one.
            </p>
          </StaggerReveal>

          <div className="xl:col-span-7 flex flex-col gap-10 md:gap-12">
            {trustPoints.map((point, index) => (
              <StaggerReveal key={point.title} staggerIndex={index}>
                <div className="flex gap-5 md:gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[var(--color-primary)]">
                      <point.icon size={20} strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-base leading-[1.65] text-white max-w-prose">{point.description}</p>
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
