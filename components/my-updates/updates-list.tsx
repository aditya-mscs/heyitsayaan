"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ExternalLink, Youtube, FlaskRoundIcon as Flask, Code, Award, Brain } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// Updates data
const updates = [
  {
    title: "New Portfolio Website",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    description:
      "Launched my new personal portfolio website to showcase my projects and achievements. The website features sections for my academic achievements, projects, and YouTube channel.",
    link: "https://v0-ayaaaaaaaan-ms5rsn.vercel.app/",
    linkText: "Visit Website",
    category: "Website",
    icon: <Code className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  },
  {
    title: "Mario Kart 8 Deluxe Review",
    date: "March 10, 2025",
    description:
      "Posted a new review of Mario Kart 8 Deluxe with tips and tricks for beginners. In this video, I cover the best characters, karts, and strategies for winning races online.",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    linkText: "Watch Video",
    category: "YouTube",
    icon: <Youtube className="h-5 w-5 text-red-600" />,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Science Fair Project",
    date: "March 5, 2025",
    description:
      "Started working on my new science fair project about renewable energy sources. I'm building a small-scale solar and wind power generator to demonstrate how these technologies can work together.",
    link: "#",
    linkText: "Project Details",
    category: "Science",
    icon: <Flask className="h-5 w-5 text-ayaan-teal" />,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2676&auto=format&fit=crop",
  },
  {
    title: "First Honor Roll",
    date: "February 28, 2025",
    description:
      "Received First Honor Roll recognition for academic excellence in all subjects for the second quarter of the school year.",
    link: "/academics",
    linkText: "View Academics",
    category: "Academic",
    icon: <Award className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1651.JPEG-Q5k83h7x49kSCybjdfqujQYLzGL4SB.jpeg",
  },
  {
    title: "Coding Club Meeting",
    date: "February 20, 2025",
    description:
      "Led the weekly coding club meeting at school, teaching fellow students the basics of HTML and CSS. We created simple personal web pages together.",
    link: "#",
    linkText: "Club Details",
    category: "Coding",
    icon: <Code className="h-5 w-5 text-ayaan-teal" />,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Star Math Assessment",
    date: "January 13, 2025",
    description:
      "Took the Star Math Assessment and scored in the 99th percentile nationally, with performance equivalent to an 8th-grade level.",
    link: "/academics",
    linkText: "View Results",
    category: "Academic",
    icon: <Brain className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1649.JPEG-0QRTNvqcdSe3E8UAP42q615MiOiJHM.jpeg",
  },
  {
    title: "Nintendo Switch Unboxing",
    date: "December 25, 2024",
    description:
      "Posted a video unboxing my new Nintendo Switch OLED model and comparing it to the original Switch. Discussed the improvements and whether it's worth upgrading.",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    linkText: "Watch Video",
    category: "YouTube",
    icon: <Youtube className="h-5 w-5 text-red-600" />,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop",
  },
]

// Categories for filtering
const categories = ["All", "YouTube", "Academic", "Science", "Coding", "Website"]

export default function UpdatesList() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.toLowerCase()} value={category.toLowerCase()} className="mt-6">
                <div className="space-y-8">
                  {updates
                    .filter((update) => category === "All" || update.category === category)
                    .map((update, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-1/3 aspect-video md:aspect-square">
                            <Image
                              src={update.image || "/placeholder.svg"}
                              alt={update.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-md">
                              {update.icon}
                            </div>
                          </div>
                          <div className="flex-1 p-4 md:p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                              <h3 className="text-xl font-bold">{update.title}</h3>
                              <span className="text-sm text-muted-foreground">{update.date}</span>
                            </div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted mb-4">
                              {update.category}
                            </div>
                            <p className="text-muted-foreground mb-4">{update.description}</p>
                            <Button variant="outline" size="sm" asChild>
                              <Link
                                href={update.link}
                                target={update.link.startsWith("http") ? "_blank" : undefined}
                                rel={update.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {update.linkText}{" "}
                                {update.link.startsWith("http") ? (
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                ) : (
                                  <ChevronRight className="ml-2 h-4 w-4" />
                                )}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </SectionObserver>
  )
}

