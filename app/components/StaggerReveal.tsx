"use client";

import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
  baseDelay?: number;
  disabled?: boolean;
}

/**
 * A drop-in replacement for Framer Motion's staggered children.
 * Uses native IntersectionObserver + CSS transitions under the hood.
 */
export default function StaggerReveal({
  children,
  className = "",
  staggerIndex = 0,
  baseDelay = 0,
  disabled = false,
}: StaggerRevealProps) {
  return (
    <ScrollReveal
      className={className}
      staggerIndex={staggerIndex}
      delay={baseDelay}
      disabled={disabled}
      animation="fade-up"
    >
      {children}
    </ScrollReveal>
  );
}
