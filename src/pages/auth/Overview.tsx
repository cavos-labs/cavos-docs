import React from 'react';
import { DocLayout } from '@/components/DocLayout';
import { DocPageActions } from '@/components/DocPageActions';
import { CodeBlock } from '@/components/CodeBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Key, Smartphone, Mail, User, Lock } from 'lucide-react';

const pageContent = `
Cavos Service provides secure authentication methods integrated with automatic Starknet wallet deployment. Choose from social logins or traditional email/password authentication with complete wallet infrastructure.

## Supported Authentication Methods

- Apple Sign In with automatic wallet creation
- Google OAuth2 with wallet deployment
- Email/Password authentication with Auth0
- Organization-based user isolation
- Automatic ArgentX smart account deployment

## Security Features

All authentication methods include enterprise-grade security features like token rotation, organization isolation, and secure wallet management on Starknet.
`;

const AuthOverview = () => {
  return (
    <DocLayout>
      <div className="doc-content">
        <DocPageActions 
          pageTitle="Authentication Overview" 
          pageContent={pageContent}
          pageUrl="/auth/overview"
        />
        
        <h1>Authentication Overview</h1>
        
        <p>
          AuthChain provides multiple authentication methods to suit different user preferences 
          and security requirements. Choose from social logins, traditional email/password, 
          or advanced multi-factor authentication.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <Card className="border-brand-primary/20">
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 mx-auto text-brand-primary mb-2" />
              <CardTitle className="text-base">Social Logins</CardTitle>
              <CardDescription>OAuth providers like Google, Apple, GitHub</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-brand-secondary/20">
            <CardHeader className="text-center">
              <Mail className="h-8 w-8 mx-auto text-brand-secondary mb-2" />
              <CardTitle className="text-base">Email/Password</CardTitle>
              <CardDescription>Traditional authentication with security</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-brand-accent/20">
            <CardHeader className="text-center">
              <Lock className="h-8 w-8 mx-auto text-brand-accent mb-2" />
              <CardTitle className="text-base">Multi-Factor</CardTitle>
              <CardDescription>Enhanced security with MFA</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2>Authentication Flow Types</h2>

        <Tabs defaultValue="social" className="my-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="social">Social Login</TabsTrigger>
            <TabsTrigger value="email">Email/Password</TabsTrigger>
            <TabsTrigger value="phone">Phone Auth</TabsTrigger>
            <TabsTrigger value="mfa">Multi-Factor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="social" className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">Recommended</Badge>
              <Badge variant="outline">Fast Setup</Badge>
            </div>
            
            <p>
              Social authentication provides the fastest user onboarding experience. Users can 
              sign in with accounts they already have, reducing friction and improving conversion rates.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <span>Google</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <span>Apple</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span>Discord</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                    <span>Twitter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    <span>Facebook</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <CodeBlock
              language="typescript"
              filename="social-login.ts"
              code={`// Social authentication example
const user = await authChain.signIn({
  provider: 'google',
  scopes: ['email', 'profile'],
  connectWallet: true, // Auto-connect wallet after auth
  
  // Optional: Additional configuration
  prompt: 'select_account', // Force account selection
  customState: { returnUrl: '/dashboard' }
});

console.log('User:', user.email);
console.log('Wallet:', user.walletAddress);`}
            />
          </TabsContent>
          
          <TabsContent value="email" className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">Traditional</Badge>
              <Badge variant="outline">High Security</Badge>
            </div>
            
            <p>
              Email/password authentication with advanced security features including password 
              strength validation, account lockout protection, and secure password reset flows.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Password strength requirements with custom policies</li>
                  <li>• Account lockout after failed attempts</li>
                  <li>• Secure password reset with time-limited tokens</li>
                  <li>• Email verification for new accounts</li>
                  <li>• Rate limiting on authentication attempts</li>
                  <li>• Breach detection and forced password updates</li>
                </ul>
              </CardContent>
            </Card>

            <CodeBlock
              language="typescript"
              filename="email-auth.ts"
              code={`// Email/password registration
const user = await authChain.signUp({
  email: 'user@example.com',
  password: 'SecurePassword123!',
  
  // Optional: Additional user data
  profile: {
    firstName: 'John',
    lastName: 'Doe'
  },
  
  // Optional: Email verification settings
  emailVerification: {
    required: true,
    redirectUrl: '/verify-email'
  }
});

// Email/password sign in
const signedInUser = await authChain.signIn({
  provider: 'email',
  email: 'user@example.com',
  password: 'SecurePassword123!'
});`}
            />
          </TabsContent>
          
          <TabsContent value="phone" className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">SMS Verification</Badge>
              <Badge variant="outline">Mobile Friendly</Badge>
            </div>
            
            <p>
              Phone number authentication with SMS verification provides a secure, mobile-first 
              authentication method that works globally.
            </p>

            <CodeBlock
              language="typescript"
              filename="phone-auth.ts"
              code={`// Send SMS verification code
await authChain.sendSMSCode({
  phoneNumber: '+1234567890',
  
  // Optional: Custom message template
  template: 'verification',
  language: 'en'
});

// Verify SMS code and sign in
const user = await authChain.verifyPhoneNumber({
  phoneNumber: '+1234567890',
  verificationCode: '123456',
  
  // Optional: Create account if doesn't exist
  createIfNotExists: true
});`}
            />
          </TabsContent>
          
          <TabsContent value="mfa" className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">Maximum Security</Badge>
              <Badge variant="outline">Enterprise Ready</Badge>
            </div>
            
            <p>
              Multi-factor authentication adds an extra layer of security using TOTP apps, 
              SMS codes, or hardware security keys.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported MFA Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-brand-primary" />
                    <div>
                      <p className="font-medium">TOTP Authenticator Apps</p>
                      <p className="text-sm text-muted-foreground">Google Authenticator, Authy, 1Password</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-secondary" />
                    <div>
                      <p className="font-medium">SMS Verification</p>
                      <p className="text-sm text-muted-foreground">Text message codes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Key className="h-5 w-5 text-brand-accent" />
                    <div>
                      <p className="font-medium">Hardware Security Keys</p>
                      <p className="text-sm text-muted-foreground">YubiKey, FIDO2 devices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <CodeBlock
              language="typescript"
              filename="mfa-setup.ts"
              code={`// Enable MFA for a user
const mfaSetup = await authChain.enableMFA({
  method: 'totp', // or 'sms', 'hardware_key'
  
  // For TOTP: Generate QR code for authenticator app
  generateQRCode: true
});

console.log('QR Code:', mfaSetup.qrCodeUrl);
console.log('Backup codes:', mfaSetup.backupCodes);

// Verify MFA setup
await authChain.verifyMFASetup({
  token: '123456' // From authenticator app
});

// Sign in with MFA
const user = await authChain.signIn({
  provider: 'email',
  email: 'user@example.com',
  password: 'password',
  
  // MFA token required after primary auth
  mfaToken: '123456'
});`}
            />
          </TabsContent>
        </Tabs>

        <h2>Blockchain Wallet Integration</h2>
        
        <p>
          AuthChain seamlessly integrates traditional authentication with blockchain wallets, 
          providing users with both web2 and web3 capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Automatic Wallet Creation</CardTitle>
              <CardDescription>
                Generate wallets automatically during authentication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const user = await authChain.signIn({
  provider: 'google',
  createWallet: true,
  
  // Specify supported chains
  supportedChains: ['ethereum', 'polygon']
});

// Wallet is automatically created and linked
console.log('Wallet address:', user.walletAddress);`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Connect Existing Wallet</CardTitle>
              <CardDescription>
                Link existing MetaMask or WalletConnect wallets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`// Connect after authentication
const wallet = await authChain.connectWallet({
  provider: 'metamask', // or 'walletconnect'
  
  // Optional: Require specific chain
  chainId: 1 // Ethereum mainnet
});

console.log('Connected wallet:', wallet.address);`}
              />
            </CardContent>
          </Card>
        </div>

        <h2>Security Best Practices</h2>
        
        <Card className="my-6">
          <CardHeader>
            <CardTitle>Implementation Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Rate Limiting</h4>
                <p className="text-muted-foreground">
                  AuthChain automatically implements rate limiting on all authentication endpoints 
                  to prevent brute force attacks and abuse.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Token Security</h4>
                <p className="text-muted-foreground">
                  Access tokens have short lifespans (1 hour) and refresh tokens are securely 
                  stored with automatic rotation on use.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Data Protection</h4>
                <p className="text-muted-foreground">
                  All sensitive data is encrypted at rest and in transit. PII is handled according 
                  to GDPR and CCPA requirements.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Audit Logging</h4>
                <p className="text-muted-foreground">
                  Comprehensive audit logs track all authentication events for security monitoring 
                  and compliance requirements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Next Steps</h2>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                <a href="/auth/social" className="text-brand-primary hover:underline">
                  Social Login Setup →
                </a>
              </CardTitle>
              <CardDescription>
                Configure OAuth providers and customize the social login experience
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                <a href="/auth/email" className="text-brand-primary hover:underline">
                  Email/Password Setup →
                </a>
              </CardTitle>
              <CardDescription>
                Implement traditional authentication with security best practices
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </DocLayout>
  );
};

export default AuthOverview;