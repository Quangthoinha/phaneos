"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionReveal from "./SectionReveal";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function CommissionTiers() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionReveal id="benefits" className="relative bg-[var(--color-bg)] flex items-center">
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <motion.div
          className="grid xl:grid-cols-12 gap-12 xl:gap-16 items-start"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div className="xl:col-span-5" variants={shouldReduceMotion ? undefined : itemVariants}>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-4">
              Partnership models
            </p>
            <h2 className="heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              Two ways to earn from the clients you already have
            </h2>
            <p className="text-section leading-[1.65] text-[var(--color-muted)]">
              No new AI hires. No technology investment. Just the relationships you have already built.
            </p>
          </motion.div>

          <motion.div
            className="xl:col-span-7 grid xl:grid-cols-2 gap-4"
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {tiers.map((tier) => (
              <motion.article
                key={tier.model}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="group relative bg-[var(--color-surface)] rounded-xl p-6 md:p-8 flex flex-col h-full"
                whileHover={
                  shouldReduceMotion
                    ? { backgroundColor: "var(--color-primary-subtle)" }
                    : { y: -2, backgroundColor: "var(--color-primary-subtle)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-2">
                    {tier.summary}
                  </p>
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
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

                <motion.a
                  href={`#register?model=${tier.modelValue}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-muted)] px-6 py-3.5 text-base font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {tier.cta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
