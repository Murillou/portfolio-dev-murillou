import Modal from 'react-modal';
import coffeeDelivery from '../../assets/coffee-delivery.png';
import todoList from '../../assets/todo-list.png';
import nextShop from '../../assets/next-shop.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { CardProject } from './CardProject';

Modal.setAppElement('#root');

export function Projects() {
  const { theme } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const projetos = [
    {
      image: coffeeDelivery,
      description:
        'E-commerce que simula um delivery de café, utilizando de hooks como useContext, useState e useEffect e consumindo APIs.',
      languages: ['React', 'TypeScript', 'TailWindCss'],
      repository: 'https://github.com/Murillou/coffee-delivery',
      deploy: 'https://coffee-delivery.murillou.dev/',
    },
    {
      image: nextShop,
      description:
        'Simulação de e-commerce desenvolvido com Next.js e Stripe para integração de pagamentos.',
      languages: ['Next.js', 'TypeScript', 'Stitches'],
      repository: 'https://github.com/Murillou/next-shop',
      deploy: 'https://next-shop.murillou.dev/',
    },
    {
      image: todoList,
      description: 'Lista de tarefas para gestão de obrigações.',
      languages: ['React', 'TypeScript'],
      repository: 'https://github.com/Murillou/todo-list',
      deploy: 'https://todo-list.murillou.dev/',
    },
  ];

  function openModal(image: string) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <section
      id="projects"
      className="flex flex-col max-w-7xl mx-auto p-5 gap-10"
      data-aos="fade-up"
    >
      <h1
        className={`font-bold text-3xl md:text-5xl text-center ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Meus Projetos
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10">
        {projetos.map((projeto, index) => (
          <div key={index}>
            <CardProject
              onClick={() => openModal(projeto.image.src)}
              image={projeto.image}
              description={projeto.description}
              languages={projeto.languages}
              repository={projeto.repository}
              deploy={projeto.deploy}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" inset-0 flex items-center justify-center bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="min-w-full rounded shadow-lg max-w-4xl relative w-4xl p-3">
          <button
            onClick={closeModal}
            className="absolute -top-10 right-0 text-gray-500 hover:text-gray-700"
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-screen rounded"
            />
          )}
        </div>
      </Modal>
    </section>
  );
}
