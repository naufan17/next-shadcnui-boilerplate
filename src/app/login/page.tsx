"use client";

import { LoginForm } from "@/components/login-form"
import AuthLayout from "@/components/layout/auth"
import GuestGuard from "@/components/guard/guest";

export default function LoginPage() {
  return (
    <GuestGuard>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </GuestGuard>
  )
}
