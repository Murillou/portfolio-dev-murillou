import { SiTypescript, SiTailwindcss, SiVim } from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { MdHtml, MdCss } from 'react-icons/md';
import { FaNode, FaSass, FaGitAlt } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiStyledcomponents, SiNextdotjs } from 'react-icons/si';

export const techStack = [
  { icon: SiNextdotjs, color: 'text-slate-500', name: 'Next.js' },
  { icon: FaReact, color: 'text-blue-400', name: 'React' },
  { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
  { icon: MdCss, color: 'text-blue-400', name: 'CSS' },
  { icon: MdHtml, color: 'text-orange-400', name: 'HTML' },
  { icon: FaBootstrap, color: 'text-purple-400', name: 'Bootstrap' },
  { icon: FaGitAlt, color: '', name: 'Git' },
  {
    icon: SiStyledcomponents,
    color: 'text-yellow-400',
    name: 'Styled Components',
  },
  { icon: FaNode, color: 'text-green-800', name: 'NodeJs' },
  { icon: SiTailwindcss, color: 'text-teal-400', name: 'TailWind CSS' },
  { icon: FaSass, color: 'text-pink-400', name: 'Sass' },
  { icon: AiOutlineConsoleSql, color: 'text-orange-400', name: 'SQL' },
  { icon: SiVim, color: 'text-slate-400', name: 'Vim' },
];
