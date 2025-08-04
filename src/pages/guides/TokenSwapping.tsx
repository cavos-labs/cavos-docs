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
import { 
  ArrowUpDown, 
  Shield, 
  Zap, 
  Info, 
  AlertTriangle,
  Smartphone,
  Globe
} from "lucide-react";

const pageContent = `
Token swapping in Cavos Service provides gasless token exchanges on Starknet through AVNU DEX aggregator integration. Swap any ERC-20 tokens with automatic slippage protection and complete gas fee abstraction.

## Key Features

- Gasless token swapping through AVNU paymaster integration
- DEX aggregation for best prices across multiple exchanges
- 5% slippage protection with automatic execution
- Biometric authentication for secure mobile transactions
- Automatic token refresh and session management
- Complete transaction history and logging
- Support for Sepolia testnet and Mainnet networks

## Available in React Native SDK Only

Token swapping is currently only available in the React Native SDK (v1.3.3). Web SDK integration is coming soon.
`;

const TokenSwapping = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Token Swapping Guide"
          pageContent={pageContent}
          pageUrl="/guides/token-swapping"
        />

        <h1>Token Swapping Guide</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            Native SDK v1.3.3
          </Badge>
          <Badge variant="outline">AVNU Powered</Badge>
          <Badge variant="outline">Gasless</Badge>
          <Badge variant="outline">DEX Aggregation</Badge>
        </div>

        <p>
          Token swapping in Cavos Service provides gasless token exchanges on 
          Starknet through AVNU DEX aggregator integration. Swap any ERC-20 tokens 
          with automatic slippage protection and complete gas fee abstraction.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Platform Availability:</strong> Token swapping is currently 
            only available in the React Native SDK. Web SDK support is planned 
            for future releases.
          </AlertDescription>
        </Alert>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <Card>
            <CardHeader className="text-center">
              <ArrowUpDown className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">DEX Aggregation</CardTitle>
              <CardDescription>
                Best prices across multiple Starknet DEXes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Gasless Trading</CardTitle>
              <CardDescription>
                Complete gas fee abstraction via AVNU paymaster
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Secure Execution</CardTitle>
              <CardDescription>
                Biometric auth with automatic slippage protection
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>How It Works</h2>

        <div className="space-y-4 my-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium">Quote Fetching</h4>
              <p className="text-sm text-muted-foreground">
                AVNU API fetches the best available quote across multiple DEXes
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium">Transaction Building</h4>
              <p className="text-sm text-muted-foreground">
                Swap transaction is built with 5% slippage protection and approval handling
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium">Gasless Execution</h4>
              <p className="text-sm text-muted-foreground">
                AVNU paymaster covers all gas fees using STRK tokens automatically
              </p>
            </div>
          </div>
        </div>

        <h2>React Native Implementation</h2>

        <p>
          The swap functionality is available through the CavosWallet class in 
          the React Native SDK with optional biometric authentication.
        </p>

        <Tabs defaultValue="basic" className="my-6">
          <TabsList>
            <TabsTrigger value="basic">Basic Swap</TabsTrigger>
            <TabsTrigger value="biometric">With Biometric Auth</TabsTrigger>
            <TabsTrigger value="complete">Complete Example</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <CodeBlock
              language="typescript"
              filename="SwapExample.tsx"
              code={`import { CavosWallet } from 'cavos-service-native';

// Initialize CavosWallet instance
const cavosWallet = new CavosWallet('sepolia', 'your-app-id');

// Simple token swap
async function swapTokens() {
  try {
    const result = await cavosWallet.swap(
      1000000000000000000, // 1 token (18 decimals)
      '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK
      '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8', // ETH
      false // No biometric auth required
    );
    
    console.log('Swap successful!');
    console.log('Transaction hash:', result.transaction_hash);
  } catch (error) {
    console.error('Swap failed:', error.message);
  }
}`}
            />
          </TabsContent>

          <TabsContent value="biometric">
            <CodeBlock
              language="typescript"
              filename="SecureSwap.tsx"
              code={`import { CavosWallet } from 'cavos-service-native';

// Swap with biometric authentication
async function secureSwap() {
  try {
    const result = await cavosWallet.swap(
      5000000000000000000, // 5 tokens (18 decimals)
      '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8', // ETH
      '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK
      true // Require biometric authentication
    );
    
    console.log('Secure swap completed!');
    console.log('Transaction:', result.transaction_hash);
  } catch (error) {
    if (error.message.includes('biometric')) {
      console.error('Biometric authentication failed');
    } else if (error.message.includes('insufficient')) {
      console.error('Insufficient token balance');
    } else {
      console.error('Swap error:', error.message);
    }
  }
}`}
            />
          </TabsContent>

          <TabsContent value="complete">
            <CodeBlock
              language="typescript"
              filename="CompleteSwapExample.tsx"
              code={`import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { CavosWallet } from 'cavos-service-native';

const SwapScreen = () => {
  const [amount, setAmount] = useState('');
  const [sellToken, setSellToken] = useState('0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d'); // STRK
  const [buyToken, setBuyToken] = useState('0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8'); // ETH
  const [loading, setLoading] = useState(false);

  const cavosWallet = new CavosWallet('sepolia', process.env.EXPO_PUBLIC_CAVOS_APP_ID);

  const handleSwap = async () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    setLoading(true);
    try {
      // Convert amount to wei (18 decimals)
      const amountWei = (Number(amount) * Math.pow(10, 18)).toString();
      
      const result = await cavosWallet.swap(
        Number(amountWei),
        sellToken,
        buyToken,
        true // Require biometric auth for security
      );

      Alert.alert(
        'Swap Successful!', 
        \`Transaction hash: \${result.transaction_hash}\`
      );
      
      // Reset form
      setAmount('');
    } catch (error) {
      let errorMessage = 'Swap failed';
      
      if (error.message.includes('Insufficient balance')) {
        errorMessage = 'Insufficient token balance';
      } else if (error.message.includes('biometric')) {
        errorMessage = 'Biometric authentication required';
      } else if (error.message.includes('slippage')) {
        errorMessage = 'Price impact too high, try again';
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Token Swap
      </Text>
      
      <TextInput
        placeholder="Amount to swap"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ 
          borderWidth: 1, 
          borderColor: '#ccc', 
          padding: 10, 
          marginBottom: 10,
          borderRadius: 5
        }}
      />
      
      <Button
        title={loading ? "Processing..." : "Swap Tokens"}
        onPress={handleSwap}
        disabled={loading}
      />
      
      <Text style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Swap will be executed with biometric authentication and 5% slippage protection
      </Text>
    </View>
  );
};

export default SwapScreen;`}
            />
          </TabsContent>
        </Tabs>

        <h2>API Integration Details</h2>

        <p>
          For advanced use cases, you can integrate directly with the swap API endpoint.
        </p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle className="text-lg">Direct API Usage</CardTitle>
            <CardDescription>
              Session-based swap execution with automatic token refresh
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              language="typescript"
              code={`// Direct API call to swap endpoint
const swapResponse = await fetch(
  'https://services.cavos.xyz/api/v1/external/execute/session/swap',
  {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address: '0x123...', // wallet address
      org_id: 'your-app-id',
      network: 'sepolia',
      amount: 1000000000000000000, // 1 token in wei
      sellTokenAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
      buyTokenAddress: '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8'
    })
  }
);

const result = await swapResponse.json();
console.log('Transaction hash:', result.result);
console.log('Refreshed token:', result.accessToken);`}
            />
          </CardContent>
        </Card>

        <h2>Supported Tokens</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sepolia Testnet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>STRK:</span>
                  <code className="text-xs">0x04718...938d</code>
                </div>
                <div className="flex justify-between">
                  <span>ETH:</span>
                  <code className="text-xs">0x53c91...68a8</code>
                </div>
                <p className="text-muted-foreground text-xs mt-2">
                  Any ERC-20 token with valid contract address
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Mainnet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  All major Starknet tokens supported including:
                </p>
                <ul className="text-muted-foreground text-xs space-y-1">
                  <li>• STRK (Starknet Token)</li>
                  <li>• ETH (Ethereum)</li>
                  <li>• USDC (USD Coin)</li>
                  <li>• USDT (Tether)</li>
                  <li>• DAI (Dai Stablecoin)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Error Handling</h2>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Error Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">Insufficient balance</code>
                  <p className="text-muted-foreground mt-1">
                    User doesn't have enough tokens to complete the swap
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">Biometric authentication failed</code>
                  <p className="text-muted-foreground mt-1">
                    User cancelled or failed biometric verification
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">Token not found</code>
                  <p className="text-muted-foreground mt-1">
                    Invalid token contract address provided
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">Slippage too high</code>
                  <p className="text-muted-foreground mt-1">
                    Price impact exceeds 5% protection limit
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="my-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> All swaps are executed with 5% slippage 
            protection. Large trades may fail if price impact is too high. 
            Consider breaking large swaps into smaller transactions.
          </AlertDescription>
        </Alert>

        <h2>Best Practices</h2>

        <div className="space-y-4 my-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-brand-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Always Enable Biometric Auth</h4>
              <p className="text-sm text-muted-foreground">
                Use biometric authentication for all swap operations to ensure security
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-brand-secondary mt-0.5" />
            <div>
              <h4 className="font-medium">Check Token Balances First</h4>
              <p className="text-sm text-muted-foreground">
                Verify sufficient balance before attempting swaps to avoid errors
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-brand-accent mt-0.5" />
            <div>
              <h4 className="font-medium">Handle Token Refresh</h4>
              <p className="text-sm text-muted-foreground">
                Always update stored access tokens from swap responses
              </p>
            </div>
          </div>
        </div>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Implement Swaps!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have everything needed to integrate gasless token swapping 
              into your React Native application.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">
                  Native SDK Guide
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/guides/authentication" className="text-brand-primary">
                  Authentication Flow
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/guides/troubleshooting" className="text-brand-primary">
                  Troubleshooting
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocLayout>
  );
};

export default TokenSwapping;