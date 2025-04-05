import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Sample archive data - organized by year and month
const archive = [
  {
    year: 2025,
    months: [
      {
        name: "April",
        posts: [
          {
            id: 1,
            title: "Understanding the Basics of Typography in Web Design",
            date: "April 2, 2025",
          },
        ],
      },
      {
        name: "March",
        posts: [
          {
            id: 2,
            title: "Minimalism in Modern Web Development",
            date: "March 28, 2025",
          },
          {
            id: 3,
            title: "The Power of Black and White Design",
            date: "March 21, 2025",
          },
          {
            id: 4,
            title: "Creating Accessible Web Content",
            date: "March 15, 2025",
          },
          {
            id: 5,
            title: "The Art of Whitespace in Design",
            date: "March 8, 2025",
          },
          {
            id: 6,
            title: "Typography Trends for 2025",
            date: "March 1, 2025",
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    months: [
      {
        name: "December",
        posts: [
          {
            id: 7,
            title: "Year in Review: Web Design Trends",
            date: "December 28, 2024",
          },
          {
            id: 8,
            title: "Building a Minimal Blog with Next.js",
            date: "December 15, 2024",
          },
        ],
      },
    ],
  },
]

export default function Archive() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 border-b border-black pb-2">Archive</h1>

        <div className="space-y-12">
          {archive.map((yearData) => (
            <section key={yearData.year}>
              <h2 className="text-2xl font-bold mb-6">{yearData.year}</h2>

              <div className="space-y-8">
                {yearData.months.map((month) => (
                  <div key={month.name}>
                    <h3 className="text-xl font-bold mb-4 border-b border-black pb-2">{month.name}</h3>

                    <ul className="space-y-4">
                      {month.posts.map((post) => (
                        <li key={post.id} className="border-l border-black pl-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-sm text-gray-600 block">{post.date}</span>
                              <Link href={`/posts/${post.id}`} className="font-medium hover:underline">
                                {post.title}
                              </Link>
                            </div>
                            <Link
                              href={`/posts/${post.id}`}
                              className="border border-black p-1 hover:bg-black hover:text-white transition-colors"
                              aria-label={`Read ${post.title}`}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

