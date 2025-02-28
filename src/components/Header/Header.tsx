import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '@/context/ThemeContext';
import { List, X } from 'phosphor-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export function Header({ scrollToSection }: HeaderProps) {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <header className="flex flex-col justify-around items-center font-poppins p-5 max-w-7xl mx-auto md:flex-row lg:justify-between relative">
      <div
        data-aos="fade-up"
        className="flex justify-between items-center w-full md:w-auto"
      >
        <div className="flex items-center text-sm sm:text-2xl font-mono ">
          <BiCodeAlt size={50} className="text-green-500" />{' '}
          <span className="text-green-400 font-extrabold">Dev</span>
          <span
            className={`font-extrabold ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            _Murillou
          </span>
        </div>
        <div className="flex gap-5 md:hidden">
          <ThemeSwitcher />
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <List size={28} />
          </button>
        </div>
      </div>

      <section
        data-aos="fade-up"
        className="hidden md:flex flex-row items-center"
      >
        <ul className="flex flex-row gap-5">
          <li
            className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105  ${
              theme === 'dark' ? 'hover:text-green-500' : 'hover:text-blue-500'
            }`}
          >
            <a onClick={() => scrollToSection('about')}>Sobre mim</a>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              theme === 'dark' ? 'hover:text-green-500' : 'hover:text-blue-500'
            }`}
          >
            <a onClick={() => scrollToSection('skills')}>Tech Stack</a>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              theme === 'dark' ? 'hover:text-green-500' : 'hover:text-blue-500'
            }`}
          >
            <a onClick={() => scrollToSection('projects')}>Projetos</a>
          </li>
        </ul>
        <ThemeSwitcher />
      </section>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <section
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 z-50 flex flex-col p-10 transition-transform duration-300 bg-[#1c1a1a] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="self-end text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <ul className="flex flex-col gap-10 text-white mt-10">
          <li className="text-sm">
            <a
              onClick={() => {
                scrollToSection('about');
                setMenuOpen(false);
              }}
            >
              Sobre mim
            </a>
          </li>

          <li className="text-sm">
            <a
              onClick={() => {
                scrollToSection('skills');
                setMenuOpen(false);
              }}
            >
              Tech Stack
            </a>
          </li>

          <li className="text-sm">
            <a
              onClick={() => {
                scrollToSection('projects');
                setMenuOpen(false);
              }}
            >
              Projetos
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
