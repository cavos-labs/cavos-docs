import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { CodeBlock, TerminalBlock } from "@/components/CodeBlock";
import { Badge } from "@/components/ui/badge";


const Index = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="secondary">Web SDK v1.2.32</Badge>
          <Badge variant="secondary">Native SDK v1.3.3</Badge>
        </div>

        <h1>Cavos Service Documentation</h1>
        
        <p>Starknet wallet infrastructure with gasless transactions and Auth0 integration.</p>

        <h2>Features</h2>
        
        <ul>
          <li><strong>Instant Wallet Creation</strong> - Deploy ArgentX smart accounts with one API call</li>
          <li><strong>Gasless Transactions</strong> - Complete gas fee handling through AVNU paymaster</li>
          <li><strong>Multi-Provider Auth</strong> - Apple Sign In, Google OAuth, and Auth0 support</li>
          <li><strong>Cross-Platform SDKs</strong> - Web, React Native, and Node.js integration</li>
        </ul>

        <h2>Quick Example</h2>
        
        <TerminalBlock command="npm install cavos-service-sdk" />
        
        <CodeBlock
          language="typescript"
          code={`import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'YOUR_APP_ID');

const user = await cavosAuth.signUp(
  'user@example.com',
  'Password123',
  'YOUR_ORG_SECRET'
);

console.log('Wallet:', user.wallet.address);`}
        />

        <h2>Get Started</h2>
        
        <ul>
          <li><a href="/quick-start">Quick Start</a> - 5 minute setup guide</li>
          <li><a href="/installation">Installation</a> - SDK installation for all platforms</li>
          <li><a href="/sdk/web">Web SDK</a> - Complete API reference</li>
          <li><a href="/sdk/native">React Native SDK</a> - Mobile development</li>
          <li><a href="/guides/authentication">Authentication</a> - JWT and OAuth flow</li>
          <li><a href="/guides/token-swapping">Token Swapping</a> - AVNU DEX integration</li>
        </ul>
        
        <p>Register at <a href="https://services.cavos.xyz">services.cavos.xyz</a> to get your App ID and Organization Secret.</p>

      </div>
    </DocLayout>
  );
};

export default Index;
