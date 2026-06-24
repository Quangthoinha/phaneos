"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  snap?: boolean | "relaxed";
  delay?: number;
}

export default function SectionReveal({
  children,
  className = "",
  snap = true,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const snapClass =
    snap === false
      ? ""
      : snap === "relaxed"
      ? "snap-section snap-section--relaxed"
      : "snap-section";

  return (
    <motion.section
      className={`${snapClass} ${className}`}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
