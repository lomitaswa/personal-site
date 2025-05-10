import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { FaGithub, FaLinkedinIn, FaInstagram, FaMedium, FaEnvelope } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href={`mailto:${siteMetadata.email}`} aria-label="Email">
            <FaEnvelope size={24} color="#EA4335" />
          </a>
          <a href={siteMetadata.github} aria-label="GitHub">
            <FaGithub size={24} className="text-[#181717] dark:text-white" />
          </a>
          <a href={siteMetadata.linkedin} aria-label="LinkedIn">
            <FaLinkedinIn size={24} color="#0077B5" />
          </a>
          <a href={siteMetadata.x} aria-label="X">
            <FaXTwitter size={24} className="text-black dark:text-white" />
          </a>
          <a href={siteMetadata.instagram} aria-label="Instagram">
            <FaInstagram size={24} color="#E4405F" />
          </a>
          <a href={siteMetadata.medium} aria-label="Medium">
            <FaMedium size={24} color="#00ab6c" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}
