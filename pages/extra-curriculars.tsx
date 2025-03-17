"use client"

import { Suspense, lazy } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Lazy load components
const HeroSection = lazy(() => import("@/components/extra-curriculars/hero-section"))
const UpdatesList = lazy(() => import("@/components/extra-curriculars/updates-list"))
const ConnectSection = lazy(() => import("@/components/extra-curriculars/connect-section"))

// Skeleton loaders
const SectionSkeleton = () => (
  <div className="w-full py-12 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="space-y-4 text-center">
        <Skeleton className="h-8 w-64 mx-auto" />
        <Skeleton className="h-4 w-full max-w-[700px] mx-auto" />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    </div>
  </div>
)

export default function ExtraCurricularsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Load immediately */}
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* Updates List */}
      <Suspense fallback={<SectionSkeleton />}>
        <UpdatesList />
      </Suspense>

      {/* Connect Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <ConnectSection />
      </Suspense>
    </div>
  )
}

