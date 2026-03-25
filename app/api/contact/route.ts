import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  console.log("Contact message:", body);

  const usercontact = await prisma.contact.create({
    data: {
      name,
      email,
      message
    }
  });

  if (!usercontact) {
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
  else {
    return NextResponse.json({
      success: true,
      message: "Message received!"
    });
  }


}

export async function GET() {
  const contacts = await prisma.contact.findMany();
  return NextResponse.json(contacts);
} 