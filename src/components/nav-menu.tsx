import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export function NavMenu({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <Button className="mr-2">
              Login
            </Button>
          </Link>
          <Link href="/register" legacyBehavior passHref>
            <Button variant="secondary">
              Register
            </Button>
          </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}