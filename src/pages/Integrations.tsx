import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { Link as LinkIcon, Database, Workflow, Layers } from "lucide-react";

const integrations = [
  { icon: Database, title: "Tally Compatible Output", desc: "Generate structured output compatible with Tally and similar accounting platforms." },
  { icon: Workflow, title: "Tax Report Formats", desc: "Export data in formats ready for GST, VAT, and customs duty reporting systems." },
  { icon: Layers, title: "ERP Structured Export", desc: "Standards-compliant exports for SAP, Oracle, and other enterprise resource planning systems." },
  { icon: LinkIcon, title: "API Access", desc: "RESTful API endpoints for programmatic integration with your existing technology stack." },
];

const Integrations = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <SectionWrapper className="spotlight">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            System <span className="text-gradient-teal">Integrations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless compatibility with your existing enterprise infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {integrations.map((item, i) => (
            <GlassCard key={i}>
              <item.icon size={28} className="text-teal mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="gradient-navy">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Developer-Ready <span className="text-gradient-teal">API</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Integrate TradeDocsAI into your existing workflows with our comprehensive REST API. 
              Full documentation, webhook support, and sandbox environments.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-xl hover:shadow-teal/25 transition-all"
            >
              Request API Access
            </Link>
          </div>
          <div className="glass-card p-6 font-mono text-xs text-muted-foreground leading-relaxed glow-border">
            <div className="text-teal mb-2">// Extract document data</div>
            <div>POST /api/v1/documents/extract</div>
            <div className="mt-3 text-teal">// Response</div>
            <div>{"{"}</div>
            <div>&nbsp;&nbsp;"status": "verified",</div>
            <div>&nbsp;&nbsp;"data": {"{"}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;"invoice_no": "INV-2003",</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;"hs_code": "8471.30",</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;"consignee": "Acme Corp"</div>
            <div>&nbsp;&nbsp;{"}"}</div>
            <div>{"}"}</div>
          </div>
        </div>
      </SectionWrapper>
    </main>
    <Footer />
  </div>
);

export default Integrations;
