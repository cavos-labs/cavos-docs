import React, { useState } from 'react';
import { Copy, MessageSquare, Check, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface DocPageActionsProps {
  pageTitle: string;
  pageContent: string;
  pageUrl?: string;
}

export const DocPageActions: React.FC<DocPageActionsProps> = ({ 
  pageTitle, 
  pageContent, 
  pageUrl 
}) => {
  const [copied, setCopied] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const { toast } = useToast();

  const extractPageContent = () => {
    try {
      const docContent = document.querySelector('.doc-content');
      if (!docContent) return pageContent;

      // Clone the element to avoid modifying the original
      const clone = docContent.cloneNode(true) as HTMLElement;
      
      // Remove the page actions dropdown from the clone
      const pageActions = clone.querySelector('.flex.items-center.justify-end');
      if (pageActions) {
        pageActions.remove();
      }
      
      // Convert HTML to markdown-like text
      let text = clone.innerText || clone.textContent || '';
      
      // Clean up excessive whitespace while preserving structure
      text = text
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove extra line breaks
        .replace(/^\s+|\s+$/g, '') // Trim start and end
        .replace(/\t/g, '  '); // Convert tabs to spaces
      
      return text;
    } catch (error) {
      console.error('Error extracting page content:', error);
      return pageContent;
    }
  };

  const copyMarkdown = async () => {
    try {
      setExtracting(true);
      const fullContent = extractPageContent();
      const markdownContent = `# ${pageTitle}\n\n${fullContent}`;
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Full page content copied as Markdown",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy content to clipboard",
        variant: "destructive",
      });
    } finally {
      setExtracting(false);
    }
  };

  const copyPageURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "URL Copied",
        description: "Page URL copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Failed to copy URL",
        description: "Unable to copy URL to clipboard",
        variant: "destructive",
      });
    }
  };

  const askChatGPT = () => {
    try {
      setExtracting(true);
      const fullContent = extractPageContent();
      
      // Create a more concise prompt due to URL length limitations
      const prompt = `I'm reading Cavos Service docs: "${pageTitle}". Here's the content:\n\n${fullContent.substring(0, 2000)}${fullContent.length > 2000 ? '...' : ''}\n\nCan you help me understand this?`;
      
      // Use the correct ChatGPT URL format
      const chatGPTUrl = `https://chat.openai.com/?model=gpt-4`;
      
      // Open ChatGPT and copy the content to clipboard for pasting
      window.open(chatGPTUrl, '_blank');
      
      // Copy the prompt to clipboard so user can paste it
      navigator.clipboard.writeText(prompt).then(() => {
        toast({
          title: "Content copied to clipboard",
          description: "Paste the content into ChatGPT to get help",
        });
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare content for ChatGPT",
        variant: "destructive",
      });
    } finally {
      setExtracting(false);
    }
  };

  return (
    <div className="flex items-center justify-end space-x-2 mb-4 sm:mb-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
            <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Page Actions</span>
            <span className="sm:hidden">Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 sm:w-64 bg-background border border-border">
          <DropdownMenuItem onClick={copyMarkdown} disabled={extracting} className="gap-2 p-2 sm:p-3">
            {copied ? (
              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-success flex-shrink-0" />
            ) : (
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            )}
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-medium">Copy Full Page Content</span>
              <span className="text-xs text-muted-foreground">
                {extracting ? 'Extracting...' : 'Copy entire page as Markdown'}
              </span>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={askChatGPT} disabled={extracting} className="gap-2 p-2 sm:p-3">
            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-xs sm:text-sm font-medium">Ask ChatGPT</span>
              <span className="text-xs text-muted-foreground">
                {extracting ? 'Preparing...' : 'Copy content & open ChatGPT'}
              </span>
            </div>
            <ExternalLink className="h-3 w-3 flex-shrink-0" />
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={copyPageURL} className="gap-2 p-2 sm:p-3">
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-medium">Copy Page URL</span>
              <span className="text-xs text-muted-foreground">Share link to this page</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};