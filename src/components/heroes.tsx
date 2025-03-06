import * as React from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function Heroes() {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-16 md:gap-8 w-full">
        <div>
          <Badge className="text-[10px] md:text-[12px] py-0.5 px-1.5 md:py-1 md:px-3 rounded-full">
            Version 1.0.0
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 md:mt-6">
            Next Shadcn Boilerplate
          </h1>
          <p className="text-md md:text-lg mt-4 md:mt-6">
            Get started to develop your next Shadcn UI project with Next.js.
          </p>
          <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-white py-2 md:py-2.5 px-5 md:px-6 mt-6 md:mt-8 rounded-full">
            <Link href="https://github.com/naufan17/next-shadcn-boilerplate" className="inline-flex items-center font-medium text-[13px] md:text-[15px]">
              Get Started
            </Link>
          </button>
        </div>
          <div className="flex flex-col items-center p-4 bg-secondary rounded-xl h-80 md:h-96">
            <div className="min-h-[100vh] md:min-h-min" />
          </div>
      </div>
    </div>
  )
}