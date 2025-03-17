import { Pi, Heart, Code, Youtube, FlaskRoundIcon as Flask, Award, Brain } from "lucide-react"
import type { UpdateItem } from "./types"
import { piValue } from "./pi-value"

export const updatesData: UpdateItem[] = [
  {
    id: "pi-day-competition",
    title: "Pi Day Competition Winner",
    date: "March 14, 2025",
    description:
      "Won first prize in the PS25 Pi Day competition in Jersey City, NJ, by reciting the value of Pi to 250 decimal places. This achievement showcases my memory skills and passion for mathematics.",
    link: "/extra-curriculars/pi-day-competition",
    linkText: "See Details",
    category: "Academic",
    icon: <Pi className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    extraContent: (
      <div className="mt-4 p-4 bg-muted/30 rounded-lg overflow-x-auto">
        <h4 className="font-semibold mb-2">Value of Pi to 250 decimal places:</h4>
        <p className="text-sm font-mono break-all">{piValue}</p>
      </div>
    ),
  },
  {
    id: "humble-kindness-award",
    title: "Humble and Kindness Award",
    date: "March 14, 2025",
    description:
      "Received the 'Humble and Kindness' award at PS25 for demonstrating exceptional character, empathy, and helpfulness toward classmates and teachers. This award recognizes not just academic achievement, but the importance of being a good person.",
    link: "/extra-curriculars/humble-kindness-award",
    linkText: "Learn More",
    category: "Award",
    icon: <Heart className="h-5 w-5 text-red-500" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject.png-3PXd2k66wxIeDccv05uonFDFHcihpt.jpeg",
  },
  {
    id: "ovo-web-game",
    title: "HTML5 OVO-inspired Web Game",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    description:
      "Created an HTML5 web game inspired by OVO, featuring challenging platformer gameplay with smooth physics and multiple levels. Built using JavaScript and Canvas for a responsive gaming experience.",
    link: "/extra-curriculars/ovo-web-game",
    linkText: "Play Game",
    category: "Coding",
    icon: <Code className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "mario-kart-review",
    title: "Mario Kart 8 Deluxe Review",
    date: "March 10, 2025",
    description:
      "Posted a new review of Mario Kart 8 Deluxe with tips and tricks for beginners. In this video, I cover the best characters, karts, and strategies for winning races online.",
    link: "/extra-curriculars/mario-kart-review",
    linkText: "Watch Video",
    category: "YouTube",
    icon: <Youtube className="h-5 w-5 text-red-600" />,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "science-fair-project",
    title: "Science Fair Project",
    date: "March 5, 2025",
    description:
      "Started working on my new science fair project about renewable energy sources. I'm building a small-scale solar and wind power generator to demonstrate how these technologies can work together.",
    link: "/extra-curriculars/science-fair-project",
    linkText: "Project Details",
    category: "Science",
    icon: <Flask className="h-5 w-5 text-ayaan-teal" />,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2676&auto=format&fit=crop",
  },
  {
    id: "first-honor-roll",
    title: "First Honor Roll",
    date: "February 28, 2025",
    description:
      "Received First Honor Roll recognition for academic excellence in all subjects for the second quarter of the school year.",
    link: "/academics",
    linkText: "View Academics",
    category: "Academic",
    icon: <Award className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1651.JPEG-Q5k83h7x49kSCybjdfqujQYLzGL4SB.jpeg",
  },
  {
    id: "coding-club",
    title: "Coding Club Meeting",
    date: "February 20, 2025",
    description:
      "Led the weekly coding club meeting at school, teaching fellow students the basics of HTML and CSS. We created simple personal web pages together.",
    link: "/extra-curriculars/coding-club",
    linkText: "Club Details",
    category: "Coding",
    icon: <Code className="h-5 w-5 text-ayaan-teal" />,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "star-math-assessment",
    title: "Star Math Assessment",
    date: "January 13, 2025",
    description:
      "Took the Star Math Assessment and scored in the 99th percentile nationally, with performance equivalent to an 8th-grade level.",
    link: "/academics",
    linkText: "View Results",
    category: "Academic",
    icon: <Brain className="h-5 w-5 text-ayaan-yellow" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1649.JPEG-0QRTNvqcdSe3E8UAP42q615MiOiJHM.jpeg",
  },
  {
    id: "nintendo-switch-unboxing",
    title: "Nintendo Switch Unboxing",
    date: "December 25, 2024",
    description:
      "Posted a video unboxing my new Nintendo Switch OLED model and comparing it to the original Switch. Discussed the improvements and whether it's worth upgrading.",
    link: "/extra-curriculars/nintendo-switch-unboxing",
    linkText: "Watch Video",
    category: "YouTube",
    icon: <Youtube className="h-5 w-5 text-red-600" />,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2619&auto=format&fit=crop",
  },
]

