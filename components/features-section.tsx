import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, MessageCircle, ShoppingBag } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "Volunteering",
      description:
        "Connect with organizations and find meaningful volunteer opportunities that match your skills and interests.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/volunteer",
      buttonText: "Explore Opportunities",
    },
    {
      title: "Crowdfunding",
      description: "Support verified causes and help fund educational, medical, and social impact initiatives.",
      icon: <Heart className="h-10 w-10 text-secondary" />,
      link: "/crowdfunding",
      buttonText: "Discover Campaigns",
    },
    {
      title: "VVerse",
      description: "Join a social network focused on collaboration and positive global impact.",
      icon: <MessageCircle className="h-10 w-10 text-indigo-500" />,
      link: "/vverse",
      buttonText: "Join Community",
    },
    {
      title: "Verida Bazaar",
      description: "Shop sustainable and eco-friendly products from verified indigenous vendors.",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      link: "/bazaar",
      buttonText: "Shop Now",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Our Core Platforms</h2>
          <p className="text-gray-500 md:text-lg max-w-[800px]">
            VeridaX combines these powerful platforms to create a comprehensive ecosystem for social good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col h-full"
            >
              <div className="mb-4 bg-mint-50 p-3 rounded-full w-fit">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 mb-6 flex-grow">{feature.description}</p>
              <Button
                asChild
                variant="outline"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href={feature.link}>{feature.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

