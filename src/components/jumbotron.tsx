import * as React from "react"
import { Card,  CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function Jumbotron() {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <Card className="bg-secondary text-secondary-foreground shadow-none border-none w-full">
        <CardHeader className="p-8 md:p-12 items-center justify-center align-center gap-4 md:gap-6">
          <Badge className="text-[10px] md:text-[12px] py-0.5 px-1.5 md:py-1 md:px-3 rounded-full">
            Version 1.0.0
          </Badge>
          <CardTitle className="text-3xl md:text-5xl font-bold mt-4 md:mt-6">
            Next Shadcn UI Boilerplate
          </CardTitle>
          <CardDescription className="text-md md:text-lg mt-4 md:mt-6">
            Get started to develop your next Shadcn UI project with Next.js.
          </CardDescription>
          <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-white py-2.5 px-6 mt-6 md:mt-8 rounded-full">
            <Link href="https://github.com/naufan17/next-shadcn-boilerplate" className="inline-flex items-center font-medium text-[13px] md:text-[15px]">
              Get Started
            </Link>
          </button>
        </CardHeader>
      </Card>
    </div>
  )
}