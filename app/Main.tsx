import Link from '@/components/Link'
// import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center space-y-4 pt-20 text-center">
        <h1 className="text-7xl font-[var(--font-cloister)] tracking-wider text-black dark:text-white">
          Hi, I'm Lomit
        </h1>
        <h2 className="text-3xl font-[var(--font-cloister)] tracking-wider text-gray-700 dark:text-gray-300">
          Software Engineer 🧑🏻‍💻
        </h2>
        <p className="text-2xl font-[var(--font-cloister)] tracking-wider text-gray-600 dark:text-gray-400">
          Crafting digital experiences from Bengaluru, India
        </p>
        <p className="text-xl font-[var(--font-cloister)] tracking-wider text-gray-600 dark:text-gray-400">
          learn more{' '}
          <Link
            href="/about"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            about me
          </Link>
        </p>
      </div>
    </div>
  )
}
