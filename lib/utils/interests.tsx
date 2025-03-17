import {
  Gamepad,
  FlaskRoundIcon as Flask,
  Code,
  BookOpen,
  Music,
  Puzzle,
  CastleIcon as ChessKnight,
  BotIcon as Robot,
} from "lucide-react"
import type { Interest } from "@/lib/utils/types"

export const interests: Interest[] = [
  {
    name: "Nintendo Gaming",
    icon: <Gamepad className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    name: "Science Experiments",
    icon: <Flask className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    name: "Coding & AI",
    icon: <Code className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    name: "Reading & Writing",
    icon: <BookOpen className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    name: "Playing Piano",
    icon: <Music className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    name: "Solving Rubik's Cube",
    icon: <Puzzle className="h-5 w-5 text-ayaan-teal" />,
  },
  {
    name: "Playing Chess",
    icon: <ChessKnight className="h-5 w-5 text-ayaan-yellow" />,
  },
  {
    name: "Robotics",
    icon: <Robot className="h-5 w-5 text-ayaan-teal" />,
  },
]

