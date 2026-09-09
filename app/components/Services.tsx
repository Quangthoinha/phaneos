"use client";

import { useState } from "react";
import { 
  Video, 
  Workflow, 
  Package, 
  MailCheck, 
  Award, 
  CheckCircle2, 
  Terminal, 
  ArrowRight,
  EyeOff,
  ShieldAlert
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const shadowSystems = [
  {
    id: "vsl",
    title: "High-Converting 7-Minute VSL Architecture",
    icon: Video,
    badge: "Fixes Text-Heavy Leaks",
    description:
      "Most creator websites fail because they are text-heavy, use generic stock photos, and lack video proof. We script and build an authentic 7-minute VSL explaining your unique mechanism and converting viewers into buyers.",
    deliverable: {
      type: "VSL Funnel Blueprint",
      title: "7-Minute VSL Conversion Framework",
      points: [
        "Eliminates stock footage; puts your authentic case studies center-stage",
        "Framework: 0-60s Hook -> 1-3m Core Problem -> 3-5m Unique Mechanism -> 5-7m Offer",
        "Converts at 3.5%–6.8% compared to typical 0.5% text-heavy pages",
      ],
      previewCode: `// VSL Funnel Architecture (cyMSm21-8vM Spec)
{
  "target_drop_off": "Text-heavy 1.2% conversion",
  "optimized_vsl_length": "7 minutes 18 seconds",
  "video_retention_at_pitch": "64.2%",
  "conversion_lift": "+320% qualified bookings",
  "stock_footage_used": 0 // 100% real creator proof
}`,
    },
  },
  {
    id: "filter",
    title: "Sub-60s Qualified Routing (Kills Naked Calendlys)",
    icon: Workflow,
    badge: "Kills Unqualified No-Shows",
    description:
      "Putting a raw Calendly link in your bio leaks 40% of high-intent clients and floods your calendar with unqualified tire-kickers. We build a 3-question filter (budget, goals, timeline) and sub-60s automated booking routing.",
    deliverable: {
      type: "Automated Routing Engine",
      title: "Sub-60s Inbound Webhook Qualification",
      points: [
        "3-Question filter weeds out tire-kickers without reducing lead volume",
        "Sub-60s automated SMS & WhatsApp confirmation for 92%+ show-up rates",
        "Instant calendar booking reserved exclusively for qualified buyers",
      ],
      previewCode: `POST /api/v1/creator-lead-intake
Payload: { "viewer": "@jordan_realestate", "capital": "£15k+", "timeline": "Immediately" }
Latency: 284ms | Status: 200 OK
-> Qualification Gate: PASSED (VIP High-Intent)
-> Calendly Unlocked + VIP SMS sent in 38 seconds
-> Show-up Rate: 91.4%`,
    },
  },
  {
    id: "digital-product",
    title: "3DS Turnkey AI Digital Product & Notion OS",
    icon: Package,
    badge: "High-Margin Cashflow",
    description:
      "Turn your knowledge into recurring backend cashflow. We package your expertise into turnkey Notion OS workspaces, AI workflow prompt suites, and private cohort communities with automated payment splits.",
    deliverable: {
      type: "3DS Digital Asset Pack",
      title: "Creator Monopoly Digital Product Suite",
      points: [
        "Designed and packaged in under 14 days without creator tech stress",
        "Zero delivery overhead — automated onboarding and customer access",
        "Priced between £97 – £497 with 95%+ gross profit margins",
      ],
      previewCode: `Asset Package: "AirBnB Co-Hosting Operating System"
Components:
- Turnkey Notion OS Workspace (32 Guest Templates)
- AI Guest Messaging Automation Pack
- Pricing Arbitrage Calculator
Gross Margin: 96.8% | Fulfilled 100% automatically via Whop`,
    },
  },
  {
    id: "nurture",
    title: "Automated 'No-Bump' Shadow Email Engine",
    icon: MailCheck,
    badge: "Passive Retention",
    description:
      "Never write awkward 'just checking in' emails. We engineer a 5-day value-first welcome sequence and automated 'no-bump' follow-up engine that nurtures lurkers into high-ticket buyers while you sleep.",
    deliverable: {
      type: "Email Automation Suite",
      title: "5-Stage Law of Reciprocity Nurture",
      points: [
        "Email 1: High-value free asset delivery (The Spec Asset Drop)",
        "Email 2: Competitor teardown & Top Achiever breakdown",
        "Email 3-5: Client transformation proof + invite to high-ticket cohort",
      ],
      previewCode: `Trigger: Inbound Lead Opt-in
Email Sequence: 5-Day Value Escalator
Rule: 0% sales push on Email 1; lead with pure value
Average Open Rate: 58.4% | Click-Through Rate: 16.2%
Unsubscribe Rate: <0.4%`,
    },
  },
  {
    id: "benchmark",
    title: "Top Achiever Niche Benchmark Engine",
    icon: Award,
    badge: "Cloning The Top 1%",
    description:
      "Instead of guessing what works, we audit the Top Achievers in your niche (like Marcel generating £62k/mo in co-hosting). We diagnose the exact gap between your current funnel and theirs, and bridge it in 14 days.",
    deliverable: {
      type: "Benchmark Audit Matrix",
      title: "Top 1% Competitive Gap Analysis",
      points: [
        "Audits 10 recent posts to identify audience navigation flaws",
        "Reverse-engineers top competitor VSL hooks, offers, and backend economics",
        "Pure improvement roadmap: zero ego, 100% data-driven revenue uplift",
      ],
      previewCode: `Benchmark Target: Marcel (£62,000/mo) vs Jordan Pham (Current)
Funnel Gap Identified:
1. Lack of 7-min VSL -> Fixed in Day 4
2. Naked Calendly leak -> Fixed in Day 7
3. Missing digital upsell -> Deployed in Day 12
Projected Net Revenue Uplift: +£14,200/month`,
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
          <span className="badge-glass mb-4 text-rose-400 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 w-fit mx-auto">
            <EyeOff className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </span>
          <h2 className="heading-section font-bold tracking-tight text-white mb-5">
            The 5 Backend Engines We Build In The Shadows
          </h2>
          <p className="text-section leading-relaxed text-slate-400">
            Based on Kim Blanc's 2026 Shadow Operating methodology. We engineer the entire backend infrastructure while your audience only sees your smiling face and great content.
          </p>
        </StaggerReveal>

        {/* Interactive Capability Studio (UI-Craft) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: System Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
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
                      ? "glass-card border-rose-500/40 bg-gradient-to-r from-rose-950/20 via-slate-900/80 to-slate-900/90 shadow-lg"
                      : "bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/70"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white shadow-md shadow-rose-900/50"
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
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isActive ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" : "bg-white/5 text-slate-500"
                      }`}>
                        {system.badge}
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

          {/* Right: Live Deliverable Preview Terminal */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-rose-400" />
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Engine Output: {currentSystem.deliverable.title}
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Shadow Engine
              </span>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {currentSystem.description}
            </p>

            {/* Key Deliverable Points */}
            <div className="space-y-2.5 mb-6">
              {currentSystem.deliverable.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Code / Architecture Output Box */}
            <div className="rounded-xl bg-slate-950 p-4 border border-white/5 font-mono text-xs text-rose-200/90 overflow-x-auto shadow-inner">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/5 text-[10px] text-slate-500 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                <span className="ml-2">Live Backend Telemetry</span>
              </div>
              <pre className="text-[11px] leading-relaxed whitespace-pre-wrap">{currentSystem.deliverable.previewCode}</pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
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
