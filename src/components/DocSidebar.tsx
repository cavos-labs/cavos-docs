import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Zap, Shield, ChevronRight, Code } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Get Started",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Quick Start", url: "/quick-start", icon: Zap },
    ],
  },
  {
    title: "SDKs",
    items: [
      {
        title: "Aegis SDK (v0.1.13)",
        url: "/sdk/aegis",
        icon: Shield,
      },
    ],
  },
  {
    title: "Templates",
    items: [
      {
        title: "Web Template",
        url: "/templates/web",
        icon: Code,
      },
      {
        title: "Mobile Template",
        url: "/templates/mobile",
        icon: Code,
      },
    ],
  },
];

export const DocSidebar: React.FC = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-border bg-nav-background">
      <SidebarContent className="px-3 py-4">
        {navigationItems.map((section, index) => (
          <div key={section.title}>
            <SidebarGroup>
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-2 text-sm font-medium text-nav-foreground hover:text-nav-active transition-colors">
                  <SidebarGroupLabel className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {section.title}
                  </SidebarGroupLabel>
                  {!collapsed && (
                    <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                  )}
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={item.url}
                              className={({ isActive }) =>
                                `flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-all ${
                                  isActive
                                    ? "bg-nav-active/10 text-nav-active border-r-2 border-nav-active"
                                    : "text-nav-foreground hover:bg-nav-hover hover:text-nav-active"
                                }`
                              }
                            >
                              <item.icon className="h-4 w-4 flex-shrink-0" />
                              {!collapsed && <span>{item.title}</span>}
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>

            {index < navigationItems.length - 1 && (
              <SidebarSeparator className="my-4" />
            )}
          </div>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
