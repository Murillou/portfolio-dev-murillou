import { Footer } from '@/components/Footer/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer componente', () => {
  it('deve renderizar o texto corretamente', () => {
    render(<Footer />);
    expect(
      screen.getByText('Desenvolvido com ❤️ por Murillo Vinícius!!')
    ).toBeInTheDocument();
  });
});
