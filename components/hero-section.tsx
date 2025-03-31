import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-mint-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Make a Positive Impact <span className="text-primary">on the World</span>
            </h1>
            <p className="text-gray-600 md:text-xl max-w-[600px]">
              Join our community of changemakers and contribute to creating a better future through volunteering,
              crowdfunding, social collaboration, and sustainable living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Link href="#features">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mZ4ppAZS2HTrDjpToy7SfDI58qYjJ8.png"
              alt="Community collaboration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

