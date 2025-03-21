import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@/context/ThemeContext';

export function AboutMe() {
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
      id="about"
      className="flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto text-white pt-24 font-poppins"
      data-aos="fade-up"
    >
      <h1
        className={`font-bold text-3xl md:text-5xl ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Sobre mim
      </h1>

      <div
        className={`max-w-5xl p-3 text-center text-sm sm:text-lg space-y-3 ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        <p data-testid="text-about-me">
          Comecei minha jornada na programação aos 14 anos, quando tive meu
          primeiro contato com robótica e Arduino. Lembro até hoje do momento em
          que consegui fazer um robô se mover – foi ali que meus olhos brilharam
          e descobri minha paixão como programador. Desde então, decidi que o
          que eu queria para a minha vida é ser um desenvolvedor profissional.
        </p>
        <p>
          No meu tempo livre, gosto de ler mangás clássicos, tocar guitarra e me
          divertir com jogos de ritmo.
        </p>
      </div>
    </section>
  );
}
