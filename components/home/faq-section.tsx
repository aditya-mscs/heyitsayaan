import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lightbulb } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// FAQ data
const faqData = [
  {
    question: "What grade is Ayaan currently in?",
    answer: "Ayaan is currently in 5th grade at Nicolaus Copernicus School in Jersey City.",
  },
  {
    question: "What are Ayaan's favorite Nintendo games?",
    answer:
      "Ayaan loves Mario Kart 8 Deluxe, The Legend of Zelda: Breath of the Wild, Super Smash Bros. Ultimate, and Animal Crossing: New Horizons.",
  },
  {
    question: "How did Ayaan get started with YouTube?",
    answer:
      "Ayaan's passion for Nintendo games and desire to share his gameplay experiences led him to start his YouTube channel. He began by recording gameplay videos and reviews of his favorite games.",
  },
  {
    question: "What academic achievements is Ayaan most proud of?",
    answer:
      "Ayaan is particularly proud of scoring in the 99th percentile in mathematics and reaching a 9th-grade reading level. He's also proud of his First Honor Roll recognition and science fair victories.",
  },
  {
    question: "Does Ayaan offer tutoring or mentoring?",
    answer:
      "Ayaan has started a coding club at his school where he helps teach basic programming concepts to his peers. For specific tutoring requests, please use the contact form.",
  },
]

export default function FaqSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 bg-muted/30 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow mb-4">
              <Lightbulb className="mr-1 h-4 w-4" /> FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Answers to common questions about my education, interests, and activities
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

