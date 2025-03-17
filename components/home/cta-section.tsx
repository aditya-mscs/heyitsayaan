import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function CtaSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-ayaan-yellow text-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support My Journey</h2>
              <p className="mx-auto max-w-[700px]">
                Your support helps me continue creating content, working on projects, and pursuing my vision of using
                technology to benefit humanity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="secondary" size="lg" asChild className="bg-black text-white hover:bg-black/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white text-black border-black hover:bg-white/90"
              >
                <Link href="https://www.youtube.com/@ayaanthenintendokid" target="_blank">
                  Subscribe on YouTube <Youtube className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

