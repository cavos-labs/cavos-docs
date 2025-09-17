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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Globe, Code, Layers, Zap, Info } from "lucide-react";
import { SignInButtonExample } from "@/components/SignInButtonExample";

const pageContent = `
The Cavos Service Web SDK provides a complete Starknet wallet infrastructure solution for web applications. Built with TypeScript and optimized for modern web frameworks with automatic wallet deployment and gas fee abstraction.

## Key Features

- Complete TypeScript support with comprehensive type definitions
- Automatic ArgentX smart account deployment on Starknet
- AVNU paymaster integration for gas fee abstraction
- Auth0 integration with organization-based authentication
- CavosAuth class for authentication and wallet management
- Transaction execution and token swaps on Starknet
- Support for Sepolia testnet and Mainnet networks

## Installation and Setup

Get started with the Cavos Service Web SDK for web applications.
`;

const WebSDK = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Web SDK Documentation"
          pageContent={pageContent}
          pageUrl="/sdk/web"
        />

        <h1>Web SDK Documentation</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            v1.3.0
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Starknet</Badge>
          <Badge variant="outline">Framework Agnostic</Badge>
        </div>

        <p>
          The Cavos Service Web SDK provides complete Starknet wallet
          infrastructure and authentication for web applications. Built with
          TypeScript and featuring Auth0 integration, automatic wallet
          deployment, and AVNU paymaster for seamless user experiences.
        </p>

        <div className="responsive-grid section-spacing">
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Starknet Native</CardTitle>
              <CardDescription>Built for Starknet ecosystem</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">TypeScript</CardTitle>
              <CardDescription>Full type safety</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Layers className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Gas Abstraction</CardTitle>
              <CardDescription>AVNU paymaster integration</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-8 w-8 mx-auto text-warning mb-2" />
              <CardTitle className="text-base">Auth0 Ready</CardTitle>
              <CardDescription>Enterprise authentication</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Installation</h2>

        <TerminalBlock command="npm install cavos-service-sdk" />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Prerequisites:</strong> You must register your organization
            at
            <a
              href="https://services.cavos.xyz/"
              className="text-brand-primary hover:underline ml-1"
            >
              https://services.cavos.xyz/
            </a>{" "}
            to get your App ID and Organization Secret for client-side use.
          </AlertDescription>
        </Alert>

        <h2>Basic Usage</h2>

        <p>Simple React examples to get you started quickly:</p>

        <h3>1. User Registration</h3>
        <CodeBlock
          language="typescript"
          filename="Register.tsx"
          code={`import React, { useState } from 'react';
import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await cavosAuth.signUp(email, password, 'your-org-secret');
      console.log('User registered:', result.user);
      console.log('Wallet created:', result.wallet.address);
    } catch (error) {
      console.error('Registration failed:', error);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required 
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Register'}
      </button>
    </form>
  );
}`}
        />

        <h3>2. User Login</h3>
        <CodeBlock
          language="typescript"
          filename="Login.tsx"
          code={`import React, { useState } from 'react';
import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await cavosAuth.signIn(email, password, 'your-org-secret');
      console.log('User logged in:', result.user);
      console.log('Wallet address:', result.wallet.address);
      
      // Store tokens
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
    } catch (error) {
      console.error('Login failed:', error);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required 
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Signing in...' : 'Login'}
      </button>
    </form>
  );
}`}
        />

        <h3>3. Send Transaction</h3>
        <CodeBlock
          language="typescript"
          filename="Transaction.tsx"
          code={`import React, { useState } from 'react';
import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

function Transaction() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const sendTransaction = async () => {
    setLoading(true);
    
    const accessToken = localStorage.getItem('accessToken');
    const walletAddress = localStorage.getItem('walletAddress');
    
    try {
      const result = await cavosAuth.executeCalls(
        walletAddress,
        [{
          contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
          entrypoint: 'transfer',
          calldata: [recipient, amount, '0']
        }],
        accessToken
      );
      
      console.log('Transaction sent:', result.txHash);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
    
    setLoading(false);
  };

  return (
    <div>
      <input 
        value={recipient} 
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
      />
      <input 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={sendTransaction} disabled={loading}>
        {loading ? 'Sending...' : 'Send Transaction'}
      </button>
    </div>
  );
}`}
        />

        <h2>Social Authentication</h2>
        
        <p>Simple social login with Apple and Google:</p>

        <h3>Apple Sign In</h3>
        <CodeBlock
          language="typescript"
          filename="AppleAuth.tsx"
          code={`import React from 'react';
import { SignInWithApple } from 'cavos-service-sdk';

function AppleAuth() {
  return (
    <SignInWithApple
      appId="your-app-id"
      network="sepolia"
      finalRedirectUri="https://yourapp.com/auth/callback"
    />
  );
}`}
        />

        <h3>Google Sign In</h3>
        <CodeBlock
          language="typescript"
          filename="GoogleAuth.tsx"
          code={`import React from 'react';
import { SignInWithGoogle } from 'cavos-service-sdk';

function GoogleAuth() {
  return (
    <SignInWithGoogle
      appId="your-app-id"
      network="sepolia"
      finalRedirectUri="https://yourapp.com/auth/callback"
    />
  );
}`}
        />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> Social authentication redirects users to your callback URL 
            with authentication data. Handle the callback to complete the login process.
          </AlertDescription>
        </Alert>

        <h2>Key Methods</h2>

        <div className="space-y-4">
          <div>
            <h4 className="font-mono text-sm font-medium mb-2">
              signUp(email, password, orgSecret)
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Register new user with automatic wallet deployment
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">
              signIn(email, password, orgSecret)
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Login existing user
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">
              executeCalls(address, calls, accessToken)
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Send transactions on Starknet
            </p>
          </div>
        </div>

        <Alert className="my-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Token Swapping:</strong> Token swap functionality is currently 
            available in the React Native SDK only. Web SDK support is planned 
            for future releases. See the{" "}
            <a href="/guides/token-swapping" className="text-brand-primary hover:underline">
              Token Swapping Guide
            </a>{" "}
            for mobile implementation details.
          </AlertDescription>
        </Alert>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Build!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have everything you need to integrate Cavos Service into
              your web application.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/quick-start" className="text-brand-primary">
                  Quick Start
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/auth" className="text-brand-primary">
                  Authentication API
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/wallet" className="text-brand-primary">
                  Wallet API
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">
                  React Native SDK
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default WebSDK;
