import { useTheme } from '@/context/ThemeContext';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';
import Image, { StaticImageData } from 'next/image';

interface CardProjectProps {
  image: StaticImageData;
  description: string;
  languages: string[];
  repository: string;
  deploy: string;
  onClick: () => void;
}

export function CardProject({
  image,
  description,
  languages,
  repository,
  deploy,
  onClick,
}: CardProjectProps) {
  const { theme } = useTheme();

  return (
    <section
      className={`w-[512px] mx-auto overflow-hidden rounded-lg shadow-md ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-green-500 to-purple-400'
          : 'bg-gradient-to-br from-green-300 to-blue-400'
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt="Imagem do Projeto"
          width={512}
          height={256}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer
          "
          onClick={onClick}
        >
          <div className="text-center text-white px-6">
            <p className="text-lg font-bold">{description}</p>
            <div className="flex justify-center mt-2 space-x-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark'
                      ? 'bg-purple-600 text-white'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 mt-2 p-5">
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${
              theme === 'dark'
                ? 'text-black hover:text-slate-200'
                : 'hover:text-blue-700'
            }
            transition-colors duration-300
            flex items-center
          `}
        >
          <FiGithub className="inline-block mr-2" />
          Repositório
        </a>
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${
              theme === 'dark'
                ? 'text-black hover:text-slate-200'
                : 'hover:text-blue-700'
            }
            transition-colors duration-300
            flex items-center
          `}
        >
          <GoLinkExternal className="inline-block mr-2" />
          Deploy
        </a>
      </div>
    </section>
  );
}
