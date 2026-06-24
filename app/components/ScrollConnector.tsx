"use client";

import { useSyncExternalStore, useEffect, useState } from "react";

const milestones = [
  { id: "benefits", label: "Benefits" },
  { id: "how-it-works", label: "How it works" },
  { id: "services", label: "Services" },
  { id: "trust", label: "Trust" },
  { id: "register", label: "Register" },
  { id: "faq", label: "FAQ" },
];

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrollConnector() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const newProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrolled / docHeight)) : 0;
      setProgress(newProgress);

      let nextActive = -1;
      for (let i = milestones.length - 1; i >= 0; i--) {
        const el = document.getElementById(milestones[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6) {
            nextActive = i;
            break;
          }
        }
      }
      setActiveIndex(nextActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-3"
      aria-hidden="true"
    >
      <div className="relative h-[260px] w-[2px] bg-[var(--color-surface)] rounded-full overflow-hidden">
        {reducedMotion ? (
          // Static progress line: no transform animation
          <div
            className="absolute top-0 left-0 w-full bg-[var(--color-primary)] rounded-full origin-top"
            style={{ height: `${progress * 100}%` }}
          />
        ) : (
          // Compositor-only transform animation
          <div
            className="absolute top-0 left-0 w-full bg-[var(--color-primary)] rounded-full origin-top"
            style={{
              height: "100%",
              transform: `scaleY(${progress})`,
              transitionProperty: "transform",
              transitionDuration: "0.1s",
              transitionTimingFunction: "linear",
            }}
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none">
        {milestones.map((m, index) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            className={`pointer-events-auto w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index <= activeIndex
                ? "bg-[var(--color-primary)] border-[var(--color-primary)] scale-110"
                : "bg-[var(--color-bg)] border-[var(--color-muted)]"
            }`}
            title={m.label}
          />
        ))}
      </div>
    </div>
  );
}
