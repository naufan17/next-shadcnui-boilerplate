/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { MenuHeader } from "@/components/menu-header"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

interface SidebarProps {
  data: {
    user: {
      name: string
      email: string
      avatar: string
    }
    menu: {
      name: string
      logo: any
      version: string
    }
    navMain: {
      title: string
      url: string
      icon: any
      isActive: boolean
    }[]
  }
}

export function AppSidebar({ data }: SidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <MenuHeader menu={data.menu} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
