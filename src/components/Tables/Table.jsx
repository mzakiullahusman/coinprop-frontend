import React from "react";
import { formatDate, getMonth } from "../../utils/formatDate";

const Table = ({ headers, tableData }) => {
  const getImpactClass = (impact) => {
    switch (impact) {
      case "High":
        return "text-[#ff4d4f] border-[#ff4d4f]";
      case "Medium":
        return "text-[#ff9f43] border-[#ff9f43]";
      case "Low":
        return "text-[#00c88c] border-[#00c88c]";
      default:
        return "text-white border-white";
    }
  };

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-[#2A80B3]">
        <tr>
          {headers.map((header) => (
            <th key={header.key} className="px-4 py-3 font-normal text-sm">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-[#11152e]">
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {formatDate(row?.publishedDate)}
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white font-[lexend]">
              <span
                className={`border-2 py-2 border-opacity-20 px-5 rounded-[8px] font-[lexend] ${getImpactClass(
                  row.impact
                )}`}
              >
                {row.impact}
              </span>
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {row.event}
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {row.country}
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {row.currency}
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {row.changePercentage}
            </td>
            <td className="px-4 py-5 font-normal text-sm text-white text-opacity-80 font-[lexend]">
              {row.previous}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
