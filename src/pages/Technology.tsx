import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import { Cpu, Database, Layers, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const layers = [
  { icon: Cpu, title: "OCR Layer", desc: "Advanced optical character recognition handles diverse document formats including scanned PDFs, images, and mixed-format trade documents with high fidelity." },
  { icon: Database, title: "LLM Extraction", desc: "Local language models parse and extract structured fields from unstructured document content, understanding context and relationships within trade data." },
  { icon: Layers, title: "Vector Similarity", desc: "Embedding-based classification maps extracted data to standardized codes and categories using semantic similarity rather than brittle rule-based matching." },
  { icon: ShieldCheck, title: "Human Verification", desc: "Configurable human-in-the-loop stage for validation, correction, and approval before data enters downstream systems." },
  { icon: Workflow, title: "Export Engine", desc: "Flexible output generation producing ERP-compatible, tax-authority-ready, and API-consumable structured data formats." },
];

const Technology = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <SectionWrapper className="spotlight">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Architecture <span className="text-gradient-teal">Overview</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A purpose-built AI pipeline engineered for trade document complexity.
          </p>
        </div>
      </SectionWrapper>

      {layers.map((layer, i) => (
        <SectionWrapper key={i} className={i % 2 === 0 ? "gradient-navy" : ""}>
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                  <layer.icon size={20} className="text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{layer.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{layer.desc}</p>
            </div>
            <div className={`glass-card p-12 flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <layer.icon size={64} className="text-teal/20" />
            </div>
          </motion.div>
        </SectionWrapper>
      ))}
    </main>
    <Footer />
  </div>
);

export default Technology;
