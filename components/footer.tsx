import Link from "next/link"
import { Youtube, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Ayaan Dhamankar</h3>
            <p className="text-sm text-muted-foreground">Student, Creator, and Nintendo Enthusiast</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm text-muted-foreground hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@ayaanthenintendokid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:trendsyolo@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayaan Dhamankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

