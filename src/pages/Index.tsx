import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ProblemSection from "@/components/home/ProblemSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import PipelineSection from "@/components/home/PipelineSection";
import UserSegments from "@/components/home/UserSegments";
import SecuritySection from "@/components/home/SecuritySection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <CapabilitiesSection />
      <PipelineSection />
      <UserSegments />
      <SecuritySection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
