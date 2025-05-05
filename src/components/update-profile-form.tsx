/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "@/lib/axios";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

interface User {
  name: string;
  email: string;
}

export default function UpdateProfileForm() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<{ user: User }>({
    user: {
      name: "",
      email: "",
    },
  });

  const getProfile = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/account/profile');
      setData({
        user: {
          name: response.data.data.name,
          email: response.data.data.email,
        },
      });
    } catch (error: any) {
      console.error("Fetch profile failed: ", error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg md:text-xl font-bold">
        Profile
      </h1>
      <h5 className="text-md">
        Update your profile information
      </h5>
      <Separator className="my-4" />
      <form action="">
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            {isLoading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                type="text" 
                id="name" 
                name="name" 
                defaultValue={data.user.name}
                className="shadow-none"
              />               
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {isLoading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                type="email" 
                id="email" 
                name="email" 
                defaultValue={data.user.email}
                className="shadow-none"
              />
            )}
          </div>
          <Button type="submit" className="shadow-none">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
}