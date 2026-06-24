"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedIcon({ children, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ rotate: 8, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}
