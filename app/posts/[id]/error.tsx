"use client"

import { Merriweather } from "next/font/google"
import Link from "next/link"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className={`min-h-screen ${merriweather.className}`}>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-red-500 mb-6">{error.message}</p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="border border-black px-4 py-2 font-medium hover:bg-black hover:text-white transition-colors"
          >
            Try again
          </button>
          <div>
            <Link href="/" className="text-sm font-medium hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 