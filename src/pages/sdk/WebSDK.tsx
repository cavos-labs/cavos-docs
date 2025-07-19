import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { DocPageActions } from '@/components/DocPageActions';
import { CodeBlock, TerminalBlock } from '@/components/CodeBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Globe, Code, Layers, Zap, Info } from 'lucide-react';

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
          <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary">
            v1.3.0
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Starknet</Badge>
          <Badge variant="outline">Framework Agnostic</Badge>
        </div>
        
        <p>
          The Cavos Service Web SDK provides complete Starknet wallet infrastructure and authentication 
          for web applications. Built with TypeScript and featuring Auth0 integration, automatic 
          wallet deployment, and AVNU paymaster for seamless user experiences.
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
            <strong>Prerequisites:</strong> You must register your organization at 
            <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline ml-1">
              https://services.cavos.xyz
            </a> to get your App ID and API Secret before using the SDK.
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
              code={`import { CavosAuth } from 'cavos-service-sdk';

// Initialize Cavos Service
const cavosAuth = new CavosAuth({
  appId: 'your-app-id', // From https://services.cavos.xyz
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  network: 'sepolia' // or 'mainnet'
});

// Register new user with automatic wallet deployment
async function registerUser() {
  try {
    const result = await cavosAuth.register({
      email: 'user@example.com',
      password: 'SecurePassword123!'
    });
    
    console.log('User registered:', result.user);
    console.log('Wallet deployed:', result.wallet.address);
    console.log('Access token:', result.authData.accessToken);
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

// Login existing user
async function loginUser() {
  try {
    const result = await cavosAuth.login({
      email: 'user@example.com',
      password: 'SecurePassword123!'
    });
    
    console.log('User logged in:', result.user);
    console.log('Wallet:', result.wallet.address);
    
    // Store tokens securely
    localStorage.setItem('accessToken', result.authData.accessToken);
    localStorage.setItem('refreshToken', result.authData.refreshToken);
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Execute transaction
async function sendTransaction() {
  const accessToken = localStorage.getItem('accessToken');
  
  try {
    const result = await cavosAuth.executeTransaction({
      accessToken,
      calls: [{
        contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
        entrypoint: 'transfer',
        calldata: [
          '0x123...', // recipient
          '1000000000000000000', // amount
          '0' // high part
        ]
      }]
    });
    
    console.log('Transaction sent:', result.transaction_hash);
  } catch (error) {
    console.error('Transaction failed:', error);
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
import { CavosAuth } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth({
  appId: process.env.REACT_APP_CAVOS_APP_ID!,
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  network: 'sepolia'
});

function App() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.register({
        email: 'user@example.com',
        password: 'SecurePassword123!'
      });
      
      setUser(result.user);
      setWallet(result.wallet);
      
      // Store tokens
      localStorage.setItem('accessToken', result.authData.accessToken);
      localStorage.setItem('refreshToken', result.authData.refreshToken);
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.login({
        email: 'user@example.com',
        password: 'SecurePassword123!'
      });
      
      setUser(result.user);
      setWallet(result.wallet);
      
      localStorage.setItem('accessToken', result.authData.accessToken);
      localStorage.setItem('refreshToken', result.authData.refreshToken);
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };

  const executeTransaction = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    
    try {
      const result = await cavosAuth.executeTransaction({
        accessToken,
        calls: [{
          contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
          entrypoint: 'transfer',
          calldata: ['0x123...', '1000000000000000000', '0']
        }]
      });
      
      console.log('Transaction:', result.transaction_hash);
    } catch (error) {
      console.error('Transaction failed:', error);
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
import { CavosAuth } from 'cavos-service-sdk';

const app = express();
app.use(express.json());

// Initialize with your organization secret (backend only)
const cavosAuth = new CavosAuth({
  orgSecret: process.env.CAVOS_ORG_SECRET!, // Your organization secret
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  network: 'sepolia'
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await cavosAuth.register({
      email,
      password
    });
    
    // Return user data and wallet info
    res.json({
      success: true,
      user: result.user,
      wallet: result.wallet,
      // Don't return private keys to frontend
      authData: {
        accessToken: result.authData.accessToken,
        refreshToken: result.authData.refreshToken,
        expiresIn: result.authData.expiresIn
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
    
    const result = await cavosAuth.login({
      email,
      password
    });
    
    res.json({
      success: true,
      user: result.user,
      wallet: result.wallet,
      authData: {
        accessToken: result.authData.accessToken,
        refreshToken: result.authData.refreshToken,
        expiresIn: result.authData.expiresIn
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Execute transaction endpoint
app.post('/api/execute', async (req, res) => {
  try {
    const { accessToken, calls } = req.body;
    
    const result = await cavosAuth.executeTransaction({
      accessToken,
      calls
    });
    
    res.json({
      success: true,
      transaction_hash: result.transaction_hash,
      status: result.status
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Token swap endpoint
app.post('/api/swap', async (req, res) => {
  try {
    const { accessToken, amount, sellTokenAddress, buyTokenAddress } = req.body;
    
    const result = await cavosAuth.swapTokens({
      accessToken,
      amount,
      sellTokenAddress,
      buyTokenAddress
    });
    
    res.json({
      success: true,
      transaction_hash: result.transaction_hash,
      swap_details: result.swap_details
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
          code={`import { CavosAuth, CavosAuthConfig } from 'cavos-service-sdk';

// Frontend configuration (use App ID)
const frontendConfig: CavosAuthConfig = {
  appId: 'your-app-id', // From organization dashboard
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  network: 'sepolia', // or 'mainnet'
  
  // Optional configuration
  timeout: 10000, // Request timeout in ms
  retryAttempts: 3, // Number of retry attempts
  
  // Custom headers
  headers: {
    'X-App-Version': '1.0.0',
    'X-Platform': 'web'
  }
};

// Backend configuration (use Organization Secret)
const backendConfig: CavosAuthConfig = {
  orgSecret: process.env.CAVOS_ORG_SECRET!, // Backend only
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  network: 'sepolia',
  
  // Security settings
  validateTokens: true,
  rateLimiting: {
    enabled: true,
    maxRequests: 100,
    windowMs: 60000 // 1 minute
  }
};

// Initialize for frontend
const cavosAuth = new CavosAuth(frontendConfig);

// Environment-specific configuration
const getConfig = (): CavosAuthConfig => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    appId: process.env.REACT_APP_CAVOS_APP_ID!,
    baseURL: isDevelopment 
      ? 'https://services-dev.cavos.xyz/api/v1/external'
      : 'https://services.cavos.xyz/api/v1/external',
    network: isDevelopment ? 'sepolia' : 'mainnet',
    timeout: isDevelopment ? 30000 : 10000,
    
    // Development-specific settings
    debug: isDevelopment,
    logging: {
      enabled: isDevelopment,
      level: isDevelopment ? 'debug' : 'error'
    }
  };
};

