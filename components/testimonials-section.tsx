import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "VeridaX helped me find meaningful volunteer opportunities that match my skills. The platform is intuitive and the community is incredibly supportive.",
      author: "Priya Sharma",
      role: "Volunteer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As an NGO, we've been able to connect with skilled volunteers and raise funds for our initiatives seamlessly through VeridaX.",
      author: "Rahul Mehta",
      role: "NGO Director",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The Verida Bazaar has made sustainable shopping accessible and affordable. I love that I can trust all the products on the platform.",
      author: "Ananya Patel",
      role: "Conscious Consumer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

