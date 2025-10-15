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
            <strong>Requirements:</strong> Node.js 16+, basic TypeScript knowledge, account at services.cavos.xyz, and the latest Aegis SDK v0.1.13
          </AlertDescription>
        </Alert>

        <h2>1. Install Aegis SDK</h2>
        
        <div className="my-6">
          <TerminalBlock command="npm install @cavos/aegis" />
        </div>
        
        <p className="mb-4">The Aegis SDK works for both Web and React Native applications.</p>

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
            code={`import { AegisSDK } from '@cavos/aegis';

const aegis = new AegisSDK({
  network: 'sepolia',
  appId: 'your-app-id'
});`}
          />
        </div>

        <h2>4. Register User</h2>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`const result = await aegis.auth.register({
  email: 'user@example.com',
  password: 'MyPassword123',
  organizationSecret: 'your-org-secret'
});

console.log('Wallet address:', result.wallet.address);
console.log('Access token:', result.accessToken);`}
          />
        </div>

        <p>This automatically creates a Starknet wallet for the user using the Aegis SDK.</p>
        
        <h3>Key Features of Aegis SDK v0.1.13</h3>
        
        <ul>
          <li><strong>Unified API</strong> - Same SDK for Web and React Native</li>
          <li><strong>Gasless Transactions</strong> - Automatic gas fee handling via AVNU paymaster</li>
          <li><strong>Auth0 Integration</strong> - Seamless authentication flow</li>
          <li><strong>ArgentX Smart Accounts</strong> - Deploy smart wallets automatically</li>
          <li><strong>Token Swapping</strong> - Built-in DEX integration</li>
        </ul>

        <h2>5. Execute Transactions</h2>
        
        <p className="mb-4">Send token transfers without gas:</p>
        
        <div className="my-6">
          <CodeBlock
            language="typescript"
            code={`const result = await aegis.wallet.executeSession({
  walletAddress: result.wallet.address,
  calls: [{
    contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    entrypoint: 'transfer',
    calldata: ['0x123...', '1000000000000000000', '0']
  }],
  accessToken: result.accessToken
});

console.log('TX Hash:', result.txHash);`}
          />
        </div>
        
        <p>Gas fees are automatically covered.</p>

        <h2>Done!</h2>
        
        <p>You now have a working Starknet wallet application with authentication and gasless transactions.</p>

        <h2>Next Steps</h2>
        
        <ul>
          <li><a href="/auth/overview">Authentication Overview</a> - Complete auth flow details</li>
          <li><a href="/sdk/aegis">Aegis SDK Documentation</a> - Full API reference</li>
          <li><a href="/auth/demo">Auth Demo</a> - Interactive authentication example</li>
        </ul>

        <p>Register your organization at <a href="https://services.cavos.xyz">services.cavos.xyz</a> to get started.</p>

      </div>
    </DocLayout>
  );
};

export default QuickStart;