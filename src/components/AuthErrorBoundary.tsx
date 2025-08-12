import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface AuthErrorBoundaryProps {
  children: React.ReactNode;
}

export class AuthErrorBoundary extends React.Component<
  AuthErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: AuthErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('AuthErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="space-y-3">
            <div className="text-red-800 dark:text-red-200">
              <strong>Demo Error:</strong> Something went wrong with the authentication button example.
              {this.state.error && (
                <div className="text-sm font-mono mt-2 p-2 bg-red-100 dark:bg-red-900 rounded">
                  {this.state.error.message}
                </div>
              )}
            </div>
            
            <div className="flex flex-col space-y-2 text-sm text-red-700 dark:text-red-300">
              <p>This is expected in the documentation environment. In your real application:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Ensure you have a valid <code>appId</code> from your Cavos dashboard</li>
                <li>Use a proper <code>finalRedirectUri</code> that you control</li>
                <li>Make sure your domain is registered with your Cavos organization</li>
              </ul>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={this.handleRetry}
                className="self-start mt-3"
              >
                <RefreshCw className="h-3 w-3 mr-2" />
                Try Demo Again
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}