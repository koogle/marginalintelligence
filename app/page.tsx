import Link from "next/link"
import { Inter } from "next/font/google"
import { ArrowRight } from "lucide-react"

// Initialize the Inter font with specific subsets
const inter = Inter({ subsets: ["latin"] })

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Understanding the Basics of Typography in Web Design",
    excerpt:
      "Typography is a critical element of web design that can make or break user experience. Learn the fundamentals of effective typography and how to implement it in your projects.",
    date: "April 2, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Minimalism in Modern Web Development",
    excerpt:
      "Explore how minimalist design principles can create more effective, faster, and more accessible websites while maintaining visual appeal and functionality.",
    date: "March 28, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Power of Black and White Design",
    excerpt:
      "Color can be distracting. Learn how monochromatic design can focus user attention on what matters most: your content and message.",
    date: "March 21, 2025",
    readTime: "4 min read",
  },
]

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
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
        </section>
      </div>
    </main>
  )
}

