import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[30%]">
      <h1 className="text-2xl font-bold">Interactive UI Showcase</h1>
      <p className="mt-2">
        This Next.js application, built with Tailwind CSS and DaisyUI, is a
        comprehensive demonstration of modern web development concepts. It
        provides a practical showcase of several key features, making it an
        ideal learning tool or a starting point for your own projects.
      </p>

      <Link href="/" className="text-sm">
        <p className="mt-6">GitHub Repository</p>
      </Link>
    </div>
  );
}
