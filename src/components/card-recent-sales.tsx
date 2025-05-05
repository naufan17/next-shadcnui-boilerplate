'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardRecentSalesProps {
  data: {
    name: string;
    email: string;
    avatar: string;
    value: string;  
  }[]
}

export function CardRecentSales({ data }: CardRecentSalesProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-md font-bold flex justify-between items-center">
          Recent Sales
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((item) => (
          <div key={item.email} className="flex py-3 justify-between items-center">
            <div className="flex gap-1">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage src={item.avatar} alt={item.name} />
                <AvatarFallback className="rounded-full">CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-4">
                <span className="font-bold text-sm">
                  {item.name}
                </span>
                <p className="text-sm">
                  {item.email}
                </p>                    
              </div>
            </div>
            <div>
              <span className="font-bold">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}