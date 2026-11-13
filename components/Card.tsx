'use client'

import Image from '@/components/Image'
import Link from '@/components/Link'
import TechStack from '@/components/TechIcons'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

interface CardProps {
  title: string
  description: string
  techstack: string[]
  imgSrc: string
  href: string
  github?: string
  cta?: string
}

export default function Card({
  title,
  description,
  techstack,
  imgSrc,
  href,
  github,
  cta,
}: CardProps) {
  return (
    <div className="w-full p-4 md:w-1/2">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
        {/* Poster: the image carries the card, with title and description laid
            over a gradient scrim dark enough for white text on light artwork. */}
        <Link href={href} aria-label={`Link to ${title}`} className="relative block">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                {title}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-200">
                {description}
              </p>
            </div>
          </div>
        </Link>

        {/* Stack and CTA share one row so the strip fills its full width. */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4">
          <TechStack techstack={techstack} />

          <div className="flex items-center gap-3">
            {github ? (
              <Link
                href={github}
                aria-label={`${title} source code on GitHub`}
                className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <FaGithub className="text-xl" />
              </Link>
            ) : null}

            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors dark:text-gray-900"
            >
              {cta ?? (href.includes('github') ? 'View Source' : 'Visit Site')}
              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
