import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Projects } from '@/components/Projects/Projects';
import { TechStack } from '@/components/TechStack/TechStack';
import { ThemeProvider } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider>
      <Header scrollToSection={scrollToSection} />
      <Profile />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 md:bottom-2 md:right-5 bg-green-500 text-white p-1 rounded-full shadow-md transition duration-300 hover:bg-green-600 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </ThemeProvider>
  );
}
