import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Target, Youtube } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// Growth data for chart
const growthData = [
  { month: "Jan", subscribers: 50, views: 500 },
  { month: "Feb", subscribers: 120, views: 1200 },
  { month: "Mar", subscribers: 200, views: 2000 },
  { month: "Apr", subscribers: 350, views: 3500 },
  { month: "May", subscribers: 500, views: 5000 },
  { month: "Jun", subscribers: 800, views: 8000 },
]

export default function YoutubeGrowthSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 bg-muted/30 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600/10 text-red-600 mb-4">
              <Youtube className="mr-1 h-4 w-4" /> YouTube
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Channel Growth</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Tracking the growth of my YouTube channel over time
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Channel Statistics</CardTitle>
                <CardDescription>Growth in subscribers and views</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer
                  config={{
                    subscribers: {
                      label: "Subscribers",
                      color: "hsl(var(--chart-1))",
                    },
                    views: {
                      label: "Views (÷10)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={growthData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="subscribers"
                        stroke="var(--color-subscribers)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="views"
                        stroke="var(--color-views)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop"
                          alt="Mario Kart gameplay"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Mario Kart 8 Deluxe Race</h4>
                        <p className="text-sm text-muted-foreground">15,000+ views</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2670&auto=format&fit=crop"
                          alt="Science experiment"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Volcano Experiment</h4>
                        <p className="text-sm text-muted-foreground">12,500+ views</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop"
                          alt="Nintendo Switch gameplay"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Nintendo Switch Sports Review</h4>
                        <p className="text-sm text-muted-foreground">10,000+ views</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Channel Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-ayaan-yellow" />
                      <span>Reach 1,000 subscribers by end of year</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-ayaan-teal" />
                      <span>Post weekly Nintendo game reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-ayaan-yellow" />
                      <span>Start a monthly science experiment series</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-ayaan-teal" />
                      <span>Collaborate with other young content creators</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

