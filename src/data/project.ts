import coffeeDelivery from '../assets/coffee-delivery.png';
import todoList from '../assets/todo-list.png';
import nextShop from '../assets/next-shop.png';

export const projetos = [
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
    languages: ['Next.js', 'TypeScript', 'Stitches', 'Stripe'],
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
