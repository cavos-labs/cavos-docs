import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { DocNavigation } from "@/components/DocNavigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Zap, Shield, Globe, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API = () => {
  const navigate = useNavigate();

  return (
    <DocLayout>
      <div className="doc-content">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary" className="px-3 py-1">
              API v1.0.0
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              OpenAPI 3.0.3
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Aegis Cavos API
          </h1>

          <p className="text-xl text-muted-foreground dark:text-white max-w-3xl leading-relaxed mb-6">
            Comprehensive wallet provider service for Starknet with Auth0 integration, 
            supporting multiple authentication methods including Apple Sign In and Google OAuth.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://services.cavos.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>Register at services.cavos.xyz</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://discord.gg/JzCj6vFtAT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Join Discord Community</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center dark:text-white">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Invisible Wallets</h3>
                <p className="text-muted-foreground dark:text-white">
                  No seed phrases, no browser extensions. Users authenticate with email or social login.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Gas Fee Abstraction</h3>
                <p className="text-muted-foreground dark:text-white">
                  Complete gas fee handling through AVNU paymaster integration.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Multi-Network Support</h3>
                <p className="text-muted-foreground dark:text-white">
                  Sepolia testnet and Mainnet environments with automatic switching.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Smart Contract Execution</h3>
                <p className="text-muted-foreground dark:text-white">
                  Execute transactions with simplified API and automatic signing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Info */}
        <div className="text-center p-8 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10 mb-8">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Authentication Required</h3>
          <p className="text-muted-foreground dark:text-white mb-4">
            Before using the Aegis Cavos API, you must register your organization at{" "}
            <a
              href="https://services.cavos.xyz"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              services.cavos.xyz
            </a>{" "}
            to get your App ID and API Secret.
          </p>
        </div>

        {/* Interactive Documentation Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Interactive Documentation</h2>
          
          <div className="border rounded-lg overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                Explore Our API
              </h3>
              
              <p className="text-muted-foreground dark:text-white mb-6 max-w-2xl mx-auto">
                Access our comprehensive interactive API documentation with live testing capabilities. 
                Try out endpoints directly in your browser and see real-time responses.
              </p>
              
              <div className="flex justify-center">
                <Button
                  onClick={() => navigate("/swagger")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Open Interactive Documentation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground dark:text-white">
                <p>Available endpoints: Authentication, Wallet Management, Smart Contracts, Analytics & more</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <DocNavigation
          previousPage={{
            title: "Aegis SDK",
            href: "/sdk/aegis",
            description: "Complete SDK documentation and examples"
          }}
          nextPage={{
            title: "Interactive Documentation",
            href: "/swagger",
            description: "Explore and test API endpoints"
          }}
        />
      </div>
    </DocLayout>
  );
};

export default API;