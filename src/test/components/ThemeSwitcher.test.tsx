import { render, screen, fireEvent } from '@testing-library/react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher';

jest.mock('@/context/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeSwitcher', () => {
  it('deve renderizar o ícone de lua quando o tema for "light"', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    });

    render(<ThemeSwitcher />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('deve renderizar o ícone de sol quando o tema for "dark"', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      toggleTheme: jest.fn(),
    });

    render(<ThemeSwitcher />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('deve chamar toggleTheme ao clicar no botão', () => {
    const toggleTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', toggleTheme });

    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole('button'));

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
