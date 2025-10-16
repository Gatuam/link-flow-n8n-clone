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
import { useHasActiveSubscription } from "@/features/subscription/hooks/use-sub";

export const AppSidebar = () => {
  const { hasActiveSubscription, isLoading } = useHasActiveSubscription();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" border-b ">
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <Link href="/" className="flex items-center gap-2">
              <Image width={15} height={30} alt="logo" src="/logo.svg" />
              <span className="group-data-[collapsible=icon]:hidden font-semibold text-sm">
                n7n
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
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
        <SidebarMenu className=" py-2 ">
          <SidebarMenuItem>
            {!hasActiveSubscription && !isLoading && (
              <SidebarMenuButton
                tooltip={"update to pro"}
                className=" gap-x-4"
                onClick={() => {}}
              >
                <StarIcon className=" size-4" />
                <span>Update to pro</span>
              </SidebarMenuButton>
            )}
            <SidebarMenuButton
              tooltip={"update to pro"}
              className=" gap-x-4"
              onClick={() => authClient.checkout({ slug: "n8n-dev" })}
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
