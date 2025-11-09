import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { AuthPage } from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Builder from "./pages/Builder";
import CareerGuide from "./pages/CareerGuide";
import Contact from "./pages/Contact";
import CoverLetterBuilder from "./pages/CoverLetterBuilder";
import FAQ from "./pages/FAQ";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PricingPage } from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Start from "./pages/Start";
import Support from "./pages/Support";
import Templates from "./pages/Templates";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start" element={<Start />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cover-letter-builder" element={<CoverLetterBuilder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
