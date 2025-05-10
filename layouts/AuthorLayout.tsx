import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from '@/components/Image'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-0 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div className="order-1 flex flex-col items-center space-x-2 pt-8 xl:order-2">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} color="#EA4335" />
              </a>
              <a href={github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="text-[#181717] dark:text-white" />
              </a>
              <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} color="#0077B5" />
              </a>
            </div>
          </div>
          <div className="prose dark:prose-invert order-2 max-w-none pt-8 pb-8 xl:order-1 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
