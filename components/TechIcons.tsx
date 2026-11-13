'use client'

import type { ReactElement } from 'react'
import { FaAws, FaNodeJs } from 'react-icons/fa'
import {
  SiDrizzle,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiTypescript,
  SiVuetify,
} from 'react-icons/si'

/**
 * Icons for the technologies listed on project cards. Keys are the exact
 * strings used in `techstack` arrays in `data/projectsData.ts` — add an entry
 * here before referencing a new technology there.
 *
 * Colours are the official brand values, with a lighter variant wherever the
 * brand colour is too dark to read against the dark-mode card.
 */
export const techIcons: Record<string, ReactElement> = {
  'Next.js': <SiNextdotjs className="text-gray-900 dark:text-gray-100" />,
  'Nuxt.js': <SiNuxtdotjs className="text-[#00A672] dark:text-[#00DC82]" />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,
  'Node.js': <FaNodeJs className="text-[#539E43] dark:text-[#6BBF59]" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300" />,
  TypeScript: <SiTypescript className="text-[#3178C6] dark:text-[#5A9FE0]" />,
  Vuetify: <SiVuetify className="text-[#1867C0] dark:text-[#5A9BD8]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791] dark:text-[#8FB4D4]" />,
  MongoDB: <SiMongodb className="text-[#47A248] dark:text-[#5BC25C]" />,
  'Drizzle ORM': <SiDrizzle className="text-lime-600 dark:text-lime-300" />,
  AWS: <FaAws className="text-[#D97706] dark:text-[#FF9900]" />,
}

export default function TechStack({ techstack }: { techstack: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-4" aria-label="Tech stack">
      {techstack.map((tech) => {
        const icon = techIcons[tech]
        return (
          <li
            key={tech}
            title={tech}
            aria-label={tech}
            className="text-2xl transition-transform duration-200 hover:scale-115"
          >
            {/* Falls back to the name so an unmapped technology is still visible. */}
            {icon ?? <span className="text-xs font-medium text-gray-500">{tech}</span>}
          </li>
        )
      })}
    </ul>
  )
}
