"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ChevronRight, ExternalLink, Sparkles } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// Projects data
const projects = [
  {
    title: "Nintendo Game Review",
    description: "In-depth analysis of the latest Nintendo Switch games with gameplay footage and commentary.",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop",
  },
  {
    title: "Science Fair Project",
    description: "Award-winning science project exploring renewable energy sources and their applications.",
    link: "#",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2676&auto=format&fit=crop",
  },
  {
    title: "Coding Challenge",
    description: "Created a web application that helps students practice math problems interactively.",
    link: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Art Portfolio",
    description: "Collection of digital and traditional artwork showcasing various techniques and styles.",
    link: "#",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop",
  },
  {
    title: "Book Review Blog",
    description: "Regular reviews of books across different genres with thoughtful analysis and recommendations.",
    link: "#",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Music Composition",
    description: "Original music compositions for various instruments and digital productions.",
    link: "#",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop",
  },
]

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Force projects to display on initial render
  useEffect(() => {
    // This ensures the component re-renders after mounting
    setCurrentPage(1)
  }, [])

  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-teal/10 text-ayaan-teal">
                <Sparkles className="mr-1 h-4 w-4" /> Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Explore my latest work across different areas of interest
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
              {currentProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                    }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(i + 1)
                      }}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <Button asChild className="mt-4 bg-ayaan-teal hover:bg-ayaan-teal/90 text-white">
              <Link href="/projects">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

