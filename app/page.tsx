import Link from "next/link"
import { Inter } from "next/font/google"
import { ArrowRight } from "lucide-react"

// Initialize the Inter font with specific subsets
const inter = Inter({ subsets: ["latin"] })

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default async function Home() {
  let posts: Post[] = [];
  let error = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    posts = await response.json();
  } catch (err) {
    error = err instanceof Error ? err.message : 'An error occurred';
  }

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 border-b border-black pb-2">Minimal Blog</h1>
          <p className="text-lg">
            A clean, minimalist blog focused on typography and readability. Black and white design with sharp edges and
            clear hierarchy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          {error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : posts.length === 0 ? (
            <div>No posts available</div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.id} className="border border-black p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                  </div>
                  <p className="mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/posts/${post.id}`}
                      className="inline-flex items-center border border-black px-4 py-2 font-medium hover:bg-black hover:text-white transition-colors"
                    >
                      Read
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

