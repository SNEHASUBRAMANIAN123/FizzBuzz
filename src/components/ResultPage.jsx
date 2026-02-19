
import { IconReport } from '@tabler/icons-react';

export function ResultPage({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[176px] mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 inline-flex items-center gap-2"><IconReport className="text-sky-700"/> Processing Results</h2>
        <p className="text-gray-500">No results to display. Add values and process the array.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6  mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 inline-flex items-center gap-2"><IconReport className="text-sky-700"/> Processing Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Input</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono">
                    {item.input === '' ? <span className="text-gray-400 italic">empty</span> : String(item.input)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.result ? (
                      <span className="font-bold text-blue-600">{item.result}</span>
                    ) : item.divisions && item.divisions.length > 0 ? (
                      <div className="space-y-1">
                        {item.divisions.map((division, divIndex) => (
                          <div key={divIndex} className="text-gray-700 font-mono text-sm">
                            {division}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
