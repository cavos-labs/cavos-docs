import React, { useState } from 'react';
import { SignInWithApple, SignInWithGoogle } from 'cavos-service-sdk';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import { CodeBlock } from '@/components/CodeBlock';
import { AuthErrorBoundary } from '@/components/AuthErrorBoundary';

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
    const importStatement = type === 'google' 
      ? `import { SignInWithGoogle } from 'cavos-service-sdk';`
      : `import { SignInWithApple } from 'cavos-service-sdk';`;
    
    const componentName = type === 'google' ? 'SignInWithGoogle' : 'SignInWithApple';
    
    return `${importStatement}

const LoginComponent = () => {
  return (
    <${componentName}
      appId="your-app-id"
      network="sepolia"
      finalRedirectUri="https://yourapp.com/auth/callback"
    />
  );
};`;
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
            This is a demonstration button. In the documentation environment, clicking will show a demo message instead of performing actual authentication.
          </AlertDescription>
        </Alert>

        {/* Interactive Button */}
        <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
          <AuthErrorBoundary>
            {renderButton()}
          </AuthErrorBoundary>
          
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
                <strong>Demo Complete!</strong> In a real application, this would redirect to {type === 'google' ? 'Google' : 'Apple'} authentication, 
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
            
            <div className="text-sm text-muted-foreground mt-2">
              <p><strong>Required props:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code>appId</code> - Your organization's app ID from Cavos dashboard</li>
                <li><code>network</code> - Target network ('sepolia' for testnet, 'mainnet' for production)</li>
                <li><code>finalRedirectUri</code> - Where users are redirected after authentication</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};