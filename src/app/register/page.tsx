"use client";

import AuthLayout from "@/components/layout/auth";
import { RegisterForm } from "@/components/register-form";

export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}