import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getAuthUser } from "./lib/auth"

// List of paths that require authentication
const protectedPaths = [
  "/dashboard",
  "/profile",
  "/volunteer/create",
  "/crowdfunding/start",
  "/vverse/create",
  "/bazaar/orders",
]

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(
    (protectedPath) => path === protectedPath || path.startsWith(`${protectedPath}/`),
  )

  if (isProtectedPath) {
    const authUser = await getAuthUser(request)

    // If not authenticated, redirect to login
    if (!authUser) {
      const url = new URL("/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/volunteer/create/:path*",
    "/crowdfunding/start/:path*",
    "/vverse/create/:path*",
    "/bazaar/orders/:path*",
  ],
}

