"use client"

import * as React from "react";
import UpdatePasswordForm from "@/components/update-password-form";
import UpdateProfileForm from "@/components/update-profile-form";
import AdminLayout from "@/components/layout/admin";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Settings() {
  return (
    <AdminLayout>
      <div className="flex flex-col p-4 pt-0">
        <div className="flex flex-col w-full p-2 md:p-4 gap-1">
          <h1 className="text-xl md:text-2xl font-bold">
            Settings
          </h1>
          <h5 className="text-md">
            Manage your account settings
          </h5>
        </div>
        {/* <Separator/> */}
        <div className="p-2 md:p-4">
          <Tabs defaultValue="profile" className="max-w-screen-md">
            <TabsList className="grid w-60 grid-cols-2 mb-6">
              <TabsTrigger value="profile" className="font-semibold">Profile</TabsTrigger>
              <TabsTrigger value="password" className="font-semibold">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <UpdateProfileForm />
            </TabsContent>
            <TabsContent value="password">
              <UpdatePasswordForm />
            </TabsContent>
          </Tabs>
          {/* <aside className="flex flex-row mr-4 mb-6 gap-1">
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
          <div className="flex flex-col max-w-screen-md">
            {selectedItem === "Profile" && <UpdateProfileForm />}
            {selectedItem === "Password" && <UpdatePasswordForm />}
          </div> */}
        </div>
      </div>
    </AdminLayout>
  );
}