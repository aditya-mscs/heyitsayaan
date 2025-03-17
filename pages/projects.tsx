"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
import {
  ExternalLink,
  Youtube,
  Gamepad2,
  FlaskRoundIcon as Flask,
  Palette,
  BookOpen,
  Music,
  Code,
  Sparkles,
} from "lucide-react"
import SectionObserver from "@/components/section-observer"

// Projects data
const allProjects = [
  {
    title: "Nintendo Game Reviews",
    description: "In-depth analysis of the latest Nintendo Switch games with gameplay footage and commentary.",
    category: "Gaming",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    title: "Science Fair Project: Renewable Energy",
    description: "Award-winning science project exploring renewable energy sources and their applications.",
    category: "Science",
    link: "#",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2676&auto=format&fit=crop",
    icon: <Flask className="h-5 w-5" />,
  },
  {
    title: "Interactive Math App",
    description: "Created a web application that helps students practice math problems interactively.",
    category: "Coding",
    link: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Digital Art Portfolio",
    description: "Collection of digital artwork showcasing various techniques and styles.",
    category: "Art",
    link: "#",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    title: "Book Review Blog",
    description: "Regular reviews of books across different genres with thoughtful analysis and recommendations.",
    category: "Writing",
    link: "#",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=2574&auto=format&fit=crop",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Music Composition",
    description: "Original music compositions for various instruments and digital productions.",
    category: "Music",
    link: "#",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop",
    icon: <Music className="h-5 w-5" />,
  },
  {
    title: "Mario Kart Tournament",
    description: "Organized and hosted a Mario Kart tournament with friends and family.",
    category: "Gaming",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    title: "Volcano Experiment",
    description: "Created a realistic volcano model and demonstrated the chemical reaction behind eruptions.",
    category: "Science",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2670&auto=format&fit=crop",
    icon: <Flask className="h-5 w-5" />,
  },
  {
    title: "Personal Website",
    description: "Designed and developed this personal website to showcase my projects and achievements.",
    category: "Coding",
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    icon: <Code className="h-5 w-5" />,
  },
]

// Categories for filtering
const categories = ["All", "Gaming", "Science", "Coding", "Art", "Writing", "Music"]

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const projectsPerPage = 6

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

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
                <Sparkles className="mr-1 h-4 w-4" /> Creative Works
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  Explore my creative work and achievements across different areas
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
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                  className={`mb-2 ${selectedCategory === category ? "bg-ayaan-yellow text-black hover:bg-ayaan-yellow/90" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {currentProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-md">{project.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="text-xs bg-ayaan-yellow/10 text-ayaan-yellow px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
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

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination>
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
              </div>
            )}
          </div>
        </section>
      </SectionObserver>

      <SectionObserver>
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured on YouTube</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Check out my YouTube channel for more content
                </p>
              </div>
              <Button size="lg" className="gap-2 bg-red-600 hover:bg-red-700" asChild>
                <Link href="https://www.youtube.com/@ayaanthenintendokid" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  Subscribe to My Channel
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

