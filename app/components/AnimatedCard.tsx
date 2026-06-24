"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: "lift" | "scale" | "border";
}

export default function AnimatedCard({
  children,
  className = "",
  hover = "lift",
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const hoverStyles = {
    lift: shouldReduceMotion
      ? { boxShadow: "0 12px 24px -8px var(--color-shadow)" }
      : { y: -4, boxShadow: "0 12px 24px -8px var(--color-shadow)" },
    scale: shouldReduceMotion ? undefined : { scale: 1.02 },
    border: { borderColor: "color-mix(in oklch, var(--color-primary), transparent 80%)" },
  };

  return (
    <motion.div
      className={className}
      whileHover={hoverStyles[hover]}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
