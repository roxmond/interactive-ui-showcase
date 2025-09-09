import { NextResponse } from "next/server";

export async function GET() {
  const items = [
    {
      id: 1,
      title: "React Basics",
      body: "Introduction to React fundamentals.",
    },
    {
      id: 2,
      title: "Next.js Routing",
      body: "Dynamic routes and server components.",
    },
    {
      id: 3,
      title: "TypeScript Tips",
      body: "How to type your React components.",
    },
    {
      id: 4,
      title: "State Management",
      body: "Context, Redux, and alternatives.",
    },
  ];

  return NextResponse.json({ items });
}
