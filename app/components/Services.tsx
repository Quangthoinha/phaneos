"use client";

import { useState } from "react";
import { 
  Compass, 
  Workflow, 
  Bot, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  Terminal, 
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

const services = [
  {
    id: "strategy",
    title: "AI Strategy & Operational Roadmap",
    icon: Compass,
    badge: "High-Margin Advisory",
    description:
      "We audit your client's existing workflows, identify highest-ROI bottlenecks, and craft a 90-day technical roadmap with clear cost-benefit metrics.",
    deliverable: {
      type: "Blueprint Document",
      title: "Enterprise AI Transformation Matrix",
      points: [
        "Current vs Automated Cost Analysis (£/month)",
        "Architecture diagrams ready for board approval",
        "ROI projection model and compliance signoff",
      ],
      previewCode: `// Example Architecture Scope
{
  "client_audit": "E-commerce Wholesale UK",
  "manual_cost_annual": "£142,000",
  "automated_solution": "Sub-60s Inbound Webhooks + RAG",
  "net_annual_savings": "£94,000",
  "payback_period": "38 days"
}`,
    },
  },
  {
    id: "automation",
    title: "Sub-60s Workflow & Lead Automation",
    icon: Workflow,
    badge: "Core Engineering",
    description:
      "Deploy robust n8n, Make, and webhook pipelines that qualify inbound leads, route CRM records, and trigger instant SMS/email outreach in under 60 seconds.",
    deliverable: {
      type: "Turnkey Integration",
      title: "Real-time Lead Ingestion Engine",
      points: [
        "Zero dropped leads across multi-channel funnels",
        "Bidirectional sync with HubSpot, Salesforce, or Airtable",
        "Automated Slack approval gates for sales reps",
      ],
      previewCode: `POST /api/v1/lead-webhook
Payload: { "name": "Enterprise Lead", "budget": "£50k+" }
Latency: 382ms | Status: 200 OK
-> AI Qualification: Passed (Score: 94/100)
-> Slack Alert Dispatched to Director in 12s`,
    },
  },
  {
    id: "agents",
    title: "Custom Autonomous Agents",
    icon: Bot,
    badge: "Autonomous Systems",
    description:
      "Build purpose-built agents with memory and tool execution for customer triage, RFP drafting, inventory forecasting, and specialized operations.",
    deliverable: {
      type: "Intelligent Agent",
      title: "Human-in-the-Loop Operational Agent",
      points: [
        "Autonomous reasoning grounded in client internal knowledge",
        "Deterministic guardrails against hallucinations",
        "Human review escalation triggers for high-stakes edge cases",
      ],
      previewCode: `Agent: "RFP Drafter Assistant"
Status: Connected to Secure Vector Store
Tools: [DocuSign, HubSpot, InternalPricingDB]
Verification: Human-in-the-Loop Review Passed
Execution Time: 4.2 minutes (down from 8 hours)`,
    },
  },
  {
    id: "llm",
    title: "Private Enterprise LLM & RAG",
    icon: Cpu,
    badge: "Enterprise Security",
    description:
      "Connect private knowledge bases into state-of-the-art models (Anthropic Claude 3.5, OpenAI, or local Llama) with zero-data-retention compliance.",
    deliverable: {
      type: "Vector Knowledge Base",
      title: "Zero-Retention Enterprise RAG",
      points: [
        "Zero training on client proprietary IP",
        "UK GDPR Article 28 data processing addendums",
        "Role-based permission controls per department",
      ],
      previewCode: `Security Protocol: UK GDPR Art. 28 Zero-PII
Data Pipeline: AES-256 encrypted at rest & in transit
Provider Tier: Anthropic / OpenAI Zero Data Retention
Model: Claude 3.5 Sonnet / Custom Embedding`,
    },
  },
  {
    id: "training",
    title: "Team AI Adoption & Enablement",
    icon: GraduationCap,
    badge: "Change Management",
    description:
      "We run hands-on workshops and build bespoke prompt libraries to ensure your client's team actually adopts and masters the deployed AI systems.",
    deliverable: {
      type: "Workshop & SOP Pack",
      title: "Agency Enablement Toolkit",
      points: [
        "Live interactive Zoom training sessions",
        "Standard Operating Procedures (SOPs) in Notion",
        "Ongoing prompt QA and maintenance support",
      ],
      previewCode: `Module 1: Prompt Architecture & Few-Shot Logic
Module 2: Error Triage & Quality Verification
Module 3: Security & Data Hygiene Protocol
Adoption Rate: 92% active daily usage across client team`,
    },
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentService = services[activeTab];

  return (
    <SectionReveal id="services" className="relative bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container-wide w-full">
        <StaggerReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-glass mb-4 text-rose-400 font-semibold text-xs uppercase tracking-wider">
            Technical Capabilities
          </span>
          <h2 className="heading-section font-bold tracking-tight text-white mb-5">
            Enterprise AI Deliverables, Handled For You
          </h2>
          <p className="text-section leading-relaxed text-slate-400">
            We deliver the deep technical engineering while your agency retains the commercial relationship, client trust, and 25% revenue split.
          </p>
        </StaggerReveal>

        {/* Interactive Capability Studio (UI-Craft) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: Service Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={service.id}
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
                        {service.title}
                      </h3>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isActive ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" : "bg-white/5 text-slate-500"
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {service.description}
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
                  Deliverable Spec: {currentService.deliverable.title}
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Production-Ready
              </span>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {currentService.description}
            </p>

            {/* Key Deliverable Points */}
            <div className="space-y-2.5 mb-6">
              {currentService.deliverable.points.map((pt) => (
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
                <span className="ml-2">System Output Preview</span>
              </div>
              <pre className="text-[11px] leading-relaxed whitespace-pre-wrap">{currentService.deliverable.previewCode}</pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Delivered 100% white-label or co-branded
              </span>
              <a
                href="#register"
                className="text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Request Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
