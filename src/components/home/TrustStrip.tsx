import { ShieldCheck, FileText, Cpu, Database } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const metrics = [
  { icon: Cpu, label: "99%+ Accuracy", desc: "AI-powered precision" },
  { icon: FileText, label: "Human-Verified", desc: "Expert validation layer" },
  { icon: Database, label: "Standards Compatible", desc: "Structured output" },
  { icon: ShieldCheck, label: "Secure Processing", desc: "Local AI execution" },
];

const TrustStrip = () => (
  <SectionWrapper className="section-padding-sm !py-12">
    <div className="glass-card p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border/40">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center px-4">
            <m.icon size={24} className="text-teal mb-3" />
            <div className="text-lg font-bold text-foreground">{m.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default TrustStrip;
