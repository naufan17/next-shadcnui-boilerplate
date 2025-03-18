import { CardOverview } from "@/components/card-overview";
import { CardRecentSales } from "@/components/card-recent-sales";
import { ChartOverview } from "@/components/chart-overview";
import AdminLayout from "@/components/layout/admin";
import { CircleDollarSign, CirclePercent, FolderKanbanIcon, Users } from "lucide-react";

const data = {
  statistic: [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "+20.4% from last month",
      icon: CircleDollarSign
    },
    {
      title: "Sales",
      value: "$23,456",
      description: "+5.4% from last month",
      icon: CirclePercent
    },
    {
      title: "Customers",
      value: "1,345",
      description: "+3.4% from last month",
      icon: Users
    },
    {
      title: "Products",
      value: "56",
      description: "+1.4% from last month",
      icon: FolderKanbanIcon
    },
  ],
  chartData: [
    { 
      month: "January", 
      desktop: 186,
      mobile: 80 
    },
    { 
      month: "February", 
      desktop: 305, 
      mobile: 200 
    },
    { 
      month: "March", 
      desktop: 237, 
      mobile: 120 
    },
    { 
      month: "April", 
      desktop: 73, 
      mobile: 190 
    },
    { 
      month: "May", 
      desktop: 209, 
      mobile: 130 
    },
    { 
      month: "June", 
      desktop: 214, 
      mobile: 140 
    },
  ],
  sales: [
    {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/avatars/shadcn.jpg",
      value: "$399.00",
    },
    {
      name: "Marry Doe",
      email: "marry@example.com",
      avatar: "/avatars/shadcn.jpg",
      value: "$199.00",
    },
    {
      name: "Larry Doe",
      email: "larry@example.com",
      avatar: "/avatars/shadcn.jpg",
      value: "$99.00",
    },
    {
      name: "Sally Doe",
      email: "sally@example.com",
      avatar: "/avatars/shadcn.jpg",
      value: "$250.00",
    },
    {
      name: "Ricky Doe", 
      email: "ricky@example.com", 
      avatar: "/avatars/shadcn.jpg", 
      value: "$129.00"
    },
    {
      name: "Jenny Doe", 
      email: "jenny@example.com", 
      avatar: "/avatars/shadcn.jpg", 
      value: "$99.00"
    }
  ]
}
export default function Page() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 grid-cols-2 lg:grid-cols-4">
          {data.statistic.map((item, index: number) => (
            <CardOverview 
              key={index}
              index={index}
              title={item.title}
              value={item.value}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row p-4 pt-0 gap-4">
          <div className="w-full lg:w-3/5">
            <ChartOverview data={data.chartData} />
          </div>
          <div className="w-full lg:w-2/5">
            <CardRecentSales data={data.sales} />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
