

export function processValue(value) {
  const divisions = [];
  

  if (value === null || value === undefined || value === '') {
    return {
      result: 'Invalid Item',
      divisions: []
    };
  }
  

  const numValue = Number(value);
  

  if (isNaN(numValue)) {
    return {
      result: 'Invalid Item',
      divisions: []
    };
  }
  

  const divisibleBy3 = numValue % 3 === 0;
  const divisibleBy5 = numValue % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return {
      result: 'FizzBuzz',
      divisions: []
    };
  }
  if (divisibleBy3) {
    return {
      result: 'Fizz',
      divisions: []
    };
  }
  if (divisibleBy5) {
    return {
      result: 'Buzz',
      divisions: []
    };
  }
  // Non-multiples: show division operations
  divisions.push(`Divided ${numValue} by 3`);
  divisions.push(`Divided ${numValue} by 5`);
  return {
    result: '',
    divisions
  };
}


export function processArray(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  
  return values.map((value, index) => {
    const processed = processValue(value);
    return {
      input: value,
      result: processed.result,
      divisions: processed.divisions
    };
  });
}


export function getAllDivisions(processedResults) {
  return processedResults.flatMap(item => item.divisions);
}
