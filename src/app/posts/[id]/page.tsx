import Link from "next/link";

type Props = { params: { id: string } };

export default async function PostPage({ params }: Props) {
  const id = params.id;

  // Φέρνουμε όλα τα posts από το API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/data`,
    { cache: "no-store" }
  );
  const json = await res.json();

  // Βρίσκουμε το τρέχον post
  const item = json.items.find((it: any) => String(it.id) === id) || {
    id,
    title: "Not found",
    body: "",
  };

  // Τα υπόλοιπα posts (εκτός από το current)
  const otherPosts = json.items.filter((it: any) => String(it.id) !== id);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Post {id}</h2>
      <p className="mt-2 font-semibold">{item.title}</p>
      <pre className="mt-2">{item.body}</pre>

      {/* Μικρό navigation menu */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-bold mb-2">Other posts</h3>
        <ul className="space-y-2">
          {otherPosts.map((post: any) => (
            <li key={post.id}>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
