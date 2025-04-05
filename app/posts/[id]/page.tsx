import Link from "next/link"
import { Merriweather } from "next/font/google"
import { notFound } from "next/navigation"

// Initialize the Merriweather font
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})

export default async function Post({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch post');
  }

  const post = await response.json();

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
          <Link href="/" className="text-sm font-medium hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  )
}

