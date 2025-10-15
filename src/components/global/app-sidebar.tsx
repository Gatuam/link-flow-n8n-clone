"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuItems } from "@/const";
import { CreditCardIcon, LogOutIcon, StarIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" border-b ">
        <SidebarMenuButton>
          <SidebarMenuButton
            asChild
            className=" h-15 px-4 flex items-center gap-x-2"
          >
            <Link prefetch href={"/workflows"}>
              <Image width={15} height={30} alt="logo" src="/logo.svg" />
              <p className=" text-sm font-semibold">n7n</p>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((gp) => (
          <SidebarGroup key={gp.title}>
            <SidebarGroupContent className=" space-y-1">
              <SidebarMenu>
                {gp.items.map((it) => (
                  <SidebarMenuItem key={it.title}>
                    <SidebarMenuButton
                      tooltip={it.title}
                      isActive={
                        it.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(it.url)
                      }
                      asChild
                      className=" gap-x-4 h-9 px-4"
                    >
                      <Link prefetch href={it.url}>
                        <it.icon className=" size-4 " />
                        <span className=" ">{it.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className=" bg-muted/20 rounded-md py-2 border border-accent/70">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={"update to pro"}
              className=" gap-x-4"
              onClick={() => {}}
            >
              <StarIcon className=" size-4" />
              <span>Update to pro</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip={"update to pro"}
              className=" gap-x-4"
              onClick={() => {}}
            >
              <CreditCardIcon className=" size-4" />
              <span>Billings </span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip={"sign out"}
              className=" gap-x-4"
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/auth/sign-in");
                    },
                  },
                })
              }
            >
              <LogOutIcon className=" size-4" />
              <span>Sign out </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
