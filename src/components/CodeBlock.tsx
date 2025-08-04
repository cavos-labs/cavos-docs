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
    <div className={`relative group code-enhanced ${className}`}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between bg-code-background/90 backdrop-blur-sm border border-code-border border-b-0 rounded-t-xl px-4 py-3">
          <div className="flex items-center space-x-3">
            {/* Traffic light dots for macOS style */}
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-60" />
            </div>
            
            <div className="flex items-center space-x-2">
              {language === "bash" || language === "shell" ? (
                <Terminal className="h-4 w-4 text-emerald-400" />
              ) : (
                <div className="w-4 h-4 rounded bg-brand-primary/20 flex items-center justify-center">
                  <span className="text-xs font-mono text-brand-primary">
                    {language?.slice(0, 2).toUpperCase() || "CODE"}
                  </span>
                </div>
              )}
              <span className="text-sm text-code-comment font-medium">
                {filename || language}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/10 focus-enhanced"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-400 animate-in zoom-in-50 duration-200" />
            ) : (
              <Copy className="h-4 w-4 text-code-comment hover:text-code-foreground transition-colors" />
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
            borderRadius: filename || language ? "0 0 0.75rem 0.75rem" : "0.75rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            background: "linear-gradient(135deg, #1f2937 0%, #1e293b 100%)",
            border: "1px solid hsl(var(--code-border))",
            borderTop:
              filename || language
                ? "none"
                : "1px solid hsl(var(--code-border))",
            padding: "1.5rem",
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          }}
          lineNumberStyle={{
            color: "#6b7280",
            marginRight: "1.5rem",
            minWidth: "2.5rem",
            userSelect: "none",
            borderRight: "1px solid #374151",
            paddingRight: "1rem",
          }}
          codeTagProps={{
            style: {
              background: "transparent",
              color: "#e5e7eb",
              fontWeight: "400",
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
      className={`bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 px-4 py-3">
        <div className="flex items-center space-x-3">
          {/* Traffic light dots */}
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-slate-300 font-medium">Terminal</span>
          </div>
        </div>
      </div>

      <div className="p-6 font-mono text-sm">
        <div className="flex items-start space-x-3 mb-3">
          <span className="text-emerald-400 font-bold text-lg leading-none">$</span>
          <span className="text-slate-100 font-medium leading-relaxed">{command}</span>
        </div>

        {output && (
          <div className="text-slate-400 whitespace-pre-wrap pl-6 border-l-2 border-slate-600/50 ml-1 leading-relaxed">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};
