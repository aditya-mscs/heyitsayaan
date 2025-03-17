"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Code, Gamepad, Clock, Trophy } from "lucide-react"
import SectionObserver from "@/components/section-observer"

export default function OvoWebGamePage() {
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
                <Gamepad className="mr-1 h-4 w-4" /> Web Game Development
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  HTML5 OVO-inspired Web Game
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                  A challenging platformer game built with JavaScript and Canvas
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2670&auto=format&fit=crop"
                alt="OVO-inspired Web Game"
                fill
                className="rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/extra-curriculars">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Extra Curriculars
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-ayaan-yellow" /> Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>HTML5, JavaScript, Canvas API</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-ayaan-teal" /> Development Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>3 weeks of coding and testing</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-ayaan-yellow" /> Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>10 levels, physics engine, collectibles</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2067&auto=format&fit=crop"
                alt="Game screenshot"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Game</h2>
              <p>
                Inspired by the popular mobile game OVO, I created my own HTML5 web-based platformer game. The game
                features a minimalist design with challenging levels that test players' timing and precision. I built
                this game to practice my JavaScript skills and learn more about game development concepts.
              </p>

              <h2>Game Features</h2>
              <ul>
                <li>
                  <strong>Smooth Physics:</strong> Implemented a custom physics engine for realistic movement and
                  collisions
                </li>
                <li>
                  <strong>10 Challenging Levels:</strong> Each with increasing difficulty and unique obstacles
                </li>
                <li>
                  <strong>Collectible Items:</strong> Players can collect gems throughout the levels for bonus points
                </li>
                <li>
                  <strong>Level Editor:</strong> A simple tool to create and share custom levels
                </li>
                <li>
                  <strong>Responsive Design:</strong> Playable on both desktop and mobile devices
                </li>
                <li>
                  <strong>Local Leaderboard:</strong> Tracks best times and scores
                </li>
              </ul>

              <h2>Development Process</h2>
              <p>
                Creating this game was both challenging and rewarding. I started by learning the basics of the Canvas
                API and game development principles. The development process involved several key steps:
              </p>

              <ol>
                <li>
                  <strong>Planning:</strong> Sketched the game concept, mechanics, and level designs
                </li>
                <li>
                  <strong>Core Engine:</strong> Built the basic physics engine and collision detection
                </li>
                <li>
                  <strong>Character Controls:</strong> Implemented smooth movement, jumping, and interaction
                </li>
                <li>
                  <strong>Level Design:</strong> Created 10 progressively challenging levels
                </li>
                <li>
                  <strong>Polish:</strong> Added visual effects, sounds, and performance optimizations
                </li>
                <li>
                  <strong>Testing:</strong> Extensive playtesting and bug fixing
                </li>
              </ol>

              <h2>Technical Challenges</h2>
              <p>The most challenging aspects of developing this game were:</p>

              <ul>
                <li>Implementing precise collision detection that feels fair to players</li>
                <li>Creating a physics system that allows for challenging but achievable jumps</li>
                <li>Optimizing performance to maintain smooth gameplay on various devices</li>
                <li>Designing levels that are challenging but not frustrating</li>
              </ul>

              <h2>What I Learned</h2>
              <p>This project taught me valuable skills in:</p>

              <ul>
                <li>JavaScript programming and object-oriented design</li>
                <li>Game physics and collision detection algorithms</li>
                <li>HTML5 Canvas API and browser performance optimization</li>
                <li>Game design principles and level balancing</li>
                <li>User experience design and playtesting methodology</li>
              </ul>

              <div className="bg-muted/30 p-6 rounded-lg my-8">
                <h3 className="mt-0">Play the Game</h3>
                <p className="mb-4">
                  You can play the game directly in your browser. Use arrow keys or WASD to move, and spacebar to jump.
                </p>
                <Button className="bg-ayaan-yellow hover:bg-ayaan-yellow/90 text-black">Launch Game</Button>
              </div>

              <h2>Future Enhancements</h2>
              <p>I plan to continue improving the game with:</p>

              <ul>
                <li>Additional levels and challenges</li>
                <li>Special abilities and power-ups</li>
                <li>Online leaderboards to compete with friends</li>
                <li>More customization options for player characters</li>
                <li>A community level sharing platform</li>
              </ul>

              <p>
                This project has sparked my interest in game development, and I'm excited to apply what I've learned to
                future coding projects!
              </p>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

