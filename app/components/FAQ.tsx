"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const faqs = [
  {
    question: "What exactly is a Shadow Operator?",
    answer:
      "A Shadow Operator is your backstage business and monetization partner. You focus 100% of your energy on creating high-value content and building your community. In the shadows, we script your 7-minute VSL, build high-converting landing pages, filter qualified leads in sub-60 seconds, and package turnkey digital products — strictly on a revenue share basis.",
  },
  {
    question: "Why do you operate on revenue share instead of charging upfront retainers?",
    answer:
      "Because we have skin in the game. Traditional agencies charge £5,000–£10,000 upfront fees regardless of whether you make a single penny. As a Shadow Operator, we take £0 upfront setup fees. We only win when we successfully unlock new monthly cashflow for your channel.",
  },
  {
    question: "Do you touch my existing AdSense, YouTube ad revenue, or brand deals?",
    answer:
      "Never. You keep 100% of your existing AdSense, brand sponsorships, and merchandise. We only share in the newly engineered backend revenue (VSL conversion funnels, AI digital products, and high-ticket mastermind cohorts) that we build together.",
  },
  {
    question: "What type of creator is the best fit for phaneos?",
    answer:
      "Micro-creators and niche experts averaging between 1,000 and 20,000 views per video with high viewer trust, but whose content has a cadence hard gate: you must have posted within the last 14–30 days. You have engaged fans, but lack the technical time to build digital products or automated backend funnels.",
  },
  {
    question: "Who owns the audience, community, and intellectual property?",
    answer:
      "You do — 100%. You retain exclusive ownership of your social channels, email lists, domain, Stripe account, and brand IP forever. Our bilateral partner agreement includes strict non-circumvention and IP protection terms.",
  },
  {
    question: "How long does it take from agreement to first launch?",
    answer:
      "Our rapid deployment standard is 14 days. We benchmark your niche Top Achievers, script your 7-minute VSL, build the sub-60s qualified intake funnel, package the digital product, and configure Stripe Connect in under two weeks.",
  },
  {
    question: "How do payouts and revenue splits work?",
    answer:
      "We configure Stripe Connect or Whop to automatically split incoming customer transactions at the point of sale (e.g. 50/50 or 70/30), ensuring 100% financial transparency. Alternatively, commissions are reconciled on a clear 30-day net ledger.",
  },
  {
    question: "What is the difference between 50/50 Co-Op and 70/30 Launch?",
    answer:
      "With 50/50 Co-Op (most popular), we build, launch, test, and continuously run your entire backend infrastructure indefinitely. With 70/30, we build and launch your initial digital offer, then hand over the day-to-day workflow after the first 60 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionReveal
      id="faq"
      className="relative bg-[var(--color-surface)] flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <StaggerReveal className="max-w-[65ch] mb-12 md:mb-16">
          <span className="badge-glass mb-4 text-[var(--color-primary)] font-semibold text-xs uppercase tracking-wider">
            Clear Alignment & Terms
          </span>
          <h2 className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
            Frequently Asked Questions
          </h2>
          <p className="section-heading text-section leading-[1.65] text-[var(--color-muted)]">
            Everything you need to know about partnering with a discreet Shadow Operator.
          </p>
        </StaggerReveal>
        <div className="max-w-[min(92vw,900px)] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerReveal key={index} staggerIndex={index}>
                <div className="bg-[var(--color-bg)] rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left active:bg-[var(--color-surface)] transition-colors motion-reduce:transition-none"
                  >
                    <span className="text-lg md:text-xl font-semibold text-[var(--color-ink)] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                    style={{
                      transitionDuration: "0.25s",
                      transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-base leading-[1.65] text-[var(--color-muted)] max-w-prose">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
