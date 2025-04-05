import Link from "next/link";
import { Merriweather } from "next/font/google";
import { notFound } from "next/navigation";
import { getBaseUrl } from "../../lib/url";

// Initialize the Merriweather font
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});
interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
}

export default async function Post({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const resolvedParams = await params;
  const resovledSearchParams = await searchParams;
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/posts/${resolvedParams.id}`);

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }

    throw new Error(`Failed to fetch post ${resolvedParams.id}`);
  }

  const post: Post = await response.json();

  return (
    <main className={`min-h-screen ${merriweather.className}`}>
      <article className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center mb-8 text-sm">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-black prose-a:text-black prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-6 border-t border-black">
          {resovledSearchParams.from === "archive" ? (
            <Link
              href="/archive"
              className="text-sm font-medium hover:underline"
            >
              ← Back to archive
            </Link>
          ) : (
            <Link href="/" className="text-sm font-medium hover:underline">
              ← Back to home
            </Link>
          )}
        </div>
      </article>
    </main>
  );
}
