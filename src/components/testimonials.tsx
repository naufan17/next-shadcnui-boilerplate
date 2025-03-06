import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const testimonials = {
  data: [
    {
      name: "John Doe",
      job: "Software Engineer",
      avatar: "/avatars/shadcn.jpg",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Marry Doe",
      job: "Fullstack Developer",
      avatar: "/avatars/shadcn.jpg",      
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Larry Doe",
      job: "Software Engineer",
      avatar: "/avatars/shadcn.jpg",      
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Sally Doe",
      job: "DevOps Engineer",
      avatar: "/avatars/shadcn.jpg",      
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Ricky Doe",
      job: "Backend Developer",
      avatar: "/avatars/shadcn.jpg",      
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Bobby Doe",
      job: "UI Designer",
      avatar: "/avatars/shadcn.jpg",      
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    }
  ]
}

export function Testimonials() {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex items-start md:items-center justify-start md:justify-center py-4 md:py-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Testimonials       
        </h1>
      </div>
      <div className="flex items-start md:items-center justify-start md:justify-center w-full py-6 md:py-10">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.data.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-secondary text-secondary-foreground border-none p-4 md:p-6">
                  <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
                    <span className="text-center text-lg md:text-xl font-bold">
                      &quot; {testimonial.testimonial} &quot;
                    </span>
                    <div className="flex flex-col items-center justify-center">
                      <Avatar className="h-11 w-11 rounded-full border border-primary">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="rounded-full">CN</AvatarFallback>
                      </Avatar>
                      <span className="text-[13px] md:text-[15px] font-bold mt-2">
                        {testimonial.name}
                      </span>
                      <span className="text-[13px] md:text-[15px]">
                        {testimonial.job}
                      </span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="relative bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10 -ml-6">
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
          <CarouselNext className="relative bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10 ml-4">
            <span className="sr-only">Next slide</span>
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  )
}