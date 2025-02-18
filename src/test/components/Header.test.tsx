import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/Header/Header';

describe('Header', () => {
  const scrollToSection = jest.fn();

  it('deve renderizar corretamente o título e ícones', () => {
    render(<Header scrollToSection={scrollToSection} />);

    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('_Murillou')).toBeInTheDocument();
  });

  it('deve chamar scrollToSection corretamente ao clicar nos itens do menu', () => {
    render(<Header scrollToSection={scrollToSection} />);

    fireEvent.click(screen.getByText('Sobre mim'));
    expect(scrollToSection).toHaveBeenCalledWith('about');

    fireEvent.click(screen.getByText('Tech Stack'));
    expect(scrollToSection).toHaveBeenCalledWith('skills');

    fireEvent.click(screen.getByText('Projetos'));
    expect(scrollToSection).toHaveBeenCalledWith('projects');
  });
});
