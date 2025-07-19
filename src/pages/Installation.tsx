import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { DocPageActions } from '@/components/DocPageActions';
import { CodeBlock, TerminalBlock } from '@/components/CodeBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Download, Smartphone, Globe, Server } from 'lucide-react';

const pageContent = `
Install Cavos Service SDKs for your platform of choice. We provide comprehensive SDKs for Web, Mobile, and Backend applications with full TypeScript support.

## Supported Platforms

- Web/React Applications (cavos-service-sdk)
- React Native Mobile Apps (cavos-service-native)
- Node.js Backend Services (via cavos-service-sdk)

## Installation Methods

Choose the installation method that best fits your development workflow. Remember to register your organization at https://services.cavos.xyz first.
`;

const Installation = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions 
          pageTitle="Installation Guide" 
          pageContent={pageContent}
          pageUrl="/installation"
        />
        
        <h1>Installation Guide</h1>
        
        <p>
          Install Cavos Service SDKs for your platform of choice. We provide comprehensive SDKs 
          for Web, Mobile, and Backend applications with full TypeScript support and Starknet integration.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <Card>
            <CardHeader className="text-center">
              <Globe className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Web SDK</CardTitle>
              <CardDescription>cavos-service-sdk</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Smartphone className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">React Native SDK</CardTitle>
              <CardDescription>cavos-service-native</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Server className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Backend Integration</CardTitle>
              <CardDescription>Node.js via Web SDK</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Package Manager Installation</h2>
        
        <Tabs defaultValue="npm" className="my-6">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="bun">Bun</TabsTrigger>
          </TabsList>
          
          <TabsContent value="npm" className="space-y-4">
            <h3 className="text-lg font-medium">Web SDK</h3>
            <TerminalBlock command="npm install cavos-service-sdk" />
            
            <h3 className="text-lg font-medium">React Native SDK</h3>
            <TerminalBlock command="npm install cavos-service-native" />
          </TabsContent>
          
          <TabsContent value="yarn" className="space-y-4">
            <h3 className="text-lg font-medium">Web SDK</h3>
            <TerminalBlock command="yarn add cavos-service-sdk" />
            
            <h3 className="text-lg font-medium">React Native SDK</h3>
            <TerminalBlock command="yarn add cavos-service-native" />
          </TabsContent>
          
          <TabsContent value="pnpm" className="space-y-4">
            <h3 className="text-lg font-medium">Web SDK</h3>
            <TerminalBlock command="pnpm add cavos-service-sdk" />
            
            <h3 className="text-lg font-medium">React Native SDK</h3>
            <TerminalBlock command="pnpm add cavos-service-native" />
          </TabsContent>
          
          <TabsContent value="bun" className="space-y-4">
            <h3 className="text-lg font-medium">Web SDK</h3>
            <TerminalBlock command="bun add cavos-service-sdk" />
            
            <h3 className="text-lg font-medium">React Native SDK</h3>
            <TerminalBlock command="bun add cavos-service-native" />
          </TabsContent>
        </Tabs>

        <h2>Organization Registration</h2>
        
        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Before using any Cavos Service SDK, you must register your organization at 
            <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline ml-1">
              https://services.cavos.xyz
            </a> to get your App ID and API Secret.
          </AlertDescription>
        </Alert>

        <div className="space-y-4 my-6">
          <p className="font-medium">Registration Process:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Go to <a href="https://services.cavos.xyz" className="text-brand-primary hover:underline">https://services.cavos.xyz</a></li>
            <li>Create your organization account</li>
            <li>Save your App ID and API Secret securely</li>
            <li>Use App ID in frontend SDK integrations</li>
            <li>Use API Secret for backend API calls (never expose in frontend)</li>
          </ol>
        </div>

        <h2>Platform-Specific Setup</h2>

        <Tabs defaultValue="react" className="my-6">
          <TabsList>
            <TabsTrigger value="react">React Web</TabsTrigger>
            <TabsTrigger value="react-native">React Native</TabsTrigger>
            <TabsTrigger value="nodejs">Node.js</TabsTrigger>
          </TabsList>
          
          <TabsContent value="react">
            <h3 className="text-lg font-medium mb-4">React Web Setup</h3>
            
            <TerminalBlock command="npm install cavos-service-sdk" />
            
            <CodeBlock
              language="typescript"
              filename="src/auth.ts"
              code={`import { CavosAuth } from 'cavos-service-sdk';

// Register a new user with automatic wallet deployment
export const registerUser = async (email: string, password: string) => {
  return await CavosAuth.signUp(
    email,
    password,
    process.env.REACT_APP_CAVOS_ORG_SECRET!, // Your organization secret
    'sepolia' // Network: 'sepolia' or 'mainnet'
  );
};

// Login existing user
export const loginUser = async (email: string, password: string) => {
  return await CavosAuth.signIn(
    email,
    password,
    process.env.REACT_APP_CAVOS_ORG_SECRET!
  );
};`}
            />
            
            <CodeBlock
              language="typescript"
              filename="src/components/AppleSignIn.tsx"
              code={`import React from 'react';
import { SignInWithApple } from 'cavos-service-sdk';

export const AppleSignInButton: React.FC = () => {
  return (
    <SignInWithApple
      orgToken={process.env.REACT_APP_CAVOS_ORG_SECRET!}
      network="sepolia"
      finalRedirectUri="https://yourapp.com/callback"
    >
      Sign in with Apple
    </SignInWithApple>
  );
};`}
            />
          </TabsContent>
          
          <TabsContent value="react-native">
            <h3 className="text-lg font-medium mb-4">React Native Setup</h3>
            
            <TerminalBlock command="npm install cavos-service-native" />
            
            <CodeBlock
              language="typescript"
              filename="App.tsx"
              code={`import React from 'react';
import { View } from 'react-native';
import { SignInWithApple, SignInWithGoogle } from 'cavos-service-native';

export default function App() {
  const handleSuccess = (wallet) => {
    console.log('Login successful:', wallet);
    console.log('Wallet address:', wallet.address);
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <SignInWithApple
        appId="your-org-app-id"
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        Sign in with Apple
      </SignInWithApple>

      <SignInWithGoogle
        appId="your-org-app-id" 
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        Sign in with Google
      </SignInWithGoogle>
    </View>
  );
}`}
            />
            
            <CodeBlock
              language="typescript"
              filename="WalletActions.tsx"
              code={`import React from 'react';
import { View, Button } from 'react-native';
import { CavosWallet } from 'cavos-service-native';

export const WalletActions = ({ wallet }: { wallet: CavosWallet }) => {
  const executeTransaction = async () => {
    try {
      const result = await wallet.execute(
        '0x...', // contract address
        'transfer', // entry point
        ['0x...', '1000'], // calldata
        true // require biometric auth
      );
      console.log('Transaction successful:', result);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <View>
      <Button title="Execute Transaction" onPress={executeTransaction} />
    </View>
  );
};`}
            />
          </TabsContent>
          
          <TabsContent value="nodejs">
            <h3 className="text-lg font-medium mb-4">Node.js Backend Setup</h3>
            
            <TerminalBlock command="npm install cavos-service-sdk" />
            
            <CodeBlock
              language="typescript"
              filename="server.ts"
              code={`import { CavosAuth } from 'cavos-service-sdk';
import express from 'express';

const app = express();
app.use(express.json());

// Organization secret (keep secure!)
const ORG_SECRET = process.env.CAVOS_ORG_SECRET!;

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await CavosAuth.signUp(
      email,
      password,
      ORG_SECRET,
      'sepolia'
    );
    
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await CavosAuth.signIn(
      email,
      password,
      ORG_SECRET
    );
    
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
            />
          </TabsContent>
        </Tabs>

        <h2>Environment Variables</h2>
        
        <p>Configure your environment variables for secure API access:</p>

        <CodeBlock
          language="bash"
          filename=".env"
          code={`# Required: Your organization credentials from https://services.cavos.xyz
REACT_APP_CAVOS_APP_ID=your-app-id
CAVOS_ORG_SECRET=your-org-secret

# Never expose the org secret in frontend code!
# Use App ID for frontend, Org Secret for backend only

# Optional: Default network
CAVOS_DEFAULT_NETWORK=sepolia

# Optional: API endpoint (default: https://services.cavos.xyz/api/v1/external)
CAVOS_API_ENDPOINT=https://services.cavos.xyz/api/v1/external`}
        />

        <h2>TypeScript Configuration</h2>
        
        <p>Cavos Service SDKs include full TypeScript definitions. Update your tsconfig.json:</p>

        <CodeBlock
          language="json"
          filename="tsconfig.json"
          code={`{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
        />

        <h2>Verification</h2>
        
        <p>Test your installation with this simple verification script:</p>

        <CodeBlock
          language="typescript"
          filename="verify-installation.ts"
          code={`import { CavosAuth } from 'cavos-service-sdk';

// Quick verification test
async function verifyInstallation() {
  try {
    // Test wallet count endpoint (no auth required)
    const counts = await CavosAuth.getWalletCounts();
    
    console.log('✅ Cavos Service SDK installed successfully');
    console.log('Wallet counts:', counts);
    
  } catch (error) {
    console.error('❌ Installation verification failed:', error);
  }
}

verifyInstallation();`}
        />

        <TerminalBlock 
          command="npx tsx verify-installation.ts"
          output="✅ Cavos Service SDK installed successfully
Wallet counts: { sepolia: 1234, mainnet: 567 }"
        />

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-success" />
              <CardTitle className="text-success">Installation Complete!</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You're ready to start building with Cavos Service. Next steps:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/quick-start" className="text-brand-primary">Quick Start Guide</a>
              </Badge>
              <Badge variant="outline">
                <a href="https://services.cavos.xyz" className="text-brand-primary">Register Organization</a>
              </Badge>
              <Badge variant="outline">
                <a href="https://github.com/adrianvrj/cavos-service-sdk" className="text-brand-primary">GitHub Repository</a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default Installation;