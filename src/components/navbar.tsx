import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";

export function Navbar() {
  return (
    <nav className="relative top-0 z-50 mb-8 md:mb-12">
      <div className="flex flex-wrap justify-between items-center mx-auto py-2 px-4 md:py-4 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Next Shadcn UI Boilerplate
        </Link>
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 mr-2 py-2 px-5 rounded-full">
              <Link href="/login" className="flex items-center font-semibold text-[14px]">
                Login
              </Link>
            </button>
            <button className="bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 py-2 px-5 rounded-full">
              <Link href="/register" className="flex items-center font-semibold text-[14px]">
                Register
              </Link>
            </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}