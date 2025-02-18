import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Profile } from '@/components/Profile/Profile';

describe('Componente Profile', () => {
  it('deve renderizar o nome corretamente', () => {
    render(<Profile />);

    const apresetation = screen.getByText(/Olá, sou Murillo Vinícius :D/i);
    expect(apresetation).toBeInTheDocument();
  });

  it('deve exibir a animação com o texto correto', async () => {
    render(<Profile />);

    await waitFor(() => {
      const animation = screen.getByText(/<-- Desenvolvedor Web -->/i);
      expect(animation).toBeInTheDocument();
    });
  });

  it('deve renderizar o ícone do LinkedIn', () => {
    render(<Profile />);

    const linkedinIcon = screen.getByTestId('linkedin-icon');
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('deve renderizar o ícone do GitHub', () => {
    render(<Profile />);

    const githubIcon = screen.getByTestId('github-icon');
    expect(githubIcon).toBeInTheDocument();
  });

  it('a imagem do perfil deve ser renderizada corretamente', () => {
    render(<Profile />);

    const profileAvatar = screen.getByAltText('Murillo Vinícius');
    expect(profileAvatar).toBeInTheDocument();
  });
});
