"use client";

import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import AuthLayout from "@/components/layout/auth"

export default function LoginPage() {
  return (
    <AuthLayout>
      <Link href="/" className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>
        Next Shadcn UI
      </Link>
      <LoginForm />
    </AuthLayout>
  )
}
