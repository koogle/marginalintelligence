"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { getBaseUrl } from "../lib/url"

interface Post {
  id: string
  title: string
  date: string
}

interface MonthData {
  name: string
  posts: Post[]
}

interface YearData {
  year: number
  months: MonthData[]
}

export default function Archive() {
  const [archive, setArchive] = useState<YearData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = await getBaseUrl();
        const response = await fetch(`${baseUrl}/api/posts`)
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const posts = await response.json()

        // Transform posts into archive format
        const archiveData: { [year: number]: { [month: string]: Post[] } } = {}

        posts.forEach((post: Post) => {
          const date = new Date(post.date)
          const year = date.getFullYear()
          const month = date.toLocaleString('default', { month: 'long' })

          if (!archiveData[year]) {
            archiveData[year] = {}
          }
          if (!archiveData[year][month]) {
            archiveData[year][month] = []
          }
          archiveData[year][month].push(post)
        })

        // Convert to the required format
        const formattedArchive = Object.entries(archiveData)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, months]) => ({
            year: Number(year),
            months: Object.entries(months)
              .sort(([monthA], [monthB]) =>
                new Date(`${monthA} 1, ${year}`).getTime() -
                new Date(`${monthB} 1, ${year}`).getTime()
              )
              .map(([name, posts]) => ({
                name,
                posts: posts.sort((a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
                )
              }))
          }))

        setArchive(formattedArchive)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 border-b border-black pb-2">Archive</h1>
          <p>Loading...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 border-b border-black pb-2">Archive</h1>
          <p className="text-red-500">Error: {error}</p>
        </div>
      </main>
    )
  }

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
                              <Link href={`/posts/${post.id}?from=archive`} className="font-medium hover:underline">
                                {post.title}
                              </Link>
                            </div>
                            <Link
                              href={`/posts/${post.id}?from=archive`}
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