import Link from "next/link"
import { Merriweather } from "next/font/google"

// Initialize the Merriweather font
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})

// Sample blog post data - in a real app, this would come from a database or CMS
const posts = [
  {
    id: 1,
    title: "Understanding the Basics of Typography in Web Design",
    content: `
      <p>Typography is a fundamental aspect of web design that significantly impacts user experience. Good typography enhances readability, establishes hierarchy, and conveys the right tone and emotion.</p>
      
      <h2>The Importance of Font Selection</h2>
      <p>Choosing the right font is crucial. Serif fonts like Merriweather (used in this blog) are excellent for long-form reading as they guide the eye along the text line. Sans-serif fonts like Inter work well for headers and shorter content blocks.</p>
      
      <h2>Hierarchy and Spacing</h2>
      <p>Establishing a clear typographic hierarchy helps users scan content efficiently. Use size, weight, and spacing to differentiate between headings, subheadings, and body text. Proper line height (leading) and letter spacing (tracking) improve readability.</p>
      
      <h2>Contrast and Readability</h2>
      <p>High contrast between text and background is essential for readability. The stark black and white design of this blog maximizes contrast while maintaining a minimalist aesthetic.</p>
      
      <h2>Responsive Typography</h2>
      <p>Typography must adapt to different screen sizes. Use relative units like rem or em instead of fixed pixel values to ensure text scales appropriately across devices.</p>
      
      <h2>Conclusion</h2>
      <p>Thoughtful typography is not just about aesthetics—it's about communication. When done well, it becomes invisible, allowing readers to focus entirely on your content.</p>
    `,
    date: "April 2, 2025",
    readTime: "5 min read",
    author: "Jane Smith",
  },
  {
    id: 2,
    title: "Minimalism in Modern Web Development",
    content: `<p>Content for post 2...</p>`,
    date: "March 28, 2025",
    readTime: "7 min read",
    author: "John Doe",
  },
  {
    id: 3,
    title: "The Power of Black and White Design",
    content: `<p>Content for post 3...</p>`,
    date: "March 21, 2025",
    readTime: "4 min read",
    author: "Alex Johnson",
  },
]

export default async function Post({ params }: { params: { id: string } }) {
  const {id} = await params;
  const post = posts.find((post) => post.id === Number.parseInt(id))

  if (!post) {
    return <div className="max-w-2xl mx-auto px-4 py-12">Post not found</div>
  }

  return (
    <main className={`min-h-screen ${merriweather.className}`}>
      <article className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center mb-8 text-sm">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
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

