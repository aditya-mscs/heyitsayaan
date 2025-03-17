"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import SectionObserver from "@/components/section-observer"
import { Award, BookOpen, Brain, Medal, Star, TrendingUp, Sparkles, Trophy, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Academic progress data
const progressData = [
  { quarter: "Q1", math: 95, reading: 92, language: 91, science: 94, socialStudies: 93 },
  { quarter: "Q2", math: 97, reading: 93, language: 92, science: 95, socialStudies: 94 },
  { quarter: "Q3", math: 98, reading: 94, language: 93, science: 96, socialStudies: 95 },
  { quarter: "Q4", math: 99, reading: 94, language: 94, science: 96, socialStudies: 95 },
]

// Star test data
const starTestData = [
  { subject: "Math", score: 1217, percentile: 99, gradeEquivalent: 8 },
  { subject: "Reading", score: 1092, percentile: 84, gradeEquivalent: 9 },
]

// Subject breakdown data
const subjectBreakdown = [
  { subject: "Literary Texts", score: 94 },
  { subject: "Informational Texts", score: 93 },
  { subject: "Foundational Skills", score: 94 },
  { subject: "Vocabulary", score: 92 },
  { subject: "Writing", score: 95 },
  { subject: "Speaking & Listening", score: 96 },
]

// Math skills breakdown
const mathSkillsData = [
  { name: "Number Sense", value: 98 },
  { name: "Operations", value: 99 },
  { name: "Algebra", value: 97 },
  { name: "Geometry", value: 95 },
  { name: "Data Analysis", value: 96 },
]

const COLORS = ["#FFD600", "#4ECDC4", "#FF6B6B", "#C44D58", "#556270"]

// Academic achievements
const academicAchievements = [
  {
    title: "First Honor Roll",
    date: "February 2025",
    description: "Recognized for maintaining straight A's across all subjects for the entire semester.",
    icon: <Award className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    title: "Math Olympiad Top 5%",
    date: "January 2025",
    description: "Placed in the top 5% nationally in the Math Olympiad for elementary students.",
    icon: <Trophy className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    title: "Reading Challenge Champion",
    date: "November 2024",
    description: "Read the most books in the school's reading challenge program.",
    icon: <BookOpen className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    title: "Perfect Attendance",
    date: "2023-2024 School Year",
    description: "Maintained perfect attendance throughout the entire academic year.",
    icon: <Star className="h-5 w-5 text-ayaan-yellow" />,
  },
]

// Study tips
const studyTips = [
  {
    title: "Create a Study Schedule",
    description:
      "I set aside specific times each day for studying different subjects. This helps me stay organized and ensures I cover everything.",
    icon: <Target className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    title: "Active Learning",
    description:
      "Instead of just reading, I practice active learning by explaining concepts in my own words or teaching them to someone else.",
    icon: <Brain className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    title: "Use Visual Aids",
    description:
      "I create colorful charts, diagrams, and mind maps to help visualize complex information and make it easier to remember.",
    icon: <Sparkles className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    title: "Take Regular Breaks",
    description:
      "I follow the Pomodoro Technique: 25 minutes of focused study followed by a 5-minute break to keep my mind fresh.",
    icon: <Zap className="h-5 w-5 text-ayaan-teal" />,
  },
]

export default function AcademicsPage() {
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
                <Brain className="mr-1 h-4 w-4" /> Academic Excellence
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Achievements</h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  Tracking my educational journey and progress
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ayaan-ylKWoGAkS1fJVD405qq0Q842U3q5bZ.png"
                alt="Ayaan in a yellow hoodie"
                fill
                className="rounded-xl object-cover object-top shadow-xl"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-ayaan-yellow/10 p-3 rounded-full mb-3">
                <Star className="h-6 w-6 text-ayaan-yellow" />
              </div>
              <h3 className="text-2xl font-bold">99th</h3>
              <p className="text-muted-foreground">Percentile in Math</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-ayaan-teal/10 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-ayaan-teal" />
              </div>
              <h3 className="text-2xl font-bold">9th Grade</h3>
              <p className="text-muted-foreground">Reading Level</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-ayaan-yellow/10 p-3 rounded-full mb-3">
                <Award className="h-6 w-6 text-ayaan-yellow" />
              </div>
              <h3 className="text-2xl font-bold">First Honor</h3>
              <p className="text-muted-foreground">Roll Recognition</p>
            </div>
          </div>
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reports">Test Reports</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
                <TabsTrigger value="tips">Study Tips</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Academic Progress</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardDescription className="px-6">Quarterly performance across all subjects</CardDescription>
                    <CardContent>
                      <ChartContainer
                        config={{
                          math: {
                            label: "Math",
                            color: "hsl(var(--chart-1))",
                          },
                          reading: {
                            label: "Reading",
                            color: "hsl(var(--chart-2))",
                          },
                          language: {
                            label: "Language",
                            color: "hsl(var(--chart-3))",
                          },
                          science: {
                            label: "Science",
                            color: "hsl(var(--chart-4))",
                          },
                          socialStudies: {
                            label: "Social Studies",
                            color: "hsl(var(--chart-5))",
                          },
                        }}
                        className="h-[300px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={progressData}>
                            <XAxis dataKey="quarter" />
                            <YAxis domain={[80, 100]} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Line type="monotone" dataKey="math" stroke="var(--color-math)" strokeWidth={2} />
                            <Line type="monotone" dataKey="reading" stroke="var(--color-reading)" strokeWidth={2} />
                            <Line type="monotone" dataKey="language" stroke="var(--color-language)" strokeWidth={2} />
                            <Line type="monotone" dataKey="science" stroke="var(--color-science)" strokeWidth={2} />
                            <Line
                              type="monotone"
                              dataKey="socialStudies"
                              stroke="var(--color-socialStudies)"
                              strokeWidth={2}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Star Test Results</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardDescription className="px-6">Standardized test performance</CardDescription>
                    <CardContent>
                      <div className="space-y-8">
                        {starTestData.map((test, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-semibold">{test.subject}</h3>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Score</p>
                                <p className="text-2xl font-bold">{test.score}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Percentile</p>
                                <p className="text-2xl font-bold">{test.percentile}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Grade Equivalent</p>
                                <p className="text-2xl font-bold">{test.gradeEquivalent}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 relative w-full h-48 rounded-xl overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
                          alt="Student studying"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Subject Breakdown</CardTitle>
                      <Brain className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardDescription className="px-6">Performance in specific skill areas</CardDescription>
                    <CardContent>
                      <ChartContainer
                        config={{
                          score: {
                            label: "Score",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        className="h-[300px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={subjectBreakdown} layout="vertical" margin={{ left: 120 }}>
                            <XAxis type="number" domain={[80, 100]} />
                            <YAxis dataKey="subject" type="category" width={100} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="score" fill="var(--color-score)" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Math Skills Breakdown</CardTitle>
                      <Brain className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardDescription className="px-6">Performance in specific math areas</CardDescription>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={mathSkillsData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={5}
                              dataKey="value"
                              nameKey="name"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {mathSkillsData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <ChartTooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reports" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Math Assessment</CardTitle>
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full">
                        <Star className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                    </CardHeader>
                    <CardDescription className="px-6">Star Math Test - January 13, 2025</CardDescription>
                    <CardContent>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Score</p>
                            <p className="text-3xl font-bold text-ayaan-yellow">1217</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Percentile</p>
                            <p className="text-3xl font-bold text-ayaan-yellow">99th</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Grade Equivalent</p>
                            <p className="text-3xl font-bold text-ayaan-yellow">8th</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Test Date</p>
                            <p className="text-lg font-medium">January 13, 2025</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-2">
                        <h4 className="font-semibold">Key Highlights:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                            <span>99th percentile nationally</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                            <span>8th grade equivalent performance</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                            <span>Exceptional problem-solving skills</span>
                          </li>
                        </ul>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Reading Assessment</CardTitle>
                      <div className="bg-ayaan-teal/10 p-1.5 rounded-full">
                        <BookOpen className="h-4 w-4 text-ayaan-teal" />
                      </div>
                    </CardHeader>
                    <CardDescription className="px-6">Star Reading Test - January 23, 2025</CardDescription>
                    <CardContent>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Score</p>
                            <p className="text-3xl font-bold text-ayaan-teal">1092</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Percentile</p>
                            <p className="text-3xl font-bold text-ayaan-teal">84th</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Grade Equivalent</p>
                            <p className="text-3xl font-bold text-ayaan-teal">9th</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Test Date</p>
                            <p className="text-lg font-medium">January 23, 2025</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-2">
                        <h4 className="font-semibold">Key Highlights:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-teal"></div>
                            <span>84th percentile nationally</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-teal"></div>
                            <span>9th grade equivalent reading level</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-teal"></div>
                            <span>Strong comprehension of complex texts</span>
                          </li>
                        </ul>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="md:col-span-2 overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Report Card</CardTitle>
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full">
                        <Medal className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                    </CardHeader>
                    <CardDescription className="px-6">Jersey City Public Schools - Grade 5</CardDescription>
                    <CardContent>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-4">Quarter 2 Grades:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A+</div>
                            <div className="text-xs text-muted-foreground">Mathematics</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Reading</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Language Arts</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A+</div>
                            <div className="text-xs text-muted-foreground">Science</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Social Studies</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-2">
                        <h4 className="font-semibold">Quarter 2 Grades:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A+</div>
                            <div className="text-xs text-muted-foreground">Mathematics</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Reading</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Language Arts</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A+</div>
                            <div className="text-xs text-muted-foreground">Science</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-ayaan-yellow">A</div>
                            <div className="text-xs text-muted-foreground">Social Studies</div>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="awards" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Honor Roll Certificate</CardTitle>
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full">
                        <Award className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                    </CardHeader>
                    <CardDescription className="px-6">Nicolaus Copernicus School - February 2025</CardDescription>
                    <CardContent>
                      <div className="p-6 bg-muted/30 rounded-lg text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-ayaan-yellow/10 rounded-full mb-4">
                          <Award className="h-8 w-8 text-ayaan-yellow" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">First Honor Roll</h3>
                        <p className="text-muted-foreground">
                          Awarded for academic excellence and maintaining straight A's across all subjects for the
                          entire semester.
                        </p>
                        <div className="mt-4 text-sm text-muted-foreground">
                          Presented by Nicolaus Copernicus School - February 2025
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Academic Achievements</CardTitle>
                      <div className="bg-ayaan-teal/10 p-1.5 rounded-full">
                        <TrendingUp className="h-4 w-4 text-ayaan-teal" />
                      </div>
                    </CardHeader>
                    <CardDescription className="px-6">Timeline of awards and recognitions</CardDescription>
                    <CardContent>
                      <div className="relative border-l border-muted ml-4 space-y-6 py-2">
                        {academicAchievements.map((achievement, index) => (
                          <div key={index} className="relative">
                            <div className="absolute -left-4 mt-1 h-8 w-8 rounded-full bg-background border border-muted flex items-center justify-center">
                              {achievement.icon}
                            </div>
                            <div className="ml-8">
                              <span className="text-sm text-muted-foreground">{achievement.date}</span>
                              <h3 className="text-lg font-semibold mt-1">{achievement.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Academic Recognition Gallery</CardTitle>
                      <CardDescription>Photos from award ceremonies and academic events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop"
                            alt="Academic awards"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2671&auto=format&fit=crop"
                            alt="Science fair"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2574&auto=format&fit=crop"
                            alt="Math competition"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-ayaan-yellow hover:bg-ayaan-yellow/90 text-black">
                        View Full Gallery
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="tips" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Study Tips</CardTitle>
                      <CardDescription>Strategies that help me excel academically</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {studyTips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="bg-muted p-2 rounded-full">{tip.icon}</div>
                            <div>
                              <h3 className="font-semibold">{tip.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Resources</CardTitle>
                      <CardDescription>Tools and resources I use to enhance my learning</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Online Learning Platforms</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Khan Academy</strong> - Great for math and science tutorials
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Duolingo</strong> - For language practice
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Scratch</strong> - For learning coding concepts
                                </span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Books and Reading Materials</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>National Geographic Kids</strong> - For science and nature
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Scholastic News</strong> - Current events at my reading level
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>DK Books</strong> - Visual encyclopedias and reference books
                                </span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Study Tools</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Quizlet</strong> - For creating and practicing flashcards
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Notion</strong> - For organizing notes and projects
                                </span>
                              </li>
                              <li className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                                <span>
                                  <strong>Forest App</strong> - For staying focused during study time
                                </span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>My Study Space</CardTitle>
                      <CardDescription>Creating an environment for academic success</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
                            alt="Study desk"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">My Ideal Study Environment</h3>
                          <p className="text-muted-foreground">
                            I've set up my study space to maximize focus and productivity. Here are some elements that
                            help me succeed:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Clean desk</strong> with minimal distractions
                              </span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Good lighting</strong> to reduce eye strain
                              </span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Comfortable chair</strong> with proper back support
                              </span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Organized supplies</strong> within easy reach
                              </span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Water bottle</strong> to stay hydrated
                              </span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-ayaan-yellow"></div>
                              <span className="text-muted-foreground">
                                <strong>Plants</strong> to improve air quality and mood
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </SectionObserver>

      <SectionObserver>
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow mb-4">
                <Target className="mr-1 h-4 w-4" /> Goals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Academic Goals</h2>
              <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
                Setting targets for continued growth and achievement
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Short-Term Goals</CardTitle>
                  <CardDescription>Next 3-6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">Maintain First Honor Roll</p>
                        <p className="text-sm text-muted-foreground">Continue achieving straight A's in all subjects</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">Win Science Fair</p>
                        <p className="text-sm text-muted-foreground">
                          Develop an innovative project for the district competition
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">Complete Coding Course</p>
                        <p className="text-sm text-muted-foreground">Finish the beginner JavaScript course online</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Medium-Term Goals</CardTitle>
                  <CardDescription>Next 1-2 years</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-ayaan-teal/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Advanced Math Program</p>
                        <p className="text-sm text-muted-foreground">
                          Qualify for the accelerated math program in middle school
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-teal/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Build a Website</p>
                        <p className="text-sm text-muted-foreground">
                          Create a fully functional website using HTML, CSS, and JavaScript
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-teal/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Read 50 Books</p>
                        <p className="text-sm text-muted-foreground">
                          Complete 50 books across various genres and reading levels
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Goals</CardTitle>
                  <CardDescription>Future aspirations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">STEM High School</p>
                        <p className="text-sm text-muted-foreground">
                          Get accepted into a specialized STEM high school program
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">Develop a Mobile App</p>
                        <p className="text-sm text-muted-foreground">
                          Create and publish an educational mobile application
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-ayaan-yellow/10 p-1.5 rounded-full mr-2">
                        <Target className="h-4 w-4 text-ayaan-yellow" />
                      </div>
                      <div>
                        <p className="font-medium">College Scholarship</p>
                        <p className="text-sm text-muted-foreground">
                          Earn a scholarship to study computer science or engineering
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-ayaan-yellow hover:bg-ayaan-yellow/90 text-black">
                <Link href="/contact">Contact for Tutoring Inquiries</Link>
              </Button>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

