import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="absolute inset-0 vignette pointer-events-none" />
    <div className="absolute inset-0 grid-overlay pointer-events-none" />

    <div className="container mx-auto relative z-10 px-4 lg:px-8 pt-20">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Left 60% */}
        <div className="lg:col-span-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
          >
            The Intelligence Layer for{" "}
            <span className="text-gradient-teal">Trade Documentation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            AI extraction and human-verified structuring for complex invoices and packing lists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/consultation"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-xl hover:shadow-teal/25 transition-all"
            >
              Request Technical Consultation
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-sm font-semibold border border-border/60 text-foreground hover:border-teal/50 hover:text-teal transition-all"
            >
              View Capabilities
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 flex items-center gap-4 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-teal" /> Secure AI Processing
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-teal" /> Human Verified
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Cpu size={14} className="text-teal" /> Audit Ready
            </span>
          </motion.div>
        </div>

        {/* Right 40% — floating glass cards */}
        <div className="lg:col-span-2 hidden lg:block relative h-[400px]">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 glass-card p-5 w-56 glow-border"
          >
            <div className="text-xs font-medium text-teal mb-2">Document Input</div>
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-steel w-full" />
              <div className="h-2 rounded bg-steel w-3/4" />
              <div className="h-2 rounded bg-steel w-5/6" />
            </div>
            <div className="mt-3 text-[10px] text-muted-foreground">Invoice #2003 — PDF</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-16 glass-card p-5 w-52 glow-border"
          >
            <div className="text-xs font-medium text-gold mb-2">✓ Verified</div>
            <div className="space-y-1.5 text-[10px] text-muted-foreground">
              <div>Consignee: Acme Corp</div>
              <div>HS Code: 8471.30</div>
              <div>Qty: 1000 units</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-4 right-4 glass-card p-5 w-48 glow-border"
          >
            <div className="text-xs font-medium text-teal-glow mb-2">Structured Export</div>
            <div className="font-mono text-[9px] text-muted-foreground leading-relaxed">
              {"{"}<br />
              &nbsp;&nbsp;"hs_code": "8471.30",<br />
              &nbsp;&nbsp;"quantity": 1000<br />
              {"}"}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
