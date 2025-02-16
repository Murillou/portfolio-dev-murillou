import { SiTypescript, SiTailwindcss, SiVim } from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { MdHtml, MdCss } from 'react-icons/md';
import { FaNode, FaSass, FaGitAlt } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiStyledcomponents, SiNextdotjs } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@/context/ThemeContext';

export function TechStack() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const skills = [
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

  return (
    <section
      className="flex flex-col items-center justify-center gap-10 py-24 max-w-3xl mx-auto font-poppins"
      data-aos="fade-up"
      id="skills"
    >
      <div>
        <h1
          className={`font-bold text-3xl md:text-5xl ${
            theme === 'dark' ? 'text-green-600' : 'text-slate-950'
          }`}
        >
          Tech Stack
        </h1>
      </div>
      <div className="flex flex-wrap  justify-center gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110 "
          >
            <skill.icon size={100} className={skill.color} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
