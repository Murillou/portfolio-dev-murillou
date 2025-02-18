import { AboutMe } from '@/components/AboutMe/AboutMe';
import { render, screen } from '@testing-library/react';

describe('AboutMe component', () => {
  it('Deve rendereizar corretamente o "Sobre mim"', () => {
    render(<AboutMe />);

    expect(screen.getByText('Sobre mim')).toBeInTheDocument();
  });

  it('Deve renderizar corretamente o "Quem é Murillo Vinícius?"', () => {
    render(<AboutMe />);

    expect(screen.getByText('Quem é Murillo Vinícius?')).toBeInTheDocument();
  });

  it('Deve renderizazr corretamente o texto sobre mim', () => {
    render(<AboutMe />);

    expect(screen.getByTestId('text-about-me')).toBeInTheDocument();
  });
});
