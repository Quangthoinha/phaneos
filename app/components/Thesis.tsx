"use client";

import { motion } from "framer-motion";

export default function Thesis() {
  return (
    <section id="thesis" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            01 / The Creator Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Attention is abundant. Monetization is broken.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: The Broken Status Quo */}
          <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-semibold text-white tracking-tight pb-2 border-b border-slate-800">
              The Reality Most Creators Face
            </h3>
            <p>
              You spend dozens of hours scripting, filming, and editing content that earns genuine respect and tens of thousands of views.
            </p>
            <p>
              In return, YouTube AdSense pays a fraction of the value created. Sponsor integrations force you to pitch products you barely use, compromising the trust you worked years to build.
            </p>
            <p>
              When you try to monetize directly, you drop a raw Linktree or Calendly link in your bio. 70% of viewers bounce immediately from decision fatigue. The few who book are tyre-kickers who don&apos;t show up.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm italic pt-2">
              Result: You remain trapped on the content hamster wheel, generating high-value attention with low-margin monetization.
            </p>
          </div>

          {/* Right Column: The Shadow Operator Solution */}
          <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-semibold text-white tracking-tight pb-2 border-b border-slate-800">
              The Shadow Operating Model
            </h3>
            <p>
              phaneos steps in as your silent co-founder. We don&apos;t charge you a £5,000 monthly retainer, and we don&apos;t give you advice to execute yourself.
            </p>
            <p>
              We engineer a dedicated backend business tailored to your audience:
            </p>
            <ul className="space-y-3 pl-4 border-l border-slate-800 text-slate-300 text-sm">
              <li>
                <strong className="text-white">7-Minute Qualified VSL:</strong> A concise video asset explaining your methodology and filtering out unqualified inquiries.
              </li>
              <li>
                <strong className="text-white">High-Margin Digital Asset:</strong> Packaging your core expertise into £500 – £3,000 programs, cohorts, or blueprints.
              </li>
              <li>
                <strong className="text-white">Invisible Fulfillment:</strong> Stripe routing, community access, and client intake managed entirely backstage.
              </li>
            </ul>
            <p className="text-slate-400 text-xs sm:text-sm italic pt-2">
              Result: You keep 100% focus on content. We monetize the backend on a pure revenue-share split.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
