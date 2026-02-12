import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";

const blockedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com"];

const Consultation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    title: "",
    volume: "",
    system: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Invalid email";
    } else {
      const domain = form.email.split("@")[1]?.toLowerCase();
      if (blockedDomains.includes(domain)) e.email = "Please use a work email";
    }
    if (!form.organization.trim()) e.organization = "Required";
    if (!form.title.trim()) e.title = "Required";
    if (!form.volume) e.volume = "Required";
    if (!form.system) e.system = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
      errors[field] ? "border-destructive" : "border-border/50"
    }`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <SectionWrapper className="spotlight">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Request Technical <span className="text-gradient-teal">Consultation</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                Discuss your trade documentation workflow with our engineering team.
              </p>
            </div>

            {submitted ? (
              <GlassCard hover={false} className="text-center glow-border">
                <div className="text-teal text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank you</h3>
                <p className="text-sm text-muted-foreground">Our team will be in touch within 1 business day.</p>
              </GlassCard>
            ) : (
              <GlassCard hover={false} className="glow-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className={inputClass("organization")}
                    />
                    {errors.organization && <p className="text-xs text-destructive mt-1">{errors.organization}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      className={inputClass("title")}
                    />
                    {errors.title && <p className="text-xs text-destructive mt-1">{errors.title}</p>}
                  </div>
                  <div>
                    <select
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className={inputClass("volume")}
                    >
                      <option value="">Monthly Document Volume</option>
                      <option value="<100">Less than 100</option>
                      <option value="100-500">100 – 500</option>
                      <option value="500-2000">500 – 2,000</option>
                      <option value="2000+">2,000+</option>
                    </select>
                    {errors.volume && <p className="text-xs text-destructive mt-1">{errors.volume}</p>}
                  </div>
                  <div>
                    <select
                      value={form.system}
                      onChange={(e) => setForm({ ...form, system: e.target.value })}
                      className={inputClass("system")}
                    >
                      <option value="">Current System</option>
                      <option value="manual">Manual / Spreadsheet</option>
                      <option value="erp">ERP System</option>
                      <option value="custom">Custom Software</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.system && <p className="text-xs text-destructive mt-1">{errors.system}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-xl hover:shadow-teal/25 transition-all"
                  >
                    Submit Request
                  </button>
                </form>
              </GlassCard>
            )}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
