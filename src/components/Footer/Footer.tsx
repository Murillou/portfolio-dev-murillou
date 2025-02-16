import { useTheme } from '@/context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center font-bold mt-24 p-5 shadow-lg shadow-slate-300 font-poppins} ${
        theme === 'dark' ? 'shadow-slate-300' : 'shadow-green-700'
      }`}
    >
      <p>Desenvolvido com ❤️ por Murillo Vinícius!!</p>
    </footer>
  );
}
