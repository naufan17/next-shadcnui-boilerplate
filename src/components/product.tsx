import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const products = {
  data: [
    {
      id: 1000001,
      name: "Asus ROG",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000002,
      name: "Asus Zenbook",
      description: "14 inch, RAM 132GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 18.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000003,
      name: "Asus VivoBook",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 15.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000004,
      name: "Lenovo IdeaPad",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 13.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000005,
      name: "Lenovo Yoga",
      description: "14.5 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 24.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000006,
      name: "Lenovo Legion",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 25.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000007,
      name: "Acer Aspire",
      description: "14 inch, RAM 16GB, SSD 512GB",
      category: "Laptop",
      price: 'Rp. 10.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000008,
      name: "Acer Predator",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    },
    {
      id: 1000009,
      name: "Acer Nitro",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 22.000.00',
      image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
    }
  ],
}

export function Product() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      {/* <div className="w-full bg-secondary text-secondary-foreground shadow-none border-none rounded-2xl p-4 md:p-6">
        <div className="flex flex-row w-full items-center justify-between">
        </div>
      </div> */}
      <div className="flex items-start md:items-center justify-start md:justify-center mt-4 md:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {products.data.map((product, index) => (
            <Card key={index} className="shadow-none">
              <CardHeader className="p-4 md:p-6">
                <Image
                  src={product.image}
                  alt="Product"
                  className="w-full h-auto object-cover rounded-lg"
                  width={800}
                  height={800}
                  loading="eager"
                />
                <CardTitle className="text-md md:text-lg font-bold">
                  {product.name}
                </CardTitle>
                <CardTitle className="text-md md:text-lg font-bold text-green-600">
                  {product.price}
                </CardTitle>
                <CardDescription>
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 px-4 md:pb-6 md:px-6">
                <Badge variant="secondary" className="text-xs md:text-sm">
                  {product.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}