import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { timelineData } from "@/lib/data"

export default function TimelineSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-teal/10 text-ayaan-teal mb-4">
              <Calendar className="mr-1 h-4 w-4" /> Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Timeline</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Key milestones and achievements in my academic and creative journey
            </p>
          </div>

          <div className="relative border-l border-muted ml-4 md:ml-0 md:mx-auto md:max-w-3xl space-y-10 py-6">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 mt-1 h-8 w-8 rounded-full bg-background border border-muted flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-8 md:ml-12">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-sm text-ayaan-yellow hover:underline inline-flex items-center mt-2"
                    >
                      Learn more <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

