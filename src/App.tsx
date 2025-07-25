import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Documentation Pages
import Index from "./pages/Index";
import QuickStart from "./pages/QuickStart";
import Installation from "./pages/Installation";
import AuthOverview from "./pages/auth/Overview";
import WebSDK from "./pages/sdk/WebSDK";
import NativeSDK from "./pages/sdk/NativeSDK";
import APIAuth from "./pages/api/AuthAPI";
import WalletAPI from "./pages/api/WalletAPI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/auth/overview" element={<AuthOverview />} />
            <Route path="/sdk/web" element={<WebSDK />} />
            <Route path="/sdk/native" element={<NativeSDK />} />
            <Route path="/api/auth" element={<APIAuth />} />
            <Route path="/api/wallet" element={<WalletAPI />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
