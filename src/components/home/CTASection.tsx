import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";

const CTASection = () => (
  <SectionWrapper className="gradient-navy">
    <div className="max-w-xl mx-auto">
      <GlassCard hover={false} className="text-center glow-border">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Schedule a Technical Review
        </h2>
        <p className="text-muted-foreground mb-8">
          Discuss your trade documentation workflow with our engineering team.
        </p>
        <Link
          to="/consultation"
          className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-xl hover:shadow-teal/25 transition-all"
        >
          Request Technical Consultation
        </Link>
      </GlassCard>
    </div>
  </SectionWrapper>
);

export default CTASection;
