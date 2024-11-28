import React from "react";
import TableNoData from "./TableNoData";
const TableStandings = ({
  data,
  error,
  emptyMessage = "No data available",
}) => {
  const getRankBackground = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-b from-[#6746E1] to-[#D974F3]";
      case 2:
        return "bg-gradient-to-b from-[#CBCBCB] to-[#A1A1A1]";
      case 3:
        return "bg-gradient-to-b from-[#CB7A61] to-[#A8573E]";
      default:
        return "bg-[#0A0A0A]";
    }
  };

  return (
    <div
      className="lg:p-5 md:p-5 sm:p-3 gap-6 bg-[#11152e] rounded-2xl w-full"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      <div className="overflow-x-auto w-full rounded-lg">
        <table className="w-full text-left min-w-max">
          <thead className="bg-[#2A80B3] text-[12px] sm:text-[5px] md:text-[12px] lg:text-[14px]">
            <tr>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Rank</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Name</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Profit</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Account Size</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Percent Gain</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1">Country</th>
            </tr>
          </thead>
          <tbody>
            {(Array.isArray(data) ? data : []).map((row, index) => (
              <tr key={index} className="text-[14px]">
                <td className="p-2 lg:p-4">
                  <div
                    className={`flex justify-center items-center w-7 h-7 rounded-lg border border-[rgba(255,255,255,0.1)] ${getRankBackground(
                      row.rank
                    )}`}
                  >
                    {row.rank}
                  </div>
                </td>
                <td className="p-2 lg:p-4 sm:p-1">{row.name}</td>
                <td className="p-2 lg:p-4 sm:p-1 ">{row.profit}</td>
                <td className="p-2 lg:p-4 sm:p-1">{row.account_size}</td>
                <td className="p-2 lg:p-4 sm:p-1 ">{row.percent_gain}</td>
                <td className="p-2 lg:p-4 sm:p-1 flex items-center">
                  {row.country && (
                    <img
                      src={`https://flagcdn.com/w20/${row.country.toLowerCase()}.png`}
                      alt={`${row.country} flag`}
                      className="mr-2 w-[30px]"
                    />
                  )}
                  {row.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error ||
          (data.length === 0 && <TableNoData emptyMessage={emptyMessage} />)}
      </div>
    </div>
  );
};

export default TableStandings;
