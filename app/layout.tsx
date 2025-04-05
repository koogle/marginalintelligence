import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import Link from "next/link"

// Initialize the Merriweather font for body text
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Marginal Intelligence",
  description: "A minimal blog by Jakob Frick",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="border-b border-black">
      <div className="max-w-2xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-bold text-xl">MARGINAL INTELLIGENCE</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/archive" className="hover:underline">
                Archive
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black mt-12">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© {new Date().getFullYear()} Jakob Frick</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="https://x.com/frick_jakob" className="text-sm hover:underline">
                  X
                </a>
              </li>
              <li>
                <a href="https://github.com/koogle" className="text-sm hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
