"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Heart, Award, Users, MessageSquare } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function HumbleKindnessAwardPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500">
                <Heart className="mr-1 h-4 w-4" /> Character Award
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Humble and Kindness Award
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  March 14, 2025 - PS25, Jersey City, NJ
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject.png-3PXd2k66wxIeDccv05uonFDFHcihpt.jpeg"
                alt="Ayaan wearing Humble and Kind t-shirt"
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
                    <Award className="mr-2 h-5 w-5 text-red-500" /> Award
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Humble and Kindness Award from PS25</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-ayaan-teal" /> Recognition For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Exceptional character, empathy, and helpfulness</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-ayaan-yellow" /> Nominated By
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Teachers and fellow students</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Award</h2>
              <p>
                On March 14th, 2025, I was honored to receive the "Humble and Kindness" award at PS25 in Jersey City,
                NJ. This special recognition is given to students who consistently demonstrate exceptional character,
                empathy, and helpfulness toward classmates and teachers.
              </p>

              <p>
                The award celebrates not just academic achievement, but the importance of being a good person and making
                a positive impact on the school community. Recipients are nominated by teachers and peers who have
                observed consistent acts of kindness and humility.
              </p>

              <h2>What This Award Means to Me</h2>
              <p>
                Receiving this award is particularly meaningful to me because it recognizes qualities that I believe are
                truly important. While I'm proud of my academic achievements, I believe that how we treat others and
                contribute to our community is equally important.
              </p>

              <p>
                The t-shirt I received with the award (shown in the photo) serves as a reminder to always stay humble
                and kind, no matter what achievements or recognition I may receive. These are values that my parents
                have instilled in me from a young age.
              </p>

              <h2>How I Try to Demonstrate These Values</h2>
              <ul>
                <li>Helping classmates who are struggling with assignments</li>
                <li>Including everyone in activities and games during recess</li>
                <li>Showing appreciation to teachers and school staff</li>
                <li>Being a good listener when friends need someone to talk to</li>
                <li>Sharing my knowledge and skills through the coding club I started</li>
                <li>Acknowledging others' contributions and achievements</li>
              </ul>

              <h2>Why Character Matters</h2>
              <p>
                I believe that being smart or talented is only part of what makes a person successful. How we use those
                abilities to help others and make the world better is what truly matters. This award reminds me that
                kindness and humility are strengths, not weaknesses, and that they're just as important as any academic
                or athletic achievement.
              </p>

              <p>
                I'm grateful to my teachers, friends, and family for helping me develop these qualities, and I'll
                continue striving to live up to this recognition every day.
              </p>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

