import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const steps = [
  { label: "Ingest", desc: "Document intake" },
  { label: "Extract", desc: "OCR + LLM parsing" },
  { label: "Enrich", desc: "Vector classification" },
  { label: "Verify", desc: "Human validation" },
  { label: "Export", desc: "Structured output" },
];

const PipelineSection = () => (
  <SectionWrapper className="gradient-navy">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        End-to-End <span className="text-gradient-teal">Processing Pipeline</span>
      </h2>
    </div>

    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
      {/* Connecting line */}
      <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-teal/20 via-teal/60 to-teal/20" />

      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-teal/30 glow-border mb-3">
            <span className="text-lg font-bold text-teal">{i + 1}</span>
          </div>
          <div className="text-sm font-semibold text-foreground">{step.label}</div>
          <div className="text-xs text-muted-foreground mt-1">{step.desc}</div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PipelineSection;
