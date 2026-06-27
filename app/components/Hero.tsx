"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import AnimatedButton from "./AnimatedButton";

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
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

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionReveal
      id="top"
      className="hero-section relative min-h-screen overflow-hidden bg-[var(--color-bg)] flex items-center"
      snap
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Base darkening gradient for global readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/95 via-[var(--color-bg)]/70 to-[var(--color-bg)]/30" />
      </div>

      {/* Ellipse blur layer behind the headline */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-20%] w-[70vw] h-[90vh] rounded-full bg-[var(--color-bg)]/80 blur-[80px] z-[1] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 w-full">
        <motion.div
          className="max-w-[60ch]"
          variants={shouldReduceMotion ? undefined : contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="mb-5"
          >
            <span className="badge-primary">
              AI integration partner for agencies
            </span>
          </motion.div>

          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--color-ink)] text-balance mb-7"
          >
            Sell AI services.
            <br />
            Keep every client.
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-[clamp(1.125rem,1.25vw,1.375rem)] leading-[1.65] text-[var(--color-muted)] text-pretty mb-10 max-w-[50ch]"

          >
            phaneosAI helps agencies advise and deliver AI for enterprise clients.
            You keep the relationship. We bring the expertise.
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <AnimatedButton href="#register" variant="primary">
              Become a Partner
            </AnimatedButton>
            <AnimatedButton href="#how-it-works" variant="outline">
              See how it works
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
