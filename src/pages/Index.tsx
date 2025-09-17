import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { CodeBlock, TerminalBlock } from "@/components/CodeBlock";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Smartphone, Globe } from "lucide-react";

const Index = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Web SDK v1.2.32
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              Native SDK v1.3.3
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Cavos Service Documentation
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Starknet wallet infrastructure with gasless transactions and Auth0
            authentication. Build powerful Web3 applications with ease.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instant Wallet Creation</h3>
                <p className="text-muted-foreground">
                  Deploy ArgentX smart accounts with a single API call
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Gasless Transactions</h3>
                <p className="text-muted-foreground">
                  Complete gas fee handling through AVNU paymaster
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Multi-Provider Authentication
                </h3>
                <p className="text-muted-foreground">
                  Support for Apple Sign In, Google OAuth and Auth0
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Multi-Platform SDKs</h3>
                <p className="text-muted-foreground">
                  Integration for Web and React Native
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Get Started
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/quick-start"
              className="group p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  Quick Start
                </h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                5-minute setup guide
              </p>
            </a>

            <a
              href="/sdk/web"
              className="group p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  Web SDK
                </h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                Complete API reference
              </p>
            </a>

            <a
              href="/sdk/native"
              className="group p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  React Native SDK
                </h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                Mobile development
              </p>
            </a>

            <a
              href="/guides/token-swapping"
              className="group p-6 rounded-lg border bg-card/50 hover:bg-card/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  Token Swapping
                </h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                AVNU DEX integration
              </p>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10">
          <h3 className="text-lg font-semibold mb-3">Ready to get started?</h3>
          <p className="text-muted-foreground mb-4">
            Register at{" "}
            <a
              href="https://services.cavos.xyz"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              services.cavos.xyz
            </a>{" "}
            to get your App ID and Organization Secret.
          </p>
        </div>
      </div>
    </DocLayout>
  );
};

export default Index;
