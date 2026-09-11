"use client";

const engines = [
  {
    index: "01",
    title: "The 7-Minute Qualification VSL",
    tagline: "Stop losing 70% of viewers to raw bio links",
    description:
      "We write and direct a focused, high-retention 7-minute Video Sales Letter that introduces your unique mechanism. Instead of pushing viewers to a cold calendar, this asset pre-frames your value and qualifies buyers before they can book.",
    deliverables: [
      "Audience linguistic analysis & pain point extraction",
      "Retention-engineered script & visual storyboard",
      "Sub-60s multi-step pre-qualification intake gate",
      "Automated calendar qualification (eliminating tyre-kickers)",
    ],
  },
  {
    index: "02",
    title: "High-Margin Digital Product Architecture",
    tagline: "Package your deep expertise into £500 – £3,000 assets",
    description:
      "AdSense pays £3–£10 RPM. A single well-structured digital asset or cohort converts viewer trust into £500 to £3,000 purchases. We extract your methodology into interactive systems, Notion workspaces, or cohort curriculums.",
    deliverables: [
      "Proprietary framework packaging & curriculum design",
      "Notion OS client resource workspace",
      "High-converting checkout architecture via Stripe/Whop",
      "Zero-overhead automated delivery & member onboarding",
    ],
  },
  {
    index: "03",
    title: "Backstage Operations & Infrastructure",
    tagline: "You record. We handle the plumbing invisibly.",
    description:
      "Managing funnels, payment routing, Zapier/n8n automations, CRM pipelines, and customer support takes 20 hours a week. We run every backend system in the shadows under your brand, leaving you free to create.",
    deliverables: [
      "Stripe Connect direct split payouts at point of sale",
      "Automated email nurturing & multi-touch workflows",
      "Community management & client intake pipeline",
      "Full technical maintenance & continuous conversion optimization",
    ],
  },
];

export default function Engines() {
  return (
    <section id="engines" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            02 / Backend Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            The Three Backstage Engines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything we build is engineered specifically for your audience and brand. No generic templates, no cookie-cutter agency playbooks.
          </p>
        </div>

        <div className="space-y-16">
          {engines.map((engine) => (
            <div
              key={engine.index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-slate-900"
            >
              <div className="md:col-span-1 text-slate-400 font-mono text-sm">
                {engine.index}
              </div>

              <div className="md:col-span-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {engine.title}
                </h3>
                <p className="text-sm font-medium text-slate-400">
                  {engine.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {engine.description}
                </p>
              </div>

              <div className="md:col-span-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {engine.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
