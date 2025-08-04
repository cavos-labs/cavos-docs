import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NavigationLink {
  title: string;
  href: string;
  description?: string;
}

interface DocNavigationProps {
  previousPage?: NavigationLink;
  nextPage?: NavigationLink;
}

export const DocNavigation: React.FC<DocNavigationProps> = ({
  previousPage,
  nextPage,
}) => {
  if (!previousPage && !nextPage) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
      {/* Previous Page */}
      <div className="flex-1">
        {previousPage ? (
          <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
            <CardContent className="p-4">
              <a 
                href={previousPage.href}
                className="flex items-center space-x-3 text-left w-full"
              >
                <div className="flex-shrink-0">
                  <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Previous</p>
                  <p className="font-medium text-foreground group-hover:text-brand-primary transition-colors truncate">
                    {previousPage.title}
                  </p>
                  {previousPage.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {previousPage.description}
                    </p>
                  )}
                </div>
              </a>
            </CardContent>
          </Card>
        ) : (
          <div /> // Empty div to maintain spacing
        )}
      </div>

      {/* Next Page */}
      <div className="flex-1">
        {nextPage ? (
          <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
            <CardContent className="p-4">
              <a 
                href={nextPage.href}
                className="flex items-center space-x-3 text-right w-full"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Next</p>
                  <p className="font-medium text-foreground group-hover:text-brand-primary transition-colors truncate">
                    {nextPage.title}
                  </p>
                  {nextPage.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {nextPage.description}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            </CardContent>
          </Card>
        ) : (
          <div /> // Empty div to maintain spacing
        )}
      </div>
    </div>
  );
};