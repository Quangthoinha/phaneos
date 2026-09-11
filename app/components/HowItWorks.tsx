"use client";

import React from "react";
import { Video, Package, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Video,
    title: "We build your 7-Minute Video Sales Page",
    tagline: "Replace broken bio links with a dedicated conversion page",
    description:
      "Instead of sending your viewers to a raw Linktree with 8 confusing links or a naked Calendly that gets flooded with no-shows, we write and produce a 7-minute video page that explains your methodology and pre-qualifies buyers before they can book or buy.",
    bullets: [
      "Custom script written for your voice",
      "Sub-60s qualification filter to stop tyre-kickers",
      "High-converting, mobile-fast landing page",
    ],
  },
  {
    number: "02",
    icon: Package,
    title: "We package your expertise into a digital product",
    tagline: "A £197 – £997 asset your audience actually wants",
    description:
      "You don't need to spend 6 months recording 50 hours of video courses. We distill your real-world workflows into high-impact digital systems, Notion frameworks, or live cohort blueprints that deliver immediate value to your viewers.",
    bullets: [
      "Curriculum & resource architecture built by us",
      "Ready-to-use Notion / student workspaces",
      "Priced to generate serious monthly cashflow",
    ],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "We manage the tech, billing & customer onboarding",
    tagline: "Automated Stripe payouts. 70% to you, 30% to us.",
    description:
      "Running funnels, Zapier automations, checkout pages, and customer support takes hours each week. We manage the entire backend infrastructure invisibly. Every sale splits automatically at checkout directly to your bank account.",
    bullets: [
      "Automated Stripe Connect split payments",
      "Zero technical maintenance on your part",
      "Continuous testing and conversion optimization",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#090a0f] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3">
            Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How It Works in 3 Steps
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            You keep making videos and speaking to your audience. We build and operate the entire monetization machine behind the scenes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-[#0f1219] border border-white/10 hover:border-rose-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-mono text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-rose-400 mb-4">
                    {step.tagline}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <ul className="space-y-2 text-xs text-slate-400">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
