'use client'

import { RootState } from "@/lib/store/store"
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

export default function GuestGuard({ children }: Readonly<{ children: React.ReactNode }>) {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? null : <>{children}</>;
}