import { NextResponse } from "next/server"
import connectDB from "@/server/db/connect"
import User from "@/server/models/User"
import { getAuthUser } from "@/lib/auth"

export async function GET(request) {
  try {
    const authUser = await getAuthUser(request)

    if (!authUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectDB(process.env.MONGODB_URI)

    // Find user by ID
    const user = await User.findById(authUser.userId).select("-password")
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Return user data
    return NextResponse.json({ user })
  } catch (error) {
    console.error("Get user error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

