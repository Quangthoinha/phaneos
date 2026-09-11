"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import { ShimmerButton } from "./ui/ShimmerButton";
import { Marquee } from "./ui/Marquee";

const syndicateSignals = [
  "[PROTOCOL: 100% CREATOR IP & AUDIENCE OWNERSHIP]",
  "[FEE_STRUCTURE: £0 UPFRONT // PURE REVENUE SHARE]",
  "[CORE_ASSET: 7-MINUTE HIGH-RETENTION VSL]",
  "[PAYOUT_ROUTING: STRIPE CONNECT DIRECT SPLITS]",
  "[SPEED_TO_LAUNCH: 14-DAY DEPLOYMENT STANDARD]",
  "[INTAKE_GATE: SUB-60S TYRE-KICKER FILTER]",
  "[MONETIZATION: £500 – £3,000 DIGITAL ASSETS]",
  "[MANDATE: DISCREET SHADOW OPERATING // NO PUBLIC FOOTPRINT]",
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
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-16 px-6 md:px-12 bg-[#05070a] text-white overflow-hidden"
    >
      {/* Aceternity UI Spotlight: Tungsten Amber Warmth */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#f59e0b"
      />

      {/* Discrete Obsidian Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Stealth Syndicate Protocol Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md text-xs font-mono tracking-widest text-amber-400 uppercase shadow-lg shadow-black/40"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span>[PROTOCOL: SOVEREIGN_SHADOW] • CREATORS REACHING 1K – 20K VIEWS</span>
        </motion.div>

        {/* Master Headline with Distinct Authority */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8 text-balance"
        >
          We operate in the shadows.{" "}
          <span className="text-amber-400 font-normal block sm:inline">
            You keep the spotlight.
          </span>
        </motion.h1>

        {/* Unapologetic Persona Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
        >
          Traditional marketing agencies charge £5k/mo retainers for slide decks. We operate as an unlisted backend partner for creators with high audience trust. We build 7-minute VSL funnels, turnkey digital assets, and automated intake gates on a pure revenue share split. No retainers. Zero publicity.
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
            shimmerColor="#f59e0b"
            className="w-full sm:w-auto text-sm px-8 py-4 font-semibold font-mono"
          >
            <span>[REQUEST CONFIDENTIAL INTAKE]</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </ShimmerButton>

          <button
            type="button"
            onClick={() => handleScrollTo("dossier")}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-white/10 font-mono text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>[INSPECT CASE DOSSIER]</span>
          </button>
        </motion.div>
      </div>

      {/* Syndicate Marquee Ticker */}
      <div className="w-full relative z-10 border-y border-white/5 bg-[#07090e]/80 backdrop-blur-md py-3 font-mono">
        <Marquee pauseOnHover className="[--duration:36s]">
          {syndicateSignals.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-xs tracking-wider text-slate-400 px-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
