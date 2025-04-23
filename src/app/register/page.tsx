"use client";

import AuthLayout from "@/components/layout/auth";
import { RegisterForm } from "@/components/register-form";
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link";

export default function Register() {
  return (
    <AuthLayout>
      <Link href="/" className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>
        Next Shadcn UI
      </Link>
      <RegisterForm />
    </AuthLayout>
  );
}