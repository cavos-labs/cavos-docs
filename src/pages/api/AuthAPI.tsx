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
  Info,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

const pageContent = `
The Cavos Service Authentication API provides programmatic access to user registration, login, and wallet deployment features. Use these endpoints to integrate Starknet wallet infrastructure with Auth0-based authentication into your applications.

## Base URL

Production: https://services.cavos.xyz/api/v1/external

## Authentication

All API requests require authentication using your organization secret token for registration/login endpoints, or user access tokens for user-specific operations.
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
            REST API v1
          </Badge>
          <Badge variant="outline">Auth0 Integration</Badge>
          <Badge variant="outline">Starknet Wallets</Badge>
        </div>

        <p>
          The Cavos Service Authentication API provides programmatic access to
          user registration, login, and automatic wallet deployment features.
          All users get ArgentX smart accounts deployed on Starknet with
          complete gas fee abstraction.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Base URL:</strong>{" "}
            <code className="code-inline">
              https://services.cavos.xyz/api/v1/external
            </code>
            <br />
            <strong>Organization Setup:</strong> Register at{" "}
            <a
              href="https://services.cavos.xyz"
              className="text-brand-primary hover:underline"
            >
              https://services.cavos.xyz
            </a>
          </AlertDescription>
        </Alert>

        <h2>Authentication</h2>

        <p>
          All API requests require authentication using one of these methods:
        </p>

        <div className="responsive-grid-2 section-spacing">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-brand-primary" />
                <CardTitle className="text-lg">Organization Secret</CardTitle>
              </div>
              <CardDescription>
                For user registration and login endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`curl -H "Authorization: Bearer YOUR_ORG_SECRET" \\
     -H "Content-Type: application/json" \\
     https://services.cavos.xyz/api/v1/external/auth/register`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-brand-secondary" />
                <CardTitle className="text-lg">User Access Token</CardTitle>
              </div>
              <CardDescription>
                For transaction execution and user operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`curl -H "Authorization: Bearer USER_ACCESS_TOKEN" \\
     -H "Content-Type: application/json" \\
     https://services.cavos.xyz/api/v1/external/execute/session`}
              />
            </CardContent>
          </Card>
        </div>

        <h2>Response Format</h2>

        <p>All API responses follow a consistent JSON format:</p>

        <Tabs defaultValue="success" className="my-6">
          <TabsList>
            <TabsTrigger value="success">Success Response</TabsTrigger>
            <TabsTrigger value="error">Error Response</TabsTrigger>
          </TabsList>

          <TabsContent value="success">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">HTTP 201 Created</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user_id": "auth0|123456789",
    "email": "user@example.com",
    "organization": {
      "org_id": "org-123",
      "org_name": "My Organization"
    },
    "wallet": {
      "address": "0x1234567890abcdef1234567890abcdef12345678",
      "network": "sepolia",
      "public_key": "0xabcdef1234567890abcdef1234567890abcdef12",
      "private_key": "encrypted_private_key_data"
    },
    "user_metadata": {},
    "created_at": "2024-01-01T00:00:00.000Z",
    "authData": {
      "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "v1.MEQBd...",
      "expiresIn": 300
    }
  }
}`}
            />
          </TabsContent>

          <TabsContent value="error">
            <div className="flex items-center space-x-2 mb-4">
              <XCircle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium">HTTP 4xx/5xx Error</span>
            </div>
            <CodeBlock
              language="json"
              code={`{
  "success": false,
  "error": "Registration failed: Invalid email format",
  "message": "Unauthorized: Missing or invalid Bearer token"
}`}
            />
          </TabsContent>
        </Tabs>

        <h2>Authentication Endpoints</h2>

        <div className="space-y-8 my-8">
          {/* User Registration */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    POST
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/register
                  </CardTitle>
                </div>
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Register a new user with automatic wallet deployment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Headers</h4>
                <CodeBlock
                  language="bash"
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
  "network": "sepolia",
  "user_metadata": {}
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          email
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Valid email address
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          password
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Minimum 8 characters, uppercase, lowercase, number
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          network
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">No</td>
                        <td className="p-3 border-b border-border">
                          "sepolia" or "mainnet" (default: "sepolia")
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          user_metadata
                        </td>
                        <td className="p-3 border-b border-border">object</td>
                        <td className="p-3 border-b border-border">No</td>
                        <td className="p-3 border-b border-border">
                          Additional user metadata
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user_id": "auth0|123456789",
    "email": "user@example.com",
    "organization": {
      "org_id": "org-123",
      "org_name": "My Organization"
    },
    "wallet": {
      "address": "0x1234567890abcdef1234567890abcdef12345678",
      "network": "sepolia",
      "public_key": "0xabcdef1234567890abcdef1234567890abcdef12",
      "private_key": "encrypted_private_key_data"
    },
    "user_metadata": {},
    "created_at": "2024-01-01T00:00:00.000Z",
    "authData": {
      "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "v1.MEQBd...",
      "expiresIn": 300
    }
  }
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Missing or invalid Bearer token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid organization token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Organization is not active for mainnet"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing required fields: email, password"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Invalid email format"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Password must be at least 8 characters long"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">404 Not Found</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "success": false,
  "error": "User already has an account in this organization",
  "message": "This email is already registered in this organization"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "success": false,
  "error": "Registration failed: Error details"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>User Creation:</strong> This endpoint creates a new
                  user in Auth0 using the Management API and ensures wallet
                  deployment for the new user.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Wallet Deployment:</strong> If wallet deployment
                  fails, the user registration will still succeed, but a{" "}
                  <code className="code-inline">walletStatus</code> field will
                  be included in the response with deployment failure details.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Organization Validation:</strong> The endpoint
                  validates the organization using the Bearer token and checks
                  if the organization is active for mainnet access when
                  required.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Password Requirements:</strong> The endpoint enforces
                  strict password validation including minimum length,
                  uppercase, lowercase, and numeric requirements.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* User Login */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    POST
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/login
                  </CardTitle>
                </div>
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Authenticate an existing user</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Headers</h4>
                <CodeBlock
                  language="bash"
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

              <div>
                <h4 className="font-medium mb-2">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          email
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          User's email address
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          password
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          User's password
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          network
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">No</td>
                        <td className="p-3 border-b border-border">
                          "sepolia" or "mainnet" (default: "sepolia")
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "success": true,
  "message": "Login successful",
  "data": {
    "user_id": "auth0|123456789",
    "email": "user@example.com",
    "organization": {
      "org_id": "org-123",
      "org_name": "My Organization"
    },
    "wallet": {
      "address": "0x1234567890abcdef1234567890abcdef12345678",
      "network": "sepolia",
      "public_key": "0xabcdef1234567890abcdef1234567890abcdef12",
      "private_key": "encrypted_private_key_data"
    },
    "authData": {
      "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "v1.MEQBd...",
      "expiresIn": 300
    }
  }
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Missing or invalid Bearer token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid organization token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Organization is not active for mainnet"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Invalid email or password"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Failed to fetch user info from Auth0",
  "details": "Error details"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Login failed",
  "details": "Error details"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "success": false,
  "error": "Internal server error details"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Authentication Flow:</strong> This endpoint
                  authenticates users using Auth0's password realm grant type
                  and ensures wallet deployment for the authenticated user.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Wallet Deployment:</strong> If wallet deployment fails
                  during login, the login will still succeed, but a{" "}
                  <code className="code-inline">walletStatus</code> field will
                  be included in the response with deployment failure details.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Organization Validation:</strong> The endpoint
                  validates the organization using the Bearer token and checks
                  if the organization is active for mainnet access when
                  required.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Apple Sign In */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-600"
                  >
                    GET
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/apple
                  </CardTitle>
                </div>
                <Smartphone className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Initialize Apple Sign In flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Query Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          network
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">No</td>
                        <td className="p-3 border-b border-border">
                          Network to use ("sepolia" or "mainnet", default:
                          "sepolia")
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          final_redirect_uri
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          URI to redirect after successful authentication
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          app_id
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Application identifier to identify the organization
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Example Request</h4>
                <CodeBlock
                  language="bash"
                  code={`curl -X GET "https://services.cavos.xyz/api/v1/external/auth/apple?network=sepolia&final_redirect_uri=https://myapp.com/callback&app_id=my-app-identifier"`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "url": "https://your-auth0-domain.auth0.com/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://services.cavos.xyz/api/v1/external/auth/apple/callback?network=sepolia&org_id=org-123&app_id=my-app-identifier&final_redirect_uri=https://myapp.com/callback&scope=openid profile email offline_access&connection=apple"
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing final_redirect_uri in query params"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing app_id in query params"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid app_id"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Organization is not active for mainnet"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Authentication Flow:</strong> This endpoint initiates
                  the Apple Sign In flow by redirecting users to Auth0's
                  authorization endpoint with the Apple connection configured
                  for your organization.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Organization Validation:</strong> The endpoint
                  validates the organization using the{" "}
                  <code className="code-inline">app_id</code> parameter and
                  checks if the organization is active for mainnet access when
                  required.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Dynamic Base URL:</strong> The callback URL is
                  constructed using the{" "}
                  <code className="code-inline">NEXT_PUBLIC_BASE_URL</code>{" "}
                  environment variable, allowing for flexible deployment
                  configurations.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Google OAuth */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-600"
                  >
                    GET
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/google
                  </CardTitle>
                </div>
                <Globe className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Initialize Google OAuth flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Query Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          network
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">No</td>
                        <td className="p-3 border-b border-border">
                          Network to use ("sepolia" or "mainnet", default:
                          "sepolia")
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          final_redirect_uri
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          URI to redirect after successful authentication
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          app_id
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Application identifier to identify the organization
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Example Request</h4>
                <CodeBlock
                  language="bash"
                  code={`curl -X GET "https://services.cavos.xyz/api/v1/external/auth/google?network=sepolia&final_redirect_uri=https://myapp.com/callback&app_id=my-app-identifier"`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "url": "https://your-auth0-domain.auth0.com/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://services.cavos.xyz/api/v1/external/auth/google/callback?network=sepolia&org_id=org-123&app_id=my-app-identifier&final_redirect_uri=https://myapp.com/callback&scope=openid profile email offline_access&connection=google-oauth2"
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing final_redirect_uri in query params"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing app_id in query params"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid app_id"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Organization is not active for mainnet"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Authentication Flow:</strong> This endpoint initiates
                  the Google OAuth flow by redirecting users to Auth0's
                  authorization endpoint with the Google OAuth2 connection
                  configured for your organization.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Organization Validation:</strong> The endpoint
                  validates the organization using the{" "}
                  <code className="code-inline">app_id</code> parameter and
                  checks if the organization is active for mainnet access when
                  required.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Fixed Base URL:</strong> The callback URL uses a
                  hardcoded base URL (
                  <code className="code-inline">
                    https://services.cavos.xyz
                  </code>
                  ) for the Google OAuth callback endpoint.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Refresh Token */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    POST
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/token/refresh
                  </CardTitle>
                </div>
                <Key className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Refresh an expired access token</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Request Body</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "refresh_token": "uuid-refresh-token",
  "app_id": "my-app-identifier",
  "network": "sepolia"
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          refresh_token
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          UUID refresh token to exchange for new tokens
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          app_id
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Application identifier to identify the organization
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          network
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          Network context for the new access token
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "new-uuid-refresh-token",
  "expires_in": 300
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Invalid or expired refresh token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Invalid app_id"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Failed to fetch user info"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Internal Server Error"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Token Management:</strong> This endpoint exchanges a
                  valid refresh token for a new access token and refresh token
                  pair. The old refresh token is invalidated upon successful
                  exchange.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Redis Storage:</strong> Tokens are stored in Redis
                  with appropriate expiration times. Access tokens expire in 5
                  minutes, refresh tokens expire in 24 hours.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Auth0 Integration:</strong> The endpoint fetches user
                  information from Auth0 using the Management API to ensure the
                  user still exists and is valid.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <h2>User Profile Endpoints</h2>

        <div className="space-y-8 my-8">
          {/* Get User Profile */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-600"
                  >
                    GET
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /user/profile
                  </CardTitle>
                </div>
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Get the current user's profile and wallet information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Headers</h4>
                <CodeBlock
                  language="bash"
                  code={`Authorization: Bearer USER_ACCESS_TOKEN`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "success": true,
  "data": {
    "user_id": "auth0|123456789",
    "email": "user@example.com",
    "network": "sepolia",
    "wallet": {
      "address": "0x1234567890abcdef1234567890abcdef12345678",
      "network": "sepolia",
      "public_key": "0xabcdef1234567890abcdef1234567890abcdef12"
    },
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Missing or invalid Bearer token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid or expired access token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">401 Unauthorized</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Unauthorized: Invalid JWT signature"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">404 Not Found</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Wallet not found",
  "error": "Database error details"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "message": "Internal Server Error"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Authentication:</strong> This endpoint requires a
                  valid JWT access token in the Authorization header. The token
                  is validated against Redis and verified using JWT signature
                  verification.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Wallet Lookup:</strong> The endpoint retrieves wallet
                  information from the database based on the user ID,
                  organization ID, and network extracted from the JWT token.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Performance Monitoring:</strong> The endpoint includes
                  comprehensive logging with request IDs and timing information
                  for debugging and monitoring purposes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <h2>Token Management</h2>

        <div className="space-y-8 my-8">
          {/* Token Check */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    POST
                  </Badge>
                  <CardTitle className="text-lg font-mono">
                    /auth/token/check
                  </CardTitle>
                </div>
                <Key className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Check the validity and usage status of an access token
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Request Body</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          Parameter
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Type
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Required
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border font-mono">
                          access_token
                        </td>
                        <td className="p-3 border-b border-border">string</td>
                        <td className="p-3 border-b border-border">Yes</td>
                        <td className="p-3 border-b border-border">
                          JWT access token to validate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Success Response</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "valid": true,
  "expired": false,
  "used": false,
  "decoded": {
    "user_id": "auth0|123456789",
    "email": "user@example.com",
    "org_id": "org-123",
    "network": "sepolia",
    "type": "access",
    "iat": 1703123456,
    "exp": 1703123756
  }
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Responses</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">400 Bad Request</h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Missing access_token"
}`}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">
                      500 Internal Server Error
                    </h5>
                    <CodeBlock
                      language="json"
                      code={`{
  "error": "Unknown error"
}`}
                    />
                  </div>
                </div>
              </div>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Token Validation:</strong> This endpoint checks both
                  JWT expiration and Redis usage status to determine if a token
                  is valid and unused.
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Response Fields:</strong> The response includes{" "}
                  <code className="code-inline">valid</code> (overall validity),{" "}
                  <code className="code-inline">expired</code> (JWT expiration),{" "}
                  <code className="code-inline">used</code> (Redis usage
                  status), and <code className="code-inline">decoded</code> (JWT
                  payload).
                </AlertDescription>
              </Alert>

              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Redis Integration:</strong> The endpoint checks Redis
                  for token usage status to prevent token reuse and ensure
                  single-use token security.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <h2>Error Codes</h2>

        <p>
          Common error codes returned by the Cavos Service Authentication API:
        </p>

        <div className="responsive-grid-2 section-spacing">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Authentication Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="code-inline">401 Unauthorized</code>
                  <p className="text-muted-foreground">
                    Missing or invalid Bearer token
                  </p>
                </div>
                <div>
                  <code className="code-inline">401 Unauthorized</code>
                  <p className="text-muted-foreground">
                    Invalid organization token
                  </p>
                </div>
                <div>
                  <code className="code-inline">401 Unauthorized</code>
                  <p className="text-muted-foreground">
                    Organization not active for mainnet
                  </p>
                </div>
                <div>
                  <code className="code-inline">400 Bad Request</code>
                  <p className="text-muted-foreground">
                    Missing required fields: email, password
                  </p>
                </div>
                <div>
                  <code className="code-inline">400 Bad Request</code>
                  <p className="text-muted-foreground">Invalid email format</p>
                </div>
                <div>
                  <code className="code-inline">400 Bad Request</code>
                  <p className="text-muted-foreground">
                    Password validation errors (length, uppercase, lowercase,
                    number)
                  </p>
                </div>
                <div>
                  <code className="code-inline">404 Not Found</code>
                  <p className="text-muted-foreground">
                    User already has an account in this organization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Organization Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="code-inline">500 Internal Server Error</code>
                  <p className="text-muted-foreground">
                    Registration failed due to Auth0 or wallet deployment issues
                  </p>
                </div>
                <div>
                  <code className="code-inline">Wallet Deployment Failed</code>
                  <p className="text-muted-foreground">
                    Wallet deployment fails but user registration succeeds
                  </p>
                </div>
                <div>
                  <code className="code-inline">CORS Preflight</code>
                  <p className="text-muted-foreground">
                    OPTIONS requests return 200 OK for CORS handling
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Password Requirements</h2>

        <p>The API enforces strict password requirements for security:</p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Minimum 8 characters long</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>At least one uppercase letter (A-Z)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>At least one lowercase letter (a-z)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>At least one number (0-9)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Network Support</h2>

        <p>
          The API supports different networks with organization-based
          restrictions:
        </p>

        <div className="responsive-grid-2 section-spacing">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sepolia Testnet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Available to all organizations. Default network for development
                and testing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mainnet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Only available to active organizations. Requires organization
                approval for production use.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2>Rate Limiting</h2>

        <p>API requests are rate limited to ensure fair usage:</p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <div className="responsive-grid-3 text-center">
              <div>
                <h4 className="font-semibold text-lg">1,000</h4>
                <p className="text-sm text-muted-foreground">
                  Requests per hour
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">100</h4>
                <p className="text-sm text-muted-foreground">
                  Auth requests per hour
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">10</h4>
                <p className="text-sm text-muted-foreground">
                  Failed attempts per minute
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Rate Limit Headers</h4>
              <CodeBlock
                language="bash"
                code={`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200`}
              />
            </div>
          </CardContent>
        </Card>

        <h2>SDKs and Tools</h2>

        <div className="responsive-grid-2 section-spacing">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                <a
                  href="/sdk/web"
                  className="text-brand-primary hover:underline"
                >
                  Web SDK →
                </a>
              </CardTitle>
              <CardDescription>
                JavaScript/TypeScript SDK for web applications with Starknet
                integration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                <a
                  href="/sdk/native"
                  className="text-brand-primary hover:underline"
                >
                  React Native SDK →
                </a>
              </CardTitle>
              <CardDescription>
                Mobile SDK with biometric authentication for React Native apps
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </DocLayout>
  );
};

export default AuthAPI;
