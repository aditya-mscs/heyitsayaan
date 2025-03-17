import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ExternalLink, Zap } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { updatesData } from "@/lib/utils/updates-data"

export default function LatestUpdatesSection() {
  // Get the 3 most recent updates
  const latestUpdates = updatesData.slice(0, 3)

  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow mb-4">
              <Zap className="mr-1 h-4 w-4" /> What's New
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Updates</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Check out my most recent activities and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {latestUpdates.map((update) => (
              <Card key={update.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{update.title}</CardTitle>
                    <div className="text-ayaan-yellow">{update.icon}</div>
                  </div>
                  <CardDescription>{update.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{update.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
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
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-ayaan-teal hover:bg-ayaan-teal/90 text-white">
              <Link href="/extra-curriculars">
                View All Updates <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

