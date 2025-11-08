import {
  SidebarProvider
} from "@/components/ui/sidebar";
import AppSidebar from "./app-sidebar";

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
}
