'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import * as React from "react"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#3b82f6",
  },
} satisfies ChartConfig

interface ChartOverviewProps {
  data: {
    month: string;
    desktop: number;
    mobile: number;
  }[]
}

export function ChartOverview({ data }: ChartOverviewProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-md font-bold">
          Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" name="Desktop" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" name="Mobile" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}