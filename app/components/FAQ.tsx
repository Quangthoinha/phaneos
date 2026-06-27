"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const faqs = [
  {
    question: "What kind of agency is a good fit?",
    answer:
      "Agencies that already serve SME to enterprise clients and are fielding questions about AI, automation, or operational efficiency. You do not need an in-house AI team — we provide the enablement, sales material, and delivery expertise.",
  },
  {
    question: "What is the difference between referral and co-selling?",
    answer:
      "Referral (12%): you introduce a warm lead and we handle discovery, proposal, delivery, and billing. Co-selling (25%): we join client meetings and build the proposal together, while you keep the relationship and remain the visible partner throughout.",
  },
  {
    question: "Does the agency need to understand AI?",
    answer:
      "No. We provide pitch decks, one-page fit guides, email templates, and join early client calls with you. You only need enough context to spot the opportunity and make a credible introduction.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "You do. We never contact your client without your permission, and we do not sell directly to a registered prospect behind your back. The partner agreement includes relationship-protection and non-circumvention clauses for both referral and co-selling deals.",
  },
  {
    question: "Will the client know about phaneosAI?",
    answer:
      "In co-selling, phaneosAI appears as part of the delivery team. In referral deals, we can deliver under your agency brand if you prefer white-label delivery. Either way, the commercial relationship with the client stays with you.",
  },
  {
    question: "How does deal registration work?",
    answer:
      "Register a prospect through the partner portal or by email. Once accepted, that deal is protected for 90 days (renewable if actively pursued). If two partners register the same prospect, the first good-faith, complete registration generally wins.",
  },
  {
    question: "When and how is commission paid?",
    answer:
      "Commission is earned when the client contract is signed and the first payment is received. We pay within 30 days after the end of the month in which payment arrives, for the first 12 months of net client fees unless otherwise agreed.",
  },
  {
    question: "What happens if a client churns or gets a refund?",
    answer:
      "If a client payment is refunded or charged back, the commission paid on that amount is subject to clawback and will be offset against future commissions. Fraudulent or self-referral deals are void and may result in termination.",
  },
  {
    question: "How do you handle AI accuracy, hallucinations, and compliance?",
    answer:
      "Every client deliverable goes through human review before delivery. We do not use client data to train models, we use zero-data-retention provider tiers where available, and we exclude prohibited and high-risk use cases. Partners and end-clients are responsible for verifying AI outputs before relying on them for consequential decisions.",
  },
  {
    question: "What support do partners get?",
    answer:
      "Partner docs, email and pitch-deck templates, shared client calls for your first co-sale, a deal-registration process, and a direct partner contact. You can also request a 15-minute intro call after registering.",
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
          <h2 className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
            Questions partners usually ask
          </h2>
          <p className="section-heading text-section leading-[1.65] text-[var(--color-muted)]">
            If anything is unclear, send the registration form and we will answer directly.
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
