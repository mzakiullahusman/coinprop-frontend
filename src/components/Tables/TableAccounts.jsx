import React from "react";
import TableNoData from "./TableNoData";
const TableAccountsStandings = ({
  data,
  error,
  emptyMessage = "No data available",
}) => {
  return (
    <div className="lg:p-0 md:p-5 sm:p-3 gap-2 bg-sidebar rounded-2xl w-full border border-white/10">
      <div className="overflow-x-auto w-full rounded-lg">
        <table className="w-full text-left min-w-max">
          <thead className="bg-custom-cyan text-[12px] text-[#1c291b] sm:text-[5px] md:text-[12px] lg:text-[17px] font-thin">
            <tr>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1 font-normal">
                Performa No.
              </th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1 font-normal">
                Account Size
              </th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1 font-normal">Prize</th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1 font-normal">Time</th>
              <th className="p-2 lg:p-0 md:p-3 sm:p-1 font-normal">
                Account Platform
              </th>
              <th className="p-2 lg:p-4 md:p-3 sm:p-1 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {(Array.isArray(data) ? data : []).map((row, index) => (
              <tr key={index} className="text-[14px]">
                <td className="p-2 lg:p-4">{row.performa_no}</td>
                <td className="p-2 lg:p-4 sm:p-1">{row.account_size}</td>
                <td className="p-2 lg:p-4 sm:p-1 ">{row.prize}</td>
                <td className="p-2 lg:p-4 sm:p-1">{row.time}</td>
                <td className="p-2 lg:p-0 sm:p-1">{row.account_platform}</td>
                {row.status === "Active" ? (
                  <td className="p-2 lg:p-4 sm:p-1 flex items-center text-[#00FF47] bg-[#11332D]">
                    {row.status}
                  </td>
                ) : (
                  <td className="p-2 lg:p-4 sm:p-1 flex items-center text-[#FF0000] bg-[#2c1a27]">
                    {row.status}
                  </td>
                )}
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

export default TableAccountsStandings;
