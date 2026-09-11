import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CalculatorSection from "./components/CalculatorSection";
import Model from "./components/Model";
import PartnerForm from "./components/PartnerForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const faqData = [
  {
    question: "What exactly does phaneos do for creators?",
    answer:
      "We are a backend monetization partner. You focus 100% of your time on creating great YouTube videos. Behind the scenes, we write and produce your 7-minute video sales page, package your expertise into digital products (courses, cohorts, or Notion templates), and manage billing, tech, and customer onboarding on pure revenue share.",
  },
  {
    question: "Why do you work on revenue share instead of charging upfront retainers?",
    answer:
      "Because we believe agencies that charge £5,000 upfront regardless of results have broken incentives. As your partner, we only make money when you make money: you get 70% of new sales, and we get 30%. If the launch fails, you owe us nothing.",
  },
  {
    question: "Do you take any cut of my existing AdSense or brand sponsorships?",
    answer:
      "Never. You keep 100% of your existing AdSense, YouTube ad revenue, brand sponsorships, and merchandise. We only share in the newly built backend offers that we create together.",
  },
  {
    question: "What size creator is the best fit?",
    answer:
      "We partner with creators and experts generating between 1,000 and 50,000 views per video with an engaged audience in business, productivity, tech, design, finance, health, or professional skills. You have audience trust, but lack the time or interest to build sales funnels.",
  },
  {
    question: "Who owns the products, audience, and email list?",
    answer:
      "You do. 100%. You retain full ownership of your YouTube channel, social handles, email subscriber list, and intellectual property forever. Our agreement ensures your audience remains completely yours.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Our standard turnaround is 14 days from agreement. We research your audience, write your 7-minute VSL, build the checkout funnel, and connect payment routing in two weeks.",
  },
  {
    question: "How do payouts work?",
    answer:
      "We set up Stripe Connect so payments split automatically at the moment of sale. 70% goes straight to your bank account, and 30% goes to phaneos. Complete transparency on every transaction.",
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
        className="outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-inset bg-[#090a0f]"
      >
        <Hero />
        <HowItWorks />
        <CalculatorSection />
        <Model />
        <PartnerForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
