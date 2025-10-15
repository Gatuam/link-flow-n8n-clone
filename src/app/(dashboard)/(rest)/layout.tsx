import { AppHeader } from "@/components/global/app-header";
import { AppSidebar } from "@/components/global/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <main className=" flex-1">{children}</main>
    </>
  );
};

export default layout;
