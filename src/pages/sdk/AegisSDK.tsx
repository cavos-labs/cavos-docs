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
import { Shield, Smartphone, Zap, Globe, Code, Layers, Info, ArrowRight, AlertTriangle } from "lucide-react";

const pageContent = `
Simple SDK for Starknet wallets with **OAuth (Apple/Google)**, **Email/Password**, and **In-app wallets**. React and React Native compatible.

Includes comprehensive **account management** methods for password reset, account deletion, and session recovery.

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
        network: 'SN_SEPOLIA',
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

        <h2>Account Management</h2>

        <p className="mb-4">
          The Aegis SDK provides three methods for managing social login accounts:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
          <li><strong>Password Reset</strong> - Trigger password reset emails for users who forgot their credentials</li>
          <li><strong>Delete Account</strong> - Permanently delete user accounts and all associated data</li>
          <li><strong>Session Recovery</strong> - Restore existing sessions using stored tokens</li>
        </ul>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> These methods work exclusively with social login wallets (OAuth, Email/Password).
            They are NOT available for in-app wallets.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="password-reset" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="password-reset">Password Reset</TabsTrigger>
            <TabsTrigger value="delete-account">Delete Account</TabsTrigger>
            <TabsTrigger value="session-recovery">Session Recovery</TabsTrigger>
          </TabsList>

          <TabsContent value="password-reset" className="space-y-4">
            <h4>Password Reset</h4>
            <p className="text-sm text-muted-foreground">
              Triggers a password reset email to the user. No authentication required.
            </p>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Security Note:</strong> This method always returns a generic success message,
                even if the email doesn't exist. This prevents user enumeration attacks.
              </AlertDescription>
            </Alert>

            <CodeBlock
              language="typescript"
              filename="password-reset.ts"
              code={`// Trigger password reset email
const result = await aegisAccount.passwordReset('user@example.com');

console.log(result.message);
// "If an account exists for this email, a password reset link has been sent."
console.log(result.timestamp); // 1234567890

// Error handling
try {
  await aegisAccount.passwordReset(email);
  alert('Check your email for password reset instructions');
} catch (error) {
  if (error.code === 'SOCIAL_LOGIN_ERROR') {
    console.error('Password reset failed:', error.message);
  }
}`}
            />

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Return Type</h5>
              <CodeBlock
                language="typescript"
                filename="types.ts"
                code={`interface PasswordResetResponse {
  message: string;
  timestamp: number;
}`}
              />
            </div>

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Common Errors</h5>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>SocialLoginError</code> - Network error or invalid request</li>
                <li><code>ValidationError</code> - Invalid email format</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="delete-account" className="space-y-4">
            <h4>Delete Account</h4>
            <p className="text-sm text-muted-foreground">
              Permanently deletes the user's account from Auth0 and removes all wallet data.
              Requires authentication.
            </p>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Warning:</strong> This action is permanent and cannot be undone.
                All wallet data, transaction history, and user information will be deleted.
              </AlertDescription>
            </Alert>

            <CodeBlock
              language="typescript"
              filename="delete-account.ts"
              code={`// Delete the current user's account
const result = await aegisAccount.deleteAccount();

console.log(result.user_id); // "auth0|123456"
console.log(result.email); // "user@example.com"
console.log(result.deletedWalletsCount); // 2

// Local storage is automatically cleared after successful deletion

// Error handling with token refresh
try {
  await aegisAccount.deleteAccount();
  // Redirect to goodbye page
  navigation.navigate('AccountDeleted');
} catch (error) {
  if (error.code === 'AUTHENTICATION_ERROR') {
    // User needs to sign in again
    console.error('Please sign in to delete your account');
  } else if (error.code === 'SOCIAL_LOGIN_ERROR') {
    console.error('Deletion failed:', error.message);
  }
}`}
            />

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Automatic Token Refresh:</strong> If your access token is expired,
                the SDK will automatically refresh it using your refresh token before proceeding
                with account deletion.
              </AlertDescription>
            </Alert>

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Return Type</h5>
              <CodeBlock
                language="typescript"
                filename="types.ts"
                code={`interface AccountDeleteResponse {
  user_id: string;
  email: string;
  org_id: string;
  deletedWalletsCount: number;
  timestamp: number;
  alreadyDeletedFromAuth0?: boolean; // True if already deleted
}`}
              />
            </div>

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Common Errors</h5>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>AuthenticationError</code> - User not authenticated or token invalid</li>
                <li><code>SocialLoginError</code> - Network error or server issue</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="session-recovery" className="space-y-4">
            <h4>Session Recovery</h4>
            <p className="text-sm text-muted-foreground">
              Recovers an existing session using stored access tokens and updates the internal
              aegisAccount state. Perfect for restoring user sessions when your app restarts.
            </p>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Use Case:</strong> Call this when your app starts to check if the user
                has an existing session. If the token is expired, it will automatically refresh
                and update the stored tokens. After successful recovery, use aegisAccount methods
                to access wallet data.
              </AlertDescription>
            </Alert>

            <CodeBlock
              language="typescript"
              filename="session-recovery.ts"
              code={`// Recover existing session on app start
