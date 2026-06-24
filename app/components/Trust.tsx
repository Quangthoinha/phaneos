"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import AnimatedIcon from "./AnimatedIcon";
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

export default function Trust() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionReveal
      id="trust"
      className="relative bg-[var(--color-accent)] text-white flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <motion.div
          className="max-w-[75ch] mb-12 md:mb-16"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-balance mb-5"
          >
            You keep the relationship.
            <br />
            We handle the AI.
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="section-heading text-section leading-[1.65] text-white/80 max-w-prose"
          >
            This is what agencies worry about most when bringing in a third-party partner. phaneosAI is designed to remove that risk from day one.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex flex-col h-full p-6 md:p-8 rounded-xl bg-white/5 border border-white/10"
              whileHover={
                shouldReduceMotion
                  ? { backgroundColor: "rgba(255,255,255,0.08)" }
                  : { y: -4, backgroundColor: "rgba(255,255,255,0.08)" }
              }
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <AnimatedIcon className="text-[var(--color-primary)] mb-4">
                <point.icon size={28} strokeWidth={2} />
              </AnimatedIcon>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-base leading-[1.65] text-white/80 max-w-prose">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
