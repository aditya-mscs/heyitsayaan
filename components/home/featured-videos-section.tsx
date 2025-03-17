import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Youtube } from "lucide-react"
import SectionObserver from "@/components/section-observer"

// YouTube videos data
const youtubeVideos = [
  {
    title: "Nintendo Switch Sports Review",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    thumbnail: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop",
  },
  {
    title: "Mario Kart 8 Deluxe Gameplay",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Science Experiment: Volcano Eruption",
    link: "https://www.youtube.com/@ayaanthenintendokid",
    thumbnail: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2670&auto=format&fit=crop",
  },
]

export default function FeaturedVideosSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ayaan-teal/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600/10 text-red-600">
                <Youtube className="mr-1 h-4 w-4" /> YouTube
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Videos</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Check out some of my best content from my YouTube channel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
              {youtubeVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-black/70 p-3 rounded-full">
                        <Youtube className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={video.link} target="_blank" rel="noopener noreferrer">
                        Watch on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Button variant="outline" asChild>
              <Link href="https://www.youtube.com/@ayaanthenintendokid" target="_blank" rel="noopener noreferrer">
                Visit My YouTube Channel <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

