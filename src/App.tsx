import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Integrations from "./pages/Integrations";
import Technology from "./pages/Technology";
import Company from "./pages/Company";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/company" element={<Company />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
