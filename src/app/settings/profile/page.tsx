import { Separator } from "@/components/ui/separator";
import UpdateProfileForm from "@/components/update-profile-form";

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

export default function Profile() {
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
      <div className="flex flex-col w-full p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col w-full space-y-2">
            {menu.items.map((item) => (
              <a href={item.href} key={item.name} className="px-3 py-1 hover:bg-slate-100 rounded-md">
                <span className="text-sm font-bold tracking-wide">
                  {item.name}              
                </span>
              </a>
            ))}
          </div>
          <UpdateProfileForm />
        </div>
      </div>
    </div>
  );
}