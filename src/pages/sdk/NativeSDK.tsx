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

        <div className="flex items-center space-x-2 mb-6">
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary"
          >
            v1.3.3
          </Badge>
          <Badge variant="outline">React Native</Badge>
          <Badge variant="outline">Expo</Badge>
          <Badge variant="outline">Biometric Auth</Badge>
        </div>

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

        <h2>Understanding the CavosWallet Object</h2>

        <p className="mb-4">
          The CavosWallet object returned from successful login contains all the functionality needed to interact with the Starknet blockchain.
          It's a fully authenticated wallet instance that maintains the user's session and provides direct access to their deployed smart account.
        </p>

        <h3 className="text-lg font-medium mb-4">What the CavosWallet Object Provides</h3>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium">Wallet Properties</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
              <li><code>wallet.address</code> - The user's Starknet wallet address</li>
              <li><code>wallet.network</code> - Current network (sepolia/mainnet)</li>
              <li><code>wallet.email</code> - User's email (from social login)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Core Methods</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
              <li><code>wallet.execute()</code> - Execute single contract call</li>
              <li><code>wallet.executeCalls()</code> - Execute multiple calls in batch</li>
              <li><code>wallet.swap()</code> - Token swapping</li>
              <li><code>wallet.getWalletInfo()</code> - Get wallet information</li>
              <li><code>wallet.isAuthenticated()</code> - Check authentication status</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Using the Wallet in handleSuccess</h3>

        <CodeBlock
          language="typescript"
          filename="components/LoginWithWalletUsage.tsx"
          code={`import React from 'react';
import { View, Alert } from 'react-native';
import { SignInWithApple, SignInWithGoogle } from 'cavos-service-native';

export const LoginScreen = () => {
  const handleSuccess = async (wallet) => {
    console.log('Login successful! Wallet ready to use.');

    // Wallet properties - available immediately
    console.log('Wallet address:', wallet.address);
    console.log('Network:', wallet.network);
    console.log('User email:', wallet.email);

    // Basic wallet operations you can perform right away:

    // 1. Get wallet information
    const walletInfo = wallet.getWalletInfo();
    console.log('Wallet Info:', walletInfo);
    console.log('Is Authenticated:', await wallet.isAuthenticated());

    // 2. Send a simple transaction (example: send 0.001 ETH)
    try {
      const result = await wallet.execute(
        '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', // ETH contract
        'transfer',
        [
          '0x123...', // recipient address
          '1000000000000000', // 0.001 ETH in wei
          '0' // high part for u256
        ]
      );
      console.log('Transaction sent:', result.transaction_hash);
      Alert.alert('Success', 'Transaction sent successfully!');
    } catch (error) {
      console.error('Transaction failed:', error);
      Alert.alert('Error', 'Transaction failed: ' + error.message);
    }

    // 3. Perform a token swap (0.001 ETH for STRK)
    try {
      const swapResult = await wallet.swap(
        1000000000000000, // 0.001 ETH in wei (number, not string)
        '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', // ETH
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d', // STRK
        false // no biometric required for this example
      );
      console.log('Swap completed:', swapResult);
      Alert.alert('Swap Success', 'Token swap completed!');
    } catch (error) {
      console.error('Swap failed:', error);
    }

    // Store wallet instance for app-wide use
    // You would typically store this in your app's state management
    // (Redux, Context, Zustand, etc.)
    storeWalletInstance(wallet);

    // Navigate to main app
    navigateToMainApp();
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
    Alert.alert('Login Failed', error.message);
  };

  const storeWalletInstance = (wallet) => {
    // Store in your app's global state
    // Example with Context:
    // setWalletContext(wallet);

    // Example with Redux:
    // dispatch(setWallet(wallet));

    // Example with simple state:
    // setGlobalWallet(wallet);
  };

  const navigateToMainApp = () => {
    // Navigate to your main app screens
    // navigation.navigate('MainApp');
  };

  return (
    <View>
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
};`}
        />

        <h3 className="text-lg font-medium mb-4">Key CavosWallet Methods</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-mono text-sm font-medium mb-2">wallet.execute(contractAddress, entrypoint, calldata, bioAuth)</h4>
            <p className="text-sm text-muted-foreground">
              Execute a single contract call on Starknet. Returns transaction hash on success.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">wallet.executeCalls(calls, bioAuth)</h4>
            <p className="text-sm text-muted-foreground">
              Execute multiple contract calls in a single batch transaction for efficiency.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">wallet.swap(amount, sellTokenAddress, buyTokenAddress, bioAuth)</h4>
            <p className="text-sm text-muted-foreground">
              Built-in token swapping functionality with optional biometric authentication.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">wallet.getWalletInfo()</h4>
            <p className="text-sm text-muted-foreground">
              Returns wallet information including address, network, email, and authentication status.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm font-medium mb-2">wallet.isAuthenticated()</h4>
            <p className="text-sm text-muted-foreground">
              Checks if the wallet is currently authenticated with valid tokens.
            </p>
          </div>
        </div>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> The CavosWallet object maintains authentication state and tokens automatically.
            Store it in your app's global state after successful login to access wallet functionality throughout your app.
            The wallet handles token refresh and maintains the user session seamlessly.
          </AlertDescription>
        </Alert>

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