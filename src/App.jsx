import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InputForm } from './components/InputForm';
import { ResultPage } from './components/ResultPage';
import { HelpModal } from './components/HelpModal';
import { processArray } from './utils/fizzBuzzUtils';
import { IconHelp } from '@tabler/icons-react';
import './App.css';

function FizzBuzzPage() {
  const [results, setResults] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  const handleProcess = (values) => {
    setResults(processArray(values));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="sticky top-0 z-40">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white px-6 py-4 shadow-lg flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-white">Fizz</span>
                <span className="text-sky-300">Buzz</span>
                <span className="text-amber-300"> Processor</span>
              </h1>
              <p className="mt-1 text-sm sm:text-base text-slate-200">
                Evaluate numbers with division rules (3, 5, FizzBuzz)
              </p>
            </div>

            <button
              onClick={() => setShowHelp(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
              aria-label="How it works"
              title="How it works"
            >
             <IconHelp />
              <span>How it works</span>
            </button>
        </div>
      </header>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />

      <main className="flex-1">
        <div className="flex flex-row gap-6 items-start py-8 px-4">
          <div className="w-full lg:w-1/2">
            <InputForm onProcess={handleProcess} />
          </div>
          <div className="w-full lg:w-1/2 max-h-[70vh] overflow-y-auto pr-2">
            <ResultPage results={results} />
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 z-40 text-center text-sm text-gray-500">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white px-6 py-4 shadow-lg flex items-center gap-4 justify-center">
          <p>FizzBuzz Coding Assignment • 2026 • by Sneha</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FizzBuzzPage />} />
      </Routes>
    </Router>
  );
}

export default App;
