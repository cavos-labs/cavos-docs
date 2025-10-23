import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { DocPageActions } from "@/components/DocPageActions";
import { CodeBlock, TerminalBlock } from "@/components/CodeBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ExternalLink,
  Github,
  Code,
  Zap,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Info,
} from "lucide-react";

const pageContent = `
Complete React Native mobile application template with **Aegis SDK** integration for Starknet wallet functionality.

## Features

- **Wallet Creation** - Create new Starknet wallets directly in the app
- **Multiple Authentication** - Email/password, Apple Sign-In, and Google Sign-In
- **Balance Management** - View ETH and token balances in real-time
- **Transaction Execution** - Send and approve transactions on Starknet
- **Secure Storage** - Private keys stored securely on device

## Quick Start

1. **Clone the repository**
2. **Install dependencies** with \`npm install\`
3. **Configure your App ID** from [aegis.cavos.xyz](https://aegis.cavos.xyz)
4. **Start development** with \`npx expo start\`

Perfect for developers who want to quickly integrate Aegis SDK into their React Native applications.
`;

const MobileTemplate = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Mobile Template"
          pageContent={pageContent}
          pageUrl="/templates/mobile"
        />

        <h1>Mobile Template</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            React Native
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Expo</Badge>
          <Badge variant="outline">Aegis SDK</Badge>
        </div>

        <p>
          A complete React Native mobile application template that demonstrates
          how to integrate the <strong> Aegis SDK</strong> for Starknet wallet
          functionality. This template provides a production-ready foundation
          for building mobile Web3 applications with seamless wallet management.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Perfect for:</strong> Developers who want to quickly
            integrate Aegis SDK into their React Native mobile applications with
            comprehensive wallet functionality.
          </AlertDescription>
        </Alert>

        {/* Repository Card */}
        <Card className="my-8 border-brand-primary/20 bg-brand-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Aegis SDK Example Application
            </CardTitle>
            <CardDescription>
              Complete React Native template with Aegis SDK integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Expo</Badge>
              </div>
              <Button
                asChild
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 shadow-md"
              >
                <a
                  href="https://github.com/cavos-labs/aegis-sdk-example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800"
                >
                  <ExternalLink className="h-4 w-4 text-gray-800" />
                  Visit Repo
                </a>
              </Button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
              <div className="text-gray-600 dark:text-gray-400">
                Repository URL:
              </div>
              <div className="text-brand-primary">
                https://github.com/cavos-labs/aegis-sdk-example
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Features</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-5 w-5 text-brand-primary" />
                Wallet Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Create new Starknet wallets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Gasless wallet deployment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Secure private key storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Device-based security
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Smartphone className="h-5 w-5 text-brand-secondary" />
                Mobile Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Real-time balance queries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Transaction execution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Multiple authentication methods
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Intuitive mobile interface
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2>Quick Start</h2>

        <div className="space-y-6 my-8">
          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div>
              <h4 className="font-medium">Clone the Repository</h4>
              <p className="text-sm text-muted-foreground">
                Get the complete mobile template code
              </p>
              <TerminalBlock command="git clone https://github.com/cavos-labs/aegis-sdk-example.git" />
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div>
              <h4 className="font-medium">Install Dependencies</h4>
              <p className="text-sm text-muted-foreground">
                Install all required packages
              </p>
              <TerminalBlock command="npm install" />
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div>
              <h4 className="font-medium">Configure Your App ID</h4>
              <p className="text-sm text-muted-foreground">
                Get your App ID from aegis.cavos.xyz and configure it
              </p>
              <CodeBlock
                language="bash"
                filename=".env.local"
                code={`NEXT_PUBLIC_AEGIS_APP_ID=your-app-id-here`}
              />
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              4
            </div>
            <div>
              <h4 className="font-medium">Start Development</h4>
              <p className="text-sm text-muted-foreground">
                Launch the Expo development server
              </p>
              <TerminalBlock command="npx expo start" />
            </div>
          </div>
        </div>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success flex items-center">
              Ready to Get Started?
              <ArrowRight className="h-4 w-4 ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>
                <strong>1. Clone the repository</strong> from GitHub
              </div>
              <div>
                <strong>2. Install dependencies</strong> with npm install
              </div>
              <div>
                <strong>3. Get your App ID</strong> from{" "}
                <a
                  href="https://aegis.cavos.xyz"
                  className="text-brand-primary hover:underline"
                >
                  aegis.cavos.xyz
                </a>
              </div>
              <div>
                <strong>4. Configure and run</strong> your development server
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                asChild
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 shadow-md"
              >
                <a
                  href="https://github.com/cavos-labs/aegis-sdk-example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800"
                >
                  <Github className="h-4 w-4 text-gray-800" />
                  View Repository
                </a>
              </Button>
              <Button
                asChild
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 shadow-md"
              >
                <a
                  href="https://aegis.cavos.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800"
                >
                  <ExternalLink className="h-4 w-4 text-gray-800" />
                  Get App ID
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default MobileTemplate;
