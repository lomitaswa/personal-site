'use client'

import Image from '@/components/Image'
import Link from '@/components/Link'
import { FaGithub } from 'react-icons/fa'

interface CardProps {
  title: string
  description: string
  techstack: string
  imgSrc: string
  href: string
  github?: string
}

export default function Card({ title, description, techstack, imgSrc, href, github }: CardProps) {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className="group relative">
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-800">
          <div className="relative">
            <Link href={href} aria-label={`Link to ${title}`}>
              <div className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                  alt={title}
                  src={imgSrc}
                  className="h-full w-full"
                  width={544}
                  height={306}
                  style={{
                    padding: '7px',
                    borderRadius: '12px',
                  }}
                />
              </div>
            </Link>
            <div className="flex flex-grow flex-col justify-between p-6">
              <div>
                <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
                  <Link href={href} aria-label={`Link to ${title}`}>
                    {title}
                  </Link>
                </h2>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {description}
                </p>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {techstack}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <Link
                  href={href}
                  className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
                  aria-label={`Link to ${title}`}
                >
                  {href.includes('github') ? 'GitHub' : 'Live Demo'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
