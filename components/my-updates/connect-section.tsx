import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gamepad, MessageSquare, Users, Youtube } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function ConnectSection() {
  return (
    <SectionObserver>
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Connected</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Follow me on social media to get notified about my latest updates
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="https://www.youtube.com/@ayaanthenintendokid" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" /> YouTube
              </Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" /> Discord
              </Link>
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Gamepad className="mr-2 h-5 w-5" /> Twitch
              </Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionObserver>
  )
}

