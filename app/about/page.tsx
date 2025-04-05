export default function About() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 border-b border-black pb-2">About</h1>

        <div className="space-y-6">
          <p>
            This minimal blog was designed with a focus on typography and readability. The black and white color scheme
            with hard corners creates a stark, clean aesthetic that puts the focus entirely on the content.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Design Philosophy</h2>
          <p>The design of this blog follows a few key principles:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Minimalism: Removing unnecessary elements to focus on what matters</li>
            <li>Typography-first: Using high-quality fonts optimized for reading</li>
            <li>High contrast: Black text on white background for maximum readability</li>
            <li>Hard corners: Sharp edges that create a clean, structured layout</li>
            <li>Generous whitespace: Giving content room to breathe</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technology</h2>
          <p>
            This blog is built with Next.js, a React framework that enables server-side rendering and static site
            generation. The styling is handled with Tailwind CSS, providing a utility-first approach to design.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Typography</h2>
          <p>
            The main body text uses Merriweather, a serif font designed for on-screen reading with excellent readability
            at various sizes. Headings use a clean sans-serif font that provides nice contrast with the body text.
          </p>

          <div className="border border-black p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">Have questions or comments about this blog? Feel free to reach out.</p>
            <a
              href="mailto:hello@minimalblog.com"
              className="inline-flex items-center border border-black px-4 py-2 font-medium hover:bg-black hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

