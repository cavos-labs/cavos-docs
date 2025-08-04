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
import { Globe, Code, Layers, Zap, Info } from "lucide-react";

const pageContent = `
The Cavos Service Web SDK provides a complete Starknet wallet infrastructure solution for web applications. Built with TypeScript and optimized for modern web frameworks with automatic wallet deployment and gas fee abstraction.

## Key Features

- Complete TypeScript support with comprehensive type definitions
- Automatic ArgentX smart account deployment on Starknet
- AVNU paymaster integration for gas fee abstraction
- Auth0 integration with organization-based authentication
- CavosAuth class for authentication and wallet management
- Transaction execution and token swaps on Starknet
- Support for Sepolia testnet and Mainnet networks

## Installation and Setup

Get started with the Cavos Service Web SDK for web applications.
`;

const WebSDK = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Web SDK Documentation"
          pageContent={pageContent}
          pageUrl="/sdk/web"
        />

        <h1>Web SDK Documentation</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            v1.3.0
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Starknet</Badge>
          <Badge variant="outline">Framework Agnostic</Badge>
        </div>

        <p>
          The Cavos Service Web SDK provides complete Starknet wallet
          infrastructure and authentication for web applications. Built with
          TypeScript and featuring Auth0 integration, automatic wallet
          deployment, and AVNU paymaster for seamless user experiences.
        </p>

        <div className="responsive-grid section-spacing">
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Starknet Native</CardTitle>
              <CardDescription>Built for Starknet ecosystem</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">TypeScript</CardTitle>
              <CardDescription>Full type safety</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Layers className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Gas Abstraction</CardTitle>
              <CardDescription>AVNU paymaster integration</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-8 w-8 mx-auto text-warning mb-2" />
              <CardTitle className="text-base">Auth0 Ready</CardTitle>
              <CardDescription>Enterprise authentication</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Installation</h2>

        <TerminalBlock command="npm install cavos-service-sdk" />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Prerequisites:</strong> You must register your organization
            at
            <a
              href="https://services.cavos.xyz/"
              className="text-brand-primary hover:underline ml-1"
            >
              https://services.cavos.xyz/
            </a>{" "}
            to get your App ID and Organization Secret. App ID is safe for frontend use, Organization Secret is for backend only.
          </AlertDescription>
        </Alert>

        <h2>Basic Usage</h2>

        <Tabs defaultValue="vanilla" className="my-6">
          <TabsList>
            <TabsTrigger value="vanilla">Vanilla JS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="node">Node.js</TabsTrigger>
          </TabsList>

          <TabsContent value="vanilla">
            <CodeBlock
              language="typescript"
              filename="main.ts"
              code={`import { CavosAuth, formatAmount, getBalanceOf, executeCalls, deployWallet } from 'cavos-service-sdk';

// Initialize CavosAuth instance
const cavosAuth = new CavosAuth('sepolia', 'your-app-id'); // network, app_id

// Register new user with automatic wallet deployment
async function registerUser() {
  try {
    const result = await cavosAuth.signUp(
      'user@example.com',
      'SecurePassword123!',
      'your-org-secret' // From https://services.cavos.xyz
    );
    
    console.log('User registered:', result.user);
    console.log('Wallet deployed:', result.wallet.address);
    console.log('Auth0 user_id:', result.user_id);
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

// Login existing user
async function loginUser() {
  try {
    const result = await cavosAuth.signIn(
      'user@example.com',
      'SecurePassword123!',
      'your-org-secret'
    );
    
    console.log('User logged in:', result.user);
    console.log('Wallet:', result.wallet.address);
    console.log('Access token:', result.access_token);
    
    // Store tokens securely
    localStorage.setItem('accessToken', result.access_token);
    localStorage.setItem('refreshToken', result.refresh_token);
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Refresh expired token
async function refreshUserToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  
  try {
    const result = await cavosAuth.refreshToken(
      refreshToken!,
      'sepolia' // network
    );
    
    console.log('Token refreshed:', result.access_token);
    localStorage.setItem('accessToken', result.access_token);
    localStorage.setItem('refreshToken', result.refresh_token);
  } catch (error) {
    console.error('Token refresh failed:', error);
  }
}

// Execute transaction using instance method (session-based)
async function sendTransaction() {
  const accessToken = localStorage.getItem('accessToken');
  const walletAddress = localStorage.getItem('walletAddress');
  
  try {
    const result = await cavosAuth.executeCalls(
      walletAddress!,
      [{
        contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
        entrypoint: 'transfer',
        calldata: [
          '0x123...', // recipient
          '1000000000000000000', // amount
          '0' // high part
        ]
      }],
      accessToken!
    );
    
    console.log('Transaction sent:', result.txHash);
    console.log('New access token:', result.accessToken); // Automatically refreshed
  } catch (error) {
    console.error('Transaction failed:', error);
  }
}

// Get token balance
async function getTokenBalance() {
  try {
    const balance = await getBalanceOf(
      '0x456...', // wallet address
      '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK token
      '18', // decimals
      'your-api-key'
    );
    
    console.log('Token balance:', balance);
  } catch (error) {
    console.error('Balance check failed:', error);
  }
}

// Format amount for Starknet
async function formatTokenAmount() {
  try {
    const formatted = await formatAmount('1000000000000000000', 18);
    console.log('Formatted amount:', formatted);
  } catch (error) {
    console.error('Format failed:', error);
  }
}`}
            />
          </TabsContent>

          <TabsContent value="react">
            <div className="space-y-4">
              <CodeBlock
                language="typescript"
                filename="App.tsx"
                code={`import React, { useState } from 'react';
import { CavosAuth, executeCalls, getBalanceOf } from 'cavos-service-sdk';

// Initialize CavosAuth instance
const cavosAuth = new CavosAuth('sepolia', process.env.REACT_APP_CAVOS_APP_ID!);

function App() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.signUp(
        'user@example.com',
        'SecurePassword123!',
        process.env.REACT_APP_CAVOS_ORG_SECRET!
      );
      
      setUser(result.user);
      setWallet(result.wallet);
      
      // Store tokens
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.signIn(
        'user@example.com',
        'SecurePassword123!',
        process.env.REACT_APP_CAVOS_ORG_SECRET!
      );
      
      setUser(result.user);
      setWallet(result.wallet);
      
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };

  const executeTransaction = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken || !wallet) return;
    
    try {
      const result = await cavosAuth.executeCalls(
        wallet.address,
        [{
          contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
          entrypoint: 'transfer',
          calldata: ['0x123...', '1000000000000000000', '0']
        }],
        accessToken
      );
      
      console.log('Transaction:', result.txHash);
      // Update token if automatically refreshed
      if (result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken);
      }
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  const getBalance = async () => {
    if (!wallet) return;
    
    try {
      const balance = await getBalanceOf(
        wallet.address,
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
        '18',
        process.env.REACT_APP_CAVOS_API_KEY! // Server-side function requires API key
      );
      
      console.log('STRK Balance:', balance);
    } catch (error) {
      console.error('Balance check failed:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (user && wallet) {
    return (
      <div>
        <h2>Welcome, {user.email}!</h2>
        <p>Wallet: {wallet.address}</p>
        <p>Network: {wallet.network}</p>
        
        <button onClick={executeTransaction}>
          Send STRK Transaction
        </button>
        
        <button onClick={getBalance}>
          Check STRK Balance
        </button>
        
        <button onClick={() => {
          setUser(null);
          setWallet(null);
          localStorage.clear();
        }}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleRegister}>
        Register New User
      </button>
      <button onClick={handleLogin}>
        Login Existing User
      </button>
    </div>
  );
}

export default App;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="node">
            <div className="space-y-4">
              <CodeBlock
                language="typescript"
                filename="server.ts"
                code={`import express from 'express';
import { CavosAuth, executeCalls, getBalanceOf, deployWallet } from 'cavos-service-sdk';

// Initialize CavosAuth instance for server
const cavosAuth = new CavosAuth('sepolia', process.env.CAVOS_APP_ID!);

const app = express();
app.use(express.json());

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, network = 'sepolia' } = req.body;
    
    const result = await cavosAuth.signUp(
      email,
      password,
      process.env.CAVOS_ORG_SECRET!
    );
    
    // Return user data and wallet info
    res.json({
      success: true,
      user: result.user,
      wallet: result.wallet,
      user_id: result.user_id,
      authData: {
        access_token: result.access_token,
        refresh_token: result.refresh_token,
        expires_in: result.expires_in
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await cavosAuth.signIn(
      email,
      password,
      process.env.CAVOS_ORG_SECRET!
    );
    
    res.json({
      success: true,
      user: result.user,
      wallet: result.wallet,
      authData: {
        access_token: result.access_token,
        refresh_token: result.refresh_token,
        expires_in: result.expires_in
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Refresh token endpoint
app.post('/api/refresh', async (req, res) => {
  try {
    const { refresh_token, network = 'sepolia' } = req.body;
    
    const result = await cavosAuth.refreshToken(
      refresh_token,
      network
    );
    
    res.json({
      success: true,
      authData: {
        access_token: result.access_token,
        refresh_token: result.refresh_token,
        expires_in: result.expires_in
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Execute transaction endpoint (session-based)
app.post('/api/execute', async (req, res) => {
  try {
    const { calls, address, accessToken } = req.body;
    
    const result = await cavosAuth.executeCalls(
      address,
      calls,
      accessToken
    );
    
    res.json({
      success: true,
      transaction_hash: result.txHash,
      access_token: result.accessToken // May include refreshed token
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get balance endpoint
app.post('/api/balance', async (req, res) => {
  try {
    const { address, tokenAddress, decimals } = req.body;
    
    const result = await getBalanceOf(
      address,
      tokenAddress,
      decimals,
      process.env.CAVOS_API_KEY!
    );
    
    res.json({
      success: true,
      balance: result.balance,
      formatted: result.formatted
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deploy wallet endpoint
app.post('/api/deploy-wallet', async (req, res) => {
  try {
    const { network } = req.body;
    
    const result = await deployWallet(
      network,
      process.env.CAVOS_API_KEY!
    );
    
    res.json({
      success: true,
      wallet: result.wallet,
      address: result.address
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete user endpoint
app.delete('/api/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const result = await cavosAuth.deleteUser(
      userId,
      process.env.CAVOS_ORG_SECRET!
    );
    
    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
              />
            </div>
          </TabsContent>
        </Tabs>

        <h2>Configuration Options</h2>

        <p>Customize the Cavos Service SDK for your application:</p>

        <CodeBlock
          language="typescript"
          filename="config.ts"
          code={`import { CavosAuth, formatAmount, getBalanceOf, executeCalls, deployWallet } from 'cavos-service-sdk';

// Environment variables setup
const config = {
  appId: process.env.CAVOS_APP_ID!, // Your app ID (safe for frontend)
  orgSecret: process.env.CAVOS_ORG_SECRET!, // Your organization secret (backend only)
  apiKey: process.env.CAVOS_API_KEY!, // Your API key for wallet operations (backend only)
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  defaultNetwork: 'sepolia' // or 'mainnet'
};

// Initialize CavosAuth instance
const cavosAuth = new CavosAuth(config.defaultNetwork, config.appId);

// Example usage with environment-specific configuration
const getConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    appId: process.env.CAVOS_APP_ID!,
    orgSecret: process.env.CAVOS_ORG_SECRET!,
    apiKey: process.env.CAVOS_API_KEY!,
    baseURL: isDevelopment 
      ? 'https://services-dev.cavos.xyz/api/v1/external'
      : 'https://services.cavos.xyz/api/v1/external',
    defaultNetwork: isDevelopment ? 'sepolia' : 'mainnet',
    
    // Development-specific settings
    debug: isDevelopment,
    timeout: isDevelopment ? 30000 : 10000
  };
};

// Create environment-specific CavosAuth instance
const createCavosAuth = () => {
  const config = getConfig();
  return new CavosAuth(config.defaultNetwork, config.appId);
};

// Example authentication flow
async function authenticateUser(email: string, password: string) {
  try {
    // Register new user
    const signUpResult = await cavosAuth.signUp(
      email,
      password,
      config.orgSecret
    );
    
    console.log('User registered:', signUpResult.user);
    console.log('Wallet deployed:', signUpResult.wallet);
    
    return signUpResult;
  } catch (error) {
    // If user already exists, try to sign in
    if (error.message.includes('already exists')) {
      const signInResult = await cavosAuth.signIn(
        email,
        password,
        config.orgSecret
      );
      
      console.log('User signed in:', signInResult.user);
      return signInResult;
    }
    
    throw error;
  }
}

// Example transaction execution (session-based)
async function executeTransaction(
  accessToken: string,
  walletAddress: string,
  calls: any[]
) {
  try {
    const result = await cavosAuth.executeCalls(
      walletAddress,
      calls,
      accessToken
    );
    
    console.log('Transaction executed:', result.txHash);
    // Handle potential token refresh
    if (result.accessToken) {
      console.log('Token automatically refreshed');
      // Update stored token
      localStorage.setItem('accessToken', result.accessToken);
    }
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
}

// Example balance checking
async function checkTokenBalance(
  walletAddress: string,
  tokenAddress: string,
  decimals: string = '18'
) {
  try {
    const balance = await getBalanceOf(
      walletAddress,
      tokenAddress,
      decimals,
      config.apiKey
    );
    
    console.log('Token balance:', balance);
    return balance;
  } catch (error) {
    console.error('Balance check failed:', error);
    throw error;
  }
}`}
        />

        <h2>API Reference</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Authentication Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    cavosAuth.signUp(email, password, orgSecret)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Register new user with automatic wallet deployment
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`// Initialize CavosAuth instance first
const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

const result = await cavosAuth.signUp(
  'user@example.com',
  'SecurePassword123!',
  'your-org-secret'
);

// Returns: { user, wallet, user_id, access_token, refresh_token, expires_in }`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    cavosAuth.signIn(email, password, orgSecret)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Authenticate existing user
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const result = await cavosAuth.signIn(
  'user@example.com',
  'SecurePassword123!',
  'your-org-secret'
);

// Returns: { user, wallet, access_token, refresh_token, expires_in }`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    cavosAuth.refreshToken(refreshToken, network)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Refresh expired access tokens
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const result = await cavosAuth.refreshToken(
  'stored_refresh_token',
  'sepolia' // network
);

// Returns: { access_token, refresh_token, expires_in }`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    cavosAuth.deleteUser(user_id, orgSecret)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Delete user from organization
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const result = await cavosAuth.deleteUser(
  'auth0|123456789',
  'your-org-secret'
);

// Returns: { success: true }`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Transaction & Wallet Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    cavosAuth.executeCalls(address, calls, accessToken)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Execute contract calls on Starknet (session-based)
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const result = await cavosAuth.executeCalls(
  '0x456...', // wallet address
  [{
    contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    entrypoint: 'transfer',
    calldata: ['0x123...', '1000000000000000000', '0']
  }],
  'your-access-token'
);

// Returns: { txHash, accessToken } // May include refreshed token`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    getBalanceOf(address, tokenAddress, decimals, apiKey)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get token balance for wallet address
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const balance = await getBalanceOf(
  '0x456...', // wallet address
  '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK token
  '18', // decimals
  'your-api-key'
);

// Returns: { balance, formatted }`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    deployWallet(network, apiKey)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Deploy new wallet on Starknet
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const wallet = await deployWallet(
  'sepolia',
  'your-api-key'
);

// Returns: { wallet, address }`}
                  />
                </div>

                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">
                    formatAmount(amount, decimals?)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Format amount for Starknet uint256
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const formatted = await formatAmount('1000000000000000000', 18);

// Returns: { uint256: { low: string, high: string } }`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="my-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Token Swapping:</strong> Token swap functionality is currently 
            available in the React Native SDK only. Web SDK support is planned 
            for future releases. See the{" "}
            <a href="/guides/token-swapping" className="text-brand-primary hover:underline">
              Token Swapping Guide
            </a>{" "}
            for mobile implementation details.
          </AlertDescription>
        </Alert>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Build!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have everything you need to integrate Cavos Service into
              your web application.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/quick-start" className="text-brand-primary">
                  Quick Start
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/auth" className="text-brand-primary">
                  Authentication API
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/wallet" className="text-brand-primary">
                  Wallet API
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">
                  React Native SDK
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default WebSDK;
