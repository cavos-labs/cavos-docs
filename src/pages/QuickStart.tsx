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
        
        <p>Integrate Cavos into your application in less than 5 minutes.</p>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Requirements:</strong> Node.js 16+, basic TypeScript knowledge, account at services.cavos.xyz
          </AlertDescription>
        </Alert>

        <h2>1. Install SDK</h2>
        
        <div className="my-6">
          <TerminalBlock command="npm install cavos-service-sdk" />
        </div>
        
        <p className="mb-4">For React Native:</p>
        <div className="my-6">
          <TerminalBlock command="npm install cavos-service-native" />
        </div>

        <h2>2. Get Credentials</h2>
        
        <p>Register at <a href="https://services.cavos.xyz">services.cavos.xyz</a> to get:</p>
        
        <ul>
          <li><strong>App ID</strong> - safe for client-side use</li>
          <li><strong>Organization Secret</strong> - for client-side authentication</li>
        </ul>

        <h2>3. Initialize</h2>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', 'your-app-id');`}
          />
        </div>

        <h2>4. Register User</h2>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`const result = await cavosAuth.signUp(
  'user@example.com',
  'MyPassword123',
  'your-org-secret'
);

console.log('Wallet address:', result.wallet.address);
console.log('Access token:', result.access_token);`}
          />
        </div>

        <p>This automatically creates a Starknet wallet for the user.</p>

        <h2>5. Execute Transactions</h2>
        
        <p className="mb-4">Send token transfers without gas:</p>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`const result = await cavosAuth.executeCalls(
  result.wallet.address,
  [{
    contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    entrypoint: 'transfer',
    calldata: ['0x123...', '1000000000000000000', '0']
  }],
  result.access_token
);

console.log('TX Hash:', result.txHash);`}
          />
        </div>
        
        <p>Gas fees are automatically covered.</p>

        <h2>Done!</h2>
        
        <p>You now have a working Starknet wallet application with authentication and gasless transactions.</p>

        <h2>Next Steps</h2>
        
        <ul>
          <li><a href="/sdk/web">Web SDK Reference</a> - Complete API documentation</li>
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