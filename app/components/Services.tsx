"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const services = [
  {
    title: "AI Strategy Consulting",
    description:
      "Assess current operations, identify the highest-ROI AI use cases, and build a phased roadmap that fits the client budget.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive work with AI — document processing, email triage, CRM updates, reporting, and approval flows.",
  },
  {
    title: "Custom AI Agents",
    description:
      "Build tailored agents for sales, support, operations, or R&D. Connected to internal data and the existing tool stack.",
  },
  {
    title: "LLM Integration",
    description:
      "Integrate large language models — OpenAI, Anthropic, or open-source — into products or enterprise systems safely.",
  },
  {
    title: "AI Training & Adoption",
    description:
      "Train client teams to use AI effectively, write reliable prompts, and build QA workflows that reduce error and risk.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionReveal
      id="services"
      className="relative bg-[var(--color-bg)] flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16">
          <StaggerReveal className="xl:col-span-5">
            <h2 className="heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              AI integration, delivered under your brand
            </h2>
            <p className="text-section leading-[1.65] text-[var(--color-muted)] max-w-[55ch]">
              AI integration is not just installing tools. It is changing how a business works — and we handle the hardest parts while the client relationship stays with you.
            </p>
          </StaggerReveal>

          <div className="xl:col-span-7">
            <div className="divide-y divide-[var(--color-muted)]/20 border-t border-b border-[var(--color-muted)]/20">
              {services.map((service, index) => {
                const isOpen = openIndex === index;
                return (
                  <StaggerReveal key={service.title} staggerIndex={index}>
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="w-full text-left py-5 md:py-6 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg md:text-xl font-semibold text-[var(--color-ink)]">
                              {service.title}
                            </h3>
                            <ChevronRight
                              size={18}
                              className={`shrink-0 mt-0.5 text-[var(--color-muted)] transition-transform ${
                                isOpen ? "rotate-90" : "group-hover:translate-x-1"
                              }`}
                              aria-hidden="true"
                            />
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
                                {service.description}
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
