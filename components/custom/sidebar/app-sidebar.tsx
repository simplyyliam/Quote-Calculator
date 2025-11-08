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
import { useActiveItem } from "@/hooks";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Data } from "@/lib/sidebar";
import { Command } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { setActiveItem, activeItem } = useActiveItem();

  const isActive =
    activeItem === "Services"
      ? Data.services.map((s) => (
          <Link key={s.id} href={s.path}>
            <SidebarMenuButton className="">{s.lable}</SidebarMenuButton>
          </Link>
        ))
      : Data.Invoices.map((i) => (
          <Link key={i.id} href={i.path}>
            <SidebarMenuButton className="">{i.lable}</SidebarMenuButton>
          </Link>
        ));

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <Link href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                <SidebarMenuItem className="flex flex-col gap-2">
                  {Data.menu.map((item) => (
                    <SidebarMenuButton
                      onClick={() => setActiveItem(item.title)}
                      key={item.id}
                      className="flex items-center justify-center cursor-pointer text-muted-foreground"
                      style={
                        {
                          // backgroundColor: `${item.color}`,
                        }
                      }
                    >
                      {isMobile ? <>{item.title}</> : <>{item.title.charAt(0)}</> }
                    </SidebarMenuButton>
                  ))}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>hello</SidebarFooter>
      </Sidebar>

      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-3">
          {activeItem}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>{isActive}</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
