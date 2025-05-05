/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import axiosInstance from "@/lib/axios";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function UpdatePasswordForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setError(null)

    switch (name) {
      case "password":
        setPassword(value)
        break
      case "confirmPassword":
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axiosInstance.post('/account/update-password', { password, confirmPassword })
      toast({ title: "Success", description: "Password updated successfully" })
    } catch (error: any) {
      setError(error.response?.data.message || "Update password failed")
      console.error("Update password failed: ", error.response?.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg md:text-xl font-bold">Password</h1>
      <h5 className="text-md">Change your password</h5>
      <Separator className="my-4" />
      {error && 
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4 -mt-1" />
          <AlertTitle className="mb-0 tracking-normal">{error}</AlertTitle>
        </Alert>
      }
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="password" 
                type="password" 
                name="password"
                onChange={handleInputChange}
                className="shadow-none"
              />
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="confirmPassword" 
                type="password" 
                name="confirmPassword" 
                onChange={handleInputChange}
                className="shadow-none"
              />
            )}
          </div>
          <Button type="submit" className="shadow-none">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}