import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground mt-8 md:mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto gap-2 py-4 px-4 md:py-8 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <div className="flex size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Next Shadcn UI Boilerplate
        </Link>
        <div className="flex items-center gap-4 self-center font-medium">
          <p className="text-sm md:text-base">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  )
}