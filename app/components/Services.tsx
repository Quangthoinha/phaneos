"use client";

import { useState } from "react";
import { 
  Video, 
  Workflow, 
  Package, 
  MailCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  EyeOff,
  ShieldCheck
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

interface SystemDeliverable {
  type: string;
  title: string;
  points: string[];
  systemId: "vsl" | "filter" | "digital-product" | "nurture" | "benchmark";
}

interface ShadowSystem {
  id: "vsl" | "filter" | "digital-product" | "nurture" | "benchmark";
  title: string;
  icon: typeof Video;
  tagline: string;
  description: string;
  deliverable: SystemDeliverable;
}

const shadowSystems: ShadowSystem[] = [
  {
    id: "vsl",
    title: "7-Minute VSL Architecture",
    icon: Video,
    tagline: "Fixes Text-Heavy Drop-off",
    description:
      "Most creator websites fail because they are text-heavy, use generic stock photos, and lack authentic proof. We script and produce a 7-minute Video Sales Letter articulating your unique mechanism.",
    deliverable: {
      type: "VSL Retention Storyboard",
      title: "4-Beat Video Conversion Framework",
      systemId: "vsl",
      points: [
        "Eliminates stock footage; centers 100% on real creator transformation proof",
        "Paced for 60%+ retention through the final offer transition",
        "Converts at 3.5%–6.8% compared to typical 0.5% text-heavy bio pages",
      ],
    },
  },
  {
    id: "filter",
    title: "Sub-60s Qualified Routing",
    icon: Workflow,
    tagline: "Eliminates Naked Calendlys",
    description:
      "A raw Calendly link in your bio leaks 40% of high-intent clients while filling your schedule with tire-kickers. We build a 3-question filter and automated VIP booking dispatch.",
    deliverable: {
      type: "Intake Qualification Gate",
      title: "3-Question Filter & VIP Routing",
      systemId: "filter",
      points: [
        "Pre-qualifies viewers on budget, goals, and timeline in under 45 seconds",
        "Automated confirmation dispatch within 60 seconds (91.4% show-up rate)",
        "Unqualified leads automatically receive your digital resource vault",
      ],
    },
  },
  {
    id: "digital-product",
    title: "Turnkey Digital Product & Notion OS",
    icon: Package,
    tagline: "High-Margin Cashflow",
    description:
      "Package your expertise into recurring backend cashflow. We construct turnkey Notion OS workspaces, AI workflows, and digital vaults with automated checkout splits.",
    deliverable: {
      type: "Digital Asset Architecture",
      title: "Creator Product & Delivery Vault",
      systemId: "digital-product",
      points: [
        "Designed, packaged, and hosted in 14 days with zero tech burden on the creator",
        "Automated access fulfillment via Stripe Connect or Whop",
        "Priced between £97 and £497 with 95%+ gross margins",
      ],
    },
  },
  {
    id: "nurture",
    title: "Value Escalator Email Sequence",
    icon: MailCheck,
    tagline: "Passive Retention",
    description:
      "Never send awkward 'just checking in' emails. We engineer a 5-day value-first welcome sequence that nurtures passive subscribers into high-ticket clients while you sleep.",
    deliverable: {
      type: "Nurture Timeline",
      title: "5-Day Law of Reciprocity Sequence",
      systemId: "nurture",
      points: [
        "Email 1 delivers pure value with zero sales push (The Spec Asset)",
        "Emails 2–3 demonstrate competitive teardowns and proprietary framework",
        "Emails 4–5 introduce the private high-ticket cohort invitation",
      ],
    },
  },
  {
    id: "benchmark",
    title: "Top Achiever Benchmark Engine",
    icon: Award,
    tagline: "Top 1% Analysis",
    description:
      "We audit the Top Achievers in your niche to diagnose the gap between your current funnel and theirs, bridging it systematically within 14 days.",
    deliverable: {
      type: "Diagnostic Scorecard",
      title: "4-Dimensional Competitive Gap Audit",
      systemId: "benchmark",
      points: [
        "Audits your 10 most recent posts to detect traffic drop-off points",
        "Reverse-engineers top competitor VSL pacing, offer ladders, and unit economics",
        "Delivers a 14-day deployment roadmap with zero guesswork",
      ],
    },
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentSystem = shadowSystems[activeTab];

  return (
    <SectionReveal id="services" className="relative bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container-wide w-full">
        <StaggerReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section font-bold tracking-tight text-white mb-4">
            The 5 Backend Engines We Operate in the Shadows
          </h2>
          <p className="text-section leading-relaxed text-slate-400">
            You stay in front of the camera creating content. In the shadows, we engineer, deploy, and manage your complete monetization ecosystem on pure revenue share.
          </p>
        </StaggerReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: System Navigation Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {shadowSystems.map((system, idx) => {
              const Icon = system.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={system.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-start gap-4 cursor-pointer border ${
                    isActive
                      ? "bg-slate-900 border-rose-500/50 shadow-lg shadow-black/40"
                      : "bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/70"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                      isActive
                        ? "bg-rose-500 text-white shadow-md shadow-rose-950/50"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                        {system.title}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-md shrink-0 ${
                        isActive ? "bg-rose-500/20 text-rose-300" : "bg-white/5 text-slate-500"
                      }`}>
                        {system.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Bespoke Architecture Flow Visualizer (No Fake Terminal!) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-white/10 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-rose-400 block mb-1">
                  {currentSystem.deliverable.type}
                </span>
                <h3 className="text-base font-bold text-white">
                  {currentSystem.deliverable.title}
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Deliverable
              </span>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {currentSystem.description}
            </p>

            {/* Key Deliverable Bullet Points */}
            <div className="space-y-2.5 mb-8">
              {currentSystem.deliverable.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>

            {/* BESPOKE DELIVERABLE VISUAL WORKBENCH */}
            <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
              {currentSystem.id === "vsl" && (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium pb-2 border-b border-white/5">
                    <span>VSL Retention Pacing (7m 18s Target)</span>
                    <span className="text-emerald-400 font-bold">64.2% Qualified View Through</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-rose-400 font-bold block mb-0.5">0:00 – 1:00</span>
                      <strong className="text-white text-xs block">Hook & Pattern Interrupt</strong>
                      <span className="text-xs text-slate-400">Kill the common myth</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-300 font-bold block mb-0.5">1:00 – 3:00</span>
                      <strong className="text-white text-xs block">Core Problem Agitation</strong>
                      <span className="text-xs text-slate-400">Why typical fixes fail</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-300 font-bold block mb-0.5">3:00 – 5:00</span>
                      <strong className="text-white text-xs block">Unique Mechanism</strong>
                      <span className="text-xs text-slate-400">Proprietary proof & framework</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-rose-500/30">
                      <span className="text-emerald-400 font-bold block mb-0.5">5:00 – 7:18</span>
                      <strong className="text-white text-xs block">Qualified Offer</strong>
                      <span className="text-xs text-slate-400">Low-pressure application</span>
                    </div>
                  </div>
                </div>
              )}

              {currentSystem.id === "filter" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-medium pb-2 border-b border-white/5">
                    <span>Intake Qualification Protocol</span>
                    <span className="text-emerald-400 font-bold">91.4% Show-Up Rate</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                      <span className="text-slate-300">Q1: Monthly Viewership & Cadence</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-semibold">1,000+ views</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                      <span className="text-slate-300">Q2: Primary Monetization Bottleneck</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-semibold">Missing Backend</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                      <span className="text-slate-300">Q3: Action Timeline</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-semibold">Immediate 14-Day</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Qualified lead unlocks calendar & receives automated confirmation in &lt;60s.</span>
                  </div>
                </div>
              )}

              {currentSystem.id === "digital-product" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-medium pb-2 border-b border-white/5">
                    <span>3DS Asset Suite Breakdown</span>
                    <span className="text-emerald-400 font-bold">96.8% Gross Margin</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                      <strong className="text-white block mb-1">1. Notion OS Workspace</strong>
                      <p className="text-slate-400 text-xs leading-relaxed">Turnkey operational database with templates & client SOPs.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                      <strong className="text-white block mb-1">2. AI Workflow Suite</strong>
                      <p className="text-slate-400 text-xs leading-relaxed">Proprietary prompt suites and automated execution shortcuts.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                      <strong className="text-white block mb-1">3. Automated Checkout</strong>
                      <p className="text-slate-400 text-xs leading-relaxed">Stripe Connect & Whop delivery with instant revenue splits.</p>
                    </div>
                  </div>
                </div>
              )}

              {currentSystem.id === "nurture" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-medium pb-2 border-b border-white/5">
                    <span>5-Day Value Escalator Cadence</span>
                    <span className="text-emerald-400 font-bold">58.4% Average Open Rate</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-900 flex items-center justify-between">
                      <span className="text-slate-200">Day 1: The Spec Asset Delivery</span>
                      <span className="text-slate-400 text-xs">0% Pitch • 100% Value</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 flex items-center justify-between">
                      <span className="text-slate-200">Day 2: Top Achiever Teardown</span>
                      <span className="text-slate-400 text-xs">Industry Gap Analysis</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 flex items-center justify-between">
                      <span className="text-slate-200">Day 3: Client Case Study Breakdown</span>
                      <span className="text-slate-400 text-xs">Concrete Transformation Proof</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 flex items-center justify-between">
                      <span className="text-slate-200">Day 5: High-Ticket Cohort Invitation</span>
                      <span className="text-rose-400 text-xs font-semibold">Low-Pressure Application</span>
                    </div>
                  </div>
                </div>
              )}

              {currentSystem.id === "benchmark" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-medium pb-2 border-b border-white/5">
                    <span>4-D Niche Benchmark Scorecard</span>
                    <span className="text-emerald-400 font-bold">Diagnosed in 24 Hours</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Dimension 1</span>
                      <strong className="text-white block">Audience Navigation</strong>
                      <span className="text-rose-400 text-xs">Eliminate naked link leakage</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Dimension 2</span>
                      <strong className="text-white block">Video VSL Qualification</strong>
                      <span className="text-emerald-400 text-xs">7-min retention curve</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Dimension 3</span>
                      <strong className="text-white block">Digital Offer Hierarchy</strong>
                      <span className="text-emerald-400 text-xs">Frontend £97 &rarr; Backend £2k</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Dimension 4</span>
                      <strong className="text-white block">Backend Unit Economics</strong>
                      <span className="text-emerald-400 text-xs">Automated rev-share splits</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                Operated 100% discreetly in the shadows
              </span>
              <a
                href="#register"
                className="text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
