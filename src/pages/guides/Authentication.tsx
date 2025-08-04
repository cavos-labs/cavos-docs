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
  Shield, 
  Key, 
  RefreshCw, 
  Lock, 
  Info, 
  AlertTriangle,
  Apple,
  Chrome,
  Mail,
  Clock
} from "lucide-react";

const pageContent = `
Cavos Service authentication uses a sophisticated JWT token system with Auth0 integration, automatic token rotation, and organization-based isolation. Supports Apple Sign In, Google OAuth, and email/password authentication with automatic wallet deployment.

## Key Features

- Session-based JWT tokens with 5-minute expiry
- Automatic token rotation system
- Refresh tokens with 24-hour expiry  
- Organization-based user isolation via Auth0 connections
- Social authentication (Apple Sign In, Google OAuth)
- Email/password authentication with Auth0 database connections
- Automatic ArgentX smart account deployment on first login
- Secure token storage and management

## Authentication Flow

All authentication methods result in JWT tokens for session management with automatic refresh capabilities.
`;

const Authentication = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="Authentication Guide"
          pageContent={pageContent}
          pageUrl="/guides/authentication"
        />

        <h1>Authentication Guide</h1>

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            JWT + Auth0
          </Badge>
          <Badge variant="outline">Session Management</Badge>
          <Badge variant="outline">Auto Rotation</Badge>
          <Badge variant="outline">Organization Isolation</Badge>
        </div>

        <p>
          Cavos Service authentication uses a sophisticated JWT token system with 
          Auth0 integration, automatic token rotation, and organization-based isolation. 
          All authentication methods result in automatic wallet deployment and secure 
          session management.
        </p>

        {/* Authentication Flow Overview */}
        <h2>Authentication Flow Overview</h2>

        <div className="space-y-4 my-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium">Organization Setup</h4>
              <p className="text-sm text-muted-foreground">
                Organizations get dedicated Auth0 connections (dev/prod) for complete user isolation
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium">User Authentication</h4>
              <p className="text-sm text-muted-foreground">
                Apple/Google OAuth or email/password creates Auth0 user in organization's connection
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium">JWT Token Generation</h4>
              <p className="text-sm text-muted-foreground">
                Custom JWT tokens (5-min expiry) + refresh tokens (24-hour expiry) are generated
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium">Wallet Deployment</h4>
              <p className="text-sm text-muted-foreground">
                ArgentX smart account automatically deployed via WalletManager with encrypted private key storage
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              5
            </div>
            <div>
              <h4 className="font-medium">Session Management</h4>
              <p className="text-sm text-muted-foreground">
                Automatic token refresh during API calls ensures seamless user experience
              </p>
            </div>
          </div>
        </div>

        {/* Authentication Methods */}
        <h2>Authentication Methods</h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <Card>
            <CardHeader className="text-center">
              <Apple className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Apple Sign In</CardTitle>
              <CardDescription>
                Native iOS/web authentication with automatic wallet deployment
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Chrome className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Google OAuth</CardTitle>
              <CardDescription>
                OAuth2 flow with Google identity provider integration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Mail className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Email/Password</CardTitle>
              <CardDescription>
                Traditional authentication via Auth0 database connections
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="web-sdk" className="my-6">
          <TabsList>
            <TabsTrigger value="web-sdk">Web SDK</TabsTrigger>
            <TabsTrigger value="native-sdk">React Native SDK</TabsTrigger>
            <TabsTrigger value="api-direct">Direct API</TabsTrigger>
          </TabsList>

          <TabsContent value="web-sdk">
            <h3 className="text-lg font-medium mb-4">Web SDK Authentication</h3>
            
            <CodeBlock
              language="typescript"
              filename="WebAuth.tsx"
              code={`import { CavosAuth } from 'cavos-service-sdk';

// Initialize CavosAuth instance
const cavosAuth = new CavosAuth('sepolia', process.env.REACT_APP_CAVOS_APP_ID);

// Email/Password Registration with Wallet Deployment
const registerUser = async () => {
  try {
    const result = await cavosAuth.signUp(
      'user@example.com',
      'SecurePassword123!',
      process.env.REACT_APP_CAVOS_ORG_SECRET // Backend only!
    );
    
    console.log('User registered:', result.user);
    console.log('Wallet deployed:', result.wallet.address);
    console.log('Auth0 user_id:', result.user_id);
    
    // Store tokens securely
    localStorage.setItem('accessToken', result.access_token);
    localStorage.setItem('refreshToken', result.refresh_token);
    
    return result;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Email/Password Login
const loginUser = async () => {
  try {
    const result = await cavosAuth.signIn(
      'user@example.com',
      'SecurePassword123!',
      process.env.REACT_APP_CAVOS_ORG_SECRET
    );
    
    console.log('User logged in:', result.user);
    console.log('Wallet address:', result.wallet.address);
    
    // Store new tokens
    localStorage.setItem('accessToken', result.access_token);
    localStorage.setItem('refreshToken', result.refresh_token);
    
    return result;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Token Refresh (Automatic in most cases)
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  
  try {
    const result = await cavosAuth.refreshToken(
      refreshToken!,
      'sepolia' // network
    );
    
    console.log('Token refreshed successfully');
    
    // Update stored tokens
    localStorage.setItem('accessToken', result.access_token);
    localStorage.setItem('refreshToken', result.refresh_token);
    
    return result;
  } catch (error) {
    console.error('Token refresh failed:', error);
    // Redirect to login
    window.location.href = '/login';
  }
};`}
            />

            <Alert className="my-6">
              <Key className="h-4 w-4" />
              <AlertDescription>
                <strong>Security:</strong> Never expose your Organization Secret in 
                frontend code. Use environment variables and ensure it's only 
                accessible on your backend servers.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="native-sdk">
            <h3 className="text-lg font-medium mb-4">React Native SDK Authentication</h3>
            
            <CodeBlock
              language="typescript"
              filename="NativeAuth.tsx"
              code={`import React from 'react';
import { View, Alert } from 'react-native';
import { SignInWithApple, SignInWithGoogle, CavosWallet } from 'cavos-service-native';

const AuthScreen = () => {
  const handleAppleSuccess = (wallet: CavosWallet) => {
    console.log('Apple Sign In successful!');
    console.log('Wallet address:', wallet.getWalletInfo().address);
    console.log('User email:', wallet.getWalletInfo().email);
    
    // Navigate to main app
    navigation.navigate('Dashboard');
  };

  const handleGoogleSuccess = (wallet: CavosWallet) => {
    console.log('Google Sign In successful!');
    console.log('Wallet info:', wallet.getWalletInfo());
    
    // Store wallet instance for app use
    setUserWallet(wallet);
  };

  const handleAuthError = (error: any) => {
    Alert.alert('Authentication Failed', error.message);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Apple Sign In */}
      <SignInWithApple
        appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID}
        network="sepolia"
        finalRedirectUri="yourapp://auth-callback"
        onSuccess={handleAppleSuccess}
        onError={handleAuthError}
        style={{
          height: 50,
          borderRadius: 8,
          marginBottom: 16
        }}
      >
        Sign in with Apple
      </SignInWithApple>

      {/* Google Sign In */}
      <SignInWithGoogle
        appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID}
        network="sepolia"
        finalRedirectUri="yourapp://auth-callback"
        onSuccess={handleGoogleSuccess}
        onError={handleAuthError}
        style={{
          height: 50,
          borderRadius: 8
        }}
      >
        Sign in with Google
      </SignInWithGoogle>
    </View>
  );
};

// Using CavosWallet for authenticated operations
const AuthenticatedComponent = ({ wallet }: { wallet: CavosWallet }) => {
  const executeTransaction = async () => {
    try {
      // Automatic token refresh handled internally
      const result = await wallet.executeCalls([
        {
          contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
          entrypoint: 'transfer',
          calldata: ['0x123...', '1000000000000000000', '0']
        }
      ], true); // Require biometric auth
      
      Alert.alert('Success', \`Transaction: \${result}\`);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      {/* Your authenticated UI */}
    </View>
  );
};`}
            />
          </TabsContent>

          <TabsContent value="api-direct">
            <h3 className="text-lg font-medium mb-4">Direct API Integration</h3>
            
            <CodeBlock
              language="typescript"
              filename="DirectAPI.ts"
              code={`// Email/Password Registration
const registerUser = async (email: string, password: string) => {
  const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/register', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${organizationSecret}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      network: 'sepolia'
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  const result = await response.json();
  return {
    user: result.user,
    wallet: result.wallet,
    user_id: result.user_id,
    access_token: result.access_token,
    refresh_token: result.refresh_token,
    expires_in: result.expires_in
  };
};

// Email/Password Login
const loginUser = async (email: string, password: string) => {
  const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/login', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${organizationSecret}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      network: 'sepolia'
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return await response.json();
};

// Token Refresh
const refreshAccessToken = async (refreshToken: string, appId: string) => {
  const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/token/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
      app_id: appId,
      network: 'sepolia'
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Token refresh failed');
  }

  const result = await response.json();
  return {
    access_token: result.access_token,
    refresh_token: result.refresh_token,
    expires_in: result.expires_in
  };
};

// Apple Sign In Flow (Web)
const initiateAppleSignIn = async (appId: string, network: string, redirectUri: string) => {
  const response = await fetch(
    \`https://services.cavos.xyz/api/v1/external/auth/apple?network=\${network}&final_redirect_uri=\${redirectUri}&app_id=\${appId}\`
  );

  if (!response.ok) {
    throw new Error('Failed to initiate Apple Sign In');
  }

  const { url } = await response.json();
  
  // Redirect user to Apple authentication
  window.location.href = url;
};`}
            />
          </TabsContent>
        </Tabs>

        {/* Token Management */}
        <h2>Token Management</h2>

        <p>
          Cavos Service uses a dual-token system with automatic rotation for enhanced security.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-brand-primary" />
                <CardTitle className="text-lg">Access Tokens</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Expiry:</span>
                  <span>5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Purpose:</span>
                  <span>API authentication</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Storage:</span>
                  <span>Redis + client memory</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rotation:</span>
                  <span>Automatic on API calls</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <RefreshCw className="h-5 w-5 text-brand-secondary" />
                <CardTitle className="text-lg">Refresh Tokens</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Expiry:</span>
                  <span>24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Purpose:</span>
                  <span>Token refresh</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Storage:</span>
                  <span>Secure client storage</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rotation:</span>
                  <span>One-time use only</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6">
          <CardHeader>
            <CardTitle className="text-lg">Automatic Token Refresh</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Cavos Service automatically handles token refresh during API calls. 
              When an access token expires, the system uses the refresh token to 
              obtain new tokens seamlessly.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Token refresh happens automatically during API calls
