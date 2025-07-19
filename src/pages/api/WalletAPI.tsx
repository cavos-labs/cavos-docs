import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { DocPageActions } from '@/components/DocPageActions';
import { CodeBlock } from '@/components/CodeBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Wallet, 
  Code, 
  Zap, 
  Key, 
  Info,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const pageContent = `
The Cavos Service Wallet & Transactions API provides programmatic access to wallet deployment, transaction execution, and token swap functionality on Starknet. All operations include automatic gas fee handling through AVNU paymaster integration.

## Base URL

Production: https://services.cavos.xyz/api/v1/external

## Authentication

All API requests require authentication using either your organization secret (for wallet deployment) or user access tokens (for transaction execution).
`;

const WalletAPI = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions 
          pageTitle="Wallet & Transactions API" 
          pageContent={pageContent}
          pageUrl="/api/wallet"
        />
        
        <h1>Wallet & Transactions API</h1>
        
        <p>
          The Cavos Service Wallet & Transactions API provides programmatic access to wallet deployment, 
          transaction execution, and token swap functionality on Starknet. All operations include automatic 
          gas fee handling through AVNU paymaster integration.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <Card>
            <CardHeader className="text-center">
              <Wallet className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Wallet Deployment</CardTitle>
              <CardDescription>Deploy ArgentX smart accounts</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Code className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Transaction Execution</CardTitle>
              <CardDescription>Execute contract calls on Starknet</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Token Swaps</CardTitle>
              <CardDescription>AVNU integration for token swaps</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Base URL:</strong> https://services.cavos.xyz/api/v1/external
          </AlertDescription>
        </Alert>

        <h2>Wallet Management</h2>

        <Tabs defaultValue="deploy" className="my-6">
          <TabsList>
            <TabsTrigger value="deploy">Deploy Wallet</TabsTrigger>
            <TabsTrigger value="info">Wallet Info</TabsTrigger>
            <TabsTrigger value="count">Wallet Counts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="deploy">
            <h3 className="text-lg font-medium mb-4">Deploy Wallet</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default">POST</Badge>
              <code className="text-sm bg-muted px-2 py-1 rounded">/deploy</code>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Deploy a new ArgentX smart account on Starknet for a user.
            </p>
            
            <CodeBlock
              language="bash"
              filename="Deploy Wallet Request"
              code={`curl -X POST "https://services.cavos.xyz/api/v1/external/deploy" \\
  -H "Authorization: Bearer YOUR_ORG_SECRET" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network": "sepolia",
    "auth0_uid": "auth0|1234567890"
  }'`}
            />
            
            <h4 className="font-medium mt-6 mb-2">Request Body</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Parameter</th>
                    <th className="text-left p-3 border-b border-border">Type</th>
                    <th className="text-left p-3 border-b border-border">Required</th>
                    <th className="text-left p-3 border-b border-border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">network</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Network to deploy on ("sepolia" or "mainnet")</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">auth0_uid</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Auth0 user ID for the wallet owner</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-medium mt-6 mb-2">Response</h4>
            <CodeBlock
              language="json"
              filename="Deploy Wallet Response"
              code={`{
  "success": true,
  "data": {
    "wallet": {
      "address": "0x1234567890abcdef1234567890abcdef12345678",
      "network": "sepolia",
      "public_key": "0xabcdef1234567890abcdef1234567890abcdef12",
      "private_key": "encrypted_private_key_data",
      "deployed": true
    },
    "transaction_hash": "0x987654321fedcba987654321fedcba9876543210"
  }
}`}
            />
          </TabsContent>
          
          <TabsContent value="info">
            <h3 className="text-lg font-medium mb-4">Get Wallet Information</h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              Wallet information is returned as part of authentication responses. 
              Use the wallet data from login/registration flows.
            </p>
            
            <CodeBlock
              language="json"
              filename="Wallet Data Structure"
              code={`{
  "wallet": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "network": "sepolia",
    "public_key": "0xabcdef1234567890abcdef1234567890abcdef12",
    "private_key": "encrypted_private_key_data"
  },
  "user_id": "auth0|1234567890",
  "org_id": "org-123",
  "email": "user@example.com",
  "created_at": "2024-01-01T00:00:00.000Z"
}`}
            />
          </TabsContent>
          
          <TabsContent value="count">
            <h3 className="text-lg font-medium mb-4">Get Wallet Counts</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">GET</Badge>
              <code className="text-sm bg-muted px-2 py-1 rounded">/wallets/count</code>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Get the total number of wallets deployed across all networks. No authentication required.
            </p>
            
            <CodeBlock
              language="bash"
              filename="Get Wallet Counts"
              code={`curl -X GET "https://services.cavos.xyz/api/v1/external/wallets/count"`}
            />
            
            <CodeBlock
              language="json"
              filename="Wallet Counts Response"
              code={`{
  "sepolia": 1234,
  "mainnet": 567
}`}
            />
          </TabsContent>
        </Tabs>

        <h2>Transaction Execution</h2>

        <Tabs defaultValue="execute" className="my-6">
          <TabsList>
            <TabsTrigger value="execute">Execute Transaction</TabsTrigger>
            <TabsTrigger value="batch">Batch Execution</TabsTrigger>
            <TabsTrigger value="swap">Token Swap</TabsTrigger>
          </TabsList>
          
          <TabsContent value="execute">
            <h3 className="text-lg font-medium mb-4">Execute Transaction</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default">POST</Badge>
              <code className="text-sm bg-muted px-2 py-1 rounded">/execute/session</code>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Execute one or more contract calls with automatic gas fee handling.
            </p>
            
            <CodeBlock
              language="bash"
              filename="Execute Transaction Request"
              code={`curl -X POST "https://services.cavos.xyz/api/v1/external/execute/session" \\
  -H "Authorization: Bearer USER_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "org_id": "org-123",
    "calls": [
      {
        "contractAddress": "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
        "entrypoint": "transfer",
        "calldata": [
          "0xrecipient_address_here",
          "1000000000000000000",
          "0"
        ]
      }
    ],
    "network": "sepolia"
  }'`}
            />
            
            <h4 className="font-medium mt-6 mb-2">Request Body</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Parameter</th>
                    <th className="text-left p-3 border-b border-border">Type</th>
                    <th className="text-left p-3 border-b border-border">Required</th>
                    <th className="text-left p-3 border-b border-border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">address</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Wallet address executing the transaction</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">org_id</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Organization ID</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">calls</td>
                    <td className="p-3 border-b border-border">array</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Array of contract calls to execute</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">network</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Yes</td>
                    <td className="p-3 border-b border-border">Network to execute on ("sepolia" or "mainnet")</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-medium mt-6 mb-2">Call Object Structure</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Field</th>
                    <th className="text-left p-3 border-b border-border">Type</th>
                    <th className="text-left p-3 border-b border-border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">contractAddress</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Contract address to call</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">entrypoint</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Function name to call</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">calldata</td>
                    <td className="p-3 border-b border-border">string[]</td>
                    <td className="p-3 border-b border-border">Array of function arguments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-medium mt-6 mb-2">Response</h4>
            <CodeBlock
              language="json"
              filename="Execute Transaction Response"
              code={`{
  "success": true,
  "transaction_hash": "0x987654321fedcba987654321fedcba9876543210",
  "status": "ACCEPTED_ON_L2"
}`}
            />
          </TabsContent>
          
          <TabsContent value="batch">
            <h3 className="text-lg font-medium mb-4">Batch Transaction Example</h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              Execute multiple contract calls in a single transaction for better efficiency.
            </p>
            
            <CodeBlock
              language="json"
              filename="Batch Transaction Request"
              code={`{
  "address": "0x1234567890abcdef1234567890abcdef12345678",
  "org_id": "org-123",
  "calls": [
    {
      "contractAddress": "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
      "entrypoint": "approve",
      "calldata": [
        "0xspender_address",
        "1000000000000000000",
        "0"
      ]
    },
    {
      "contractAddress": "0xother_contract_address",
      "entrypoint": "deposit",
      "calldata": [
        "1000000000000000000",
        "0"
      ]
    }
  ],
  "network": "sepolia"
}`}
            />
          </TabsContent>
          
          <TabsContent value="swap">
            <h3 className="text-lg font-medium mb-4">Token Swap with AVNU</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default">POST</Badge>
              <code className="text-sm bg-muted px-2 py-1 rounded">/execute/session/swap</code>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Execute token swaps using AVNU integration with automatic gas fee handling.
            </p>
            
            <CodeBlock
              language="bash"
              filename="Token Swap Request"
              code={`curl -X POST "https://services.cavos.xyz/api/v1/external/execute/session/swap" \\
  -H "Authorization: Bearer USER_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "org_id": "org-123",
    "amount": 1000000000000000000,
    "sellTokenAddress": "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    "buyTokenAddress": "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
    "network": "sepolia"
  }'`}
            />
            
            <h4 className="font-medium mt-6 mb-2">Request Body</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Parameter</th>
                    <th className="text-left p-3 border-b border-border">Type</th>
                    <th className="text-left p-3 border-b border-border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">amount</td>
                    <td className="p-3 border-b border-border">number</td>
                    <td className="p-3 border-b border-border">Amount to swap (in wei for token decimals)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">sellTokenAddress</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Contract address of token to sell</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-mono">buyTokenAddress</td>
                    <td className="p-3 border-b border-border">string</td>
                    <td className="p-3 border-b border-border">Contract address of token to buy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-medium mt-6 mb-2">Common Token Addresses (Sepolia)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Token</th>
                    <th className="text-left p-3 border-b border-border">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border">ETH</td>
                    <td className="p-3 border-b border-border font-mono text-xs">0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">STRK</td>
                    <td className="p-3 border-b border-border font-mono text-xs">0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-medium mt-6 mb-2">Response</h4>
            <CodeBlock
              language="json"
              filename="Token Swap Response"
              code={`{
  "success": true,
  "transaction_hash": "0x987654321fedcba987654321fedcba9876543210",
  "status": "ACCEPTED_ON_L2",
  "swap_details": {
    "sellToken": "ETH",
    "buyToken": "STRK",
    "sellAmount": "1000000000000000000",
    "expectedBuyAmount": "2500000000000000000"
  }
}`}
            />
          </TabsContent>
        </Tabs>

        <h2>Transaction Monitoring</h2>

        <Tabs defaultValue="status" className="my-6">
          <TabsList>
            <TabsTrigger value="status">Transaction Status</TabsTrigger>
            <TabsTrigger value="transfers">Token Transfers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="status">
            <h3 className="text-lg font-medium mb-4">Check Transaction Status</h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              Use Starknet RPC or block explorers to check transaction status using the returned transaction hash.
            </p>
            
            <CodeBlock
              language="javascript"
              filename="Check Transaction Status"
              code={`// Using Starknet.js
import { RpcProvider } from 'starknet';

const provider = new RpcProvider({
  nodeUrl: 'https://starknet-sepolia.public.blastapi.io/rpc/v0.7'
});

async function checkTransactionStatus(txHash) {
  try {
    const receipt = await provider.getTransactionReceipt(txHash);
    console.log('Transaction status:', receipt.execution_status);
    return receipt;
  } catch (error) {
    console.error('Transaction not found or pending');
    return null;
  }
}`}
            />
          </TabsContent>
          
          <TabsContent value="transfers">
            <h3 className="text-lg font-medium mb-4">Get Transaction Transfers</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">GET</Badge>
              <code className="text-sm bg-muted px-2 py-1 rounded">/tx?txHash=...&network=...</code>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Get detailed token transfer information for a transaction.
            </p>
            
            <CodeBlock
              language="bash"
              filename="Get Transaction Transfers"
              code={`curl -X GET "https://services.cavos.xyz/api/v1/external/tx?txHash=0x987654321fedcba987654321fedcba9876543210&network=sepolia"`}
            />
            
            <CodeBlock
              language="json"
              filename="Transaction Transfers Response"
              code={`{
  "transfers": [
    {
      "from_address": "0x1234567890abcdef1234567890abcdef12345678",
      "to_address": "0xrecipient_address_here",
      "amount": "1000000000000000000",
      "token_address": "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
      "token_symbol": "STRK"
    }
  ]
}`}
            />
          </TabsContent>
        </Tabs>

        <h2>Error Handling</h2>
        
        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">HTTP Status Codes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <code className="text-sm">200 OK</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Request successful</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <code className="text-sm">400 Bad Request</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Invalid request parameters</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <code className="text-sm">401 Unauthorized</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Invalid or expired authentication</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <code className="text-sm">500 Internal Server Error</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Server error or transaction failure</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <CodeBlock
          language="json"
          filename="Error Response Format"
          code={`{
  "error": "Transaction failed",
  "details": "Insufficient balance for transaction",
  "code": "INSUFFICIENT_BALANCE"
}`}
        />

        <Alert className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Rate Limiting:</strong> API requests are rate limited per organization. 
            Implement proper error handling and retry logic with exponential backoff for production applications.
          </AlertDescription>
        </Alert>
      </div>
    </DocLayout>
  );
};

export default WalletAPI;