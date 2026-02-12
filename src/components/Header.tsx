import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Solutions", to: "/solutions" },
  { label: "Integrations", to: "/integrations" },
  { label: "Technology", to: "/technology" },
  { label: "Company", to: "/company" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="TradeDocsAI" className="h-9 w-9 object-contain" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            TradeDocs<span className="text-gradient-teal">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                location.pathname === link.to ? "text-teal" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/consultation"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground hover:shadow-lg hover:shadow-teal/20 transition-all"
          >
            Request Technical Consultation
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-header border-t border-border/30">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold gradient-teal text-primary-foreground"
            >
              Request Technical Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
