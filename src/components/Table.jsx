import React from "react";
import { Link } from "react-router-dom";

const Table = ({ contracts }) => {
  const riskColor = (risk) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left text-gray-600">Name</th>
            <th className="p-3 text-left text-gray-600">Parties</th>
            <th className="p-3 text-left text-gray-600">Expiry</th>
            <th className="p-3 text-left text-gray-600">Status</th>
            <th className="p-3 text-left text-gray-600">Risk</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((c) => (
            <tr
              key={c.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 font-medium text-blue-600 hover:underline">
                <Link to={`/contracts/${c.id}`}>{c.name}</Link>
              </td>
              <td className="p-3">{c.parties}</td>
              <td className="p-3">{c.expiry}</td>
              <td className="p-3">{c.status}</td>
              <td className={`p-3 font-semibold ${riskColor(c.risk)}`}>
                {c.risk}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
