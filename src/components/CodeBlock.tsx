import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'text',
  filename,
  showLineNumbers = false,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Code copied successfully",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy code to clipboard",
        variant: "destructive",
      });
    }
  };

  const lines = code.split('\n');

  return (
    <div className={`relative group ${className}`}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between bg-code-background border border-code-border border-b-0 rounded-t-lg px-4 py-2">
          <div className="flex items-center space-x-2">
            {language === 'bash' || language === 'shell' ? (
              <Terminal className="h-4 w-4 text-code-comment" />
            ) : null}
            <span className="text-sm text-code-comment">
              {filename || language}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <Check className="h-4 w-4 text-success" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}

      {/* Code Content */}
      <div className={`code-block ${filename || language ? 'rounded-t-none' : ''} relative`}>
        {!filename && !language && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            {copied ? (
              <Check className="h-4 w-4 text-success" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        
        <pre className="overflow-x-auto">
          <code className="block">
            {showLineNumbers ? (
              <div className="table w-full">
                {lines.map((line, index) => (
                  <div key={index} className="table-row">
                    <span className="table-cell text-right pr-4 py-0 text-code-comment select-none w-12">
                      {index + 1}
                    </span>
                    <span className="table-cell py-0">{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Terminal/Command Block Component
interface TerminalBlockProps {
  command: string;
  output?: string;
  className?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
  command,
  output,
  className = ''
}) => {
  return (
    <div className={`bg-code-background border border-code-border rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-between bg-code-background border-b border-code-border px-4 py-2">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-code-comment" />
          <span className="text-sm text-code-comment">Terminal</span>
        </div>
      </div>
      
      <div className="p-4 font-mono text-sm">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-success">$</span>
          <span className="text-code-foreground">{command}</span>
        </div>
        
        {output && (
          <div className="text-code-comment whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};