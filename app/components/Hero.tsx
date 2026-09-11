"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import { ShimmerButton } from "./ui/ShimmerButton";
import { Marquee } from "./ui/Marquee";

const marqueeItems = [
  "7-Minute Qualified VSL",
  "Zero Upfront Retainers",
  "100% Creator IP & Audience Ownership",
  "Stripe Connect Point-of-Sale Splits",
  "14-Day Rapid Deployment",
  "Sub-60s Pre-Qualification Gate",
  "Turnkey £500 – £3,000 Digital Products",
  "Zero AdSense or Brand Deal Interference",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (elementId: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-16 px-6 md:px-12 bg-slate-950 text-white overflow-hidden"
    >
      {/* Aceternity UI Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#f43f5e"
      />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Magic UI Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md text-xs font-mono tracking-wider text-slate-300 uppercase shadow-lg shadow-black/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          <span>Partnering with creators reaching 1k – 20k views per video</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-8 text-balance"
        >
          You make the content.{" "}
          <span className="text-slate-400 font-normal block sm:inline">
            We build the business behind it.
          </span>
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
        >
          phaneos operates as a silent backend partner for select creators and experts. We convert audience attention into high-margin digital assets and pre-qualified client funnels on pure revenue share. No retainers. Zero upfront risk.
        </motion.p>

        {/* Shimmer Button & Secondary Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <ShimmerButton
            onClick={() => handleScrollTo("register")}
            shimmerColor="#f43f5e"
            className="w-full sm:w-auto text-sm px-8 py-4 font-semibold"
          >
            <span>Apply for Partnership</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </ShimmerButton>

          <button
            type="button"
            onClick={() => handleScrollTo("calculator")}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 font-medium text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Calculate Your Revenue</span>
          </button>
        </motion.div>
      </div>

      {/* Magic UI Marquee Banner */}
      <div className="w-full relative z-10 border-y border-white/5 bg-slate-950/60 backdrop-blur-md py-3">
        <Marquee pauseOnHover className="[--duration:35s]">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-slate-400 px-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
