import { TechStack } from '@/components/TechStack/TechStack';
import { techStack } from '@/data/techStack';
import { render, screen } from '@testing-library/react';

describe('Tech Stack componente', () => {
  it('deve renderizar corretamente o "Tech Stack"', () => {
    render(<TechStack />);

    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });

  it('deve renderizar o nome e icones da tech', () => {
    render(<TechStack />);

    techStack.forEach(tech => {
      const techName = screen.getByText(tech.name);
      expect(techName).toBeInTheDocument();
    });
  });
});
