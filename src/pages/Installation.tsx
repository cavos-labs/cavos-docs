import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { CodeBlock, TerminalBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';


const Installation = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <h1>Installation</h1>
        
        <p>Install Cavos Service SDKs for Web, React Native, and Node.js.</p>

        <h2>Web SDK</h2>
        <TerminalBlock command="npm install cavos-service-sdk" />
        
        <h2>React Native SDK</h2>
        <TerminalBlock command="npm install cavos-service-native" />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Register at <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">services.cavos.xyz</a> to get your App ID and Organization Secret.
          </AlertDescription>
        </Alert>

        <h2>Basic Usage</h2>
        
        <CodeBlock
          language="typescript"
          code={`import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

const user = await cavosAuth.signUp(
  'user@example.com',
  'password123',
  'your-org-secret'
);`}
        />

        <p>Next: <a href="/quick-start">Quick Start Guide</a></p>
      </div>
    </DocLayout>
  );
};

export default Installation;