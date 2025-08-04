import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { CodeBlock, TerminalBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Info } from 'lucide-react';


const QuickStart = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <h1>Quick Start</h1>
        
        <p>Get a Starknet wallet app running in 5 minutes.</p>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Need:</strong> Node.js 16+, TypeScript knowledge, Cavos account at services.cavos.xyz
          </AlertDescription>
        </Alert>

        <h2>1. Install</h2>
        
        <TerminalBlock command="npm install cavos-service-sdk" />
        
        <p>For React Native:</p>
        <TerminalBlock command="npm install cavos-service-native" />

        <h2>2. Get Credentials</h2>
        
        <p>Register at <a href="https://services.cavos.xyz">services.cavos.xyz</a> to get:</p>
        
        <ul>
          <li><strong>App ID</strong> - use in frontend</li>
          <li><strong>Organization Secret</strong> - use in backend only</li>
        </ul>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Never put Organization Secret in frontend code.
          </AlertDescription>
        </Alert>

        <h2>3. Initialize</h2>
        
        <CodeBlock
          language="typescript"
          code={`import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');`}
        />

        <h2>4. Register User</h2>
        
        <CodeBlock
          language="typescript"
          code={`const result = await cavosAuth.signUp(
  'user@example.com',
  'password123',
  'your-org-secret'  // backend only!
);

console.log('Wallet address:', result.wallet.address);
console.log('Access token:', result.accessToken);`}
        />

        <p>This automatically creates a Starknet wallet for the user.</p>

        <h2>5. Execute Transactions</h2>
        
        <p>Send gasless token transfers:</p>
        
        <CodeBlock
          language="typescript"
          code={`const result = await cavosAuth.executeCalls(
  result.wallet.address,
  [{
    contractAddress: '0x04718f99c9afd5e0c9c7d3c3c4ae7a7c3b2f6b0e2',
    entrypoint: 'transfer',
    calldata: ['0x123...', '1000000000000000000', '0']
  }],
  result.accessToken
);

console.log('TX hash:', result.transactionHash);`}
        />
        
        <p>Gas fees are automatically covered.</p>

        <h2>Done!</h2>
        
        <p>You now have a working Starknet wallet app with authentication and gasless transactions.</p>

        <h2>Next Steps</h2>
        
        <ul>
          <li><a href="/sdk/web">Web SDK Reference</a> - Complete API docs</li>
          <li><a href="/sdk/native">React Native SDK</a> - Mobile development</li>
          <li><a href="/guides/token-swapping">Token Swapping</a> - AVNU DEX integration</li>
          <li><a href="/guides/authentication">Authentication Guide</a> - JWT flow details</li>
        </ul>

        <p>Register your organization at <a href="https://services.cavos.xyz">services.cavos.xyz</a> to get started.</p>

      </div>
    </DocLayout>
  );
};

export default QuickStart;