import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import { Skill } from '../../types';
import { Skills } from './Skills';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<any>) => (
      <div data-testid='motion-div' {...props}>
        {children}
      </div>
    ),
    button: ({ children, ...props }: React.PropsWithChildren<any>) => (
      <button data-testid='motion-button' {...props}>
        {children}
      </button>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren<any>) => (
    <div data-testid='animate-presence'>{children}</div>
  ),
}));

describe('Skills Component', () => {
  const mockSkillsData: Skill[] = [
    { id: 's1', name: 'Tech One', category: 'frameworks_libraries', tier: 'Expert', evidence: 'Short proof.' },
    { id: 's2', name: 'Tech Two', category: 'frameworks_libraries', tier: 'Proficient', evidence: 'Short proof.' },
    { id: 's3', name: 'Lead One', category: 'design_ux', tier: 'Familiar', evidence: 'Short proof.' },
  ];

  it('should display all skills initially', () => {
    render(<Skills skillsData={mockSkillsData} />);
    expect(screen.getByText('Tech One')).toBeInTheDocument();
    expect(screen.getByText('Tech Two')).toBeInTheDocument();
    expect(screen.getByText('Lead One')).toBeInTheDocument();
  });

  it('should filter to Design & UX when category tab is selected', () => {
    render(<Skills skillsData={mockSkillsData} />);
    const designUxButton = screen.getByRole('button', { name: 'Design & UX' });
    fireEvent.click(designUxButton);
    expect(screen.getByText('Lead One')).toBeInTheDocument();
    expect(screen.queryByText('Tech One')).not.toBeInTheDocument();
  });

  it('should reset to display all skills when "All" is clicked after a filter', () => {
    render(<Skills skillsData={mockSkillsData} />);
    const designUxButton = screen.getByRole('button', { name: 'Design & UX' });
    fireEvent.click(designUxButton);
    const allButton = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allButton);
    expect(screen.getByText('Tech One')).toBeInTheDocument();
    expect(screen.getByText('Tech Two')).toBeInTheDocument();
    expect(screen.getByText('Lead One')).toBeInTheDocument();
  });
}); 