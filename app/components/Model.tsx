"use client";

const comparisonRows = [
  {
    dimension: "Upfront Cost",
    agency: "£3,000 – £10,000 / month",
    course: "$497 – $1,997 one-time",
    phaneos: "£0 (Zero). We invest upfront.",
  },
  {
    dimension: "Incentive Alignment",
    agency: "Billable retainers regardless of results",
    course: "Platform profits when you buy the course",
    phaneos: "Pure rev-share: we only profit when you make money",
  },
  {
    dimension: "Execution Burden",
    agency: "You must review, manage, and coordinate",
    course: "100% on your shoulders to implement",
    phaneos: "Backstage execution: we build, write, and operate",
  },
  {
    dimension: "Audience & IP Ownership",
    agency: "Often tied to proprietary agency funnels",
    course: "Platform controls data & ecosystem",
    phaneos: "100% Creator owned forever (channels, list, IP)",
  },
  {
    dimension: "Time to Launch",
    agency: "60 – 90 days of onboarding meetings",
    course: "Indefinite DIY timeline",
    phaneos: "14-Day deployment standard",
  },
];

const guarantees = [
  {
    title: "100% Creator Ownership",
    description:
      "You retain permanent, exclusive ownership of your YouTube channel, social accounts, email list, community, and intellectual property. No lock-in, no shared equity.",
  },
  {
    title: "Zero Retainers, Ever",
    description:
      "We never bill for hours, software setups, or consulting. Our compensation is strictly a minority share of newly unlocked revenue generated through the systems we build.",
  },
  {
    title: "Discreet Shadow Mandate",
    description:
      "We operate backstage. Your audience sees your brand, your voice, and your authentic value. We never brand your assets with agency logos.",
  },
  {
    title: "Audience Trust First",
    description:
      "We refuse high-pressure tactics, misleading scarcity, or low-quality offers. Every asset built must enhance your long-term reputation with your community.",
  },
];

export default function Model() {
  return (
    <section id="model" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            03 / The Economic Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Aligned Incentives. Zero Retainers.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Traditional agency models are broken because agencies get paid whether you succeed or fail. We align 100% of our compensation with your revenue.
          </p>
        </div>

        {/* Comparison Matrix: Clean, high-contrast, editorial table */}
        <div className="overflow-x-auto mb-20 pb-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs uppercase tracking-wider">
                <th className="py-4 pr-6 font-normal">Model Dimension</th>
                <th className="py-4 px-6 font-normal">Traditional Agency</th>
                <th className="py-4 px-6 font-normal">DIY Course Guru</th>
                <th className="py-4 pl-6 font-semibold text-white">phaneos Shadow Partner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 text-slate-300">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">{row.dimension}</td>
                  <td className="py-4 px-6 text-slate-400">{row.agency}</td>
                  <td className="py-4 px-6 text-slate-400">{row.course}</td>
                  <td className="py-4 pl-6 text-emerald-400 font-medium">{row.phaneos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The 4 Bilateral Guarantees */}
        <div className="pt-16 border-t border-slate-900">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-8">
            The Shadow Operator Charter
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {guarantees.map((g, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-base font-semibold text-white tracking-tight">
                  {g.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
