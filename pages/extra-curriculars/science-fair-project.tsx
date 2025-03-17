"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, FlaskRoundIcon as Flask, Lightbulb, Wind, Sun } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function ScienceFairProjectPage() {
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
                <Flask className="mr-1 h-4 w-4" /> Science Project
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Renewable Energy Project
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  Exploring solar and wind power generation
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2676&auto=format&fit=crop"
                alt="Renewable Energy Project"
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
                    <Lightbulb className="mr-2 h-5 w-5 text-ayaan-yellow" /> Project Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Build a small-scale hybrid renewable energy generator</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="mr-2 h-5 w-5 text-ayaan-yellow" /> Solar Component
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Small photovoltaic panels to capture solar energy</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wind className="mr-2 h-5 w-5 text-ayaan-teal" /> Wind Component
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Miniature wind turbine to harness wind energy</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Project</h2>
              <p>
                For this year's science fair, I'm working on a renewable energy project that demonstrates how solar and
                wind power can work together to provide a more consistent energy supply. The project involves building a
                small-scale model that combines both energy sources and shows how they can complement each other.
              </p>

              <p>
                I started this project on March 5th, 2025, and I'm currently in the research and design phase. The
                science fair will be held in May, so I have about two months to complete the project.
              </p>

              <h2>Project Components</h2>
              <h3>Solar Power System</h3>
              <p>The solar component will consist of:</p>
              <ul>
                <li>Small photovoltaic panels</li>
                <li>Charge controller to regulate the power</li>
                <li>Battery storage system</li>
                <li>Voltage meter to measure output</li>
              </ul>

              <h3>Wind Power System</h3>
              <p>The wind component will include:</p>
              <ul>
                <li>Miniature wind turbine with optimized blade design</li>
                <li>Small DC motor as a generator</li>
                <li>Separate battery storage</li>
                <li>Voltage meter to measure output</li>
              </ul>

              <h3>Combined System</h3>
              <p>The two systems will be connected to:</p>
              <ul>
                <li>A shared power management circuit</li>
                <li>LED lights to demonstrate power usage</li>
                <li>A small display showing real-time power generation</li>
                <li>A data logger to record energy production over time</li>
              </ul>

              <h2>Research Questions</h2>
              <p>Through this project, I aim to answer several questions:</p>
              <ol>
                <li>How do weather conditions affect the output of each energy source?</li>
                <li>When is each energy source most efficient?</li>
                <li>How can the two sources work together to provide consistent power?</li>
                <li>What are the advantages and limitations of each energy source?</li>
                <li>How could this model be scaled up for real-world applications?</li>
              </ol>

              <h2>Current Progress</h2>
              <p>So far, I have:</p>
              <ul>
                <li>Completed background research on renewable energy systems</li>
                <li>Designed the initial layout for both power systems</li>
                <li>Ordered the necessary components (solar panels, DC motor, etc.)</li>
                <li>Started building the base structure for the model</li>
                <li>Created a data collection plan to measure and compare energy output</li>
              </ul>

              <h2>Next Steps</h2>
              <p>In the coming weeks, I plan to:</p>
              <ul>
                <li>Assemble the solar panel system</li>
                <li>Build and test the wind turbine</li>
                <li>Create the power management circuit</li>
                <li>Set up the data logging system</li>
                <li>Begin collecting data under various conditions</li>
                <li>Analyze the results and prepare my presentation</li>
              </ul>

              <p>
                I'm excited about this project because it combines my interests in science, engineering, and
                environmental sustainability. I believe renewable energy will play a crucial role in our future, and I
                want to understand how these technologies work together.
              </p>

              <p>Check back for updates as the project progresses!</p>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

