import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ExternalLink, Youtube, BookOpen, Brain, Award, Star } from "lucide-react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
import SectionObserver from "@/components/section-observer"

// Academic data for the radar chart
const academicData = [
  { subject: "Mathematics", score: 99, fullMark: 100 },
  { subject: "Reading", score: 94, fullMark: 100 },
  { subject: "Language", score: 94, fullMark: 100 },
  { subject: "Science", score: 96, fullMark: 100 },
  { subject: "Social Studies", score: 95, fullMark: 100 },
]

// Skills data for the pie chart
const skillsData = [
  { name: "Gaming", value: 30 },
  { name: "Science", value: 25 },
  { name: "Coding", value: 20 },
  { name: "Art", value: 15 },
  { name: "Writing", value: 10 },
]

const COLORS = ["#FFD600", "#4ECDC4", "#FF6B6B", "#C44D58", "#556270"]

export default function StatsSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Stats</h2>
            <p className="text-muted-foreground mt-2">A snapshot of my achievements and interests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Academic Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Academics</CardTitle>
                  <BookOpen className="h-5 w-5 text-ayaan-yellow" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-ayaan-yellow">99%</div>
                  <p className="text-sm text-muted-foreground">Math Percentile</p>
                </div>
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={academicData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" fontSize={10} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Score" dataKey="score" stroke="#FFD600" fill="#FFD600" fillOpacity={0.6} />
                      <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/academics">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Skills Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Skills</CardTitle>
                  <Brain className="h-5 w-5 text-ayaan-teal" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name }) => name}
                        labelLine={false}
                      >
                        {skillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Skill Level"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/projects">
                    See Projects <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* YouTube Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">YouTube</CardTitle>
                  <Youtube className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop"
                    alt="Nintendo gameplay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/70 p-2 rounded-full">
                      <Youtube className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium">@ayaanthenintendokid</p>
                  <p className="text-xs text-muted-foreground">Nintendo Game Reviews</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="https://www.youtube.com/@ayaanthenintendokid" target="_blank">
                    Visit Channel <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Awards Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Awards</CardTitle>
                  <Award className="h-5 w-5 text-ayaan-yellow" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-ayaan-yellow mr-2" />
                    <span className="text-sm">First Honor Roll</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-ayaan-yellow mr-2" />
                    <span className="text-sm">Perfect Attendance</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-ayaan-yellow mr-2" />
                    <span className="text-sm">Reading Challenge</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/academics">
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

