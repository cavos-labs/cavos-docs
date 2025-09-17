import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import { CodeBlock } from '@/components/CodeBlock';

// Mock components for demonstration
const SignInWithApple = ({ children, ...props }: any) => (
  <button 
    className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
    {...props}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
    </svg>
    {children || 'Sign in with Apple'}
  </button>
);

const SignInWithGoogle = ({ children, ...props }: any) => (
  <button 
    className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    {...props}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    {children || 'Sign in with Google'}
  </button>
);

export interface SignInButtonExampleProps {
  type: 'google' | 'apple';
  title: string;
  description?: string;
  showCode?: boolean;
}

export const SignInButtonExample: React.FC<SignInButtonExampleProps> = ({
  type,
  title,
  description,
  showCode = true
}) => {
  const [showDemo, setShowDemo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Demo configuration - non-functional for documentation
  const demoConfig = {
    appId: 'demo-app-id',
    network: 'sepolia',
    finalRedirectUri: `${window.location.origin}/auth/demo`
  };

  const handleDemoClick = () => {
    setIsLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      setShowDemo(true);
      
      // Reset demo message after 5 seconds
      setTimeout(() => setShowDemo(false), 5000);
    }, 1000);
  };

  const getCodeExample = () => {
    if (type === 'google') {
      return `// For React Native
import { SignInWithGoogle } from 'cavos-service-native';

const LoginComponent = () => {
  return (
    <SignInWithGoogle
      appId="your-app-id"
      network="sepolia"
      finalRedirectUri="yourapp://auth-callback"
      onSuccess={(wallet) => {
        console.log('Login successful:', wallet);
      }}
      onError={(error) => {
        console.error('Error:', error);
      }}
    />
  );
};

// For Web (using direct API)
const initiateGoogleSignIn = async () => {
  const response = await fetch(
    \`https://services.cavos.xyz/api/v1/external/auth/google?network=sepolia&final_redirect_uri=https://yourapp.com/callback&app_id=your-app-id\`
  );
  const { url } = await response.json();
  window.location.href = url;
};`;
    } else {
      return `// For React Native
import { SignInWithApple } from 'cavos-service-native';

const LoginComponent = () => {
  return (
    <SignInWithApple
      appId="your-app-id"
      network="sepolia"
      finalRedirectUri="yourapp://auth-callback"
      onSuccess={(wallet) => {
        console.log('Login successful:', wallet);
      }}
      onError={(error) => {
        console.error('Error:', error);
      }}
    />
  );
};

// For Web (using direct API)
const initiateAppleSignIn = async () => {
  const response = await fetch(
    \`https://services.cavos.xyz/api/v1/external/auth/apple?network=sepolia&final_redirect_uri=https://yourapp.com/callback&app_id=your-app-id\`
  );
  const { url } = await response.json();
  window.location.href = url;
};`;
    }
  };

  const renderButton = () => {
    const ButtonComponent = type === 'google' ? SignInWithGoogle : SignInWithApple;
    
    return (
      <div onClick={handleDemoClick} style={{ cursor: 'pointer' }}>
        <ButtonComponent {...demoConfig} />
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
        </CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Demo Alert */}
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            This is a demonstration button. In the documentation environment, clicking will show a demo message instead of performing real authentication.
          </AlertDescription>
        </Alert>

        {/* Interactive Button */}
        <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
          {renderButton()}
          
          {isLoading && (
            <Alert>
              <AlertDescription>
                <strong>Loading...</strong> Simulating {type === 'google' ? 'Google' : 'Apple'} authentication flow...
              </AlertDescription>
            </Alert>
          )}
          
          {showDemo && !isLoading && (
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>Demo Completed!</strong> In a real application, this would redirect to {type === 'google' ? 'Google' : 'Apple'} authentication, 
                then return to your <code>finalRedirectUri</code> with user data. 
                <a href="/auth/demo" className="underline ml-1">View demo results page →</a>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Code Example */}
        {showCode && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Implementation</h4>
            <CodeBlock 
              language="typescript" 
              code={getCodeExample()}
            />
            
            <div className="text-sm text-gray-600 mt-2">
              <p><strong>Required props:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code>appId</code> - Application ID from your organization's Cavos dashboard</li>
                <li><code>network</code> - Target network ('sepolia' for testnet, 'mainnet' for production)</li>
                <li><code>finalRedirectUri</code> - Where to redirect users after authentication</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};