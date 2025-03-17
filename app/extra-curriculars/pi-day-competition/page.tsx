"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Pi, Trophy, Calculator, Brain } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { piValue } from "@/lib/utils/pi-value"

export default function PiDayCompetitionPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow">
                <Pi className="mr-1 h-4 w-4" /> Academic Achievement
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pi Day Competition Winner
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  March 14, 2025 - PS25, Jersey City, NJ
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
                alt="Pi Day Competition"
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
                    <Trophy className="mr-2 h-5 w-5 text-ayaan-yellow" /> Achievement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>First Place Winner in the PS25 Pi Day Competition</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5 text-ayaan-teal" /> Digits Memorized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>250 decimal places of Pi</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-ayaan-yellow" /> Skills Demonstrated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Memory, Focus, Mathematical Interest</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Competition</h2>
              <p>
                On March 14th, 2025 (Pi Day), PS25 in Jersey City, NJ, held a special competition where students were
                challenged to recite as many digits of Pi as they could remember. This annual event celebrates the
                mathematical constant π (Pi), which is approximately equal to 3.14159...
              </p>

              <p>
                I had been practicing for weeks, using various memorization techniques to learn the digits. Through
                consistent practice and dedication, I was able to memorize Pi to 250 decimal places, which earned me the
                first prize in the school-wide competition.
              </p>

              <h2>The Value of Pi I Recited</h2>
              <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto my-6">
                <p className="font-mono text-sm break-all">{piValue}</p>
              </div>

              <h2>My Memorization Technique</h2>
              <p>To memorize such a long sequence of digits, I used a combination of techniques:</p>
              <ul>
                <li>Breaking the digits into smaller chunks of 5-10 numbers</li>
                <li>Creating visual patterns and stories for each chunk</li>
                <li>Using spaced repetition to reinforce my memory</li>
                <li>Practicing daily for 15-20 minutes</li>
                <li>Recording myself and listening to the recordings</li>
              </ul>

              <h2>Why Pi is Important</h2>
              <p>
                Pi (π) is one of the most important mathematical constants, representing the ratio of a circle's
                circumference to its diameter. It appears in many formulas in mathematics and physics, from calculating
                the area of a circle to understanding waves and periodic functions.
              </p>

              <p>
                Learning about Pi and its properties has helped me develop a deeper appreciation for mathematics and its
                applications in the real world.
              </p>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

