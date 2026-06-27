import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CommissionTiers from "./components/CommissionTiers";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Trust from "./components/Trust";
import PartnerForm from "./components/PartnerForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const faqData = [
  {
    question: "What kind of agency is a good fit?",
    answer:
      "Agencies that already serve SME to enterprise clients and are fielding questions about AI, automation, or operational efficiency. You do not need an in-house AI team — we provide the enablement, sales material, and delivery expertise.",
  },
  {
    question: "What is the difference between referral and co-selling?",
    answer:
      "Referral (12%): you introduce a warm lead and we handle discovery, proposal, delivery, and billing. Co-selling (25%): we join client meetings and build the proposal together, while you keep the relationship and remain the visible partner throughout.",
  },
  {
    question: "Does the agency need to understand AI?",
    answer:
      "No. We provide pitch decks, one-page fit guides, email templates, and join early client calls with you. You only need enough context to spot the opportunity and make a credible introduction.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "You do. We never contact your client without your permission, and we do not sell directly to a registered prospect behind your back. The partner agreement includes relationship-protection and non-circumvention clauses for both referral and co-selling deals.",
  },
  {
    question: "Will the client know about phaneosAI?",
    answer:
      "In co-selling, phaneosAI appears as part of the delivery team. In referral deals, we can deliver under your agency brand if you prefer white-label delivery. Either way, the commercial relationship with the client stays with you.",
  },
  {
    question: "How does deal registration work?",
    answer:
      "Register a prospect through the partner portal or by email. Once accepted, that deal is protected for 90 days (renewable if actively pursued). If two partners register the same prospect, the first good-faith, complete registration generally wins.",
  },
  {
    question: "When and how is commission paid?",
    answer:
      "Commission is earned when the client contract is signed and the first payment is received. We pay within 30 days after the end of the month in which payment arrives, for the first 12 months of net client fees unless otherwise agreed.",
  },
  {
    question: "What happens if a client churns or gets a refund?",
    answer:
      "If a client payment is refunded or charged back, the commission paid on that amount is subject to clawback and will be offset against future commissions. Fraudulent or self-referral deals are void and may result in termination.",
  },
  {
    question: "How do you handle AI accuracy, hallucinations, and compliance?",
    answer:
      "Every client deliverable goes through human review before delivery. We do not use client data to train models, we use zero-data-retention provider tiers where available, and we exclude prohibited and high-risk use cases. Partners and end-clients are responsible for verifying AI outputs before relying on them for consequential decisions.",
  },
  {
    question: "What support do partners get?",
    answer:
      "Partner docs, email and pitch-deck templates, shared client calls for your first co-sale, a deal-registration process, and a direct partner contact. You can also request a 15-minute intro call after registering.",
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
        className="outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-inset"
      >
        <Hero />
        <CommissionTiers />
        <HowItWorks />
        <Services />
        <Trust />
        <PartnerForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
