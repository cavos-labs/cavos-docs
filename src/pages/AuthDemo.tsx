import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DocLayout } from '@/components/DocLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { CodeBlock } from '@/components/CodeBlock';

export const AuthDemo: React.FC = () => {
  const navigate = useNavigate();

  const implementationSteps = `// 1. Set up your environment
const cavosAuth = new CavosAuth('sepolia', 'your-app-id');

// 2. Handle the authentication redirect
const urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get('access_token');
const userData = urlParams.get('user');

if (accessToken && userData) {
  // Authentication successful
  const user = JSON.parse(decodeURIComponent(userData));
  console.log('User authenticated:', user);
  
  // Store tokens securely
  localStorage.setItem('cavos_access_token', accessToken);
  localStorage.setItem('cavos_user', JSON.stringify(user));
} else {
  // Handle authentication error
  const error = urlParams.get('error');
  console.error('Authentication failed:', error);
}`;

  return (
    <DocLayout>
      <div className="container max-w-4xl mx-auto py-8 space-y-6">
        {/* Success Message */}
        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            <strong>Demo Authentication Complete!</strong> This is what your users would see after successful authentication.
          </AlertDescription>
        </Alert>

        {/* Demo Results Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Authentication Demo Results
            </CardTitle>
            <CardDescription>
              In a real application, your users would be redirected here with authentication data.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Demo Data Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Demo User Data</h4>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
                  <div>Email: demo@cavos.xyz</div>
                  <div>User ID: auth0|demo123</div>
                  <div>Wallet: 0x1234...5678</div>
                  <div>Network: sepolia</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Authentication Tokens</h4>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
                  <div>Access Token: ey...</div>
                  <div>Refresh Token: rt...</div>
                  <div>Expires: 1 hour</div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Documentation Environment:</strong> This is a demonstration only. 
                In your actual application, you'll receive real authentication data from Cavos services.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Implementation Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Next Steps: Implementing in Your App</CardTitle>
            <CardDescription>
              Here's how to handle authentication callbacks in your real application
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <CodeBlock 
              language="typescript"
              filename="auth-callback.ts"
              code={implementationSteps}
            />
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">What happens in production:</h4>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li>Users are redirected to your <code>finalRedirectUri</code> after authentication</li>
                <li>URL contains query parameters with <code>access_token</code>, <code>refresh_token</code>, and user data</li>
                <li>Your app extracts and stores these tokens securely</li>
                <li>Use the access token for authenticated API calls to Cavos services</li>
                <li>Implement token refresh logic for seamless user experience</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/guides/authentication')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/quick-start')}
            >
              Quick Start Guide
            </Button>
            <Button 
              onClick={() => navigate('/sdk/aegis')}
            >
              SDK Documentation
            </Button>
          </div>
        </div>
      </div>
    </DocLayout>
  );
};