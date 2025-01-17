import React, { useState } from "react";

const TransactionTable = () => {
  const trades = [
    {
      id: 1,
      contract: "SOL/USDT",
      time: "2024-04-12",
      timeDetail: "11:04:05:00",
      side: "Close Long",
      finalPrice: "246.24",
      amount: "84.02",
      role: "Taker",
      type: "long",
      fees: -127.5,
    },
    {
      id: 2,
      contract: "SOL/USDT",
      time: "2024-04-12",
      timeDetail: "11:04:05:00",
      side: "Close Short",
      finalPrice: "246.24",
      amount: "84.02",
      role: "Taker",
      type: "short",
      fees: 500.2,
    },
  ];

  const [activeTab, setActiveTab] = useState("Positions");

  const tabs = [
    "Positions",
    "Open Orders",
    "Order History",
    "Position History",
    "Transaction Details",
    "Transaction History",
  ];

  return (
    <div className=" text-white p-4">
      <div className="bg-sidebar flex justify-between mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t-lg text-sm ${
              activeTab === tab ? " text-custom-cyan" : " text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-1">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left p-2 font-thin text-sm">Contract:</th>
              <th className="text-left p-2 font-thin text-sm">Time:</th>
              <th className="text-left p-2 font-thin text-sm">Side:</th>
              <th className="text-left p-2 font-thin text-sm">Final Price:</th>
              <th className="text-left p-2 font-thin text-sm">Amount:</th>
              <th className="text-left p-2 font-thin text-sm">Role:</th>
              <th className="text-left p-2 font-thin text-sm">Fees:</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} className="bg-sidebar text-sm">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span>{trade.contract}</span>
                    <span className="text-xs text-gray-400">{">"}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.time}</span>
                    <span className="text-xs text-custom-cyan">
                      {trade.timeDetail}
                    </span>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={
                      trade.type === "long" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {trade.side}
                  </span>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.finalPrice}</span>
                    <span className="text-xs text-custom-cyan">USDT</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.amount}</span>
                    <span className="text-xs text-custom-cyan">SOL/USDT</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.role}</span>
                    <span className="text-xs text-gray-400">Long</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    {trade.fees > 0 ? (
                      <span className="text-custom-cyan">{trade.fees}</span>
                    ) : (
                      <span className="text-red-500">{trade.fees}</span>
                    )}
                    <span className="text-xs text-gray-400">USDT</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
