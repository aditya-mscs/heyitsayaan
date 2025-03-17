"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Code, Users, Calendar, Lightbulb } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function CodingClubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-ayaan-yellow rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-ayaan-teal rounded-full filter blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-teal/10 text-ayaan-teal">
                <Code className="mr-1 h-4 w-4" /> Extracurricular Activity
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coding Club</h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  Teaching fellow students the basics of programming
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
                alt="Coding Club"
                fill
                className="rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/extra-curriculars">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Extra Curriculars
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-ayaan-yellow" /> Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Weekly meetings on Wednesdays after school</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-ayaan-teal" /> Participants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>12 students from grades 4-5</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-ayaan-yellow" /> Topics Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>HTML, CSS, JavaScript basics, and Scratch</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Coding Club</h2>
              <p>
                I started the Coding Club at PS25 to share my passion for programming with fellow students. The club
                meets weekly after school, where I lead sessions teaching the basics of web development and programming
                concepts.
              </p>

              <p>
                With the support of our computer science teacher, Ms. Johnson, I've developed a curriculum that
                introduces students to coding in a fun and engaging way. We focus on creating projects that students can
                be proud of, like personal web pages and simple interactive games.
              </p>

              <h2>Recent Meeting: HTML and CSS Basics</h2>
              <p>In our February 20th, 2025 meeting, I led a session on HTML and CSS basics. We covered:</p>
              <ul>
                <li>Basic HTML structure and common tags</li>
                <li>Adding images and links to web pages</li>
                <li>Styling text and elements with CSS</li>
                <li>Creating simple layouts</li>
              </ul>

              <p>
                Each student created their own personal web page, showcasing their interests, hobbies, and favorite
                things. It was amazing to see how quickly everyone picked up the concepts and how creative they were
                with their designs!
              </p>

              <h2>Why I Started the Club</h2>
              <p>
                I believe that coding is an essential skill for the future, and I wanted to create an opportunity for my
                classmates to learn these skills in a supportive environment. Many students don't have access to coding
                resources outside of school, so the club provides a space where everyone can learn together.
              </p>

              <p>
                Teaching others has also helped me deepen my own understanding of programming concepts. Explaining ideas
                to others forces me to think about them more clearly and often leads to new insights.
              </p>

              <h2>Future Plans</h2>
              <p>In the coming months, we plan to:</p>
              <ul>
                <li>Introduce basic JavaScript concepts</li>
                <li>Create simple interactive games</li>
                <li>Participate in the Hour of Code event</li>
                <li>Organize a coding showcase for parents and teachers</li>
                <li>Explore app development with MIT App Inventor</li>
              </ul>

              <p>I'm excited to see how the club grows and what amazing projects we'll create together!</p>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

