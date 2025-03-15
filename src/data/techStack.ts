import { SiTypescript, SiTailwindcss, SiVim, SiDocker } from 'react-icons/si';
import { FaReact, FaBootstrap, FaLinux, FaLaravel } from 'react-icons/fa';
import { MdHtml, MdCss } from 'react-icons/md';
import { FaNode, FaSass, FaGitAlt, FaPhp } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiInsomnia,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';

export const techStack = [
  { icon: FaReact, color: 'text-blue-500', name: 'React' },
  { icon: SiNextdotjs, color: 'text-slate-600', name: 'Next.js' },
  { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
  { icon: SiTailwindcss, color: 'text-cyan-400', name: 'TailWind CSS' },
  { icon: MdHtml, color: 'text-orange-400', name: 'HTML' },
  { icon: MdCss, color: 'text-blue-400', name: 'CSS' },
  { icon: FaBootstrap, color: 'text-purple-400', name: 'Bootstrap' },
  {
    icon: SiStyledcomponents,
    color: 'text-yellow-400',
    name: 'Styled Components',
  },

  { icon: FaLaravel, color: 'text-red-600', name: 'Laravel' },
  { icon: FaPhp, color: 'text-blue-600', name: 'PHP' },

  { icon: SiPostgresql, color: 'text-blue-700', name: 'PostgreSQL' },
  { icon: SiMysql, color: 'text-blue-600', name: 'MySQL' },
  { icon: AiOutlineConsoleSql, color: 'text-orange-400', name: 'SQL' },

  { icon: FaGitAlt, color: 'text-orange-500', name: 'Git' },
  { icon: SiDocker, color: 'text-cyan-600', name: 'Docker' },

  { icon: SiInsomnia, color: 'text-purple-500', name: 'Insomnia' },
  { icon: FaLinux, color: 'text-gray-700', name: 'Linux' },
  { icon: SiVim, color: 'text-slate-400', name: 'Vim' },

  { icon: FaSass, color: 'text-pink-400', name: 'Sass' },
];
