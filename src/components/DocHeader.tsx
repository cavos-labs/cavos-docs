import React, { useState } from 'react';
import { Search, Github, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';
import { SearchDialog } from './SearchDialog';

export const DocHeader: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center">
          <SidebarTrigger className="mr-4" />
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/cavos-icon.png"
              alt="Cavos Icon"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-semibold text-lg">Cavos Service</span>
          </div>
        </div>
        
        {/* Centered Search */}
        <div className="flex-1 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search documentation..." 
              className="pl-10 bg-background-secondary border-border cursor-pointer"
              onClick={() => setSearchOpen(true)}
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">⌘</kbd>
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">K</kbd>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://github.com/cavos-labs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          
          <Button size="sm" className="bg-primary hover:bg-primary-hover" asChild>
            <a 
              href="https://services.cavos.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
        </div>
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};