import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";

/**
 * FactoryAI Landing Page
 *
 * Sections flow:
 * Hero → Logo Strip → Problem → Solution → Use Cases →
 * How It Works → Social Proof → Final CTA → Footer
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark overflow-x-hidden">
      <BackgroundShapes />
      <Navbar />
      <Hero />
      <LogoStrip />
      <Problem />
      <Solution />
      <UseCases />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
