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
        
        <p>Install Cavos Service SDKs for Web and React Native.</p>

        <h2>Web SDK</h2>
        <div className="my-6">
          <TerminalBlock command="npm install cavos-service-sdk" />
        </div>
        
        <h2>React Native SDK</h2>
        <div className="my-6">
          <TerminalBlock command="npm install cavos-service-native" />
        </div>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Register at <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">services.cavos.xyz</a> to get your App ID and Organization Secret.
          </AlertDescription>
        </Alert>

        <h2>Basic Usage</h2>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

const user = await cavosAuth.signUp(
  'user@example.com',
  'MyPassword123',
  'your-org-secret'
);`}
          />
        </div>

        <h2>Environment Variables</h2>
        
        <p className="mb-4"><strong>Client-side (.env.local):</strong></p>
        <div className="my-6">
          <CodeBlock
            language="bash"
            code={`# Client-side environment variables
REACT_APP_CAVOS_APP_ID=your-app-id
REACT_APP_CAVOS_ORG_SECRET=your-org-secret
REACT_APP_CAVOS_NETWORK=sepolia`}
          />
        </div>

        <h2>Verification</h2>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`// Verify installation
import { CavosAuth } from 'cavos-service-sdk';

console.log('Cavos SDK installed correctly');

const cavosAuth = new CavosAuth('sepolia', 'test-app-id');
console.log('SDK initialized:', !!cavosAuth);`}
          />
        </div>

        <p>Next: <a href="/quick-start">Quick Start Guide</a></p>
      </div>
    </DocLayout>
  );
};

export default Installation;