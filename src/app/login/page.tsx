"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/login-form"
import AuthLayout from "@/components/layout/auth"
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function LoginPage() {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router]);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
