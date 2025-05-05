"use client";

import GuestGuard from "@/components/guard/guest";
import AuthLayout from "@/components/layout/auth";
import { RegisterForm } from "@/components/register-form";

export default function Register() {
  return (
    <GuestGuard>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </GuestGuard>
  );
}