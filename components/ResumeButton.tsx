import siteMetadata from '@/data/siteMetadata'
import { FaArrowRight } from 'react-icons/fa'

export default function ResumeButton() {
  return (
    <a
      href={siteMetadata.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors dark:text-gray-900"
    >
      Resume
      <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  )
}
