import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// Testimonials data
const testimonials = [
  {
    quote:
      "Ayaan has shown exceptional aptitude in mathematics and problem-solving. His ability to grasp complex concepts is remarkable for his age.",
    author: "Ms. Johnson",
    role: "Math Teacher",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "A natural leader who inspires his peers. Ayaan's enthusiasm for learning is contagious, and he consistently brings creative ideas to the classroom.",
    author: "Mr. Rodriguez",
    role: "Science Teacher",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "Ayaan's Nintendo game reviews are insightful and entertaining. He has a natural talent for content creation and engaging his audience.",
    author: "Gaming Community",
    role: "YouTube Subscriber",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export default function TestimonialsSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow mb-4">
              <MessageSquare className="mr-1 h-4 w-4" /> Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Others Say</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Feedback from teachers, mentors, and community members
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

