import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@/context/ThemeContext';
import { techStack } from '@/data/teckStack';

export function TechStack() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

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
      <div className="flex flex-wrap justify-center gap-10">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110 w-24 h-32 "
          >
            <tech.icon size={80} className={tech.color} />
            <p className="text-center mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
