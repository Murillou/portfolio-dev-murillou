import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Projects } from '@/components/Projects/Projects';
import { ScrollToTopButton } from '@/components/ScrollToTopButton/ScrollToTopButton';
import { TechStack } from '@/components/TechStack/TechStack';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <ThemeProvider>
      <Header scrollToSection={scrollToSection} />
      <Profile />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}
