import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultPage } from './ResultPage';

describe('ResultPage', () => {
  it('should display message when no results', () => {
    render(<ResultPage results={[]} />);
    expect(screen.getByText(/No results to display/i)).toBeTruthy();
  });

  it('should display results table with correct data', () => {
    const results = [
      { input: 1, result: '', divisions: ['Divided 1 by 3', 'Divided 1 by 5'] },
      { input: 3, result: 'Fizz', divisions: [] },
      { input: 15, result: 'FizzBuzz', divisions: [] },
    ];
    
    render(<ResultPage results={results} />);
    
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
    expect(screen.getByText('15')).toBeTruthy();
    expect(screen.getByText('Fizz')).toBeTruthy();
    expect(screen.getByText('FizzBuzz')).toBeTruthy();
    expect(screen.getByText('Divided 1 by 3')).toBeTruthy();
    expect(screen.getByText('Divided 1 by 5')).toBeTruthy();
  });

  it('should handle empty input values', () => {
    const results = [
      { input: '', result: 'Invalid Item', divisions: [] },
    ];
    
    render(<ResultPage results={results} />);
    expect(screen.getByText(/empty/i)).toBeTruthy();
  });

  it('should display division operations inline for non-multiples', () => {
    const results = [
      { input: 1, result: '', divisions: ['Divided 1 by 3', 'Divided 1 by 5'] },
    ];
    
    render(<ResultPage results={results} />);
    expect(screen.getByText('Divided 1 by 3')).toBeTruthy();
    expect(screen.getByText('Divided 1 by 5')).toBeTruthy();
  });
});
