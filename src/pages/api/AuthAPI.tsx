import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { DocPageActions } from "@/components/DocPageActions";
import { CodeBlock } from "@/components/CodeBlock";
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
  Key,
  Shield,
  Globe,
  Lock,
  User,
  Mail,
  Smartphone,
  Apple,
  Chrome,
  RefreshCw,
  Info,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

const pageContent = `
The Cavos Service Authentication API provides programmatic access to user registration, login, token management, and wallet deployment features. Use these endpoints to integrate Starknet wallet infrastructure with Auth0-based authentication into your applications.

## Base URL

Production: https://services.cavos.xyz/api/v1/external

## Authentication

Authentication endpoints use your organization secret token. User-specific operations require JWT access tokens. All responses include automatic wallet deployment and session management.
`;

const AuthAPI = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Authentication API Reference"
          pageContent={pageContent}
          pageUrl="/api/auth"
        />

        <h1>Authentication API Reference</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            REST API
          </Badge>
          <Badge variant="outline">JWT Tokens</Badge>
          <Badge variant="outline">Auth0 Integration</Badge>
          <Badge variant="outline">Wallet Deployment</Badge>
        </div>

        <p>
          The Cavos Service Authentication API provides programmatic access to user 
          registration, login, token management, and wallet deployment features. All 
          authentication methods include automatic ArgentX smart account deployment 
          on Starknet.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Base URL:</strong> https://services.cavos.xyz/api/v1/external
            <br />
            <strong>Authentication:</strong> Organization Secret for auth endpoints, 
            JWT access tokens for user operations
          </AlertDescription>
        </Alert>

        {/* Email/Password Authentication */}
        <h2>Email/Password Authentication</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium">
                    POST
                  </div>
                  <CardTitle className="text-lg">/auth/register</CardTitle>
                </div>
                <Badge variant="outline">Wallet Deployment</Badge>
              </div>
              <CardDescription>
                Register new user with automatic ArgentX smart account deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="request">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="request">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Headers</h4>
                      <CodeBlock
                        language="http"
                        code={`Authorization: Bearer YOUR_ORG_SECRET
Content-Type: application/json`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Request Body</h4>
                      <CodeBlock
                        language="json"
                        code={`{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "network": "sepolia"
}`}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="response">
                  <CodeBlock
                    language="json"
                    code={`{
  "user": {
    "email": "user@example.com",
    "name": "User Name",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "wallet": {
    "address": "0x1234567890abcdef...",
    "network": "sepolia",
    "deployed": true
  },
  "user_id": "auth0|507f1f77bcf86cd799439011",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "rt_1234567890abcdef...",
  "expires_in": 300
}`}
                  />
                </TabsContent>

                <TabsContent value="example">
                  <CodeBlock
                    language="javascript"
                    code={`const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/register', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ORG_SECRET',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePassword123!',
    network: 'sepolia'
  })
});

const data = await response.json();
console.log('User registered:', data.user);
console.log('Wallet address:', data.wallet.address);`}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium">
                    POST
                  </div>
                  <CardTitle className="text-lg">/auth/login</CardTitle>
                </div>
              </div>
              <CardDescription>
                Authenticate existing user and retrieve wallet information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="request">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="request">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Headers</h4>
                      <CodeBlock
                        language="http"
                        code={`Authorization: Bearer YOUR_ORG_SECRET
Content-Type: application/json`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Request Body</h4>
                      <CodeBlock
                        language="json"
                        code={`{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "network": "sepolia"
}`}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="response">
                  <CodeBlock
                    language="json"
                    code={`{
  "user": {
    "email": "user@example.com",
    "name": "User Name"
  },
  "wallet": {
    "address": "0x1234567890abcdef...",
    "network": "sepolia"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "rt_1234567890abcdef...",
  "expires_in": 300
}`}
                  />
                </TabsContent>

                <TabsContent value="example">
                  <CodeBlock
                    language="javascript"
                    code={`const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/login', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ORG_SECRET',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePassword123!',
    network: 'sepolia'
  })
});

const data = await response.json();
console.log('Login successful:', data.user);`}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Social Authentication */}
        <h2>Social Authentication</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium">
                    GET
                  </div>
                  <CardTitle className="text-lg">/auth/apple</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Apple className="h-4 w-4" />
                  <Badge variant="outline">OAuth Flow</Badge>
                </div>
              </div>
              <CardDescription>
                Initiate Apple Sign In OAuth flow with automatic wallet deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Query Parameters</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>network</code>
                      <span className="text-muted-foreground">Network (sepolia/mainnet)</span>
                    </div>
                    <div className="flex justify-between">
                      <code>final_redirect_uri</code>
                      <span className="text-muted-foreground">App callback URL</span>
                    </div>
                    <div className="flex justify-between">
                      <code>app_id</code>
                      <span className="text-muted-foreground">Your organization app ID</span>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  language="javascript"
                  code={`// Get Apple Sign In URL
const response = await fetch(
  'https://services.cavos.xyz/api/v1/external/auth/apple?' +
  new URLSearchParams({
    network: 'sepolia',
    final_redirect_uri: 'yourapp://auth-callback',
    app_id: 'your-app-id'
  })
);

const { url } = await response.json();

// Redirect user to Apple authentication
window.location.href = url;

// User will be redirected back to final_redirect_uri with user_data parameter`}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium">
                    GET
                  </div>
                  <CardTitle className="text-lg">/auth/google</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Chrome className="h-4 w-4" />
                  <Badge variant="outline">OAuth Flow</Badge>
                </div>
              </div>
              <CardDescription>
                Initiate Google OAuth2 flow with automatic wallet deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Query Parameters</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>network</code>
                      <span className="text-muted-foreground">Network (sepolia/mainnet)</span>
                    </div>
                    <div className="flex justify-between">
                      <code>final_redirect_uri</code>
                      <span className="text-muted-foreground">App callback URL</span>
                    </div>
                    <div className="flex justify-between">
                      <code>app_id</code>
                      <span className="text-muted-foreground">Your organization app ID</span>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  language="javascript"
                  code={`// Get Google OAuth URL
const response = await fetch(
  'https://services.cavos.xyz/api/v1/external/auth/google?' +
  new URLSearchParams({
    network: 'sepolia',
    final_redirect_uri: 'yourapp://auth-callback',
    app_id: 'your-app-id'
  })
);

const { url } = await response.json();
window.location.href = url;`}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Token Management */}
        <h2>Token Management</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium">
                    POST
                  </div>
                  <CardTitle className="text-lg">/auth/token/refresh</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-4 w-4" />
                  <Badge variant="outline">Token Rotation</Badge>
                </div>
              </div>
              <CardDescription>
                Refresh expired access tokens using refresh token
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="request">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="request">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Headers</h4>
                      <CodeBlock
                        language="http"
                        code={`Content-Type: application/json`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Request Body</h4>
                      <CodeBlock
                        language="json"
                        code={`{
  "refresh_token": "rt_1234567890abcdef...",
  "app_id": "your-app-id",
  "network": "sepolia"
}`}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="response">
                  <CodeBlock
                    language="json"
                    code={`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "rt_new1234567890abcdef...",
  "expires_in": 300
}`}
                  />
                </TabsContent>

                <TabsContent value="example">
                  <CodeBlock
                    language="javascript"
                    code={`const refreshAccessToken = async (refreshToken) => {
  const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/token/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
      app_id: 'your-app-id',
      network: 'sepolia'
    })
  });

  const tokens = await response.json();
  
  // Store new tokens (refresh token is one-time use)
  localStorage.setItem('accessToken', tokens.access_token);
  localStorage.setItem('refreshToken', tokens.refresh_token);
  
  return tokens;
};`}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium">
                  POST
                </div>
                <CardTitle className="text-lg">/auth/token/check</CardTitle>
              </div>
              <CardDescription>
                Validate access token and get user information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Headers</h4>
                  <CodeBlock
                    language="http"
                    code={`Authorization: Bearer ACCESS_TOKEN
Content-Type: application/json`}
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Response</h4>
                  <CodeBlock
                    language="json"
                    code={`{
  "valid": true,
  "user": {
    "user_id": "auth0|507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "User Name"
  },
  "wallet": {
    "address": "0x1234567890abcdef...",
    "network": "sepolia"
  },
  "expires_at": "2024-01-15T10:35:00Z"
}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <h2>User Management</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-medium">
                  DELETE
                </div>
                <CardTitle className="text-lg">/orgs/users</CardTitle>
              </div>
              <CardDescription>
                Delete user from organization (removes from Auth0)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Headers</h4>
                  <CodeBlock
                    language="http"
                    code={`Authorization: Bearer YOUR_ORG_SECRET
Content-Type: application/json`}
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Request Body</h4>
                  <CodeBlock
                    language="json"
                    code={`{
  "user_id": "auth0|507f1f77bcf86cd799439011"
}`}
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Response</h4>
                  <CodeBlock
                    language="json"
                    code={`{
  "success": true,
  "message": "User deleted successfully"
}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error Responses */}
        <h2>Error Responses</h2>

        <div className="space-y-4 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Error Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        400 Bad Request
                      </code>
                    </div>
                    <p className="text-muted-foreground">
                      Missing required fields, invalid email format, or weak password
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        401 Unauthorized
                      </code>
                    </div>
                    <p className="text-muted-foreground">
                      Invalid organization secret, expired access token, or wrong credentials
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        409 Conflict
                      </code>
                    </div>
                    <p className="text-muted-foreground">
                      User already exists with provided email address
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        500 Internal Server Error
                      </code>
                    </div>
                    <p className="text-muted-foreground">
                      Wallet deployment failure or Auth0 connection issue
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Error Response Format</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="json"
                code={`{
  "error": "invalid_credentials",
  "message": "Invalid email or password",
  "details": {
    "field": "password",
    "code": "WEAK_PASSWORD"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
              />
            </CardContent>
          </Card>
        </div>

        {/* Rate Limiting */}
        <Alert className="my-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Rate Limiting:</strong> Authentication endpoints are rate limited 
            to prevent abuse. Registration: 5 requests/minute per IP. Login: 10 requests/minute 
            per IP. Token refresh: 60 requests/minute per user.
          </AlertDescription>
        </Alert>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Integrate!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have complete documentation for all Cavos authentication endpoints. 
              Use these APIs to build secure authentication flows with automatic wallet deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/guides/authentication" className="text-brand-primary">
                  Authentication Guide
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/api/wallet" className="text-brand-primary">
                  Wallet API
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

export default AuthAPI;