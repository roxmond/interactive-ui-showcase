import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/data`,
    { cache: "no-store" }
  );
  const json = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul className="space-y-2">
        {json.items.map((item: any) => (
          <li key={item.id}>
            <Link
              href={`/posts/${item.id}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
