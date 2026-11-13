interface Project {
  title: string
  description: string
  techstack: string[]
  href?: string
  imgSrc?: string
  github?: string
  /** Call-to-action label. Falls back to 'Visit Site' when omitted. */
  cta?: string
}

const projectsData: Project[] = [
  {
    title: 'Rare Resha',
    description: `D2C ecommerce platform for premium Indian handloom products.`,
    techstack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
    imgSrc: '/static/images/rareresha.jpg',
    href: 'https://rareresha.com',
    cta: 'Visit Store',
  },
  {
    title: 'Point4875.in',
    description: `Enabling defence aspirants to prepare for SSB WAT online during pandemic.`,
    techstack: ['Nuxt.js', 'Node.js', 'MongoDB', 'Vuetify', 'AWS'],
    imgSrc: '/static/images/point4875.png',
    href: 'https://point4875.in',
    cta: 'Visit Platform',
  },
]

export default projectsData
