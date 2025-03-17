import Image from "next/image"
import { Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ayaan-yellow rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-ayaan-teal rounded-full filter blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow">
              <Award className="mr-1 h-4 w-4" /> Beyond Academics
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Extra Curriculars</h1>
              <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                Exploring my activities, achievements, and interests outside the classroom
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
  )
}

