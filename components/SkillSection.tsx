'use client'

import {
  FaAws,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaJenkins,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiKubernetes,
  SiApachekafka,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiElasticsearch,
  SiExpress,
  SiEjs,
  SiJquery,
  SiPostman,
  SiNestjs,
  SiHttpie,
  SiBootstrap,
  SiMongoose,
  SiJest,
  SiAxios,
  SiPuppeteer,
  SiTurborepo,
  SiShopify,
  SiDrizzle,
} from 'react-icons/si'

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-800" /> },
    ],
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'EJS', icon: <SiEjs className="text-yellow-600" /> },
      { name: 'jQuery', icon: <SiJquery className="text-blue-400" /> },
    ],
  },
  {
    category: 'Backend & Libraries',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
      { name: 'Mongoose ODM', icon: <SiMongoose className="text-red-800" /> },
      { name: 'Jest', icon: <SiJest className="text-red-700" /> },
      { name: 'Axios', icon: <SiAxios className="text-violet-600" /> },
      { name: 'Puppeteer', icon: <SiPuppeteer className="text-teal-500" /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: <FaGit className="text-orange-600" /> },
      { name: 'Linux', icon: <FaLinux className="text-yellow-600" /> },
      { name: 'Kafka', icon: <SiApachekafka className="text-black dark:text-white" /> },
      { name: 'Jenkins', icon: <FaJenkins className="text-red-700" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
      { name: 'Turborepo', icon: <SiTurborepo className="text-pink-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'HTTPie', icon: <SiHttpie className="text-gray-700 dark:text-gray-300" /> },
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      {
        name: 'AWS',
        icon: <FaAws className="text-amber-400" />,
      },
      { name: 'Shopify', icon: <SiShopify className="text-lime-600" /> },
    ],
  },
  {
    category: 'Databases & Search',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch className="text-yellow-500" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
      { name: 'Drizzle ORM', icon: <SiDrizzle className="text-lime-400" /> },
    ],
  },
]

export default function SkillSection() {
  return (
    // Plain groups on the page surface — no cards. The section heading is
    // supplied by the page layout.
    <div className="space-y-6">
      {skills.map((group) => (
        <div key={group.category}>
          <div className="text-xs font-bold tracking-[0.12em] text-gray-500 uppercase dark:text-gray-400">
            {group.category}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-2.5 py-1.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
