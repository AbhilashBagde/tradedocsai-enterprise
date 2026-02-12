import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { FileText, Workflow, Layers, ShieldCheck } from "lucide-react";

const personas = [
  {
    icon: FileText,
    title: "Trade Intermediaries",
    desc: "Automate the processing of commercial invoices, packing lists, and certificates of origin across diverse supplier formats.",
    metrics: ["90% reduction in manual entry", "99%+ extraction accuracy", "Minutes, not hours"],
    outcomes: [
      "Eliminate format-specific manual templates",
      "Automated HS code classification via vector similarity",
      "Audit-ready structured exports for customs authorities",
      "Seamless integration with existing ERP workflows",
    ],
  },
  {
    icon: Workflow,
    title: "Logistics & Freight Operators",
    desc: "Streamline documentation workflows from shipment booking to customs clearance with intelligent document processing.",
    metrics: ["5x faster processing", "Zero re-keying errors", "Full audit trail"],
    outcomes: [
      "Multi-format ingestion from any carrier or shipper",
      "Real-time extraction and enrichment pipeline",
      "Customs declaration compatible output formats",
      "Compliance-grade document lineage tracking",
    ],
  },
  {
    icon: Layers,
    title: "Documentation Teams",
    desc: "Equip your documentation teams with AI-assisted tools that reduce repetitive work while maintaining complete control.",
    metrics: ["80% time savings", "Human-verified accuracy", "Complete traceability"],
    outcomes: [
      "Human-in-the-loop validation for confidence",
      "Batch processing for high-volume periods",
      "Configurable extraction rules per document type",
      "Standards-compatible export to downstream systems",
    ],
  },
];

const comparison = [
  { feature: "Document Processing", manual: "Hours per document", automated: "Minutes per document" },
  { feature: "Data Accuracy", manual: "Error-prone re-keying", automated: "99%+ AI + human verified" },
  { feature: "HS Classification", manual: "Manual lookup", automated: "Vector similarity matching" },
  { feature: "Audit Trail", manual: "Fragmented records", automated: "Complete digital lineage" },
  { feature: "Scalability", manual: "Linear headcount", automated: "Elastic processing capacity" },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <SectionWrapper className="spotlight">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solutions for <span className="text-gradient-teal">Every Workflow</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI pipelines for the teams that move global trade.
          </p>
        </div>
      </SectionWrapper>

      {personas.map((p, i) => (
        <SectionWrapper key={i} className={i % 2 === 0 ? "gradient-navy" : "gradient-navy-reverse"}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p.icon size={28} className="text-teal" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{p.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex gap-4 mb-8">
                {p.metrics.map((m, j) => (
                  <div key={j} className="glass-card p-3 text-center flex-1">
                    <div className="text-sm font-bold text-teal">{m}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {p.outcomes.map((o, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-teal mt-0.5">→</span> {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 flex items-center justify-center min-h-[250px]">
              <p.icon size={80} className="text-teal/20" />
            </div>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Manual vs <span className="text-gradient-teal">Automated</span>
          </h2>
        </div>
        <div className="glass-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left p-4 text-foreground font-semibold">Feature</th>
                <th className="text-left p-4 text-muted-foreground font-semibold">Manual Process</th>
                <th className="text-left p-4 text-teal font-semibold">TradeDocsAI</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-border/20 last:border-0">
                  <td className="p-4 text-foreground font-medium">{row.feature}</td>
                  <td className="p-4 text-muted-foreground">{row.manual}</td>
                  <td className="p-4 text-teal-glow">{row.automated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper className="gradient-navy">
        <GlassCard hover={false} className="text-center max-w-xl mx-auto glow-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to automate?</h2>
          <Link
            to="/consultation"
            className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-xl hover:shadow-teal/25 transition-all"
          >
            Request Technical Consultation
          </Link>
        </GlassCard>
      </SectionWrapper>
    </main>
    <Footer />
  </div>
);

export default Solutions;
