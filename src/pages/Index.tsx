import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { DocPageActions } from "@/components/DocPageActions";
import { CodeBlock, TerminalBlock } from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Wallet, Zap, Globe, Download } from "lucide-react";
import {
  generateCompleteDocumentation,
  completeDocumentation,
} from "@/lib/documentation";

const pageContent = `
Cavos Service provides comprehensive wallet infrastructure for Starknet with Auth0 integration, enabling developers to deploy smart accounts with a single API call and complete gas fee abstraction.

## Key Features

- **Instant Wallet Creation**: Deploy ArgentX smart accounts with one API call
- **Gas Fee Abstraction**: Complete gas fee handling through AVNU paymaster integration
- **Multi-Provider Authentication**: Apple Sign In, Google OAuth, and Auth0 support
- **Organization Management**: Multi-tenant architecture with org-based isolation
- **Smart Contract Execution**: Secure transaction execution on Starknet
- **Cross-Platform SDKs**: Web, React Native, and Node.js integration
- **Secure Token Management**: Automatic token refresh with rotating tokens

## Getting Started

Register your organization at https://services.cavos.xyz to get your App ID and API Secret, then choose your integration path.
`;

const Index = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Cavos Service Documentation"
          pageContent={pageContent}
          pageUrl="/"
        />

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              v1.3.0
            </Badge>
            <Badge variant="outline">Latest</Badge>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            Cavos Service Documentation
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Next-generation wallet infrastructure for the Starknet ecosystem.
            Deploy smart accounts with complete gas fee abstraction through a
            simple API.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="gap-2">
              <Zap className="h-4 w-4" />
              Quick Start
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              View API Reference
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="responsive-grid-3 section-spacing">
          <Card className="border-card-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-brand-primary" />
                <CardTitle className="text-lg">
                  Instant Wallet Creation
                </CardTitle>
              </div>
              <CardDescription>
                Deploy ArgentX smart accounts on Starknet with a single API call
                and automatic gas fee handling.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-card-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Wallet className="h-5 w-5 text-brand-secondary" />
                <CardTitle className="text-lg">Multi-Provider Auth</CardTitle>
              </div>
              <CardDescription>
                Apple Sign In, Google OAuth, and Auth0 integration with
                organization-based isolation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-card-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-brand-accent" />
                <CardTitle className="text-lg">Cross-Platform SDKs</CardTitle>
              </div>
              <CardDescription>
                TypeScript SDKs for Web (cavos-service-sdk), React Native
                (cavos-service-native), and Node.js.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Example</h2>
          <p className="text-muted-foreground mb-6">
            Get started with Cavos Service in just a few lines of code:
          </p>

          <div className="space-y-6">
            <TerminalBlock
              command="npm install cavos-service-sdk"
              output="+ cavos-service-sdk@1.2.16
added 1 package in 2.3s"
            />

            <CodeBlock
              language="typescript"
              filename="app.ts"
              code={`import { CavosAuth } from 'cavos-service-sdk';

// Register a new user with wallet deployment
const user = await CavosAuth.signUp(
  'user@example.com',
  'Password123',
  'YOUR_ORG_SECRET',
  'sepolia'
);

// Login existing user
const authData = await CavosAuth.signIn(
  'user@example.com', 
  'Password123', 
  'YOUR_ORG_SECRET'
);

console.log('Wallet Address:', user.data.wallet.address);`}
            />
          </div>
        </div>

        {/* Documentation Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Documentation Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">For Developers</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/quick-start"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    Quick Start Guide
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Get up and running in 5 minutes
                  </p>
                </li>
                <li>
                  <a
                    href="/installation"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    SDK Installation
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Install Web, Native, and Node.js SDKs
                  </p>
                </li>
                <li>
                  <a
                    href="https://services.cavos.xyz"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    Organization Setup
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Register to get your App ID and API Secret
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Integration Guides</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/auth/apple"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    Apple Sign In Integration
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Web and React Native components
                  </p>
                </li>
                <li>
                  <a
                    href="/auth/google"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    Google OAuth Integration
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Complete OAuth2 flow setup
                  </p>
                </li>
                <li>
                  <a
                    href="/wallet/management"
                    className="text-brand-primary hover:underline font-medium"
                  >
                    Wallet Management
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Deploy and manage Starknet wallets
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support */}
        <Card className="bg-background-secondary border-card-border">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Get started by registering your organization and accessing our
              comprehensive documentation.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <a href="https://services.cavos.xyz" className="text-inherit">
                  Register Organization
                </a>
              </Button>
              <Button variant="outline" size="sm">
                <a
                  href="https://github.com/adrianvrj/cavos-service-sdk"
                  className="text-inherit"
                >
                  GitHub Repository
                </a>
              </Button>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Download Complete Documentation */}
        <Card className="bg-background-secondary border-card-border">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">
              Download Complete Documentation
            </h3>
            <p className="text-muted-foreground mb-4">
              Get all Cavos documentation in a single markdown file for offline
              reference or easy sharing. We have generated a llms-full.txt file
              that converts all our documentation into a single markdown
              document following the .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={generateCompleteDocumentation}
                className="gap-2"
                size="lg"
              >
                <Download className="h-4 w-4" />
                Download Complete Documentation
              </Button>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Build with AI:</strong> Our documentation follows the
                LLMs.txt standard, making it perfect for AI training and
                analysis. The llms-full.txt file contains all our documentation
                in a single, well-structured text file that can be easily
                consumed by language models and AI systems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default Index;
