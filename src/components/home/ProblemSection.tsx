import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { FileText, Cpu, Layers, ShieldCheck } from "lucide-react";

const problems = [
  { icon: FileText, title: "Non-Standard Formats", desc: "Trade documents arrive in inconsistent formats requiring manual interpretation." },
  { icon: Cpu, title: "Manual Entry Delays", desc: "Data re-keying introduces bottlenecks and slows downstream processing." },
  { icon: Layers, title: "Classification Risk", desc: "Incorrect HS code mapping leads to customs delays and financial penalties." },
  { icon: ShieldCheck, title: "Compliance Exposure", desc: "Audit gaps from unstructured data create regulatory vulnerability." },
];

const ProblemSection = () => (
  <SectionWrapper className="gradient-navy-reverse">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Manual Trade Documentation Is <span className="text-gradient-teal">Error-Prone</span>
      </h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {problems.map((p, i) => (
        <GlassCard key={i}>
          <p.icon size={28} className="text-teal mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </GlassCard>
      ))}
    </div>
  </SectionWrapper>
);

export default ProblemSection;
