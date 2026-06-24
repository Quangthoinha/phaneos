"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3.5 text-base font-medium transition-colors";

  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
    secondary: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent)]",
    outline:
      "border border-[var(--color-muted)] text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled || shouldReduceMotion ? undefined : { scale: 1.02 },
    whileTap: disabled || shouldReduceMotion ? undefined : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedClassName} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
