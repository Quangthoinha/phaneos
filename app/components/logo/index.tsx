"use client";

import Image from "next/image";
import { CSSProperties } from "react";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "default" | "light" | "mark";
}

export default function Logo({
  className = "",
  size = 40,
  variant = "default",
}: LogoProps) {
  const isMark = variant === "mark";
  const textColor = variant === "light" ? "var(--color-bg)" : "var(--color-ink)";
  const accentColor = variant === "light" ? "var(--color-bg)" : "var(--color-primary)";

  const wrapperStyle: CSSProperties = {
    fontSize: size * 0.675,
    lineHeight: 1,
  };

  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={wrapperStyle}
    >
      <Image
        src="/logo/logo-512.png"
        alt="phaneosAI"
        width={size}
        height={size}
        className="block"
        priority
      />

      {!isMark && (
        <span className="font-bold tracking-tight" style={{ color: textColor }}>
          phaneos
          <span style={{ color: accentColor }}>AI</span>
        </span>
      )}
    </span>
  );
}
