import * as React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CardOverviewProps {
  index: number;
  title: string;
  value: string | number;
  description: string;
  icon: React.ElementType;
}

export function CardOverview({ index, title, value, description, icon }: CardOverviewProps) {
  return (
    <Card key={index} className="shadow-none">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex justify-between items-center">
          {title}
          {React.createElement(icon)}
        </CardTitle>
        <CardTitle className="text-xl font-bold">
          {value}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}