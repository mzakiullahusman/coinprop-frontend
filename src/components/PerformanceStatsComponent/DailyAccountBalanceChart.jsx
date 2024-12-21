import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DailyAccountBalanceChart = () => {
  // Dummy data
  const data = [
    { month: "Jan", balance: 2000 },
    { month: "Feb", balance: 4000 },
    { month: "Mar", balance: 6000 },
    { month: "Apr", balance: 7980 },
    { month: "May", balance: 5000 },
    { month: "Jun", balance: 8000 },
    { month: "Jul", balance: 4000 },
    { month: "Aug", balance: 2000 },
    { month: "Sep", balance: 7000 },
    { month: "Oct", balance: 8500 },
    { month: "Nov", balance: 3000 },
    { month: "Dec", balance: 5000 },
  ];

  const [category, setCategory] = useState("Spending");
  const [year, setYear] = useState("2022");

  return (
    <div className="bg-sidebar p-8 rounded-lg text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Daily Account Balance</h2>
        <div className="flex items-center space-x-2">
          {/* Dropdown for category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm"
          >
            <option value="Spending">Spending</option>
            <option value="Savings">Savings</option>
            <option value="Investments">Investments</option>
          </select>

          {/* Dropdown for year */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm"
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 30, bottom: 10 }}
          fontSize={15}
        >
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2d3748",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
              fontSize: "0.7rem",
            }}
          />
          <Bar
            dataKey="balance"
            fill="#01FF9D"
            radius={[50, 50, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyAccountBalanceChart;
