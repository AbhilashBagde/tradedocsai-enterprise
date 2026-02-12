import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";

const segments = [
  {
    title: "Trade Intermediaries",
    outcomes: [
      "Automated invoice and packing list processing",
      "HS code classification with vector similarity",
      "Audit-ready structured exports",
      "Reduced manual data entry by 90%+",
    ],
  },
  {
    title: "Logistics & Freight Operators",
    outcomes: [
      "Multi-format document ingestion",
      "Real-time extraction and verification",
      "ERP and customs system compatible output",
      "Compliance-grade document trails",
    ],
  },
];

const UserSegments = () => (
  <SectionWrapper>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Built for <span className="text-gradient-teal">Your Workflow</span>
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {segments.map((seg, i) => (
        <GlassCard key={i} className="flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-4">{seg.title}</h3>
          <ul className="space-y-2.5 flex-1">
            {seg.outcomes.map((o, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-teal mt-0.5">→</span>
                {o}
              </li>
            ))}
          </ul>
          <Link
            to="/solutions"
            className="mt-6 text-sm font-medium text-teal hover:text-teal-glow transition-colors"
          >
            Learn more →
          </Link>
        </GlassCard>
      ))}
    </div>
  </SectionWrapper>
);

export default UserSegments;
