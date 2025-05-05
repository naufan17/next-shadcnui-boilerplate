/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { type AxiosResponse } from 'axios'
import axiosInstance from '@/lib/axios'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { GalleryVerticalEnd, House, Package, ReceiptText } from "lucide-react"
import { Loading } from '@/components/ui/loading'

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menu: {
    name: "Next Shadcn UI Boilerplate",
    logo: GalleryVerticalEnd,
    version: "1.0.0",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
      isActive: true,
    },
    {
      title: "Products",
      url: "/products",
      icon: Package,
      isActive: false,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ReceiptText,
      isActive: false,
    },
  ],
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true)
  const currentPath = usePathname()

  const updatedNavMain = data.navMain.map(item => ({
    ...item,
    isActive: item.url === currentPath,
  }))

  const activeBreadcrumb = updatedNavMain.find(item => item.isActive)

  const getProfile = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/account/profile')
      data.user.name = response.data.data.name
      data.user.email = response.data.data.email
    } catch (error: any) {
      console.error("Fetch profile failed: ", error.response?.data.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  if (loading) return <Loading />

  return (
    <SidebarProvider>
      <AppSidebar data={{ ...data, navMain: updatedNavMain }} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="block">
                  <BreadcrumbLink href={activeBreadcrumb?.url || "/dashboard"}>
                    {activeBreadcrumb?.title || "Dashboard"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}