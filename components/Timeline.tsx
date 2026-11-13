import timelineData from '@/data/timelineData'

/**
 * Career timeline as a vertical rail: a continuous line with a marker per
 * entry. The rail is decorative, so it is hidden from assistive tech — the
 * list semantics already convey the sequence.
 */
export default function Timeline() {
  return (
    <ol className="space-y-0">
      {timelineData.map((entry, i) => {
        const isLast = i === timelineData.length - 1
        return (
          <li key={`${entry.date}-${entry.title}`} className="flex gap-4">
            <div aria-hidden="true" className="flex flex-col items-center">
              <span
                className={
                  entry.kind === 'education'
                    ? 'border-primary-600 dark:border-primary-400 mt-1.5 h-3 w-3 flex-none rounded-full border-2'
                    : 'bg-primary-600 dark:bg-primary-400 mt-1.5 h-3 w-3 flex-none rounded-full'
                }
              />
              {!isLast && <span className="w-px flex-1 bg-gray-200 dark:bg-gray-700" />}
            </div>

            <div className={isLast ? '' : 'pb-7'}>
              <div className="text-primary-700 dark:text-primary-400 text-xs font-bold tracking-wider uppercase">
                {entry.date}
              </div>
              <div className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                {entry.title}
              </div>
              <div className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{entry.org}</div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
