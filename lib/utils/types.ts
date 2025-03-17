import type { ReactNode, ComponentType } from "react"

export interface UpdateItem {
  id: string
  title: string
  date: string
  description: string
  link: string
  linkText: string
  category: string
  icon: ReactNode
  image: string
  extraContent?: ComponentType | ReactNode
}

export interface TimelineItem {
  date: string
  title: string
  description: string
  icon: ReactNode
  link?: string
}

export interface Interest {
  name: string
  icon: ReactNode
}

