
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SchemesPage from "./pages/SchemesPage";
import SchemeDetail from "./pages/SchemeDetail";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ChallengesPage from "./pages/ChallengesPage";
import ContactPage from "./pages/ContactPage";
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
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/scheme/:schemeId" element={<SchemeDetail />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
