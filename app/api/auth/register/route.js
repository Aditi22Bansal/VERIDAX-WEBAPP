import { NextResponse } from "next/server"
import connectDB from "@/server/db/connect"
import User from "@/server/models/User"
import jwt from "jsonwebtoken"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Please provide all required fields" }, { status: 400 })
    }

    await connectDB(process.env.MONGODB_URI)

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 })
    }

    // Create new user
    const user = await User.create({ name, email, password })

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, name: user.name, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    })

    // Return success response with token
    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