const result = await cavosAuth.executeCalls(
  walletAddress,
  calls,
  accessToken // May be expired
);

// If token was expired and refreshed:
console.log('Transaction hash:', result.txHash);
console.log('New access token:', result.accessToken); // Updated token

// Always update stored tokens from API responses
if (result.accessToken) {
  localStorage.setItem('accessToken', result.accessToken);
}`}
            />
          </CardContent>
        </Card>

        {/* Organization Setup */}
        <h2>Organization Setup</h2>

        <p>
          Each organization gets dedicated Auth0 connections for complete user isolation.
        </p>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Auth0 Connection Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium">Development Environment</h4>
                  <p className="text-muted-foreground">
                    Separate Auth0 connection for testing with Sepolia testnet
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    org_name_dev
                  </code>
                </div>
                
                <div>
                  <h4 className="font-medium">Production Environment</h4>
                  <p className="text-muted-foreground">
                    Production Auth0 connection for mainnet operations
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    org_name_prod
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error Handling */}
        <h2>Error Handling</h2>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Authentication Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">401 Unauthorized</code>
                  <p className="text-muted-foreground mt-1">
                    Access token expired or invalid - trigger token refresh
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">400 Bad Request - Invalid credentials</code>
                  <p className="text-muted-foreground mt-1">
                    Wrong email/password combination or malformed request
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">409 Conflict - User already exists</code>
                  <p className="text-muted-foreground mt-1">
                    Email already registered - redirect to login flow
                  </p>
                </div>
                
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-xs">403 Forbidden - Invalid refresh token</code>
                  <p className="text-muted-foreground mt-1">
                    Refresh token expired or invalid - require re-authentication
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="my-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Note:</strong> Refresh tokens are one-time use only. 
            Each refresh operation returns a new refresh token that must be stored 
            and used for subsequent refresh operations.
          </AlertDescription>
        </Alert>

        {/* Best Practices */}
        <h2>Best Practices</h2>

        <div className="space-y-4 my-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-brand-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Secure Token Storage</h4>
              <p className="text-sm text-muted-foreground">
                Use secure storage mechanisms (keychain on mobile, secure localStorage on web)
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <RefreshCw className="h-5 w-5 text-brand-secondary mt-0.5" />
            <div>
              <h4 className="font-medium">Handle Token Refresh</h4>
              <p className="text-sm text-muted-foreground">
                Always update stored tokens from API responses that include new tokens
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Lock className="h-5 w-5 text-brand-accent mt-0.5" />
            <div>
              <h4 className="font-medium">Environment Separation</h4>
              <p className="text-sm text-muted-foreground">
                Use different App IDs for development and production environments
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-medium">Secret Management</h4>
              <p className="text-sm text-muted-foreground">
                Never expose Organization Secrets in frontend code - use backend proxy endpoints
              </p>
            </div>
          </div>
        </div>

        <Card className="my-8 border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success">Ready to Authenticate!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You now have comprehensive knowledge of the Cavos authentication system 
              and can implement secure authentication flows with automatic wallet deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <a href="/sdk/web" className="text-brand-primary">
                  Web SDK Guide
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/sdk/native" className="text-brand-primary">
                  Native SDK Guide
                </a>
              </Badge>
              <Badge variant="outline">
                <a href="/guides/token-swapping" className="text-brand-primary">
                  Token Swapping
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

export default Authentication;