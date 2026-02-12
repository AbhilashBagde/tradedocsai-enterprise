import { ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const securityPoints = [
  "Local AI execution — data never leaves your infrastructure",
  "Controlled pipeline with deterministic processing stages",
  "Document isolation between tenants and processing runs",
  "Enterprise data handling standards and audit logging",
];

const SecuritySection = () => (
  <SectionWrapper className="relative overflow-hidden">
    {/* Spotlight */}
    <div className="absolute inset-0 spotlight pointer-events-none" />
    {/* Subtle circuit pattern */}
    <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />

    <div className="relative z-10 max-w-2xl mx-auto text-center">
      <ShieldCheck size={56} className="text-teal mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Enterprise-Grade <span className="text-gradient-teal">Security</span>
      </h2>
      <div className="space-y-4">
        {securityPoints.map((point, i) => (
          <div key={i} className="glass-card p-4 text-sm text-muted-foreground text-left">
            <span className="text-teal font-medium mr-2">✓</span>
            {point}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SecuritySection;
