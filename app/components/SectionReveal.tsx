"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface SectionRevealProps extends React.HTMLAttributes<HTMLElement> {
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
  const ref = useRef<HTMLElement>(null);

  // Always default to visible so SSR and no-JS render content immediately.
  const [revealed, setRevealed] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const node = ref.current;
    if (!node) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // If already in view, leave visible and just enable transitions for later.
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    let hiddenInitially = false;

    if (!alreadyInView) {
      // Hide immediately (no transition) so the element doesn't flash before animating in.
      setRevealed(false);
      hiddenInitially = true;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "-40px 0px -40px 0px" }
    );

    observer.observe(node);

    // Enable transitions after the initial paint so hidden elements can animate in.
    const readyTimer = setTimeout(() => setReady(true), hiddenInitially ? 80 : 0);

    // Safety fallback: never leave content hidden if the observer fails to fire.
    const fallbackTimer = setTimeout(() => setRevealed(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(readyTimer);
      clearTimeout(fallbackTimer);
    };
  }, [shouldReduceMotion]);

  const snapClass =
    snap === false
      ? ""
      : snap === "relaxed"
      ? "snap-section snap-section--relaxed"
      : "snap-section";

  const duration = shouldReduceMotion ? 0.01 : 0.8;
  const totalDelay = shouldReduceMotion ? 0 : delay;

  return (
    <section
      ref={ref}
      className={`${snapClass} ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(48px)",
        transitionProperty: ready ? "opacity, transform" : undefined,
        transitionDuration: ready ? `${duration}s` : undefined,
        transitionDelay: ready ? `${totalDelay}s` : undefined,
        transitionTimingFunction: ready ? "cubic-bezier(0.22, 1, 0.36, 1)" : undefined,
        willChange: ready ? "opacity, transform" : undefined,
      }}
      {...props}
    >
      {children}
    </section>
  );
}
