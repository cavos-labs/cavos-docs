import React, { useState, useEffect } from 'react';
import { Search, FileText, Code, Book, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  url: string;
  type: 'page' | 'section' | 'api' | 'external';
  description?: string;
  category?: string;
}

const searchData: SearchResult[] = [
  // Pages
  { title: 'Overview', url: '/', type: 'page', description: 'Introduction to Cavos Service', category: 'Getting Started' },
  { title: 'Quick Start', url: '/quick-start', type: 'page', description: 'Get started with Cavos Service integration', category: 'Getting Started' },
  { title: 'Installation', url: '/installation', type: 'page', description: 'Install Cavos Service SDKs', category: 'Getting Started' },
  { title: 'Authentication Guide', url: '/auth/overview', type: 'page', description: 'Auth0 integration overview', category: 'Authentication' },
  
  // SDKs
  { title: 'Web SDK', url: '/sdk/web', type: 'page', description: 'JavaScript/TypeScript SDK for web applications', category: 'SDKs' },
  { title: 'React Native SDK', url: '/sdk/native', type: 'page', description: 'Mobile SDK with biometric authentication', category: 'SDKs' },
  
  // API Reference
  { title: 'Authentication API', url: '/api/auth', type: 'api', description: 'User registration, login, and token management', category: 'API Reference' },
  { title: 'Wallet & Transactions API', url: '/api/wallet', type: 'api', description: 'Wallet deployment and transaction execution', category: 'API Reference' },
  
  // External
  { title: 'Organization Setup', url: 'https://services.cavos.xyz', type: 'external', description: 'Register your organization', category: 'External' },
  
  // API Endpoints
  { title: 'POST /auth/register', url: '/api/auth', type: 'api', description: 'Register a new user with automatic wallet deployment', category: 'Auth Endpoints' },
  { title: 'POST /auth/login', url: '/api/auth', type: 'api', description: 'Authenticate an existing user', category: 'Auth Endpoints' },
  { title: 'GET /auth/apple', url: '/api/auth', type: 'api', description: 'Initialize Apple Sign In flow', category: 'Auth Endpoints' },
  { title: 'GET /auth/google', url: '/api/auth', type: 'api', description: 'Initialize Google OAuth flow', category: 'Auth Endpoints' },
  { title: 'POST /auth/refresh', url: '/api/auth', type: 'api', description: 'Refresh an expired access token', category: 'Auth Endpoints' },
  { title: 'POST /deploy', url: '/api/wallet', type: 'api', description: 'Deploy ArgentX smart account on Starknet', category: 'Wallet Endpoints' },
  { title: 'POST /execute/session', url: '/api/wallet', type: 'api', description: 'Execute contract calls with gas fee handling', category: 'Wallet Endpoints' },
  { title: 'POST /execute/session/swap', url: '/api/wallet', type: 'api', description: 'Token swaps using AVNU integration', category: 'Wallet Endpoints' },
  
  // Concepts
  { title: 'Starknet Integration', url: '/quick-start', type: 'section', description: 'ArgentX smart accounts on Starknet', category: 'Concepts' },
  { title: 'Biometric Authentication', url: '/sdk/native', type: 'section', description: 'Face ID and Touch ID integration', category: 'Concepts' },
  { title: 'AVNU Paymaster', url: '/api/wallet', type: 'section', description: 'Automatic gas fee abstraction', category: 'Concepts' },
  { title: 'Token Management', url: '/sdk/web', type: 'section', description: 'Access and refresh token handling', category: 'Concepts' },
  { title: 'Organization Secret', url: '/api/auth', type: 'section', description: 'Backend authentication for registration/login', category: 'Concepts' },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter(item => {
      const searchTerms = query.toLowerCase().split(' ');
      const searchableText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      
      return searchTerms.every(term => searchableText.includes(term));
    });

    setResults(filteredResults.slice(0, 10)); // Limit to 10 results
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'external') {
      window.open(result.url, '_blank');
    } else {
      navigate(result.url);
    }
    onOpenChange(false);
    setQuery('');
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'api':
        return <Code className="h-4 w-4" />;
      case 'external':
        return <ExternalLink className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'api':
        return 'bg-blue-500/10 text-blue-600';
      case 'external':
        return 'bg-green-500/10 text-green-600';
      case 'section':
        return 'bg-purple-500/10 text-purple-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Documentation
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for pages, APIs, concepts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {query && results.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Book className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition-colors"
                >
                  <div className="mt-0.5">
                    {getIcon(result.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium truncate">{result.title}</h4>
                      <Badge variant="secondary" className={`text-xs ${getTypeColor(result.type)}`}>
                        {result.type}
                      </Badge>
                    </div>
                    
                    {result.description && (
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {result.description}
                      </p>
                    )}
                    
                    {result.category && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {result.category}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!query && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Popular searches</h4>
                <div className="flex flex-wrap gap-2">
                  {['authentication', 'wallet deployment', 'token swap', 'biometric auth', 'starknet'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-2 py-1 text-xs bg-muted hover:bg-muted-hover rounded border border-border transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-xs">⌘</kbd>
                <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-xs ml-1">K</kbd>
                <span className="ml-2">to open search</span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};