import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <div
    className={`glass-card p-8 ${
      hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/10 hover:border-teal/30" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
