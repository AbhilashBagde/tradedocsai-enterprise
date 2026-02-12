import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { ShieldCheck, Cpu, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Architecture Philosophy",
    desc: "Built on a modular, stage-based processing pipeline where each layer operates independently. This ensures reliability, auditability, and the ability to evolve individual components without system-wide disruption.",
  },
  {
    icon: ShieldCheck,
    title: "Security Posture",
    desc: "Local AI execution ensures sensitive trade data never leaves your infrastructure. Document isolation, encrypted processing, and comprehensive audit logging meet enterprise compliance requirements.",
  },
  {
    icon: Workflow,
    title: "Operational Model",
    desc: "Designed for high-volume, mission-critical document workflows. Elastic scaling, configurable validation rules, and standards-compatible output ensure production-grade reliability.",
  },
];

const Company = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <SectionWrapper className="spotlight">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building the Infrastructure for{" "}
            <span className="text-gradient-teal">Intelligent Trade</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TradeDocsAI exists to eliminate the friction between complex trade documentation 
            and the structured data systems that power global commerce. We combine AI precision 
            with human oversight to deliver audit-ready accuracy at scale.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="gradient-navy">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <GlassCard key={i}>
              <p.icon size={28} className="text-teal mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
  </div>
);

export default Company;
