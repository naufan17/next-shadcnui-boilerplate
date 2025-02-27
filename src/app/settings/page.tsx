"use client"

import * as React from "react";
import { Separator } from "@/components/ui/separator";
import UpdatePasswordForm from "@/components/update-password-form";
import UpdateProfileForm from "@/components/update-profile-form";

const menu = {
  items: [
    {
      name: "Profile",
    },
    {
      name: "Password",
    },
  ]
}

export default function Settings() {
const [selectedItem, setSelectedItem] = React.useState(menu.items[0].name);

  return (
    <div className="flex flex-col min-h-svh w-full p-6 md:p-10">
      <div className="flex flex-col w-full p-2 md:p-4 gap-1">
        <h1 className="text-xl md:text-2xl font-bold">
          Settings
        </h1>
        <h5 className="text-md">
          Manage your account settings
        </h5>
      </div>
      <Separator className="my-4"/>
      <div className="flex flex-col md:flex-row w-full p-2">
        <aside className="flex flex-row md:flex-col w-1/5 mr-4 mb-4 gap-2">
          {menu.items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`px-3 py-1 hover:bg-slate-100 rounded-md cursor-pointer ${
                selectedItem === item.name ? "bg-slate-100" : ""
              }`}
              onClick={() => setSelectedItem(item.name)}
            >
              <span className="text-sm font-bold tracking-wide">{item.name}</span>
            </div>
          ))}
        </aside>
        <div className="flex flex-col w-4/5 max-w-screen-md">
        {selectedItem === "Profile" && <UpdateProfileForm />}
        {selectedItem === "Password" && <UpdatePasswordForm />}
        </div>
      </div>
    </div>
  );
}