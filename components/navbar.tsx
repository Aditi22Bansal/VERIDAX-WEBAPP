"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Mock user data for preview
  const user = null // Change to { name: "John Doe" } to test logged-in state

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VeridaX
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/volunteer" className="text-gray-600 hover:text-primary transition-colors">
            Volunteering
          </Link>
          <Link href="/crowdfunding" className="text-gray-600 hover:text-primary transition-colors">
            Crowdfunding
          </Link>
          <Link href="/vverse" className="text-gray-600 hover:text-primary transition-colors">
            VVerse
          </Link>
          <Link href="/bazaar" className="text-gray-600 hover:text-primary transition-colors">
            Verida Bazaar
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-primary" asChild>
                <Link href="/dashboard">
                  <User className="h-4 w-4" />
                  <span>{user.name.split(" ")[0]}</span>
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-600 hover:text-primary" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary-dark text-white" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/volunteer"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteering
            </Link>
            <Link
              href="/crowdfunding"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Crowdfunding
            </Link>
            <Link
              href="/vverse"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              VVerse
            </Link>
            <Link
              href="/bazaar"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Verida Bazaar
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Button
                  className="bg-primary hover:bg-primary-dark text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

