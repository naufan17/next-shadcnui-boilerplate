/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { AxiosResponse } from "axios";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  password: z.string().min(10, "Password must be at least 10 characters long"),
  confirmPassword: z.string().min(10, "Password must be at least 10 characters long"),
})

type FormData = z.infer<typeof formSchema>

export default function UpdatePasswordForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      const response: AxiosResponse = await axiosInstance.post('/account/update-password', { 
        password: data.password, 
        confirmPassword: data.confirmPassword 
      });
      
      toast({ 
        title: "Success", 
        description: response.data.message 
      })
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="password" 
                type="password" 
                {...register("password")}
                className="shadow-none"
              />
            )}
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            {loading ? (
              <div className="w-full h-9 bg-secondary animate-pulse rounded-lg"></div>
            ) : (
              <Input 
                id="confirmPassword" 
                type="password" 
                {...register("confirmPassword")}
                className="shadow-none"
              />
            )}
            {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
          </div>
          <Button type="submit" className="shadow-none">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}