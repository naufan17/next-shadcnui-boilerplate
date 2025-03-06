import { RegisterForm } from "@/components/register-form";
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Next Shadcn UI Boilerplate
        </Link>
        <RegisterForm />
      </div>
    </div>
  );
}