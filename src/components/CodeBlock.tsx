import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "text",
  filename,
  showLineNumbers = false,
  className = "",
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

  return (
    <div className={`relative group ${className}`}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between bg-code-background border border-code-border border-b-0 rounded-t-lg px-4 py-2">
          <div className="flex items-center space-x-2">
            {language === "bash" || language === "shell" ? (
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
      <div
        className={`${filename || language ? "rounded-t-none" : ""} relative`}
      >
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

        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: filename || language ? "0 0 0.5rem 0.5rem" : "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            background: "#1f2937",
            border: "1px solid hsl(var(--code-border))",
            borderTop:
              filename || language
                ? "none"
                : "1px solid hsl(var(--code-border))",
          }}
          lineNumberStyle={{
            color: "#6b7280",
            marginRight: "1rem",
            minWidth: "2rem",
            userSelect: "none",
          }}
          codeTagProps={{
            style: {
              background: "#1f2937",
              color: "#e5e7eb",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
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
  className = "",
}) => {
  return (
    <div
      className={`bg-code-background border border-code-border rounded-lg overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between bg-code-background border-b border-code-border px-4 py-2">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-code-comment" />
          <span className="text-sm text-code-comment">Terminal</span>
        </div>
      </div>

      <div className="p-4 font-mono text-sm">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-emerald-500 font-bold">$</span>
          <span className="text-code-foreground">{command}</span>
        </div>

        {output && (
          <div className="text-code-comment whitespace-pre-wrap">{output}</div>
        )}
      </div>
    </div>
  );
};
