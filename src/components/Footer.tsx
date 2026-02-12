import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/company" },
      { label: "Technology", to: "/technology" },
      { label: "Careers", to: "#" },
      { label: "Contact", to: "/consultation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Document AI", to: "/solutions" },
      { label: "Workflow Automation", to: "/solutions" },
      { label: "Integrations", to: "/integrations" },
      { label: "API", to: "/integrations" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "#" },
      { label: "Terms", to: "#" },
      { label: "Security", to: "#" },
      { label: "Compliance", to: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", to: "#" },
      { label: "Twitter", to: "#" },
      { label: "YouTube", to: "#" },
      { label: "GitHub", to: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="gradient-navy-reverse border-t" style={{ borderColor: "hsl(174 63% 47% / 0.15)" }}>
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="TradeDocsAI" className="h-6 w-6" />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TradeDocsAI — All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
