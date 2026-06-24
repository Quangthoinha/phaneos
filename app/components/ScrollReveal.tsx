"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "scale-up" | "clip-reveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerIndex?: number;
  disabled?: boolean;
  animation?: AnimationType;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  staggerIndex = 0,
  disabled = false,
  animation = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const node = ref.current;
    if (!node) return;

    // Respect reduced motion: keep content visible and skip animation setup
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    // If the element is already in the viewport, leave it visible and just enable transitions
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    let hiddenInitially = false;

    if (!alreadyInView) {
      // Hide immediately (without transition) so the element doesn't flash visible before animating in
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
      { threshold: 0.12, rootMargin: "-60px 0px -60px 0px" }
    );

    observer.observe(node);

    // Enable transitions after the initial paint so hidden elements can animate in later
    const readyTimer = setTimeout(() => setReady(true), hiddenInitially ? 80 : 0);

    // Safety fallback: never leave content hidden if the observer fails to fire
    const fallbackTimer = setTimeout(() => setRevealed(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(readyTimer);
      clearTimeout(fallbackTimer);
    };
  }, [disabled]);

  const staggerDelay = staggerIndex * 0.12;
  const totalDelay = delay + staggerDelay;

  const baseStyles: React.CSSProperties = {
    willChange: ready ? "opacity, transform" : undefined,
    opacity: revealed ? 1 : 0,
    transitionProperty: ready ? "opacity, transform, clip-path" : undefined,
    transitionDuration: ready ? "0.9s" : undefined,
    transitionTimingFunction: ready ? "cubic-bezier(0.22, 1, 0.36, 1)" : undefined,
    transitionDelay: ready ? `${totalDelay * 1000}ms` : undefined,
  };

  const animationStyles: Record<AnimationType, React.CSSProperties> = {
    "fade-up": {
      transform: revealed ? "translateY(0)" : "translateY(48px)",
    },
    "fade-in": {
      transform: "none",
    },
    "scale-up": {
      transform: revealed ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
    },
    "clip-reveal": {
      transform: revealed ? "translateY(0)" : "translateY(32px)",
      clipPath: revealed ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...animationStyles[animation],
      }}
    >
      {children}
    </div>
  );
}
