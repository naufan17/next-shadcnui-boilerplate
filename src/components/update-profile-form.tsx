/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "@/lib/axios";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function UpdateProfileForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<{ name: string, email: string }>({ name: "", email: "" });
  const [error, setError] = useState<string | null>(null);

  const getProfile = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/account/profile');
      setUser(response.data.data);
    } catch (error: any) {
      console.error("Fetch profile failed: ", error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError(null);

    switch (name) {
      case "name":
        setUser({ ...user, name: value });
        break;
      case "email":
        setUser({ ...user, email: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response: AxiosResponse = await axiosInstance.post('/account/update-profile', { name: user.name, email: user.email });
      getProfile();
      toast({ title: "Success", description: response.data.message });
    } catch (error: any) {
      setError(error.response?.data.message || "Update profile failed");
      console.error("Update profile failed: ", error.response?.data.message);
    } finally {
      setLoading(false);
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
      {error && 
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4 -mt-1" />
          <AlertTitle className="mb-0 tracking-normal">{error}</AlertTitle>
        </Alert>}
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="name" 
                type="text" 
                name="name" 
                defaultValue={user.name}
                onChange={handleInputChange}
                className="shadow-none"
              />               
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="email" 
                type="email" 
                name="email" 
                defaultValue={user.email}
                onChange={handleInputChange}
                className="shadow-none"
              />
            )}
          </div>
          <Button 
            type="submit" 
            className="shadow-none"
          >
          {loading ? (
            <svg className="inline w-7 h-7   text-slate-200 animate-spin dark:text-slate-300 fill-slate-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          ) : (
            "Update Profile"
          )}
          </Button>
        </div>
      </form>
    </div>
  );
}