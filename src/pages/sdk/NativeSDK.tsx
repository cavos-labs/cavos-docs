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
  Smartphone,
  Shield,
  Fingerprint,
  Zap,
  Info,
  AlertTriangle,
} from "lucide-react";

const pageContent = `
The Cavos Service React Native SDK provides seamless Starknet wallet integration for mobile applications. Built with Expo modules and featuring biometric authentication, automatic wallet deployment, and secure token management.

## Key Features

- Apple Sign In and Google OAuth components for React Native
- Automatic ArgentX smart account deployment on Starknet
- Biometric authentication for sensitive operations
- Secure token storage using Expo SecureStore
- CavosWallet class for transaction execution and wallet management
- Token rotation with backend-issued access/refresh tokens
- Support for Sepolia testnet and Mainnet networks

## Installation and Setup

Get started with the Cavos Service React Native SDK for mobile wallet integration.
`;

const NativeSDK = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions
          pageTitle="React Native SDK"
          pageContent={pageContent}
          pageUrl="/sdk/native"
        />

        <h1>React Native SDK</h1>

        <p>
          The Cavos Service React Native SDK provides seamless Starknet wallet
          integration for mobile applications. Built with Expo modules and
          featuring biometric authentication, automatic wallet deployment, and
          secure token management.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <Card>
            <CardHeader className="text-center">
              <Smartphone className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Mobile First</CardTitle>
              <CardDescription>
                Built specifically for React Native and Expo
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Fingerprint className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Biometric Auth</CardTitle>
              <CardDescription>
                Secure operations with Face ID / Touch ID
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Secure Storage</CardTitle>
              <CardDescription>
                Expo SecureStore for token management
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Installation</h2>

        <TerminalBlock command="npm install cavos-service-native" />

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Prerequisites:</strong> You must register your organization
            at
            <a
              href="https://services.cavos.xyz"
              className="text-brand-primary hover:underline ml-1"
            >
              https://services.cavos.xyz
            </a>{" "}
            to get your App ID and API Secret before using the SDK.
          </AlertDescription>
        </Alert>

        <h2>Core Components</h2>

        <Tabs defaultValue="signin" className="my-6">
          <TabsList>
            <TabsTrigger value="signin">Sign In Components</TabsTrigger>
            <TabsTrigger value="implementation">
              Component Implementation
            </TabsTrigger>
            <TabsTrigger value="wallet">Wallet Management</TabsTrigger>
            <TabsTrigger value="biometric">Biometric Auth</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <h3 className="text-lg font-medium mb-4">Apple Sign In</h3>

            <CodeBlock
              language="typescript"
              filename="components/AppleSignIn.tsx"
              code={`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SignInWithApple } from 'cavos-service-native';

export const AppleSignInScreen = () => {
  const handleSuccess = (wallet) => {
    console.log('Login successful:', wallet);
    console.log('Wallet address:', wallet.address);
    console.log('Network:', wallet.network);
    console.log('User email:', wallet.email);
    
    // Navigate to main app or save wallet instance
    // wallet is a CavosWallet instance ready for transactions
  };

  const handleError = (error) => {
    console.error('Apple Sign In failed:', error);
    // Handle error (show alert, etc.)
  };

  return (
    <View style={styles.container}>
      <SignInWithApple
        appId="your-org-app-id"
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleSuccess}
        onError={handleError}
        style={styles.button}
        textStyle={styles.buttonText}
      >
        Sign in with Apple
      </SignInWithApple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    height: 50,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});`}
            />

            <h3 className="text-lg font-medium mb-4 mt-6">Google Sign In</h3>

            <CodeBlock
              language="typescript"
              filename="components/GoogleSignIn.tsx"
              code={`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SignInWithGoogle } from 'cavos-service-native';

export const GoogleSignInScreen = () => {
  const handleSuccess = (wallet) => {
    console.log('Google login successful:', wallet);
    console.log('Wallet address:', wallet.address);
    
    // wallet is a CavosWallet instance
    // Store wallet instance for app use
  };

  const handleError = (error) => {
    console.error('Google Sign In failed:', error);
  };

  return (
    <View style={styles.container}>
      <SignInWithGoogle
        appId="your-org-app-id"
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleSuccess}
        onError={handleError}
        style={styles.button}
        textStyle={styles.buttonText}
      >
        Sign in with Google
      </SignInWithGoogle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    height: 50,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});`}
            />
          </TabsContent>

          <TabsContent value="implementation">
            <h3 className="text-lg font-medium mb-4">
              Component Implementation
            </h3>

            <p className="mb-4 text-muted-foreground">
              The SignInWithApple and SignInWithGoogle components are built with
              React Native and Expo WebBrowser for secure authentication. They
              include built-in loading states, error handling, and customizable
              styling.
            </p>

            <h4 className="text-base font-medium mb-3 mt-6">
              Apple Sign In Component
            </h4>

            <CodeBlock
              language="typescript"
              filename="SignInWithApple.tsx"
              code={`import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Svg, { Path } from 'react-native-svg';
import { CavosWallet } from './CavosWallet';

const AppleIcon = () => (
  <View style={styles.iconContainer}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
    </Svg>
  </View>
);

/**
 * Apple Sign In button for Cavos Wallet authentication.
 *
 * Opens an Apple authentication flow and returns a CavosWallet instance on success.
 *
 * @component
 * @param {string} appId - Organization's application id
 * @param {string} network - Network to use (e.g., 'sepolia', 'mainnet')
 * @param {string} finalRedirectUri - URI to redirect the user after successful login
 * @param {React.ReactNode} [children] - Custom button content
 * @param {object} [style] - Custom styles for the button
 * @param {object} [textStyle] - Custom styles for the button text
 * @param {(userData: CavosWallet) => void} [onSuccess] - Callback executed when login is successful
 * @param {(error: any) => void} [onError] - Callback executed when login fails
 */
export const SignInWithApple = ({ 
  appId, 
  network = 'sepolia', 
  finalRedirectUri, 
  children, 
  style, 
  textStyle, 
  onSuccess, 
  onError 
}) => {
  const [loading, setLoading] = React.useState(false);
  const baseUrl = 'https://services.cavos.xyz';

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        \`\${baseUrl}/api/v1/external/auth/apple?network=\${encodeURIComponent(network)}&final_redirect_uri=\${encodeURIComponent(finalRedirectUri)}&app_id=\${encodeURIComponent(appId)}\`
      );
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Failed to get Apple login URL:', errorText);
        throw new Error(\`Failed to get Apple login URL: \${res.status} \${errorText}\`);
      }
      
      const data = await res.json();
      console.log('Starting AuthSession...');
      
      const result = await WebBrowser.openAuthSessionAsync(data.url, finalRedirectUri);
      
      if (result.type === 'success') {
        const params = new URLSearchParams(result.url.split('?')[1]);
        const userDataStr = params.get('user_data');
        
        if (userDataStr) {
          const userData = JSON.parse(decodeURIComponent(userDataStr));
          const cavosWallet = new CavosWallet(
            userData.wallet.address,
            userData.wallet.network,
            userData.email,
            userData.name,
            userData.user_id,
            userData.org_id,
            appId,
            userData.authData.accessToken,
            userData.authData.refreshToken
          );
          
          if (onSuccess) {
            onSuccess(cavosWallet);
          }
        } else {
          console.log('No user_data found in URL');
          if (onError) {
            onError(new Error('No user data received'));
          }
        }
      } else if (result.type === 'cancel') {
        console.log('Auth cancelled by user');
        if (onError) {
          onError(new Error('Authentication cancelled'));
        }
      } else {
        console.log('Auth failed:', result);
        if (onError) {
          onError(new Error('Authentication failed'));
        }
      }
    } catch (err) {
      console.error('Apple login error:', err);
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={handleLogin} 
      disabled={loading} 
      activeOpacity={0.8}
    >
      <AppleIcon />
      <Text 
        style={[styles.text, textStyle]} 
        numberOfLines={1} 
        ellipsizeMode="tail"
      >
        {children || 'Sign in with Apple'}
      </Text>
      {loading && (
        <ActivityIndicator size="small" color="#111" style={{ marginLeft: 8 }} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
    minWidth: 220,
    borderWidth: 1,
    borderColor: '#d1d5db',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    color: '#111',
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '500',
    flexShrink: 1,
  },
  iconContainer: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});`}
            />

            <h4 className="text-base font-medium mb-3 mt-6">
              Google Sign In Component
            </h4>

            <CodeBlock
              language="typescript"
              filename="SignInWithGoogle.tsx"
              code={`import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Svg, { Path } from 'react-native-svg';
import { CavosWallet } from './CavosWallet';

const GoogleIcon = () => (
  <View style={styles.iconContainer}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </Svg>
  </View>
);

/**
 * Google Sign In button for Cavos Wallet authentication.
 *
 * Opens a Google authentication flow and returns a CavosWallet instance on success.
 *
 * @component
 * @param {string} appId - Organization's app id
 * @param {string} network - Network to use (e.g., 'sepolia', 'mainnet')
 * @param {string} finalRedirectUri - URI to redirect the user after successful login (should be a registered deep link in your app)
 * @param {React.ReactNode} [children] - Custom button content
 * @param {object} [style] - Custom styles for the button
 * @param {object} [textStyle] - Custom styles for the button text
 * @param {(userData: CavosWallet) => void} [onSuccess] - Callback executed when login is successful
 * @param {(error: any) => void} [onError] - Callback executed when login fails
 *
 * @example
 * <SignInWithGoogle
 *   appId="your-org-app-id"
 *   network="sepolia"
 *   finalRedirectUri="cavos://callback"
 *   onSuccess={(wallet) => console.log(wallet)}
 *   onError={(err) => console.error(err)}
 * >
 *   Sign in with Google
 * </SignInWithGoogle>
 */
export const SignInWithGoogle = ({ 
  appId, 
  network = 'sepolia', 
  finalRedirectUri, 
  children, 
  style, 
  textStyle, 
  onSuccess, 
  onError 
}) => {
  const [loading, setLoading] = React.useState(false);
  const baseUrl = 'https://services.cavos.xyz';

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        \`\${baseUrl}/api/v1/external/auth/google?network=\${encodeURIComponent(network)}&final_redirect_uri=\${encodeURIComponent(finalRedirectUri)}&app_id=\${encodeURIComponent(appId)}\`
      );
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Failed to get Google login URL:', errorText);
        throw new Error(\`Failed to get Google login URL: \${res.status} \${errorText}\`);
      }
      
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        const responseText = await res.text();
        console.error('Response text:', responseText);
        throw new Error(\`Failed to parse response as JSON: \${parseError.message}. Response: \${responseText}\`);
      }
      
      console.log('Starting AuthSession...');
      const result = await WebBrowser.openAuthSessionAsync(data.url, finalRedirectUri);
      
      if (result.type === 'success') {
        // Support both query string and fragment for user_data
        let paramsString = '';
        if (result.url.includes('?')) {
          paramsString = result.url.split('?')[1].split('#')[0];
        }
        if (result.url.includes('#')) {
          if (paramsString.length > 0) {
            paramsString += '&';
          }
          paramsString += result.url.split('#')[1];
        }
        
        const params = new URLSearchParams(paramsString);
        const userDataStr = params.get('user_data');
        
        if (userDataStr) {
          try {
            const userData = JSON.parse(decodeURIComponent(userDataStr));
            const cavosWallet = new CavosWallet(
              userData.wallet.address,
              userData.wallet.network,
              userData.email,
              userData.name,
              userData.user_id,
              userData.org_id,
              appId,
              userData.authData.accessToken,
              userData.authData.refreshToken
            );
            
            if (onSuccess) {
              onSuccess(cavosWallet);
            }
          } catch (parseError) {
            console.error('Failed to parse user data:', parseError);
            console.error('User data string:', userDataStr);
            if (onError) {
              onError(new Error(\`Failed to parse user data: \${parseError.message}\`));
            }
          }
        } else {
          console.log('No user_data found in URL');
          if (onError) {
            onError(new Error('No user data received'));
          }
        }
      } else if (result.type === 'cancel') {
        console.log('Auth cancelled by user');
        if (onError) {
          onError(new Error('Authentication cancelled'));
        }
      } else {
        console.log('Auth failed:', result);
        if (onError) {
          onError(new Error('Authentication failed'));
        }
      }
    } catch (err) {
      console.error('Google login error:', err);
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={handleLogin} 
      disabled={loading} 
      activeOpacity={0.8}
    >
      <GoogleIcon />
      <Text 
        style={[styles.text, textStyle]} 
        numberOfLines={1} 
        ellipsizeMode="tail"
      >
        {children || 'Sign in with Google'}
      </Text>
      {loading && (
        <ActivityIndicator size="small" color="#4285F4" style={{ marginLeft: 8 }} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
    minWidth: 220,
    borderWidth: 1,
    borderColor: '#d1d5db',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    color: '#111',
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '500',
    flexShrink: 1,
  },
  iconContainer: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});`}
            />

            <div className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Component Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Built-in loading states with ActivityIndicator
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Customizable styling with style and textStyle props
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Automatic CavosWallet instance creation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Comprehensive error handling and user feedback
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Secure authentication flow with Expo WebBrowser
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Enhanced URL parsing for both query strings and fragments
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Authentication Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        GET /api/v1/external/auth/apple
                      </code>{" "}
                      - Apple authentication
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        GET /api/v1/external/auth/google
                      </code>{" "}
                      - Google authentication
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet">
            <h3 className="text-lg font-medium mb-4">CavosWallet Class</h3>

            <p className="mb-4 text-muted-foreground">
              The CavosWallet class provides secure wallet and token management
              with automatic token rotation, biometric authentication, and
              blockchain operations.
            </p>

            <CodeBlock
              language="typescript"
              filename="services/walletService.ts"
              code={`import { CavosWallet } from 'cavos-service-native';

// After successful login, you receive a CavosWallet instance
export class WalletService {
  private wallet: CavosWallet;

  constructor(wallet: CavosWallet) {
    this.wallet = wallet;
  }

  // Check if user is authenticated
  async isAuthenticated(): Promise<boolean> {
    return await this.wallet.isAuthenticated();
  }

  // Get wallet information
  getWalletInfo() {
    return this.wallet.getWalletInfo();
  }

  // Execute a single contract call
  async executeTransaction(
    contractAddress: string,
    entryPoint: string,
    calldata: any[],
    requireBiometric: boolean = true
  ) {
    try {
      const result = await this.wallet.execute(
        contractAddress,
        entryPoint,
        calldata,
        requireBiometric
      );
      
      console.log('Transaction successful:', result);
      return result;
    } catch (error) {
      console.error('Transaction failed:', error);
      throw error;
    }
  }

  // Execute multiple contract calls in batch
  async executeBatch(calls: any[], requireBiometric: boolean = true) {
    try {
      const result = await this.wallet.executeCalls(calls, requireBiometric);
      console.log('Batch transaction successful:', result);
      return result;
    } catch (error) {
      console.error('Batch transaction failed:', error);
      throw error;
    }
  }

  // Swap tokens using AVNU integration
  async swapTokens(
    amount: number,
    sellTokenAddress: string,
    buyTokenAddress: string,
    requireBiometric: boolean = true
  ) {
    try {
      const result = await this.wallet.swap(
        amount,
        sellTokenAddress,
        buyTokenAddress,
        requireBiometric
      );
      
      console.log('Swap successful:', result);
      return result;
    } catch (error) {
      console.error('Swap failed:', error);
      throw error;
    }
  }

  // Serialize wallet to JSON for storage
  serializeWallet() {
    return this.wallet.toJSON();
  }
}`}
            />

            <h4 className="text-base font-medium mb-3 mt-6">
              CavosWallet Implementation
            </h4>

            <CodeBlock
              language="typescript"
              filename="CavosWallet.ts"
              code={`import * as LocalAuthentication from 'expo-local-authentication';

/**
 * CavosWallet class for secure wallet and token management.
 *
 * - Handles wallet info, access/refresh tokens, and blockchain operations.
 * - Tokens are issued and rotated securely by the backend (never generated locally).
 * - Supports biometric authentication for sensitive operations.
 *
 * @example
 * // After login:
 * const wallet = new CavosWallet(address, network, email, name, user_id, org_id, orgSecret, accessToken, refreshToken);
 *
 * // Before API call:
 * if (await wallet.isTokenExpired()) {
 *   await wallet.refreshAccessToken();
 * }
 *
 * // Execute a transaction:
 * await wallet.execute(contractAddress, 'transfer', [to, amount], true); // true = require biometrics
 */
export class CavosWallet {
  address: string;
  network: string;
  email: string;
  name: string;
  user_id: string;
  org_id: string;
  accessToken: string;
  refreshToken: string;
  orgSecret: string;

  constructor(
    address: string,
    network: string,
    email: string,
    name: string,
    user_id: string,
    org_id: string,
    orgSecret: string,
    accessToken: string,
    refreshToken: string
  ) {
    this.address = address;
    this.network = network;
    this.email = email;
    this.name = name;
    this.user_id = user_id;
    this.org_id = org_id;
    this.orgSecret = orgSecret;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  /**
   * Checks if the current access token has expired or is used.
   * @returns {Promise<boolean>} True if token is expired/used/invalid, false otherwise.
   */
  async isTokenExpired(): Promise<boolean> {
    if (!this.accessToken) {
      return true;
    }
    
    try {
      const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/token/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: this.accessToken }),
      });
      
      if (!response.ok) return true;
      
      const data = await response.json();
      // If token is expired, used, or not valid, treat as expired
      return data.expired || data.used || !data.valid;
    } catch (e) {
      return true;
    }
  }

  /**
   * Refreshes the access token using the backend refresh endpoint.
   * Updates both access and refresh tokens if successful.
   * @returns {Promise<boolean>} True if refresh was successful, false otherwise.
   */
  async refreshAccessToken(): Promise<boolean> {
    try {
      const response = await fetch('https://services.cavos.xyz/api/v1/external/auth/token/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refresh_token: this.refreshToken,
          app_id: this.org_id,
          network: this.network
        }),
      });
      
      if (!response.ok) {
        return false;
      }
      
      const data = await response.json();
      this.accessToken = data.access_token;
      this.refreshToken = data.refresh_token;
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  }

  /**
   * Prompts for biometric authentication before sensitive operations.
   * Throws if authentication fails or is unavailable.
   * @returns {Promise<void>}
   */
  async requireBiometricAuth(): Promise<void> {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    
    if (!hasHardware || !isEnrolled) {
      throw new Error('No biometric authentication available');
    }
    
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Confirma tu identidad para continuar',
      fallbackLabel: 'Usar PIN',
    });
    
    if (!result.success) {
      throw new Error('Biometric authentication failed');
    }
  }

  /**
   * Checks if the user is authenticated (token is valid and not expired).
   * @returns {Promise<boolean>} True if authenticated, false otherwise.
   */
  async isAuthenticated(): Promise<boolean> {
    if (!this.accessToken) {
      return false; // No tokens, not authenticated
    }
    return !(await this.isTokenExpired());
  }

  /**
   * Execute a contract call on the blockchain.
   * @param {string} contractAddress - Address of the contract
   * @param {string} entryPoint - Entry point (function) to call
   * @param {any[]} calldata - Calldata for the contract call
   * @param {boolean} [bioAuth=false] - Require biometric authentication
   * @returns {Promise<any>} Result of the transaction
   */
  async execute(contractAddress: string, entryPoint: string, calldata: any[], bioAuth: boolean = false): Promise<any> {
    if (bioAuth) {
      try {
        await this.requireBiometricAuth();
      } catch (err) {
        return { error: err.message || 'Biometric authentication required.' };
      }
    }

    const calls = [{
      "contractAddress": contractAddress,
      "entrypoint": entryPoint,
      "calldata": calldata
    }];

    try {
      const res = await fetch(\`https://services.cavos.xyz/api/v1/external/execute/session\`, {
        method: 'POST',
        headers: {
          Authorization: \`Bearer \${this.accessToken}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: this.address,
          org_id: this.org_id,
          calls,
          network: this.network,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        return { error: \`Error executing calls: \${res.status} \${errorText}\` };
      }

      const result = await res.json();
      return result.result.result.transactionHash;
    } catch (err) {
      return { error: err.message || String(err) };
    }
  }

  /**
   * Execute multiple contract calls in a batch.
   * @param {any[]} calls - Array of call objects
   * @param {boolean} [bioAuth=false] - Require biometric authentication
   * @returns {Promise<any>} Result of the batch transaction
   */
  async executeCalls(calls: any[], bioAuth: boolean = false): Promise<any> {
    if (bioAuth) {
      try {
        await this.requireBiometricAuth();
      } catch (err) {
        return { error: err.message || 'Biometric authentication required.' };
      }
    }

    try {
      const res = await fetch(\`https://services.cavos.xyz/api/v1/external/execute/session\`, {
        method: 'POST',
        headers: {
          Authorization: \`Bearer \${this.accessToken}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: this.address,
          org_id: this.org_id,
          calls,
          network: this.network,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        return { error: \`Error executing calls: \${res.status} \${errorText}\` };
      }

      const result = await res.json();
      return result.result.result.transactionHash;
    } catch (err) {
      return { error: err.message || String(err) };
    }
  }

  /**
   * Swap tokens using the wallet.
   * @param {number} amount - Amount to swap
   * @param {string} sellTokenAddress - Address of the token to sell
   * @param {string} buyTokenAddress - Address of the token to buy
   * @param {boolean} [bioAuth=false] - Require biometric authentication
   * @returns {Promise<any>} Result of the swap
   */
  async swap(amount: number, sellTokenAddress: string, buyTokenAddress: string, bioAuth: boolean = false): Promise<any> {
    if (bioAuth) {
      try {
        await this.requireBiometricAuth();
      } catch (err) {
        return { error: err.message || 'Biometric authentication required.' };
      }
    }

    try {
      const res = await fetch(\`https://services.cavos.xyz/api/v1/external/execute/session/swap\`, {
        method: 'POST',
        headers: {
          Authorization: \`Bearer \${this.accessToken}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: this.address,
          org_id: this.org_id,
          network: this.network,
          amount: amount,
          sellTokenAddress: sellTokenAddress,
          buyTokenAddress: buyTokenAddress,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        return { error: \`Error executing calls: \${res.status} \${errorText}\` };
      }

      const result = await res.json();
      return result.result;
    } catch (err) {
      return { error: err.message || String(err) };
    }
  }

  /**
   * Get wallet information (address, network, email, etc).
   * @returns {object} Wallet info
   */
  getWalletInfo() {
    return {
      address: this.address,
      network: this.network,
      email: this.email,
      name: this.name,
      user_id: this.user_id,
      org_id: this.org_id,
      isAuthenticated: this.accessToken !== null
    };
  }

  /**
   * Serialize wallet to JSON.
   * @returns {object}
   */
  toJSON() {
    return {
      address: this.address,
      network: this.network,
      email: this.email,
      user_id: this.user_id,
      org_id: this.org_id,
      orgSecret: this.orgSecret,
      accessToken: this.accessToken,
    };
  }
}`}
            />

            <div className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">API Endpoints</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        POST /api/v1/external/auth/token/check
                      </code>{" "}
                      - Token validation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        POST /api/v1/external/auth/token/refresh
                      </code>{" "}
                      - Token refresh
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        POST /api/v1/external/execute/session
                      </code>{" "}
                      - Transaction execution
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      <code className="bg-muted px-1 rounded">
                        POST /api/v1/external/execute/session/swap
                      </code>{" "}
                      - Token swapping
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Automatic token validation and refresh
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Biometric authentication with expo-local-authentication
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Single and batch transaction execution
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Token swapping with AVNU integration
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-sm">
                      Wallet serialization for secure storage
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="biometric">
            <h3 className="text-lg font-medium mb-4">
              Biometric Authentication
            </h3>

            <CodeBlock
              language="typescript"
              filename="components/SecureTransaction.tsx"
              code={`import React from 'react';
import { View, Button, Alert } from 'react-native';
import { CavosWallet } from 'cavos-service-native';

interface SecureTransactionProps {
  wallet: CavosWallet;
}

export const SecureTransaction: React.FC<SecureTransactionProps> = ({ wallet }) => {
  const executeSecureTransaction = async () => {
    try {
      // This will prompt for biometric authentication (Face ID/Touch ID)
      const result = await wallet.execute(
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK token
        'transfer',
        [
          '0x123...', // recipient
          '1000000000000000000', // amount (1 STRK)
          '0' // high part
        ],
        true // requireBiometric = true
      );
      
      Alert.alert('Success', 'Transaction completed successfully!');
      console.log('Transaction hash:', result.transaction_hash);
    } catch (error) {
      if (error.message.includes('biometric')) {
        Alert.alert('Authentication Failed', 'Biometric authentication was cancelled or failed.');
      } else {
        Alert.alert('Transaction Failed', error.message);
      }
    }
  };

  const executeSwapWithBiometric = async () => {
    try {
      // Swap 0.1 ETH for STRK with biometric confirmation
      const result = await wallet.swap(
        100000000000000000, // 0.1 ETH in wei
        '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', // ETH
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK
        true // requireBiometric = true
      );
      
      Alert.alert('Swap Complete', 'Token swap completed successfully!');
      console.log('Swap result:', result);
    } catch (error) {
      Alert.alert('Swap Failed', error.message);
    }
  };

  return (
    <View style={{ padding: 20, gap: 16 }}>
      <Button
        title="Send STRK (with Face ID)"
        onPress={executeSecureTransaction}
      />
      
      <Button
        title="Swap ETH → STRK (with Face ID)"
        onPress={executeSwapWithBiometric}
      />
    </View>
  );
};`}
            />
          </TabsContent>
        </Tabs>

        <h2>Complete Integration Example</h2>

        <CodeBlock
          language="typescript"
          filename="App.tsx"
          code={`import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SignInWithApple, SignInWithGoogle, CavosWallet } from 'cavos-service-native';

export default function App() {
  const [wallet, setWallet] = useState<CavosWallet | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = (walletInstance: CavosWallet) => {
    console.log('Login successful, wallet created:', walletInstance.address);
    console.log('Wallet info:', walletInstance.getWalletInfo());
    setWallet(walletInstance);
  };

  const handleLoginError = (error: any) => {
    console.error('Login failed:', error);
    setIsLoading(false);
  };

  const executeTransaction = async () => {
    if (!wallet) return;
    
    setIsLoading(true);
    try {
      // Example: Transfer STRK tokens
      const result = await wallet.execute(
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
        'transfer',
        ['0x123...', '1000000000000000000', '0'],
        true // Require biometric authentication
      );
      
      console.log('Transaction successful:', result);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
    setIsLoading(false);
  };

  if (wallet) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wallet Connected!</Text>
        <Text style={styles.address}>Address: {wallet.address}</Text>
        <Text style={styles.network}>Network: {wallet.network}</Text>
        <Text style={styles.email}>Email: {wallet.email}</Text>
        <Text style={styles.name}>Name: {wallet.name}</Text>
        
        {/* Your app content here */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Your Wallet</Text>
      
      <SignInWithApple
        appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID!}
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        style={styles.button}
        textStyle={styles.buttonText}
      >
        Sign in with Apple
      </SignInWithApple>

      <SignInWithGoogle
        appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID!}
        network="sepolia"
        finalRedirectUri="yourapp://callback"
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        style={styles.button}
        textStyle={styles.buttonText}
      >
        Sign in with Google
      </SignInWithGoogle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  address: {
    fontSize: 14,
    marginBottom: 8,
  },
  network: {
    fontSize: 14,
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    marginVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});`}
        />

        <h2>Security Best Practices</h2>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Token Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Secure Storage</h4>
                <p className="text-sm text-muted-foreground">
                  All authentication tokens are automatically stored using Expo
                  SecureStore, which uses the iOS Keychain and Android Keystore
                  for maximum security.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Token Rotation</h4>
                <p className="text-sm text-muted-foreground">
                  Refresh tokens are one-time use and automatically rotated by
                  the backend. Never store or log tokens in plain text.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Fingerprint className="h-5 w-5" />
                Biometric Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Sensitive Operations</h4>
                <p className="text-sm text-muted-foreground">
                  Always require biometric authentication for transaction
                  execution, token swaps, and other sensitive wallet operations.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Fallback Handling</h4>
                <p className="text-sm text-muted-foreground">
                  Handle cases where biometric authentication is not available
                  or fails. Provide appropriate user feedback and error
                  handling.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Never expose your organization's API
            Secret in mobile app code. Use your App ID for frontend components
            only. The API Secret should only be used in backend services.
          </AlertDescription>
        </Alert>

        <h2>Environment Configuration</h2>

        <CodeBlock
          language="bash"
          filename=".env"
          code={`# Expo environment variables
EXPO_PUBLIC_CAVOS_APP_ID=your-app-id

# Deep linking configuration
EXPO_PUBLIC_APP_SCHEME=yourapp

# Network configuration (optional)
EXPO_PUBLIC_DEFAULT_NETWORK=sepolia`}
        />

        <h2>Troubleshooting</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Deep Link Configuration</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure your app.json includes the correct scheme for deep
                  linking. The finalRedirectUri should match your configured
                  scheme.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Biometric Authentication Fails
                </h4>
                <p className="text-sm text-muted-foreground">
                  Check device capabilities and permissions. Handle cases where
                  Face ID/Touch ID is not set up or unavailable.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Token Expiration</h4>
                <p className="text-sm text-muted-foreground">
                  Implement proper token refresh logic using
                  wallet.refreshAccessToken(). Check token expiration before
                  making API calls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocLayout>
  );
};

export default NativeSDK;
