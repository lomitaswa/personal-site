'use client'

import {
  FaAws,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaPhp,
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
  SiMysql,
  SiElasticsearch,
  SiExpress,
  SiEjs,
  SiJquery,
  SiPostman,
  SiCplusplus,
} from 'react-icons/si'

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-800" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
      { name: 'C++', icon: <SiCplusplus className="text-indigo-700" /> },
    ],
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'EJS', icon: <SiEjs className="text-yellow-600" /> },
      { name: 'jQuery', icon: <SiJquery className="text-blue-400" /> },
    ],
  },
  {
    category: 'Backend & Libraries',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: <FaGit className="text-orange-600" /> },
      { name: 'Linux', icon: <FaLinux className="text-yellow-600" /> },
      { name: 'Kafka', icon: <SiApachekafka className="text-black" /> },
      { name: 'Jenkins', icon: <FaJenkins className="text-red-700" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      {
        name: 'AWS',
        icon: <FaAws className="text-amber-400" />,
      },
    ],
  },
  {
    category: 'Databases & Search',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch className="text-yellow-500" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
    ],
  },
]

export default function SkillSection() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Skills</h2>
      {skills.map((group) => (
        <div key={group.category} className="mb-2">
          <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
            {group.category}
          </div>
          <div className="mb-3 flex flex-wrap gap-3">
            {group.items.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-white"
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
