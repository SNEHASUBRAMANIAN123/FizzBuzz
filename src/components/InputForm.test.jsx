import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputForm } from './InputForm';

describe('InputForm', () => {
  it('should render input field and add button', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    expect(screen.getByPlaceholderText(/Enter a value/i)).toBeTruthy();
    expect(screen.getByText('Add')).toBeTruthy();
  });

  it('should add value to array when Add button is clicked', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '15' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('15')).toBeTruthy();
  });

  it('should add value when Enter key is pressed', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('should show Run Process button when values are added', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Run Process')).toBeTruthy();
  });

  it('should call onProcess with values when Run Process is clicked', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '15' } });
    fireEvent.click(addButton);
    
    const processButton = screen.getByText('Run Process');
    fireEvent.click(processButton);
    
    expect(mockOnProcess).toHaveBeenCalledWith(['15']);
  });

  it('should remove value when remove button is clicked', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('3')).toBeTruthy();
    
    const removeButton = screen.getByLabelText('Remove 3');
    fireEvent.click(removeButton);
    
    expect(screen.queryByText('3')).toBeNull();
  });

  it('should clear all values when Clear All is clicked', () => {
    const mockOnProcess = vi.fn();
    render(<InputForm onProcess={mockOnProcess} />);
    
    const input = screen.getByPlaceholderText(/Enter a value/i);
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(addButton);
    
    const clearButton = screen.getByText('Clear All');
    fireEvent.click(clearButton);
    
    expect(screen.queryByText('5')).toBeNull();
    expect(mockOnProcess).toHaveBeenCalledWith([]);
  });
});
