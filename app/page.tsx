import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CaseDossier from "./components/CaseDossier";
import CalculatorSection from "./components/CalculatorSection";
import EnginesBento from "./components/EnginesBento";
import Model from "./components/Model";
import PartnerForm from "./components/PartnerForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const faqData = [
  {
    question: "What exactly is a Shadow Operator?",
    answer:
      "A Shadow Operator is your backstage business partner. You focus 100% of your creative energy on making high-quality content and building audience trust. In the shadows, we build your 7-minute VSL, eliminate raw calendar drop-offs with qualification gates, package your expertise into digital products, and manage the backend operations on a pure revenue-share basis.",
  },
  {
    question: "Why do you operate on revenue share instead of charging upfront retainers?",
    answer:
      "Because we have skin in the game. Traditional agencies charge £5,000 upfront regardless of whether you make a single penny. As a Shadow Operator, our incentives are 100% aligned with yours: we only profit when we successfully unlock new monthly cashflow for your brand.",
  },
  {
    question: "Do you take a cut of my existing AdSense, YouTube revenue, or brand deals?",
    answer:
      "Never. You keep 100% of your existing AdSense, brand sponsorships, and merchandise. We only share in the newly engineered backend revenue (VSL digital products, cohort communities, and backend high-ticket programs) that we build together.",
  },
  {
    question: "What size creator is the best fit for phaneos?",
    answer:
      "Our sweet spot is micro-creators and experts generating between 1,000 and 20,000 views per video with a consistent publishing cadence. You have genuine viewer trust, but lack the time or technical infrastructure to build backend monetization systems.",
  },
  {
    question: "Who owns the audience, community, and intellectual property?",
    answer:
      "You do. You retain 100% ownership of your social channels, email lists, domain, and content forever. Our bilateral partner agreement includes strict non-circumvention clauses ensuring your audience remains entirely yours.",
  },
  {
    question: "How long does it take from agreement to first launch?",
    answer:
      "Our rapid deployment standard is 14 days. We diagnose your niche opportunities, script your 7-minute VSL, build the qualified intake funnel, and set up automated payment routing in two weeks.",
  },
  {
    question: "How do payouts and revenue splits work?",
    answer:
      "We configure Stripe Connect to automatically split incoming customer transactions at the point of sale, ensuring complete financial transparency and instant payouts.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SmoothScroll />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset bg-[#05070a]"
      >
        <Hero />
        <CaseDossier />
        <CalculatorSection />
        <EnginesBento />
        <Model />
        <PartnerForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
