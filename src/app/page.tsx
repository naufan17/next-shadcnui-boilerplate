import { NavbarHeader } from "@/components/navbar-header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex w-full bg-transparent border-b border-slate-200 sticky top-0 z-50 justify-end py-2 px-4 md:py-3 md:px-6">
        <NavbarHeader />
      </div>
      <div className="flex flex-col w-full p-6 md:p-10">
        <div className="flex flex-col py-16 sm:py-24 items-start sm:items-center justify-start sm:justify-center  gap-4 md:gap-6">
          <div className="flex flex-col items-start sm:items-center justify-start sm:justify-center gap-1 md:gap-3">
            <h1 className="text-3xl md:text-5xl font-bold">
              Next Shadcn Boilerplate
            </h1>
            <p className="text-md md:text-lg">
              Get started to develop your next Shadcn UI project with Next.js.
            </p>
          </div>
          <Link href="https://github.com/naufan17/next-shadcn-boilerplate" className={buttonVariants({ variant: "default" })}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
