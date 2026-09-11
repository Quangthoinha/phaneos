"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.08em",
      shimmerDuration = "3s",
      borderRadius = "12px",
      background = "rgba(15, 23, 42, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3.5 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-[1.02] hover:border-white/30 active:scale-[0.98]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <div className="absolute inset-0 overflow-visible [container-type:size]">
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* Spark */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {/* Inner background highlight */}
        <div className="absolute [inset:var(--cut)] rounded-[calc(var(--radius)-var(--cut))] bg-slate-950 transition-colors duration-300 group-hover:bg-slate-900" />
        <span className="relative z-10 font-medium tracking-wide flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
