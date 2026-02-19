/**
 * HelpModal Component
 * Single Responsibility: Displays help information in a modal popup
 */
export function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
            aria-label="Close help"
          >
            ×
          </button>
        </div>
        
        <div className="px-6 py-4">
          <div className="space-y-4 text-gray-700">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is FizzBuzz?</h3>
              <p className="mb-2">
                FizzBuzz is a classic programming challenge that processes numbers based on divisibility rules:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Numbers divisible by <strong>3</strong> become <span className="font-bold text-sky-700">"Fizz"</span></li>
                <li>Numbers divisible by <strong>5</strong> become <span className="font-bold text-sky-700">"Buzz"</span></li>
                <li>Numbers divisible by <strong>both 3 and 5</strong> become <span className="font-bold text-sky-700">"FizzBuzz"</span></li>
                <li>Numbers that don't match any rule show the division operations that were checked</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Use</h3>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  <strong>Enter values:</strong> Type a value in the input field (numbers, letters, or leave empty)
                </li>
                <li>
                  <strong>Add to array:</strong> Click "Add" or press Enter to add the value to your processing array
                </li>
                <li>
                  <strong>Repeat:</strong> Continue adding values until you have all the items you want to process
                </li>
                <li>
                  <strong>Process:</strong> Click "Run Process" to see the FizzBuzz results
                </li>
                <li>
                  <strong>Review:</strong> Check the results table to see what each value became
                </li>
              </ol>
            </section>

          

         
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-white rounded-lg bg-sky-700 hover:bg-sky-800 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