try {
  // Recovers session and updates aegisAccount state
  await aegisAccount.recoverSession();

  // Access recovered data through aegisAccount
  console.log(aegisAccount.address); // "0x123..."
  console.log('Session recovered successfully');

  // Navigate to main app
  navigation.navigate('Home');
} catch (error) {
  if (error.code === 'AUTHENTICATION_ERROR') {
    // No valid session - show login screen
    console.log('No stored session, please sign in');
    navigation.navigate('Login');
  }
}`}
            />

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Return Type</h5>
              <CodeBlock
                language="typescript"
                filename="types.ts"
                code={`// Returns void - updates internal aegisAccount state
async recoverSession(): Promise<void>

// After recovery, access data through aegisAccount:
aegisAccount.address        // Wallet address
aegisAccount.isAuthenticated()  // Check if authenticated
aegisAccount.getCurrentWallet() // Get full wallet data`}
              />
            </div>

            <div className="space-y-2 text-sm">
              <h5 className="font-medium">Common Errors</h5>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>AuthenticationError</code> - No stored session or token invalid</li>
                <li><code>SocialLoginError</code> - Network error or server issue</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <h3>Complete Integration Example</h3>

        <p className="mb-4">
          Here's a complete example showing how to use all three account management methods in a real application:
        </p>

        <CodeBlock
          language="typescript"
          filename="AccountManagement.tsx"
          code={`import React, { useState, useEffect } from 'react';
import { useAegis } from '@cavos/aegis';

function AccountManagement() {
  const { aegisAccount } = useAegis();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Try to recover session on component mount
  useEffect(() => {
    const initSession = async () => {
      try {
        await aegisAccount.recoverSession();
        console.log('Session recovered for:', aegisAccount.address);
      } catch (error) {
        console.log('No existing session');
      }
    };
    initSession();
  }, []);

  // Password Reset Handler
  const handlePasswordReset = async () => {
    if (!email) {
      setMessage('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const result = await aegisAccount.passwordReset(email);
      setMessage('Check your email for password reset instructions');
    } catch (error) {
      setMessage('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Account Deletion Handler
  const handleDeleteAccount = async () => {
    const confirmed = confirm(
      'Are you sure? This will permanently delete your account and cannot be undone.'
    );

    if (!confirmed) return;

    setLoading(true);
    try {
      const result = await aegisAccount.deleteAccount();
      setMessage(\`Account deleted. \${result.deletedWalletsCount} wallets removed.\`);

      // Redirect to goodbye page after 2 seconds
      setTimeout(() => {
        window.location.href = '/goodbye';
      }, 2000);
    } catch (error) {
      if (error.code === 'AUTHENTICATION_ERROR') {
        setMessage('Please sign in to delete your account');
      } else {
        setMessage('Failed to delete account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Password Reset Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Forgot Password?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email to receive password reset instructions
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-2"
        />
        <button
          onClick={handlePasswordReset}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send Reset Email
        </button>
      </div>

      {/* Account Deletion Section */}
      <div className="border border-red-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2 text-red-600">
          Delete Account
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Permanently delete your account and all associated data.
          This action cannot be undone.
        </p>
        <button
          onClick={handleDeleteAccount}
          disabled={loading}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete My Account
        </button>
      </div>

      {/* Status Message */}
      {message && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default AccountManagement;`}
        />

        <h3>Error Handling</h3>

        <p className="mb-4">
          All account management methods use consistent error handling patterns. Here's how to handle different error scenarios:
        </p>

        <CodeBlock
          language="typescript"
          filename="error-handling.ts"
          code={`import {
  AuthenticationError,
  SocialLoginError,
  ValidationError
} from '@cavos/aegis';

// Comprehensive error handling
async function handleAccountOperation() {
  try {
    // Any account management method
    await aegisAccount.deleteAccount();

  } catch (error) {
    // Check error type using code property
    switch (error.code) {
      case 'AUTHENTICATION_ERROR':
        // User not authenticated or token expired
        console.error('Authentication required:', error.message);
        // Redirect to login
        navigation.navigate('Login');
        break;

      case 'SOCIAL_LOGIN_ERROR':
        // Network error or server issue
        console.error('Operation failed:', error.message);
        // Show retry option to user
        showRetryDialog();
        break;

      case 'VALIDATION_ERROR':
        // Invalid input (e.g., bad email format)
        console.error('Invalid input:', error.message);
        // Show validation error to user
        setFieldError(error.message);
        break;

      default:
        // Unexpected error
        console.error('Unexpected error:', error);
        showGenericErrorMessage();
    }
  }
}

// Check if error is recoverable
function isRecoverableError(error: any): boolean {
  return error.recoverable === true;
}

// Example: Retry logic for recoverable errors
async function deleteAccountWithRetry(maxRetries = 3) {
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      return await aegisAccount.deleteAccount();
    } catch (error) {
      attempts++;

      if (!isRecoverableError(error) || attempts >= maxRetries) {
        throw error; // Give up
      }

      // Wait before retry (exponential backoff)
      await new Promise(resolve =>
        setTimeout(resolve, 1000 * Math.pow(2, attempts))
      );
    }
  }
}`}
        />

        <div className="my-6">
          <h4 className="font-medium mb-2">Error Types</h4>
          <div className="space-y-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">AuthenticationError</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p><strong>When:</strong> User not authenticated, token invalid, or no stored session</p>
                <p><strong>Recoverable:</strong> No - User must sign in again</p>
                <p><strong>Code:</strong> <code>AUTHENTICATION_ERROR</code></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">SocialLoginError</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p><strong>When:</strong> Network error, server issue, or API error</p>
                <p><strong>Recoverable:</strong> Yes - Can retry the operation</p>
                <p><strong>Code:</strong> <code>SOCIAL_LOGIN_ERROR</code></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">ValidationError</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p><strong>When:</strong> Invalid input (bad email format, etc.)</p>
                <p><strong>Recoverable:</strong> No - User must correct input</p>
                <p><strong>Code:</strong> <code>VALIDATION_ERROR</code></p>
              </CardContent>
            </Card>
          </div>
        </div>

        <h3>Best Practices</h3>

        <div className="space-y-4 my-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Session Recovery on App Start:</strong> Always call <code>recoverSession()</code>
              when your app starts to restore existing sessions automatically. This provides a seamless
              user experience without requiring re-authentication.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>User Confirmation for Deletion:</strong> Always require explicit user confirmation
              before calling <code>deleteAccount()</code>. Consider using a confirmation dialog with
              clear warnings about data loss.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Password Reset UX:</strong> After calling <code>passwordReset()</code>, guide users
              to check their email. The method returns immediately - the email is sent asynchronously by Auth0.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Error Handling:</strong> Always wrap account management methods in try-catch blocks.
              Check the <code>error.code</code> property to determine the appropriate user feedback.
            </AlertDescription>
          </Alert>
        </div>

        <CodeBlock
          language="typescript"
          filename="best-practices.ts"
          code={`// ✅ Good: Session recovery on app mount
useEffect(() => {
  const restoreSession = async () => {
    try {
      await aegisAccount.recoverSession();
      // Session recovered - aegisAccount state is now updated
      setIsAuthenticated(true);
    } catch {
      // No session or recovery failed
      setIsAuthenticated(false);
    }
  };
  restoreSession();
}, []);

// ✅ Good: User confirmation for deletion
const handleDelete = async () => {
  const confirmed = window.confirm(
    'Delete your account? This cannot be undone.'
  );
  if (confirmed) {
    await aegisAccount.deleteAccount();
  }
};

// ✅ Good: Clear feedback after password reset
const handleReset = async (email) => {
  await aegisAccount.passwordReset(email);
  alert('Check your email for reset instructions');
};

// ❌ Bad: No error handling
await aegisAccount.deleteAccount(); // Will crash on error

// ❌ Bad: No user confirmation
await aegisAccount.deleteAccount(); // Too dangerous!`}
        />

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