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
import { Shield, Smartphone, Zap, Globe, Code, Layers, Info, ArrowRight } from "lucide-react";

const pageContent = `
The Aegis SDK provides a simple and powerful solution for Starknet wallet management with in-app wallets and gasless transactions. Built with TypeScript for React Native/Expo and Node.js environments with automatic wallet deployment and AVNU paymaster integration.

## Key Features

- Complete TypeScript support with comprehensive type definitions
- In-app wallet creation and management (no external wallet required)
- AVNU paymaster integration for gasless transactions
- React Native hooks and context for easy integration
- Support for both Sepolia testnet and Mainnet networks
- Client-side signing with secure key storage
- Automatic wallet deployment and account abstraction
- Token transfers, swaps, and NFT management
- Privacy-first analytics with no private data transmitted

## Installation and Setup

Get started with the Aegis SDK for mobile-first Starknet applications.
`;

const AegisSDK = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Aegis SDK Documentation"
          pageContent={pageContent}
          pageUrl="/sdk/aegis"
        />

        <h1>Aegis SDK Documentation</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            v0.1.5
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">React Native</Badge>
          <Badge variant="outline">Starknet</Badge>
          <Badge variant="outline">Gasless</Badge>
        </div>

        <p>
          The Aegis SDK provides simple SDK for Starknet wallets with gasless transactions.
          Works with both <strong>React Native/Expo</strong> and <strong>React web applications</strong>,
          featuring in-app wallet creation, secure key storage, and seamless user experiences.
        </p>

        <div className="responsive-grid section-spacing">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">In-App Wallets</CardTitle>
              <CardDescription>No external wallet required</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-8 w-8 mx-auto text-warning mb-2" />
              <CardTitle className="text-base">Gasless Transactions</CardTitle>
              <CardDescription>AVNU paymaster integration</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Smartphone className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Cross Platform</CardTitle>
              <CardDescription>React Native, Expo & React</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">TypeScript</CardTitle>
              <CardDescription>Full type safety</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Installation</h2>

        <TerminalBlock command="npm install @cavos/aegis" />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Get your App ID:</strong> Register at{" "}
            <a
              href="https://aegis.cavos.xyz"
              className="text-brand-primary hover:underline"
            >
              https://aegis.cavos.xyz
            </a>{" "}
            to get your unique App ID for authentication and analytics.
          </AlertDescription>
        </Alert>

        <h2>Quick Start</h2>

        <Tabs defaultValue="react-native" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="react-native">React Native/React</TabsTrigger>
            <TabsTrigger value="basic">Basic SDK</TabsTrigger>
          </TabsList>

          <TabsContent value="react-native" className="space-y-4">
            <h3>React Native/React with Hooks (Recommended)</h3>

            <h4>1. Setup Provider</h4>
            <CodeBlock
              language="typescript"
              filename="_layout.tsx"
              code={`import { AegisProvider } from '@cavos/aegis';

export default function App() {
  return (
    <AegisProvider
      config={{
        network: 'SN_SEPOLIA',
        appName: 'MyApp',
        appId: 'your-unique-app-id',
        paymasterApiKey: 'your-avnu-api-key',
        enableLogging: true
      }}
    >
      {/* Your app components */}
    </AegisProvider>
  );
}`}
            />

            <h4>2. Use in Components</h4>
            <CodeBlock
              language="typescript"
              filename="WalletButton.tsx"
              code={`import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAegis } from '@cavos/aegis';

function WalletButton() {
  const { isConnected, currentAddress, deployWallet, disconnect } = useAegis();

  if (isConnected) {
    return (
      <View>
        <Text>Connected: {currentAddress}</Text>
        <TouchableOpacity onPress={disconnect}>
          <Text>Disconnect</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={deployWallet}>
      <Text>Create Wallet</Text>
    </TouchableOpacity>
  );
}`}
            />
          </TabsContent>

          <TabsContent value="basic" className="space-y-4">
            <h3>Basic SDK Usage</h3>

            <CodeBlock
              language="typescript"
              filename="sdk-example.ts"
              code={`import { AegisSDK } from '@cavos/aegis';

const sdk = new AegisSDK({
  network: 'SN_SEPOLIA',
  appName: 'MyApp',
  appId: 'your-unique-app-id',
  paymasterApiKey: 'your-avnu-api-key',
  enableLogging: true
});

// Deploy new wallet (generates + deploys + connects)
const privateKey = await sdk.deployAccount();
// 🔐 Store this privateKey securely!

// Or connect with existing key
await sdk.connectAccount('0x123...your_private_key');`}
            />
          </TabsContent>
        </Tabs>

        <h2>Core Operations</h2>

        <h3>Execute Transactions</h3>
        <CodeBlock
          language="typescript"
          filename="transactions.ts"
          code={`// Single transaction (gasless)
const result = await sdk.execute(
  '0x123...contract_address',
  'transfer',
  ['0x456...recipient', '1000000000000000000'] // 1 ETH in wei
);

console.log('Transaction:', result.transactionHash);

// Multiple transactions in one batch
const calls = [
  {
    contractAddress: '0x123...token',
    entrypoint: 'approve',
    calldata: ['0x456...spender', '1000000000000000000']
  },
  {
    contractAddress: '0x789...dex',
    entrypoint: 'swap',
    calldata: ['0x123...token_in', '0xabc...token_out', '1000000000000000000']
  }
];

const batchResult = await sdk.executeBatch(calls);`}
        />

        <h3>Check Balances</h3>
        <CodeBlock
          language="typescript"
          filename="balances.ts"
          code={`// ETH balance
const ethBalance = await sdk.getETHBalance();
console.log('ETH:', ethBalance);

// Token balance
const tokenBalance = await sdk.getTokenBalance(
  '0x123...token_address',
  18 // decimals
);
console.log('Tokens:', tokenBalance);

// NFTs
const nfts = await sdk.getNFTs('0x123...nft_contract');`}
        />

        <h3>Read Contract Data</h3>
        <CodeBlock
          language="typescript"
          filename="contract-calls.ts"
          code={`// Call any contract function
const result = await sdk.call(
  '0x123...contract',
  'balanceOf',
  [sdk.address]
);`}
        />

        <h2>Account Management</h2>

        <CodeBlock
          language="typescript"
          filename="account-management.ts"
          code={`// Check connection
console.log('Connected:', sdk.isConnected);
console.log('Address:', sdk.address);

// Generate new private key
const newKey = sdk.generateAccount();

// Connect account
await sdk.connectAccount(privateKey);

// Deploy account
await sdk.deployAccount();

// Disconnect
sdk.disconnect();`}
        />

        <h2>Configuration</h2>

        <CodeBlock
          language="typescript"
          filename="config.ts"
          code={`interface WalletConfig {
  network: 'SN_MAINNET' | 'SN_SEPOLIA' | 'SN_DEVNET';
  appName: string;
  appId: string; // Required: Get from https://aegis.cavos.xyz

  // Optional
  paymasterApiKey?: string;        // For gasless transactions
  rpcUrl?: string;                 // Custom RPC
  enableLogging?: boolean;         // Debug logs (default: false)
  maxRetries?: number;             // Transaction retries (default: 3)
  trackingApiUrl?: string;         // Custom analytics URL
}`}
        />

        <h2>Key Storage (Important!)</h2>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Note:</strong> The SDK does NOT store private keys.
            You must handle secure storage appropriately for your platform.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="react-native-auto" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="react-native-auto">React Native/React (Auto)</TabsTrigger>
            <TabsTrigger value="manual">Manual Storage</TabsTrigger>
          </TabsList>

          <TabsContent value="react-native-auto">
            <CodeBlock
              language="typescript"
              filename="auto-storage.tsx"
              code={`// React Native: Uses expo-secure-store automatically
// React Web: Uses localStorage with encryption
<AegisProvider config={...}>
  {/* Your app - keys are stored securely automatically */}
</AegisProvider>`}
            />
          </TabsContent>

          <TabsContent value="manual">
            <CodeBlock
              language="typescript"
              filename="manual-storage.ts"
              code={`// Example with expo-secure-store
import * as SecureStore from 'expo-secure-store';

// Store
await SecureStore.setItemAsync('wallet_key', privateKey);

// Load
const privateKey = await SecureStore.getItemAsync('wallet_key');
if (privateKey) {
  await sdk.connectAccount(privateKey);
}

// Remove
await SecureStore.deleteItemAsync('wallet_key');`}
            />
          </TabsContent>
        </Tabs>

        <h2>Error Handling</h2>

        <CodeBlock
          language="typescript"
          filename="error-handling.ts"
          code={`try {
  const result = await sdk.execute(contract, method, params);
} catch (error) {
  if (error.message.includes('insufficient')) {
    console.log('Not enough balance');
  } else if (error.message.includes('nonce')) {
    console.log('Transaction already sent');
  } else {
    console.log('Transaction failed:', error.message);
  }
}`}
        />

        <h2>Utilities</h2>

        <CodeBlock
          language="typescript"
          filename="utilities.ts"
          code={`// Wait for transaction
const confirmed = await sdk.waitForTransaction(txHash);

// Check transaction status
const status = await sdk.getTransactionStatus(txHash); // 'pending', 'confirmed', 'failed'

// Estimate gas
const gasEstimate = await sdk.estimateGas(contract, method, params);

// Switch networks
await sdk.switchNetwork('SN_MAINNET');`}
        />

        <h2>Platform Support</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
          <Card className="text-center p-4">
            <Smartphone className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">React Native</p>
          </Card>
          <Card className="text-center p-4">
            <Globe className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Expo</p>
          </Card>
          <Card className="text-center p-4">
            <Globe className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">React Web</p>
          </Card>
          <Card className="text-center p-4">
            <Code className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Node.js</p>
          </Card>
          <Card className="text-center p-4">
            <Layers className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">TypeScript</p>
          </Card>
        </div>

        <h2>Security Features</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Client-side signing only</h4>
              <p className="text-sm text-muted-foreground">All signing happens on your device</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Private keys never transmitted</h4>
              <p className="text-sm text-muted-foreground">Keys stay on your device</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Secure storage on device</h4>
              <p className="text-sm text-muted-foreground">Uses platform-specific secure storage</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Privacy-first analytics</h4>
              <p className="text-sm text-muted-foreground">No private data transmitted</p>
            </div>
          </div>
        </div>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success flex items-center">
              Ready to Build with Aegis!
              <ArrowRight className="h-4 w-4 ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have everything you need to integrate Aegis SDK into
              your mobile application with in-app wallets and gasless transactions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="https://aegis.cavos.xyz" className="text-brand-primary">
                  Get App ID
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/quick-start" className="text-brand-primary">
                  Quick Start
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/web" className="text-brand-primary">
                  Web SDK
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">
                  Native SDK
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default AegisSDK;