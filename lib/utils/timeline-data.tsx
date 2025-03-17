import { Pi, Heart, Award, Brain } from "lucide-react"
import type { TimelineItem } from "@/lib/utils/types"

export const timelineData: TimelineItem[] = [
  {
    date: "March 14, 2025",
    title: "Pi Day Competition Winner",
    description: "Won first prize by reciting Pi to 250 decimal places at PS25 in Jersey City.",
    icon: <Pi className="h-5 w-5 text-ayaan-yellow" />,
    link: "/extra-curriculars/pi-day-competition",
  },
  {
    date: "March 14, 2025",
    title: "Humble and Kindness Award",
    description: "Received the 'Humble and Kindness' award at PS25 for demonstrating exceptional character.",
    icon: <Heart className="h-5 w-5 text-red-500" />,
    link: "/extra-curriculars/humble-kindness-award",
  },
  {
    date: "February 28, 2025",
    title: "First Honor Roll",
    description: "Received First Honor Roll recognition for academic excellence in all subjects.",
    icon: <Award className="h-5 w-5 text-ayaan-yellow" />,
    link: "/academics",
  },
  {
    date: "January 13, 2025",
    title: "Star Math Assessment",
    description: "Scored in the 99th percentile nationally in the Math Olympiad for elementary students.",
    icon: <Brain className="h-5 w-5 text-ayaan-yellow" />,
    link: "/academics",
  },
]

