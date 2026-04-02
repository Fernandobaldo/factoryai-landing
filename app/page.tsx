import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import TechnicalProcess from "@/components/TechnicalProcess";
import DashboardMock from "@/components/DashboardMock";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";

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
      <TechnicalProcess />
      <DashboardMock />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
