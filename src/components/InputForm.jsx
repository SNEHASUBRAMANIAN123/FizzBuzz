import { useState } from 'react';
import { IconPlayerPlayFilled,IconFilePencil } from '@tabler/icons-react';

export function InputForm({ onProcess }) {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const handleAddValue = () => {
    const newValues = inputValue
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val !== '');

    if (newValues.length > 0) {
      setValues([...values, ...newValues]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddValue();
    }
  };

  const handleProcess = () => {
    if (values.length > 0) {
      onProcess(values);
    }
  };

  const handleClear = () => {
    setValues([]);
    setInputValue('');
    onProcess([]);
  };

  const handleRemoveValue = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 inline-flex items-center gap-2"><IconFilePencil className="text-sky-700"/> Value Processor</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a value (e.g., 1, 3, 5, 15, A)"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddValue}
          className="px-6 py-2 text-white rounded-lg bg-sky-700 hover:bg-sky-800 transition-colors"
        >
          Add
        </button>
      </div>

      {values.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {values.map((value, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-gray-800"
              >
                {value}
                <button
                  onClick={() => handleRemoveValue(index)}
                  className="text-red-500 hover:text-red-700 font-bold"
                  aria-label={`Remove ${value}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleProcess}
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <IconPlayerPlayFilled />
              Run Process
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {values.length === 0 && (
        <p className="text-gray-500 text-sm">
          Enter one or more values (comma-separated), then click "Run Process" to see the results
        </p>
      )}
    </div>
  );
}
