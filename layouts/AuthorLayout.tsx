import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from '@/components/Image'
import ResumeButton from '@/components/ResumeButton'
import SkillsSection from '@/components/SkillSection'
import Timeline from '@/components/Timeline'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-10">
      <h2 className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase dark:text-gray-400">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github, specialties } = content

  const socialLink =
    'rounded-lg bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>

      <div className="pb-10">
        {/* Profile hero — identity on the left, bio on the right, so the card
            uses its full width instead of trailing off into empty space. */}
        <div className="mt-8 grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:gap-10 md:p-8 dark:border-gray-700 dark:bg-gray-800">
          {/* Avatar stacked above the identity so this column fills its height
              rather than floating in the middle of the card. */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {avatar && (
              <Image
                src={avatar}
                alt={name}
                width={176}
                height={176}
                className="h-36 w-36 rounded-full object-cover md:h-44 md:w-44"
              />
            )}

            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {name}
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {occupation}
                {company ? ` · ${company}` : ''}
              </p>

              {specialties && specialties.length > 0 && (
                <p className="text-primary-700 dark:text-primary-400 mt-2 text-xs font-bold tracking-[0.08em] uppercase">
                  {specialties.join(' · ')}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex gap-2">
                <a href={`mailto:${email}`} aria-label="Email" className={socialLink}>
                  <FaEnvelope size={18} />
                </a>
                <a
                  href={github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>

              <ResumeButton />
            </div>
          </div>

          <div className="self-center border-t border-gray-100 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10 dark:border-gray-700">
            <h2 className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase dark:text-gray-400">
              Profile
            </h2>
            <div className="prose prose-sm dark:prose-invert mt-4 max-w-none">{children}</div>
          </div>
        </div>

        <Section title="Timeline">
          <Timeline />
        </Section>

        <Section title="Skills">
          <SkillsSection />
        </Section>
      </div>
    </div>
  )
}
