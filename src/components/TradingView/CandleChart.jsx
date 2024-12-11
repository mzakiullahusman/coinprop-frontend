import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import TransactionTable from "./TransactionTable";

const CandleChart = () => {
  const [series, setSeries] = useState([
    {
      name: "CandleStick",
      data: [
        // Example data: [timestamp, open, high, low, close]
        {
          x: new Date("2024-12-07T00:00:00").getTime(),
          y: [256, 258.5, 255.5, 257],
        },
        {
          x: new Date("2024-12-07T01:00:00").getTime(),
          y: [257, 259, 256.5, 258],
        },
        // Add more data points here
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.binance.com/api/v3/klines?symbol=SOLUSDT&interval=1h"
      );
      const data = await response.json();

      const formattedData = data.map((item) => ({
        x: new Date(item[0]), // Timestamp
        y: [item[1], item[2], item[3], item[4]], // Open, High, Low, Close
      }));

      setSeries([{ name: "CandleStick", data: formattedData }]);
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      background: "#141D2B", // Dark background
    },
    title: {
      text: "SOL/USDT",
      align: "left",
      style: {
        color: "#d1d5db", // White title text
        fontSize: "16px",
        fontWeight:"normal"
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#d1d5db", // White x-axis labels
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#d1d5db", // White y-axis labels
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      theme: "dark", // Tooltip text color will match the dark theme
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#27AE60", // Green for upward candles
          downward: "#EB5757", // Red for downward candles
        },
      },
    },
  };

  return (
    <div className="border-r-2 border-r-custom-border overflow-x-auto lg:overflow-x-hidden">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height="460"
        width="100%"
      />
      <TransactionTable />
    </div>
  );
};

export default CandleChart;
