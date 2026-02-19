import { describe, it, expect } from 'vitest';
import { processValue, processArray, getAllDivisions } from './fizzBuzzUtils';

describe('fizzBuzzUtils', () => {
  describe('processValue', () => {
    it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
      const result = processValue(15);
      expect(result.result).toBe('FizzBuzz');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return "Fizz" for multiples of 3 only', () => {
      const result = processValue(3);
      expect(result.result).toBe('Fizz');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return "Buzz" for multiples of 5 only', () => {
      const result = processValue(5);
      expect(result.result).toBe('Buzz');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return empty result for non-multiples', () => {
      const result = processValue(1);
      expect(result.result).toBe('');
      expect(result.divisions).toHaveLength(2);
      expect(result.divisions).toContain('Divided 1 by 3');
      expect(result.divisions).toContain('Divided 1 by 5');
    });

    it('should return "Invalid Item" for empty string', () => {
      const result = processValue('');
      expect(result.result).toBe('Invalid Item');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return "Invalid Item" for null', () => {
      const result = processValue(null);
      expect(result.result).toBe('Invalid Item');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return "Invalid Item" for undefined', () => {
      const result = processValue(undefined);
      expect(result.result).toBe('Invalid Item');
      expect(result.divisions).toHaveLength(0);
    });

    it('should return "Invalid Item" for non-numeric string', () => {
      const result = processValue('A');
      expect(result.result).toBe('Invalid Item');
      expect(result.divisions).toHaveLength(0);
    });

    it('should handle numeric strings correctly', () => {
      const result = processValue('23');
      expect(result.result).toBe('');
      expect(result.divisions).toHaveLength(2);
      expect(result.divisions).toContain('Divided 23 by 3');
      expect(result.divisions).toContain('Divided 23 by 5');
    });

    it('should handle zero correctly', () => {
      const result = processValue(0);
      expect(result.result).toBe('FizzBuzz');
      expect(result.divisions).toHaveLength(0);
    });
  });

  describe('processArray', () => {
    it('should process an array of values correctly', () => {
      const values = [1, 3, 5, 15, '', 'A', 23];
      const results = processArray(values);
      
      expect(results).toHaveLength(7);
      expect(results[0].input).toBe(1);
      expect(results[0].result).toBe('');
      expect(results[1].result).toBe('Fizz');
      expect(results[2].result).toBe('Buzz');
      expect(results[3].result).toBe('FizzBuzz');
      expect(results[4].result).toBe('Invalid Item');
      expect(results[5].result).toBe('Invalid Item');
      expect(results[6].result).toBe('');
    });

    it('should return empty array for non-array input', () => {
      const results = processArray(null);
      expect(results).toEqual([]);
    });

    it('should handle empty array', () => {
      const results = processArray([]);
      expect(results).toEqual([]);
    });
  });

  describe('getAllDivisions', () => {
    it('should collect all division operations from results', () => {
      const processedResults = [
        { input: 1, result: '', divisions: ['Divided 1 by 3', 'Divided 1 by 5'] },
        { input: 3, result: 'Fizz', divisions: [] },
        { input: 5, result: 'Buzz', divisions: [] },
      ];
      
      const divisions = getAllDivisions(processedResults);
      expect(divisions).toHaveLength(2);
      expect(divisions).toContain('Divided 1 by 3');
      expect(divisions).toContain('Divided 1 by 5');
    });

    it('should handle empty results', () => {
      const divisions = getAllDivisions([]);
      expect(divisions).toEqual([]);
    });
  });
});
