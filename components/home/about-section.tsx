import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Brain, Users, Lightbulb } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { interests } from "@/lib/utils/interests"

// Qualities data
const qualities = [
  {
    title: "Creative Thinker",
    description: "Always coming up with innovative ideas and solutions.",
    icon: <Sparkles className="h-10 w-10 text-ayaan-yellow" />,
  },
  {
    title: "Quick Learner",
    description: "Able to grasp new concepts and skills rapidly.",
    icon: <Brain className="h-10 w-10 text-ayaan-teal" />,
  },
  {
    title: "Team Player",
    description: "Works well with others and contributes positively to group projects.",
    icon: <Users className="h-10 w-10 text-ayaan-yellow" />,
  },
  {
    title: "Visionary",
    description: "Sees opportunities where others see challenges, with a clear vision for the future.",
    icon: <Lightbulb className="h-10 w-10 text-ayaan-teal" />,
  },
]

export default function AboutSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ayaan-yellow/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow">
                <Sparkles className="mr-1 h-4 w-4" /> About Me
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
                Hey there! I'm Ayaan, a 5th grader with a passion for Nintendo games, science experiments, and creative
                content. When I'm not acing my math tests (99th percentile, just sayin'!), you can find me creating
                videos for my YouTube channel or working on my next big project.
              </p>
              <p className="text-muted-foreground">
                My academic achievements include scoring in the 99th percentile in mathematics and performing at a level
                comparable to 9th graders in reading and language arts. I've received First Honor Roll recognition and
                consistently maintain high scores across all subjects.
              </p>
              <p className="text-muted-foreground">
                On my YouTube channel{" "}
                <Link
                  href="https://www.youtube.com/@ayaanthenintendokid"
                  className="text-ayaan-yellow hover:underline"
                  target="_blank"
                >
                  @ayaanthenintendokid
                </Link>
                , I share my gaming adventures, science experiments, and creative projects. Join me as I explore the
                worlds of gaming, learning, and creating!
              </p>
              <div className="bg-background/50 p-4 rounded-lg border border-ayaan-yellow/20">
                <h3 className="text-xl font-bold text-ayaan-yellow mb-2">My Vision</h3>
                <p className="text-muted-foreground">
                  As a young visionary, my ultimate goal is to leverage technology and innovation to benefit humanity. I
                  believe that with the right mindset, skills, and determination, I can make a significant positive
                  impact on the world, regardless of which career path I choose.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">My Interests</h3>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-2 bg-background p-2 rounded-md">
                      {interest.icon}
                      <span>{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      {quality.icon}
                      <h3 className="mt-4 font-bold">{quality.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{quality.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

