"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ExternalLink } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { updatesData } from "@/lib/utils/updates-data"

// Categories for filtering
const categories = ["All", "Academic", "Award", "YouTube", "Science", "Coding", "Website"]

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
                  {updatesData
                    .filter((update) => category === "All" || update.category === category)
                    .map((update) => (
                      <Card key={update.id} className="overflow-hidden">
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
                            {update.extraContent}
                            <Button variant="outline" size="sm" asChild className="mt-4">
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

