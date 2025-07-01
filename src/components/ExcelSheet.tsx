import { useState } from 'react';

const rows = 50;
const cols = 9;

const columnData = [
  ["Job Request", "Launch social media campaign for product XYZ", "Update press kit for company redesign", "Finalize user testing feedback for app update", "Design new features for the website", "Prepare financial report for Q4"],
  ["Submitted", "15-11-2024", "28-10-2024", "05-12-2024", "10-01-2025", "25-01-2025"],
  ["Status", "In-process", "Need to start", "In-process", "Complete", "Blocked"],
  ["Submitter", "Aisha Patel", "Irfan Khan", "Mark Johnson", "Emily Green", "Jessica Brown"],
  ["URL", "https://example.com/task1", "https://example.com/task2", "https://example.com/task3", "https://example.com/task4", "https://example.com/task5"],
  ["Assigned", "Raj Verma", "Sara Ali", "John Wick", "Maya Nair", "Dev Mehta"],
  ["Priority", "High", "Medium", "High", "Low", "Medium"],
  ["Due Date", "30-11-2024", "10-11-2024", "25-12-2024", "15-01-2025", "31-01-2025"],
  ["Est. Value", "$1,200", "$900", "$1,500", "$2,000", "$800"]
];

const staticData = Array.from({ length: rows }, (_, rowIndex) =>
  Array.from({ length: cols }, (_, colIndex) =>
    columnData[colIndex]?.[rowIndex] || ""
  )
);

export default function ExcelSheet() {
  const [data, setData] = useState(staticData);

  const updateCell = (row: number, col: number, value: string) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  // Highlight cell by status or priority
  const getCellColor = (row: number, col: number) => {
    if (col === 2) {
      const status = data[row][col].toLowerCase();
      if (status.includes("complete")) return "bg-green-100 text-green-800";
      if (status.includes("blocked")) return "bg-red-100 text-red-700";
      if (status.includes("in-process")) return "bg-yellow-100 text-yellow-800";
    }
    if (col === 6) {
      const priority = data[row][col].toLowerCase();
      if (priority === "high") return "bg-red-100 text-red-700";
      if (priority === "medium") return "bg-yellow-50 text-yellow-700";
      if (priority === "low") return "bg-green-50 text-green-700";
    }
    return "";
  };

  return (
    <div className="overflow-auto w-full">
      <table className="border-collapse w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 w-12 h-10 text-center">#</th>
            {Array.from({ length: cols }).map((_, colIndex) => (
              <th
                key={colIndex}
                className={`border border-gray-300 bg-gray-100 px-4 py-2 text-left font-medium whitespace-nowrap ${
                  colIndex === 0 ? "w-[350px]" : ""
                }`}
              >
                {String.fromCharCode(65 + colIndex)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Row number, starts after header */}
              <th className="border border-gray-300 bg-gray-100 text-center font-medium px-2">
                {rowIndex === 0 ? "" : rowIndex}
              </th>
              {row.map((cell, colIndex) => {
                const isHeaderCell = rowIndex === 0;
                const cellColor = getCellColor(rowIndex, colIndex);

                return (
                  <td
                    key={colIndex}
                    className={`border border-gray-200 p-0 ${cellColor}`}
                  >
                    {isHeaderCell ? (
                      <div className="px-3 py-2 font-semibold bg-gray-50 text-gray-700 whitespace-nowrap">
                        {cell}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        className="w-full px-3 py-2 outline-none bg-transparent whitespace-nowrap"
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
