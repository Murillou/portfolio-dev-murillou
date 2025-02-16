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
      className="flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto text-white pt-24 font-poppins"
      data-aos="fade-up"
    >
      <h1
        className={`font-bold text-3xl md:text-5xl ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Sobre mim
      </h1>

      <h1
        className={`font-mono text-center text-2xl ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        Quem é Murillo Vinícius?
      </h1>

      <div
        className={`max-w-5xl p-3 text-center text-md sm:text-lg space-y-3 ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        <p>
          Minha jornada na programação começou aos 14 anos, quando tive meu
          primeiro contato com robótica e Arduino. Lembro perfeitamente do
          momento em que fiz um pequeno robô se mover – foi ali que meus olhos
          brilharam e descobri minha paixão pelo desenvolvimento. Desde então,
          venho me aprimorando para transformar essa paixão em profissão.
        </p>
        <p>
          No meu tempo livre, gosto de ler mangás clássicos, tocar guitarra e me
          divertir com jogos de ritmo.
        </p>
      </div>
    </section>
  );
}
