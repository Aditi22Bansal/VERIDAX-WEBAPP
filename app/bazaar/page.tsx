import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Filter, Star, Leaf, Truck, Tag } from "lucide-react"

export default function BazaarPage() {
  const products = [
    {
      name: "Organic Cotton T-Shirt",
      price: 599,
      rating: 4.5,
      reviews: 128,
      category: "Clothing",
      seller: "EcoThreads",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Organic", "Fair Trade"],
    },
    {
      name: "Bamboo Toothbrush Set",
      price: 249,
      rating: 4.8,
      reviews: 95,
      category: "Personal Care",
      seller: "EcoSmile",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Plastic-Free", "Biodegradable"],
    },
    {
      name: "Handcrafted Jute Bag",
      price: 399,
      rating: 4.6,
      reviews: 87,
      category: "Accessories",
      seller: "Tribal Crafts",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Handmade", "Indigenous"],
    },
    {
      name: "Organic Turmeric Powder",
      price: 199,
      rating: 4.9,
      reviews: 142,
      category: "Food",
      seller: "Pure Spice",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Organic", "No Additives"],
    },
    {
      name: "Recycled Paper Notebook",
      price: 149,
      rating: 4.7,
      reviews: 76,
      category: "Stationery",
      seller: "Green Pages",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Recycled", "Tree-Free"],
    },
    {
      name: "Natural Beeswax Candles",
      price: 349,
      rating: 4.8,
      reviews: 112,
      category: "Home",
      seller: "Honey Light",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Chemical-Free", "Handmade"],
    },
    {
      name: "Organic Quinoa Puffs",
      price: 179,
      rating: 4.5,
      reviews: 68,
      category: "Food",
      seller: "HealthyBites",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Organic", "Gluten-Free"],
    },
    {
      name: "Coconut Shell Bowl Set",
      price: 499,
      rating: 4.6,
      reviews: 93,
      category: "Kitchen",
      seller: "NatureCraft",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Upcycled", "Biodegradable"],
    },
  ]

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Personal Care",
    "Home",
    "Kitchen",
    "Accessories",
    "Stationery",
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-mint-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Sustainable Shopping <span className="text-primary">Made Easy & Affordable</span>
              </h1>
              <p className="text-gray-600 md:text-lg">
                Discover eco-friendly products from healthy alternatives to competitive prices from verified indigenous
                vendors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                  <Link href="#products">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/bazaar/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbpG3wY3AYIn8gyZx37LaXmaivfEuu.png"
                alt="Sustainable products display"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Verida Bazaar?</h2>
            <p className="text-gray-500 mt-2">Everything we believe in, packed in one marketplace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-mint-50 p-3 rounded-full">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Verified Products</h3>
                <p className="text-gray-500">
                  All products on our platform are sustainably made and ethically sourced.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-mint-50 p-3 rounded-full">
                  <Tag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Competitive Pricing</h3>
                <p className="text-gray-500">Get the best deals on sustainable products without the premium markup.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-mint-50 p-3 rounded-full">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Eco-Friendly Delivery</h3>
                <p className="text-gray-500">
                  Our delivery partners use sustainable packaging and carbon-neutral shipping options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-mint-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
              <p className="text-gray-600 mt-2">Discover eco-friendly alternatives for everyday use</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-[200px]"
                />
              </div>

              <Button variant="outline" className="border-primary text-primary flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary text-white" : "border-gray-200 text-gray-600"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 line-clamp-2">{product.name}</h3>
                    <span className="text-sm font-medium text-primary">₹{product.price}</span>
                  </div>

                  <p className="text-sm text-gray-500">{product.seller}</p>

                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : i < product.rating
                                ? "fill-yellow-400/50 text-yellow-400/50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-mint-50 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full mt-2 bg-primary hover:bg-primary-dark text-white">
                    <Link href={`/bazaar/product/${index}`}>View Product</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary">
              <Link href="/bazaar/all-products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Box Section */}
      <section className="py-16 bg-mint-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Subscribe & Save</h2>
              <p className="text-gray-600">
                Get a monthly subscription box of curated sustainable products delivered to your doorstep.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="bg-primary text-white rounded-full p-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Curated selection of eco-friendly products</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary text-white rounded-full p-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Sustainable subscription boxes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary text-white rounded-full p-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Free delivery and exclusive offers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary text-white rounded-full p-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Cancel or modify anytime</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary-dark text-white">Subscribe Now</Button>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbpG3wY3AYIn8gyZx37LaXmaivfEuu.png"
                alt="Subscription box"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

