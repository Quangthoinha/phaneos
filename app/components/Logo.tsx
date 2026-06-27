"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "default" | "light" | "mark" | "badge";
  scrollProgress?: number;
}

export default function Logo({
  className = "",
  size = 40,
  variant = "default",
  scrollProgress = 0,
}: LogoProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const isBadge = variant === "badge";
  const isMark = variant === "mark";
  const isLight = variant === "light";

  const sunColor = isBadge || isLight ? "var(--color-bg)" : "var(--color-primary)";
  const figureColor = isBadge || isLight ? "var(--color-bg)" : "var(--color-ink)";
  const coinColor = isBadge || isLight ? "var(--color-primary)" : "var(--color-bg)";
  const textColor = isLight ? "var(--color-bg)" : "var(--color-ink)";
  const wordmarkColor = isLight ? "var(--color-bg)" : "var(--color-primary)";
  const badgeBg = "var(--color-primary)";

  const dampedProgress = useRef(0);
  const coinRef = useRef<SVGGElement>(null);
  const figureRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || !coinRef.current || !figureRef.current) return;

    let rafId: number;
    const step = () => {
      const delta = scrollProgress - dampedProgress.current;
      dampedProgress.current += delta * 0.08;

      const rotation = dampedProgress.current * 180;
      const lift = Math.sin(dampedProgress.current * Math.PI * 2) * 1.5;
      const figureShift = dampedProgress.current * 3;

      coinRef.current?.setAttribute(
        "transform",
        `rotate(${rotation}, 22, 16) translate(0, ${-lift})`
      );
      figureRef.current?.setAttribute(
        "transform",
        `translate(0, ${-figureShift})`
      );

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [scrollProgress, reduceMotion]);

  const fontSize = size * 0.675;
  const style: CSSProperties = {
    fontSize,
    lineHeight: 1,
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`inline-flex items-center justify-center ${isBadge ? "rounded-md" : ""}`}
        style={
          isBadge
            ? {
                width: size,
                height: size,
                backgroundColor: badgeBg,
                borderRadius: "0.5rem",
              }
            : undefined
        }
      >
        <svg
          width={isBadge ? size * 0.7 : size}
          height={isBadge ? size * 0.7 : size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={isBadge ? "" : "block"}
        >
          <circle cx="24" cy="16" r="10" fill={sunColor} />

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const inner = 11.5;
            const outer = 13.5;
            const x1 = 24 + Math.cos(rad) * inner;
            const y1 = 16 + Math.sin(rad) * inner;
            const x2 = 24 + Math.cos(rad) * outer;
            const y2 = 16 + Math.sin(rad) * outer;
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={sunColor}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}

          <g ref={figureRef}>
            <path
              d="M8 32C8 32 10 26 13 24C16 22 18 23 18 25C18 27 16 28 14 30"
              stroke={figureColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="15" cy="21" r="3" fill={figureColor} />
            <path
              d="M16 23C18 20 20 18 23 18"
              stroke={figureColor}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          <g ref={coinRef}>
            <circle cx="22" cy="16" r="3.2" fill={coinColor} />
            <circle
              cx="22"
              cy="16"
              r="2"
              stroke={sunColor}
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
          </g>
        </svg>
      </span>

      {!isMark && !isBadge && (
        <span className="font-bold tracking-tight" style={{ ...style, color: textColor }}>
          phaneos<span style={{ color: wordmarkColor }}>AI</span>
        </span>
      )}
    </span>
  );
}
