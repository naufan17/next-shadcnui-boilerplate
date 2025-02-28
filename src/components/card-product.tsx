import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image';

interface CardProductProps {
  name: string;
  description: string;
  category: string;
  price: string;
}

export function CardProduct({ name, description, category, price }: CardProductProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-3 md:p-5">
        <Image 
          src="https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg" 
          alt="Product"
          className="w-full h-auto object-cover rounded-lg"
          width={500}
          height={500}
        />
        <CardTitle className="text-md md:text-lg">
          {name}
        </CardTitle>
        <CardTitle className="text-sm md:text-md font-bold text-green-600">
          {price}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3 px-3 md:pb-5 md:px-5">
        <Badge variant="secondary" className="text-xs md:text-sm">{category}</Badge>
      </CardContent>
    </Card>
  )
}