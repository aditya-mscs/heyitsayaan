"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SectionObserverProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function SectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
}: SectionObserverProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentSection = sectionRef.current

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={sectionRef} className={`section-container ${className}`}>
      {children}
    </div>
  )
}

