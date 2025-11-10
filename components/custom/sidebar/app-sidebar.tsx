"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Data } from "@/lib/sidebar";
import { useActiveItemStore } from "@/store/ActiveItemStore";
import { Command } from "lucide-react";
import Link from "next/link";

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { setHeaderActiveitem } =
    useActiveItemStore();

  // const isActive =
  //   sidebarActiveItem === "Services"
  //     ? Data.services.map((s) => (
  // <Link key={s.id} href={s.path}>
  //   <SidebarMenuButton
  //     className="cursor-pointer"
  //     onClick={() => setHeaderActiveitem(s.lable)}
  //   >
  //     <span className="w-6 h-6 bg-accent rounded-sm"></span>
  //     {s.lable}
  //   </SidebarMenuButton>
  // </Link>
  //       ))
  //     : 0;
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {Data.services.map((s) => (
          <Link key={s.id} href={s.path}>
            <SidebarMenuButton
              className="cursor-pointer"
              onClick={() => setHeaderActiveitem(s.lable)}
            >
              <span className="w-6 h-6 bg-accent rounded-sm"></span>
              {s.lable}
            </SidebarMenuButton>
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
