import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

