import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

export const AppHeader = () => {
  return (
    <header className=" flex h-12 shrink-0 items-center gap-2 px-4 border-b bg-background">
      <SidebarTrigger />
    </header>
  );
};
