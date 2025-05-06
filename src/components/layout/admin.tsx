/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { usePathname } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { GalleryVerticalEnd, House, Package, ReceiptText } from "lucide-react"

const data = {
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
  const currentPath = usePathname()

  const updatedNavMain = data.navMain.map(item => ({
    ...item,
    isActive: item.url === currentPath,
  }))

  const activeBreadcrumb = updatedNavMain.find(item => item.isActive)

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