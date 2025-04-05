import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Loading() {
  return (
    <main className={`min-h-screen ${merriweather.className}`}>
      <article className="max-w-2xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>

          {/* Date and read time skeleton */}
          <div className="flex items-center mb-8">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="mx-2">•</div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>

          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/6"></div>
          </div>
        </div>
      </article>
    </main>
  );
}
