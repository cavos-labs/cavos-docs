import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { DocPageActions } from '@/components/DocPageActions';
import { CodeBlock, TerminalBlock } from '@/components/CodeBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

const pageContent = `
Get started with Cavos Service in under 5 minutes. This guide will walk you through setting up Starknet wallet creation, authentication, and transaction execution in your application.

## Prerequisites

- Node.js 16+ or modern browser environment
- Basic knowledge of JavaScript/TypeScript
- A Cavos organization (register at https://services.cavos.xyz)

## Installation and Setup

Follow these steps to integrate Cavos Service into your application.
`;

const QuickStart = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions 
          pageTitle="Quick Start Guide" 
          pageContent={pageContent}
          pageUrl="/quick-start"
        />
        
        <h1>Quick Start Guide</h1>
        
        <p>
          Get started with Cavos Service in under 5 minutes. This guide will walk you through 
          setting up Starknet wallet creation, authentication, and transaction execution in your application.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Prerequisites:</strong> Node.js 16+, basic JavaScript/TypeScript knowledge, 
            and a Cavos organization. <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">Register your organization here</a>.
          </AlertDescription>
        </Alert>

        <h2>Step 1: Installation</h2>
        
        <p>Install the Cavos Service SDK for your platform:</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Web/React Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <TerminalBlock command="npm install cavos-service-sdk" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">React Native</CardTitle>
            </CardHeader>
            <CardContent>
              <TerminalBlock command="npm install cavos-service-native" />
            </CardContent>
          </Card>
        </div>

        <h2>Step 2: Get Organization Credentials</h2>
        
        <p>Register your organization and get your credentials:</p>

        <div className="space-y-4 mb-6">
          <ol className="list-decimal list-inside space-y-2">
            <li>Go to <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">https://services.cavos.xyz</a></li>
            <li>Register your organization</li>
            <li>Save your App ID and API Secret securely</li>
          </ol>
        </div>

        <CodeBlock
          language="bash"
          filename=".env"
          code={`# Frontend use (App ID - safe to expose)
REACT_APP_CAVOS_APP_ID=your-app-id

# Backend use only (API Secret - keep secure!)
CAVOS_ORG_SECRET=your-org-secret`}
        />

        <Alert className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Never expose your API Secret in frontend code. Use App ID for frontend components and API Secret for backend operations only.
          </AlertDescription>
        </Alert>

        <h2>Step 3: User Registration & Authentication</h2>
        
        <p>Create users with automatic Starknet wallet deployment:</p>

        <CodeBlock
          language="typescript"
          filename="src/auth.ts"
          code={`import { CavosAuth } from 'cavos-service-sdk';

const ORG_SECRET = process.env.CAVOS_ORG_SECRET!;

// Register a new user with automatic wallet deployment
export const registerUser = async (email: string, password: string) => {
  try {
    const result = await CavosAuth.signUp(
      email,
      password,
      ORG_SECRET,
      'sepolia' // Network: 'sepolia' or 'mainnet'
    );
    
    console.log('User registered:', result.data.user_id);
    console.log('Wallet address:', result.data.wallet.address);
    console.log('Access token:', result.data.authData.accessToken);
    
    return result;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Login existing user
export const loginUser = async (email: string, password: string) => {
  try {
    const result = await CavosAuth.signIn(email, password, ORG_SECRET);
    
    console.log('User logged in:', result.data.user_id);
    console.log('Wallet address:', result.data.wallet.address);
    
    return result;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};`}
        />

        <p>Or use Apple Sign In component:</p>

        <CodeBlock
          language="typescript"
          filename="src/components/AppleSignIn.tsx"
          code={`import React from 'react';
import { SignInWithApple } from 'cavos-service-sdk';

export const AppleSignInButton: React.FC = () => {
  return (
    <SignInWithApple
      orgToken={process.env.CAVOS_ORG_SECRET!}
      network="sepolia"
      finalRedirectUri="https://yourapp.com/callback"
    >
      Sign in with Apple
    </SignInWithApple>
  );
};`}
        />

        <h2>Step 4: Execute Starknet Transactions</h2>
        
        <p>Execute transactions on Starknet with automatic gas fee handling:</p>

        <CodeBlock
          language="typescript"
          filename="src/transactions.ts"
          code={`// Execute contract calls using the wallet provider API
export const executeTransaction = async (userToken: string, walletAddress: string, orgId: string) => {
  try {
    const response = await fetch('https://services.cavos.xyz/api/v1/external/execute/session', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${userToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: walletAddress,
        org_id: orgId,
        calls: [
          {
            contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK token
            entrypoint: 'transfer',
            calldata: [
              '0x123...', // recipient address
              '1000000000000000000', // amount (1 STRK)
              '0' // high part of amount
            ]
          }
        ],
        network: 'sepolia'
      })
    });

    if (!response.ok) {
      throw new Error('Transaction failed');
    }

    const result = await response.json();
    console.log('Transaction hash:', result.transaction_hash);
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
};`}
        />

        <p>Or use the SDK for token swaps with AVNU integration:</p>

        <CodeBlock
          language="typescript"
          filename="src/swap.ts"
          code={`// Execute token swaps with built-in AVNU integration
export const executeSwap = async (userToken: string, walletAddress: string, orgId: string) => {
  try {
    const response = await fetch('https://services.cavos.xyz/api/v1/external/execute/session/swap', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${userToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: walletAddress,
        org_id: orgId,
        amount: 1000000000000000000, // 1 ETH in wei
        sellTokenAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', // ETH
        buyTokenAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK
        network: 'sepolia'
      })
    });

    if (!response.ok) {
      throw new Error('Swap failed');
    }

    const result = await response.json();
    console.log('Swap transaction:', result.transaction_hash);
    return result;
  } catch (error) {
    console.error('Swap failed:', error);
    throw error;
  }
};`}
        />

        <h2>Step 5: Token Management</h2>
        
        <p>Handle token refresh and user session management:</p>

        <CodeBlock
          language="typescript"
          filename="src/hooks/useAuth.ts"
          code={`import { useState, useEffect } from 'react';
import { CavosAuth } from 'cavos-service-sdk';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage if available
    const savedUser = localStorage.getItem('cavos_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await CavosAuth.signIn(email, password, process.env.CAVOS_ORG_SECRET!);
      setUser(result.data);
      localStorage.setItem('cavos_user', JSON.stringify(result.data));
      return result;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const refreshToken = async () => {
    if (!user?.authData?.refreshToken) return null;
    
    try {
      const result = await CavosAuth.refreshToken(
        user.authData.refreshToken,
        process.env.CAVOS_ORG_SECRET!
      );
      setUser(result.data);
      localStorage.setItem('cavos_user', JSON.stringify(result.data));
      return result;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cavos_user');
  };

  return { user, loading, login, logout, refreshToken };
};`}
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <CardTitle className="text-success">Congratulations!</CardTitle>
              </div>
              <CardDescription>
                You've successfully integrated Cavos Service into your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your users can now create Starknet wallets, authenticate, and execute transactions with automatic gas fee handling.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• <a href="/installation" className="text-brand-primary hover:underline">Explore mobile SDK integration</a></li>
                <li>• <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">Register your organization</a></li>
                <li>• <a href="https://github.com/adrianvrj/cavos-service-sdk" className="text-brand-primary hover:underline">View SDK source code</a></li>
                <li>• Learn about AVNU paymaster integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2>Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Organization Not Registered</h4>
                <p className="text-sm text-muted-foreground">
                  Make sure you've registered your organization at https://services.cavos.xyz 
                  and have your App ID and API Secret.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">API Secret Exposed</h4>
                <p className="text-sm text-muted-foreground">
                  Never expose your API Secret in frontend code. Use App ID for frontend 
                  components and API Secret only for backend operations.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Network Configuration</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure you're using supported networks: 'sepolia' for testnet or 'mainnet' 
                  for production. Check your network configuration in API calls.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Token Refresh Fails</h4>
                <p className="text-sm text-muted-foreground">
                  Tokens expire and need refresh. Implement proper token refresh logic 
                  using the CavosAuth.refreshToken() method.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocLayout>
  );
};

export default QuickStart;