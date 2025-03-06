import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = {
  data: [
    {
      question: "What is Shadcn UI?",
      answer: "Shadcn UI is a collection of components that are designed to be easy to use and easy to customize.",
    },
    {
      question: "Is Shadcn UI free to use?",
      answer: "Yes, Shadcn UI is free to use.",
    },
    {
      question: "Is Shadcn UI open source?",
      answer: "Yes, Shadcn UI is open source.",
    },
    {
      question: "Can I use Shadcn UI in my project?",
      answer: "Yes, you can use Shadcn UI in your project.",
    },
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question: "What is Radix UI?",
      answer: "Radix UI is a design system for building high-quality, accessible user interfaces.",
    }
  ]
}

export function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex flex-col items-start md:items-center justify-start md:justify-center py-4 md:py-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Frequently Asked Questions         
        </h1>
        <p className="text-md md:text-lg mt-4 md:mt-6">
          Most commonly asked questions and quick answers
        </p>
      </div>
      <div className="flex items-start md:items-center justify-start md:justify-center w-full py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          <Accordion type="multiple" className="flex flex-col w-full gap-4 md:gap-6">
            {faqs.data.slice(0, Math.ceil(faqs.data.length / 2)).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-secondary text-secondary-foreground px-4 md:px-6 rounded-lg border-none">
                <AccordionTrigger className="text-md md:text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[16px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="multiple" className="flex flex-col w-full gap-4 md:gap-6">
            {faqs.data.slice(Math.ceil(faqs.data.length / 2)).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + Math.ceil(faqs.data.length / 2)}`} className="bg-secondary text-secondary-foreground px-4 md:px-6 rounded-lg border-none">
                <AccordionTrigger className="text-md md:text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[16px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}