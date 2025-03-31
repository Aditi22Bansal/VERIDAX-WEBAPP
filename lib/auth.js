import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

export async function getAuthUser(request) {
  // Get token from cookies
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  // If no token, check Authorization header
  if (!token && request.headers) {
    const authHeader = request.headers.get("Authorization")
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const headerToken = authHeader.split(" ")[1]
      if (headerToken) {
        try {
          const decoded = jwt.verify(headerToken, process.env.JWT_SECRET)
          return decoded
        } catch (error) {
          return null
        }
      }
    }
    return null
  }

  if (!token) return null

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    return null
  }
}

export function setAuthCookie(token) {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}

export function removeAuthCookie() {
  cookies().delete("token")
}

