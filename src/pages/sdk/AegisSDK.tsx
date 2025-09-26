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
Simple SDK for Starknet wallets with **OAuth (Apple/Google)**, **Email/Password**, and **In-app wallets**. React and React Native compatible.

## How It Works (Super Simple!)

1. **Wrap your app** with AegisProvider
2. **Use the hook** useAegis() in any component
3. **Get aegisAccount** - this is your wallet object
4. **Use aegisAccount** to login and send transactions

That's it! The main thing to remember is that **aegisAccount** is your wallet - use it for everything!
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
            Latest
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">React Native</Badge>
          <Badge variant="outline">Starknet</Badge>
          <Badge variant="outline">aegisAccount</Badge>
        </div>

        <p>
          Simple SDK for Starknet wallets with <strong>OAuth (Apple/Google)</strong>,
          <strong> Email/Password</strong>, and <strong>In-app wallets</strong>. Works with both
          <strong> React Native/Expo</strong> and <strong>React web applications</strong>.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Remember:</strong> Everything happens through the <code>aegisAccount</code> object.
            It's your main wallet - use it for login, transactions, and everything else!
          </AlertDescription>
        </Alert>

        <div className="responsive-grid section-spacing">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">AegisProvider</CardTitle>
              <CardDescription>Wrap your app for context</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">useAegis Hook</CardTitle>
              <CardDescription>Get aegisAccount in any component</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-8 w-8 mx-auto text-warning mb-2" />
              <CardTitle className="text-base">aegisAccount Object</CardTitle>
              <CardDescription>Your main wallet interface</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Three Login Types</CardTitle>
              <CardDescription>OAuth, Email, or Create Wallet</CardDescription>
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
            to get your unique App ID.
          </AlertDescription>
        </Alert>

        <h2>How It Works (Super Simple!)</h2>

        <div className="space-y-4 my-6">
          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-medium">Wrap your app with AegisProvider</h4>
              <p className="text-sm text-muted-foreground">This gives your whole app access to wallet context</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-medium">Use useAegis() hook in any component</h4>
              <p className="text-sm text-muted-foreground">This gives you the aegisAccount object</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 text-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-medium">Use aegisAccount for everything</h4>
              <p className="text-sm text-muted-foreground">Login, transactions, balances - all through aegisAccount</p>
            </div>
          </div>
        </div>

        <h2>Quick Start</h2>

        <Tabs defaultValue="step1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="step1">Step 1: Provider</TabsTrigger>
            <TabsTrigger value="step2">Step 2: Component</TabsTrigger>
            <TabsTrigger value="complete">Complete Example</TabsTrigger>
          </TabsList>

          <TabsContent value="step1" className="space-y-4">
            <h3>Step 1: Wrap Your App</h3>
            <CodeBlock
              language="typescript"
              filename="App.tsx"
              code={`import { AegisProvider } from '@cavos/aegis';

export default function App() {
  return (
    <AegisProvider
      config={{
        network: 'sepolia',
        appId: 'your-app-id' // Get from https://aegis.cavos.xyz
      }}
    >
      {/* Your app components here */}
      <MyWalletComponent />
    </AegisProvider>
  );
}`}
            />
          </TabsContent>

          <TabsContent value="step2" className="space-y-4">
            <h3>Step 2: Use in Any Component</h3>
            <CodeBlock
              language="typescript"
              filename="WalletComponent.tsx"
              code={`import { useAegis } from '@cavos/aegis';
import { openAuthSessionAsync } from 'expo-web-browser';

function MyWalletComponent() {
  const { aegisAccount, isWalletConnected } = useAegis();

  // Login with Apple
  const loginWithApple = async () => {
    const url = await aegisAccount.getAppleOAuthUrl('exp://192.168.1.16:8081');
    const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');
    await aegisAccount.handleOAuthCallback(result);
  };

  // Login with Email
  const loginWithEmail = async () => {
    await aegisAccount.signIn('user@example.com', 'password123');
  };

  // Create new wallet
  const createWallet = async () => {
    const privateKey = await aegisAccount.deployAccount();
    console.log('Save this:', privateKey); // Save securely!
  };

  // Send transaction
  const sendMoney = async () => {
    await aegisAccount.execute(
      '0x123...contract',
      'transfer',
      ['0x456...recipient', '1000']
    );
  };

  if (isWalletConnected) {
    return (
      <div>
        <p>Address: {aegisAccount.address}</p>
        <button onClick={sendMoney}>Send Money</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={loginWithApple}>Login with Apple</button>
      <button onClick={loginWithEmail}>Login with Email</button>
      <button onClick={createWallet}>Create Wallet</button>
    </div>
  );
}`}
            />
          </TabsContent>

          <TabsContent value="complete" className="space-y-4">
            <h3>Complete Working Example</h3>
            <CodeBlock
              language="typescript"
              filename="FullExample.tsx"
              code={`import React from 'react';
import { AegisProvider, useAegis } from '@cavos/aegis';
import { openAuthSessionAsync } from 'expo-web-browser';

// 1. Wrap your app
export default function App() {
  return (
    <AegisProvider config={{ network: 'sepolia', appId: 'your-app-id' }}>
      <WalletApp />
    </AegisProvider>
  );
}

// 2. Use in components
function WalletApp() {
  const { aegisAccount, isWalletConnected } = useAegis();

  const handleAppleLogin = async () => {
    const url = await aegisAccount.getAppleOAuthUrl('exp://192.168.1.16:8081');
    const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');
    await aegisAccount.handleOAuthCallback(result);
  };

  if (isWalletConnected) {
    return (
      <div>
        <h1>Connected!</h1>
        <p>Address: {aegisAccount.address}</p>

        <button onClick={() =>
          aegisAccount.execute('0x123...', 'transfer', ['0x456...', '1000'])
        }>
          Send Transaction
        </button>

        <button onClick={() => aegisAccount.signOut()}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login to Your Wallet</h1>
      <button onClick={handleAppleLogin}>Login with Apple</button>
      <button onClick={() => aegisAccount.signIn('user@example.com', 'password')}>
        Login with Email
      </button>
      <button onClick={() => aegisAccount.deployAccount()}>
        Create New Wallet
      </button>
    </div>
  );
}`}
            />
          </TabsContent>
        </Tabs>

        <h2>The aegisAccount Object (Most Important!)</h2>

        <p className="mb-4">
          <strong>This is your main wallet object.</strong> Everything happens through <code>aegisAccount</code>:
        </p>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="login">Login Methods</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="balances">Balances</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <h4>Login Methods</h4>
            <CodeBlock
              language="typescript"
              filename="login-methods.ts"
              code={`// OAuth (Apple/Google)
const url = await aegisAccount.getAppleOAuthUrl('your-redirect-uri');
const url = await aegisAccount.getGoogleOAuthUrl('your-redirect-uri');
await aegisAccount.handleOAuthCallback(result);

// Email/Password
await aegisAccount.signUp('email@example.com', 'password');
await aegisAccount.signIn('email@example.com', 'password');
await aegisAccount.signOut();

// In-app Wallets
const privateKey = await aegisAccount.deployAccount(); // Creates new wallet
await aegisAccount.connectAccount('private-key'); // Connect existing
aegisAccount.disconnect(); // Disconnect`}
            />
          </TabsContent>

          <TabsContent value="transactions">
            <h4>Transaction Methods</h4>
            <CodeBlock
              language="typescript"
              filename="transactions.ts"
              code={`// Send transaction
await aegisAccount.execute(contract, method, params);

// Multiple transactions
await aegisAccount.executeBatch([
  { contractAddress: '0x123...', entrypoint: 'approve', calldata: [...] },
  { contractAddress: '0x456...', entrypoint: 'swap', calldata: [...] }
]);

// Read data (no transaction)
const result = await aegisAccount.call(contract, method, params);`}
            />
          </TabsContent>

          <TabsContent value="balances">
            <h4>Balance Methods</h4>
            <CodeBlock
              language="typescript"
              filename="balances.ts"
              code={`const ethBalance = await aegisAccount.getETHBalance();
const tokenBalance = await aegisAccount.getTokenBalance('0x123...', 18);
const nfts = await aegisAccount.getNFTs('0x123...');`}
            />
          </TabsContent>

          <TabsContent value="status">
            <h4>Status Methods</h4>
            <CodeBlock
              language="typescript"
              filename="status.ts"
              code={`console.log('Address:', aegisAccount.address);
console.log('Connected:', aegisAccount.isWalletConnected());
console.log('Status:', aegisAccount.getWalletStatus());`}
            />
          </TabsContent>
        </Tabs>

        <h2>Three Ways to Login</h2>

        <Tabs defaultValue="oauth" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="oauth">OAuth</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>

          <TabsContent value="oauth" className="space-y-4">
            <h3>OAuth (Apple/Google)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Best for:</strong> Social apps, easy login
            </p>

            <CodeBlock
              language="typescript"
              filename="oauth-example.tsx"
              code={`// Step 1: Get URL
const url = await aegisAccount.getAppleOAuthUrl('exp://192.168.1.16:8081');

// Step 2: Open browser (your way)
const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');

// Step 3: Handle result
await aegisAccount.handleOAuthCallback(result);`}
            />
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <h3>Email/Password</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Best for:</strong> Simple apps, no OAuth setup
            </p>

            <CodeBlock
              language="typescript"
              filename="email-example.tsx"
              code={`// Sign up
await aegisAccount.signUp('user@example.com', 'password123');

// Sign in
await aegisAccount.signIn('user@example.com', 'password123');`}
            />
          </TabsContent>

          <TabsContent value="wallet" className="space-y-4">
            <h3>In-App Wallets</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Best for:</strong> Crypto apps, full control
            </p>

            <CodeBlock
              language="typescript"
              filename="wallet-example.tsx"
              code={`// Create new wallet
const privateKey = await aegisAccount.deployAccount();
// Save this privateKey securely!

// Or connect existing
await aegisAccount.connectAccount('existing-private-key');`}
            />
          </TabsContent>
        </Tabs>

        <h2>Browser Opening (for OAuth)</h2>

        <Tabs defaultValue="expo" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="expo">Expo</TabsTrigger>
            <TabsTrigger value="native">React Native</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
          </TabsList>

          <TabsContent value="expo">
            <h4>Expo (Recommended)</h4>
            <CodeBlock
              language="typescript"
              filename="expo-browser.tsx"
              code={`import { openAuthSessionAsync } from 'expo-web-browser';

const url = await aegisAccount.getAppleOAuthUrl('exp://192.168.1.16:8081');
const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');
await aegisAccount.handleOAuthCallback(result);`}
            />
          </TabsContent>

          <TabsContent value="native">
            <h4>React Native</h4>
            <CodeBlock
              language="typescript"
              filename="native-browser.tsx"
              code={`import { Linking } from 'react-native';

const url = await aegisAccount.getAppleOAuthUrl('yourapp://callback');
await Linking.openURL(url);
// Handle the callback in your app`}
            />
          </TabsContent>

          <TabsContent value="web">
            <h4>Web</h4>
            <CodeBlock
              language="typescript"
              filename="web-browser.tsx"
              code={`const url = await aegisAccount.getAppleOAuthUrl('https://yourapp.com/callback');
window.location.href = url;
// Handle callback on your callback page`}
            />
          </TabsContent>
        </Tabs>

        <h2>Security & Storage</h2>

        <div className="space-y-4 mb-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>OAuth & Email/Password:</strong>
              <br />No key storage needed - handled automatically
              <br />Authentication tokens managed securely
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>In-App Wallets:</strong>
              <br />You must store private keys securely
              <br />Client-side signing only
              <br />Private keys never transmitted
            </AlertDescription>
          </Alert>
        </div>

        <CodeBlock
          language="typescript"
          filename="secure-storage.ts"
          code={`// Example: Secure storage (React Native)
import * as SecureStore from 'expo-secure-store';

// Save private key
const privateKey = await aegisAccount.deployAccount();
await SecureStore.setItemAsync('wallet_key', privateKey);

// Load on app start
const savedKey = await SecureStore.getItemAsync('wallet_key');
if (savedKey) {
  await aegisAccount.connectAccount(savedKey);
}`}
        />

        <h2>Configuration</h2>

        <CodeBlock
          language="typescript"
          filename="config.ts"
          code={`<AegisProvider
  config={{
    network: 'sepolia', // or 'mainnet'
    appId: 'your-app-id', // Required: Get from https://aegis.cavos.xyz
    paymasterApiKey: 'your-key', // Optional: For gasless transactions
    enableLogging: true // Optional: For debugging
  }}
>`}
        />

        <h2>Error Handling</h2>

        <CodeBlock
          language="typescript"
          filename="error-handling.ts"
          code={`try {
  await aegisAccount.signIn('user@example.com', 'password');
} catch (error) {
  console.log('Login failed:', error.message);
}

try {
  await aegisAccount.execute('0x123...', 'transfer', ['0x456...', '1000']);
} catch (error) {
  if (error.message.includes('insufficient')) {
    console.log('Not enough money');
  } else {
    console.log('Transaction failed:', error.message);
  }
}`}
        />

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success flex items-center">
              Remember This!
              <ArrowRight className="h-4 w-4 ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><strong>1. AegisProvider</strong> wraps your app</div>
              <div><strong>2. useAegis()</strong> gives you the hook</div>
              <div><strong>3. aegisAccount</strong> is your wallet - use it for everything!</div>
              <div><strong>4. Three login ways:</strong> OAuth, Email, or Create Wallet</div>
              <div><strong>5. All transactions</strong> happen through aegisAccount.execute()</div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              That's it! Simple as that!
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">
                <a href="https://aegis.cavos.xyz" className="text-brand-primary">
                  Get App ID
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="https://docs.cavos.xyz" className="text-brand-primary">
                  Documentation
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="https://discord.gg/Vvq2ekEV47" className="text-brand-primary">
                  Community Support
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