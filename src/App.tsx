import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

// Documentation Pages
import Index from "./pages/Index";
import QuickStart from "./pages/QuickStart";
import AuthOverview from "./pages/auth/Overview";
import WebSDK from "./pages/sdk/WebSDK";
import NativeSDK from "./pages/sdk/NativeSDK";
import AegisSDK from "./pages/sdk/AegisSDK";
import APIAuth from "./pages/api/AuthAPI";
import WalletAPI from "./pages/api/WalletAPI";
import TokenSwapping from "./pages/guides/TokenSwapping";
import { AuthDemo } from "./pages/AuthDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/auth/overview" element={<AuthOverview />} />
            <Route path="/sdk/web" element={<WebSDK />} />
            <Route path="/sdk/native" element={<NativeSDK />} />
            <Route path="/sdk/aegis" element={<AegisSDK />} />
            <Route path="/api/auth" element={<APIAuth />} />
            <Route path="/api/wallet" element={<WalletAPI />} />
            <Route path="/guides/token-swapping" element={<TokenSwapping />} />
            <Route path="/auth/demo" element={<AuthDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
