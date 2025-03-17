"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/academics",
      label: "Academics",
      active: pathname === "/academics",
    },
    {
      href: "/extra-curriculars",
      label: "Extra Curriculars",
      active: pathname === "/extra-curriculars",
    },
    {
      href: "/donate",
      label: "Donate",
      active: pathname === "/donate",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Ayaan Dhamankar
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 flex flex-col gap-4 max-w-full">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <div className="flex justify-end">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

