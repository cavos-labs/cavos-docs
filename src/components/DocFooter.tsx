import React from 'react';
import { ExternalLink } from 'lucide-react';

export const DocFooter: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">C</span>
              </div>
              <span className="font-semibold">Cavos Service</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Secure authentication with blockchain wallet integration for modern applications.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/quick-start" className="text-muted-foreground hover:text-foreground transition-colors">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="/sdk/aegis" className="text-muted-foreground hover:text-foreground transition-colors">
                  SDK Reference
                </a>
              </li>
              <li>
                <a href="/sdk/aegis" className="text-muted-foreground hover:text-foreground transition-colors">
                  SDKs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/your-org/authchain" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/authchain" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Discord</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/authchain" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Twitter</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AuthChain. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Built with ❤️ for developers
          </p>
        </div>
      </div>
    </footer>
  );
};