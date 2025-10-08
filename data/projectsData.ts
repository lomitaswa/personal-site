interface Project {
  title: string
  description: string
  techstack: string
  href?: string
  imgSrc?: string
  github?: string
}

const projectsData: Project[] = [
  {
    title: 'Point4875.in',
    description: `Enabling defence aspirants to prepare for SSB WAT online during pandemic.`,
    techstack: `Built using Nuxt.js, Node.js, MongoDB, Vuetify, AWS.`,
    imgSrc: '/static/images/point4875.png',
    href: 'https://point4875.in',
  },
  {
    title: 'Vidly - Video Rental Back-end Application',
    description: `Vidly is a video rental web application.`,
    techstack: `Built using Node.js, Express, MongoDB `,
    imgSrc: '/static/images/vidly.jpg',
    href: 'https://github.com/lomitaswa/vidly',
  },
]

export default projectsData
