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

export default function Home() {
  return (
    <>
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
