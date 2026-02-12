import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { Cpu, Database, ShieldCheck, Workflow } from "lucide-react";

const capabilities = [
  { icon: Cpu, title: "Intelligent OCR + LLM", desc: "Multi-modal extraction pipeline combining traditional OCR with local language model parsing for complex trade documents." },
  { icon: Database, title: "Vector Classification Support", desc: "Similarity-based HS code classification using vector embeddings for accurate product categorization." },
  { icon: ShieldCheck, title: "Human Verification", desc: "Structured human-in-the-loop validation ensuring audit-ready accuracy before export." },
  { icon: Workflow, title: "Structured Exports", desc: "Standards-compatible output formats for ERP systems, tax authorities, and compliance platforms." },
];

const CapabilitiesSection = () => (
  <SectionWrapper className="spotlight">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Purpose-Built <span className="text-gradient-teal">AI Pipeline</span>
      </h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {capabilities.map((c, i) => (
        <GlassCard key={i}>
          <c.icon size={28} className="text-teal mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
        </GlassCard>
      ))}
    </div>
  </SectionWrapper>
);

export default CapabilitiesSection;