const cavosAuthConfigured = new CavosAuth(getConfig());`}
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
                  <h4 className="font-mono text-sm font-medium mb-2">register(options)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Register new user with automatic wallet deployment
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`interface RegisterOptions {
  email: string;
  password: string;
  network?: 'sepolia' | 'mainnet';
}

const result = await cavosAuth.register({
  email: 'user@example.com',
  password: 'SecurePassword123!',
  network: 'sepolia' // optional, defaults to config
});

// Returns: { user, wallet, authData }`}
                  />
                </div>
                
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">login(options)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Authenticate existing user
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`interface LoginOptions {
  email: string;
  password: string;
}

const result = await cavosAuth.login({
  email: 'user@example.com',
  password: 'SecurePassword123!'
});

// Returns: { user, wallet, authData }`}
                  />
                </div>
                
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">refreshToken(refreshToken)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Refresh expired access tokens
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const newTokens = await cavosAuth.refreshToken({
  refreshToken: 'stored_refresh_token'
});

// Returns: { accessToken, refreshToken, expiresIn }`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Transaction Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">executeTransaction(options)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Execute contract calls on Starknet
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`interface ExecuteOptions {
  accessToken: string;
  calls: {
    contractAddress: string;
    entrypoint: string;
    calldata: string[];
  }[];
}

const result = await cavosAuth.executeTransaction({
  accessToken: 'user_access_token',
  calls: [{
    contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    entrypoint: 'transfer',
    calldata: ['0x123...', '1000000000000000000', '0']
  }]
});

// Returns: { transaction_hash, status }`}
                  />
                </div>
                
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">swapTokens(options)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Execute token swaps using AVNU integration
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`interface SwapOptions {
  accessToken: string;
  amount: number;
  sellTokenAddress: string;
  buyTokenAddress: string;
}

const result = await cavosAuth.swapTokens({
  accessToken: 'user_access_token',
  amount: 1000000000000000000, // 1 ETH in wei
  sellTokenAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', // ETH
  buyTokenAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d' // STRK
});

// Returns: { transaction_hash, swap_details }`}
                  />
                </div>
                
                <div>
                  <h4 className="font-mono text-sm font-medium mb-2">getWalletCounts()</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get total wallet counts across networks
                  </p>
                  <CodeBlock
                    language="typescript"
                    code={`const counts = await cavosAuth.getWalletCounts();

// Returns: { sepolia: number, mainnet: number }`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Build!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have everything you need to integrate Cavos Service into your web application.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/quick-start" className="text-brand-primary">Quick Start</a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/auth" className="text-brand-primary">Authentication API</a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/wallet" className="text-brand-primary">Wallet API</a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">React Native SDK</a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default WebSDK;