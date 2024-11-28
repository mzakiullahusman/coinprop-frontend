// DoubleLineAreaChart.jsx
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

import equityLegend from "../../assets/icons/equityLegend.svg";
import balanceLegend from "../../assets/icons/balanceLegend.svg";
import UserSelector from "../UserInputs/UserSelector";

const selectOptions = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const DoubleLineAreaChart = ({
  balanceEquityData,
  onTimeframeChange,
  selectedTimeframe,
}) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    if (balanceEquityData && balanceEquityData.length > 0) {
      const equitySeries = balanceEquityData.map((item) => item.equity);
      const balanceSeries = balanceEquityData.map((item) => item.balance);
      const categories = balanceEquityData.map((item) => item.timestamp);

      setChartData({
        series: [
          {
            name: "Equity",
            type: "area",
            data: equitySeries,
          },
          {
            name: "Balance",
            type: "area",
            data: balanceSeries,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            height: 500,
            type: "line",
          },
          stroke: {
            width: 2,
            curve: "smooth",
          },
          markers: {
            size: 0,
            hover: {
              size: 10,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              format: "dd MMM yyyy HH:mm",
            },
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "white",
              backgroundColor: "black",
            },
            theme: "dark",
          },
          xaxis: {
            type: "datetime",
            categories: categories,
            tickAmount: 10,
            labels: {
              style: {
                colors: "#A9A9A9",
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#40475D",
            strokeDashArray: 5,
          },
          yaxis: {
            labels: {
              style: {
                colors: "#A9A9A9",
              },
            },
          },
          colors: ["#D974F3", "#FFFFFF20"],
          legend: {
            show: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: ["#D974F330"],
              stops: [0, 25, 50, 75, 100],
            },
          },
        },
      });
    }
  }, [balanceEquityData]);

  const handleSelectDuration = (selectedOption) => {
    onTimeframeChange(selectedOption);
  };

  if (chartData.series.length > 0) {
    chartData.series[0].fill = {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ["#00E9FF05"],
        stops: [0, 25, 50, 75, 100],
      },
    };

    chartData.series[1].fill = {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#00000005"],
        stops: [0, 25, 50, 75, 100],
      },
    };
  }

  return (
    <div
      id="chart"
      className="rounded-2xl p-3 lg:p-6 w-full border border-[#3d4054]"
      style={{
        background: "#0c1029",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        id="chart-header"
        className="flex justify-between items-center w-full"
      >
        <h2 className="text-[16px] mr-2">Overview</h2>
        <div className="flex items-center gap-[10px] md:gap-[20px]">
          <div className="flex items-center gap-[5px] md:gap-[10px]">
            <img src={equityLegend} alt="legend" />
            <h2 className="text-[14px] text-[#9A9A9A]">Equity</h2>
          </div>
          <div className="flex items-center gap-[5px] md:gap-[10px]">
            <img src={balanceLegend} alt="legend" />
            <h2 className="text-[14px] text-[#9A9A9A]">Balance</h2>
          </div>
          {/* TODO: implement the filters  */}
          {/* <div className="ml-[20px]">
            <UserSelector
              options={selectOptions}
              placeholder="Select Timeframe"
              value={selectedTimeframe}
              onChange={handleSelectDuration}
            />
          </div> */}
        </div>
      </div>
      {chartData.series.length > 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={450}
        />
      ) : (
        <div className="flex justify-center items-center h-[450px]">
          <p className="text-[16px]">Not enough data available</p>
        </div>
      )}
    </div>
  );
};

export default DoubleLineAreaChart;
