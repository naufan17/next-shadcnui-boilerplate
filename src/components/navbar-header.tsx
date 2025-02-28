import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function NavbarHeader({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/login" className={`${buttonVariants({ variant: "default" })} mr-2`}>
            Login
          </Link>
          <Link href="/register" className={`${buttonVariants({ variant: "secondary" })}`}>
            Register
          </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}