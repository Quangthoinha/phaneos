"use client";

import { useEffect, useRef, useState, ReactNode, ComponentPropsWithoutRef, ElementType } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const defaultTag = "div";

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as = defaultTag,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // Let initial state remain true via a microtask to avoid sync setState warning
      queueMicrotask(() => setRevealed(true));
      return;
    }

    const timer = setTimeout(() => {
      setReady(true);
      setRevealed(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const Component = as as ElementType;
  const extraProps: ComponentPropsWithoutRef<typeof defaultTag> = {};
  if (as === "span") {
    extraProps.style = { display: "inline-block" };
  }

  return (
    <Component
      ref={ref}
      className={`overflow-hidden ${className}`}
      {...extraProps}
    >
      <span
        className="block"
        style={{
          display: "block",
          transform: revealed ? "translateY(0)" : "translateY(110%)",
          opacity: revealed ? 1 : 0,
          transitionProperty: "transform, opacity",
          transitionDuration: ready ? "0.9s" : "0s",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: ready ? "0s" : "0s",
        }}
      >
        {children}
      </span>
    </Component>
  );
}
