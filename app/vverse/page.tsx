import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Globe } from "lucide-react"

export default function VVersePage() {
  const discussions = [
    {
      title: "Innovative Solutions for Plastic Waste Management",
      author: "Dr. Aisha Patel",
      authorRole: "Environmental Scientist",
      category: "Environment",
      comments: 42,
      likes: 128,
      shares: 35,
      image: "/placeholder.svg?height=60&width=60",
      preview:
        "I've been researching biodegradable alternatives to single-use plastics and wanted to share some promising findings...",
    },
    {
      title: "Accessible Education Technologies for Rural Areas",
      author: "Rajiv Mehta",
      authorRole: "EdTech Innovator",
      category: "Education",
      comments: 37,
      likes: 95,
      shares: 28,
      image: "/placeholder.svg?height=60&width=60",
      preview:
        "Our team has developed a low-cost, solar-powered learning device that works offline. We're looking for partners to test it in rural schools...",
    },
    {
      title: "Community-Based Healthcare Initiatives",
      author: "Dr. Lakshmi Nair",
      authorRole: "Public Health Specialist",
      category: "Healthcare",
      comments: 56,
      likes: 142,
      shares: 47,
      image: "/placeholder.svg?height=60&width=60",
      preview:
        "I'd like to discuss successful models of community health workers and how we can scale these programs to reach more underserved areas...",
    },
    {
      title: "Sustainable Urban Planning for Growing Cities",
      author: "Arjun Singh",
      authorRole: "Urban Planner",
      category: "Urban Development",
      comments: 29,
      likes: 87,
      shares: 22,
      image: "/placeholder.svg?height=60&width=60",
      preview:
        "As our cities grow rapidly, we need to rethink infrastructure development. I'm proposing a model that integrates green spaces, public transport, and affordable housing...",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col dark">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                Cultural Exchange & <span className="text-indigo-200">Global Collaboration</span>
              </h1>
              <p className="text-white/80 md:text-xl">
                Connect with peers worldwide, foster understanding, and build lasting global relationships through
                educational and cultural exchange.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  <Link href="#features">Join the Program</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fAEnKhd4IqLmNvcbOVlVDn6Urd4kEB.png"
                alt="Cultural exchange"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-indigo-50 p-3 rounded-full">
                  <Globe className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Global Cultural Exchange Hubs</h3>
                <p className="text-gray-500">
                  Virtual and in-person collaboration spaces for cross-culture projects and discussions.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-indigo-50 p-3 rounded-full">
                  <Users className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Thematic Interaction Groups</h3>
                <p className="text-gray-500">
                  Interest-based groups with dedicated mentorship for collaborative projects.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-indigo-50 p-3 rounded-full">
                  <MessageCircle className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Language & Cultural Learning</h3>
                <p className="text-gray-500">Guided resources for language exchange and cultural understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points & Rewards */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Points & Rewards System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Earn Points</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>50 points for completing cross-cultural projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Points for attending cultural exchange sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Bonus points for hosting events</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Redeem Points</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Access exclusive international webinars</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Discounts on language courses</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Grants for donations to global causes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Institution Subscription Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Basic</h3>
                <p className="text-gray-500 text-sm">Essential features for getting started</p>
                <div className="text-3xl font-bold text-indigo-600">
                  $299<span className="text-sm text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic exchange features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Limited support</span>
                  </li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Choose Plan</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-indigo-500 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                <p className="text-gray-500 text-sm">Advanced features and support</p>
                <div className="text-3xl font-bold text-indigo-600">
                  $499<span className="text-sm text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated project manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium partnerships</span>
                  </li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Choose Plan</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
                <p className="text-gray-500 text-sm">Comprehensive for large institutions</p>
                <div className="text-3xl font-bold text-indigo-600">Custom</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom integration</span>
                  </li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

