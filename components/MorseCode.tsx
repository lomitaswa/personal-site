import localFont from 'next/font/local'

const cloister = localFont({
  src: '../public/fonts/CloisterBlack.ttf',
  variable: '--font-cloister',
})

// import { Cloister } from 'next/font/google'
const MorseCode = () => (
  <div className="group relative h-[40px] w-[120px]">
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-opacity duration-300 group-hover:opacity-0 dark:text-gray-200"
    >
      {/* Dot 1 */}
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      {/* Dash */}
      <rect x="40" y="18" width="24" height="4" rx="2" fill="currentColor" />
      {/* Dot 2 */}
      <circle cx="80" cy="20" r="4" fill="currentColor" />
      {/* Dot 3 */}
      <circle cx="100" cy="20" r="4" fill="currentColor" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
      <span className="transform text-5xl tracking-wider text-black transition-transform hover:scale-110 dark:text-white">
        <div style={{ fontFamily: 'var(--font-cloister)' }}>L</div>
      </span>
    </div>
  </div>
)

export default MorseCode
