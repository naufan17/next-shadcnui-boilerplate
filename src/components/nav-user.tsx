/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link"
import { type AxiosResponse } from 'axios'
import axiosInstance from '@/lib/axios'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronsUpDown, LogOut, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store/store"
import { setLogout } from "@/lib/store/slices/auth"

export function NavUser() {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<{ id: string, name: string, email: string }>({ id: '', name: '', email: '' })
  const [avatar] = useState<string>('/avatars/shadcn.jpg')
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const { isMobile } = useSidebar()

  const handleLogout = () => {
    dispatch(setLogout())
    localStorage.removeItem("accessToken")
    router.push('/login')
  }

  const getProfile = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/account/profile')
      setUser(response.data.data)
    } catch (error: any) {
      console.error("Fetch profile failed: ", error.response?.data.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          {loading ? (
            <div className="flex w-full h-12 bg-secondary animate-pulse rounded-lg"></div>
          ) : (
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Avatar className="h-9 w-9 rounded-full">
                  <AvatarImage src={avatar} alt={user.name} />
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
          )}
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-9 w-9 rounded-full">
                  <AvatarImage src={avatar} alt={user.name} />
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/settings">
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <div onClick={handleLogout}>
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
