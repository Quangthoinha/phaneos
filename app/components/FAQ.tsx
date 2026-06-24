"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    question: "What kind of agency is a good fit?",
    answer:
      "Agencies serving SMEs to enterprise clients, whose customers are asking about AI, automation, or operational efficiency. You do not need an in-house AI team.",
  },
  {
    question: "What is the difference between referral and co-selling?",
    answer:
      "Referral: you introduce the client, we sell and deliver, and you earn 12%. Co-selling: we join client meetings and build the proposal together, you keep the relationship, and you earn 25%.",
  },
  {
    question: "Does the agency need to understand AI?",
    answer:
      "No. We provide sales materials, pitch slides, and join client meetings with you. You only need enough context to spot the opportunity.",
  },
  {
    question: "When is commission paid?",
    answer:
      "When the client service contract is signed and the first payment is received. The partner agreement clearly states payment schedule and commission calculation.",
  },
  {
    question: "Will the client know about phaneosAI?",
    answer:
      "That depends on the model. With co-selling, phaneosAI appears as part of the delivery team. With referral, we can work under your agency brand if you prefer white-label delivery.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionReveal
      id="faq"
      className="relative bg-[var(--color-surface)] flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <motion.div
          className="max-w-[65ch] mb-12 md:mb-16"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5"
          >
            Questions partners usually ask
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="section-heading text-section leading-[1.65] text-[var(--color-muted)]"
          >
            If anything is unclear, send the registration form and we will answer directly.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-[min(92vw,900px)] space-y-4"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="bg-[var(--color-bg)] rounded-xl overflow-hidden"
            >
              <motion.button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left active:bg-[var(--color-surface)] transition-colors motion-reduce:transition-none"
                whileHover={{ backgroundColor: "var(--color-surface)" }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-lg md:text-xl font-semibold text-[var(--color-ink)] pr-4">
                  {faq.question}
                </span>
                <motion.span
                  className="shrink-0 text-[var(--color-primary)]"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? <Minus size={22} /> : <Plus size={22} />}
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-base leading-[1.65] text-[var(--color-muted)] max-w-prose">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
