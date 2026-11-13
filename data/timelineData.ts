export interface TimelineEntry {
  /** Date range as it should read, e.g. '2025 Jul — Present'. */
  date: string
  /** Role or qualification — the bold line. */
  title: string
  /** Employer or institution, with location where it helps. */
  org: string
  /** 'work' draws a filled dot, 'education' an outlined one. */
  kind?: 'work' | 'education'
}

const timelineData: TimelineEntry[] = [
  {
    date: '2025 Jul — Present',
    title: 'Senior Software Engineer',
    org: 'Educational Initiatives Pvt. Ltd., Bengaluru',
  },
  {
    date: '2024 Jul — 2025 Jun',
    title: 'Software Development Engineer II',
    org: 'Educational Initiatives Pvt. Ltd., Bengaluru',
  },
  {
    date: '2022 Feb — 2024 Jul',
    title: 'Software Development Engineer I',
    org: 'Educational Initiatives Pvt. Ltd., Bengaluru',
  },
  {
    date: '2017 — 2018',
    title: 'Core Team Member',
    org: 'SNSKRIT',
  },
  {
    date: '2016 — 2020',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Sambalpur University Institute of Information Technology, Burla, Odisha',
    kind: 'education',
  },
]

export default timelineData
