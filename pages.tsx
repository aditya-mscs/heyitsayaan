"use client"

import { Suspense, lazy } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Lazy load components
const HeroSection = lazy(() => import("@/components/home/hero-section"))
const LatestUpdatesSection = lazy(() => import("@/components/home/latest-updates-section"))
const StatsSection = lazy(() => import("@/components/home/stats-section"))
const AboutSection = lazy(() => import("@/components/home/about-section"))
const TimelineSection = lazy(() => import("@/components/home/timeline-section"))
const YoutubeGrowthSection = lazy(() => import("@/components/home/youtube-growth-section"))
const TestimonialsSection = lazy(() => import("@/components/home/testimonials-section"))
const FeaturedVideosSection = lazy(() => import("@/components/home/featured-videos-section"))
const ProjectsSection = lazy(() => import("@/components/home/projects-section"))
const FaqSection = lazy(() => import("@/components/home/faq-section"))
const CtaSection = lazy(() => import("@/components/home/cta-section"))

// Skeleton loaders
const SectionSkeleton = () => (
  <div className="w-full py-12 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="space-y-4 text-center">
        <Skeleton className="h-8 w-64 mx-auto" />
        <Skeleton className="h-4 w-full max-w-[700px] mx-auto" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Load immediately */}
      <HeroSection />

      {/* Latest Updates Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <LatestUpdatesSection />
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Timeline Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <TimelineSection />
      </Suspense>

      {/* YouTube Growth Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <YoutubeGrowthSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      {/* Featured Videos Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedVideosSection />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <FaqSection />
      </Suspense>

      {/* Call to Action */}
      <Suspense fallback={<SectionSkeleton />}>
        <CtaSection />
      </Suspense>
    </div>
  )
}

