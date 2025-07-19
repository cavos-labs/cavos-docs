import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DocSidebar } from './DocSidebar';
import { DocHeader } from './DocHeader';
import { DocFooter } from './DocFooter';

interface DocLayoutProps {
  children: React.ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DocSidebar />
        
        <div className="flex-1 flex flex-col">
          <DocHeader />
          
          <main className="flex-1 px-6 py-8 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
          
        </div>
      </div>
    </SidebarProvider>
  );
};