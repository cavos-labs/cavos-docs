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
      <div className="flex h-14 items-center justify-between px-3 sm:px-4 lg:px-6">
        <div className="flex items-center min-w-0">
          <SidebarTrigger className="mr-2 sm:mr-4" />
          
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0">
            <img
              src="/cavos-icon.png"
              alt="Cavos Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover flex-shrink-0"
            />
            <span className="font-semibold text-sm sm:text-lg truncate">
              <span className="hidden sm:inline">Cavos Service</span>
              <span className="sm:hidden">Cavos</span>
            </span>
          </div>
        </div>
        
        {/* Centered Search - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search documentation..." 
              className="pl-10 pr-20 bg-background-secondary border-border cursor-pointer"
              onClick={() => setSearchOpen(true)}
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">⌘</kbd>
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">K</kbd>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <a 
              href="https://github.com/cavos-labs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </Button>
          
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-xs sm:text-sm px-2 sm:px-4" asChild>
            <a 
              href="https://services.cavos.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </a>
          </Button>
        </div>
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};