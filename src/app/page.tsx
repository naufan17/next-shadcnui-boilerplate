import { CardProduct } from "@/components/card-product";
import { NavbarHeader } from "@/components/navbar-header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const products = {
  data: [
    {
      id: 1000001,
      name: "Asus ROG",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
    },
    {
      id: 1000002,
      name: "Asus Zenbook",
      description: "14 inch, RAM 132GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 18.000.00',
    },
    {
      id: 1000003,
      name: "Asus VivoBook",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 15.000.00',
    },
    {
      id: 1000004,
      name: "Lenovo IdeaPad",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 13.000.00',
    },
    {
      id: 1000005,
      name: "Lenovo Yoga",
      description: "14.5 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 24.000.00',
    },
    {
      id: 1000006,
      name: "Lenovo Legion",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 25.000.00',
    },
    {
      id: 1000007,
      name: "Acer Aspire",
      description: "14 inch, RAM 16GB, SSD 512GB",
      category: "Laptop",
      price: 'Rp. 10.000.00',
    },
    {
      id: 1000008,
      name: "Acer Predator",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex w-full bg-transparent border-b border-slate-200 sticky top-0 z-50 justify-end py-2 px-4 md:py-3 md:px-6 backdrop-blur-lg backdrop-opacity-80">
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
      <div className="flex flex-col w-full p-6 md:p-10">
        <div className="flex items-start md:items-center justify-start md:justify-center py-6 md:py-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Products
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {products.data.map((product) => (
            <CardProduct 
              key={product.id}
              name={product.name}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
