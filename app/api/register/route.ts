import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prismadb from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    // ❌ EMPTY CHECK
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 },
      );
    }

    // 👉 CHECK EXISTING USER
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword
      },
    });

    return NextResponse.json(
      {
        message: "User created ✅",
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(
      {
        error: "Something went wrong ❌",
      },
      { status: 500 },
    );
  }
}
