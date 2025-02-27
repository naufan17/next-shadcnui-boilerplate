import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

const menu = {
  items: [
    {
      name: "Profile",
      href: "/settings/profile",
    },
    {
      name: "Account",
      href: "/settings/account",
    },
  ]
}

export default function Settings() {
  return (
    <div className="flex flex-col min-h-svh w-full p-6 md:p-10">
      <div className="flex flex-col w-full p-2 md:p-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Settings
        </h1>
        <h5 className="text-lg">
          Manage your account settings
        </h5>
      </div>
      <Separator className="my-4"/>
      <div className="flex flex-col md:flex-row w-full p-2 space-x-4">
        <aside className="flex flex-row md:flex-col w-1/5 space-x-2 md:space-x-0 md:space-y-2">
          {menu.items.map((item) => (
            <a href={item.href} key={item.name} className="px-3 py-1 hover:bg-slate-100 rounded-md">
              <span className="text-sm font-bold tracking-wide">
                {item.name}              
              </span>
            </a>
          ))}
        </aside>
        <div className="flex flex-col w-4/5 max-w-screen-md space-y-6">
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-lg md:text-xl font-bold">
              Account
            </h1>
            <h5 className="text-md">
              Update your account settings
            </h5>
          </div>
          <Separator className="my-4"/>
          <form action="">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">
              Password
                </Label>
                <Input type="password" id="password" name="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">
              Confirm Password
                </Label>
                <Input type="password" id="confirmPassword" name="confirmPassword" />
              </div>
              <Button type="submit" className="w-36">
                Update Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}