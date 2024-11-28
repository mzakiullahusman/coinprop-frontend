import React from "react";
import ReactApexChart from "react-apexcharts";

import equityLegend from "../../assets/icons/equityLegend.svg";
import balanceLegend from "../../assets/icons/balanceLegend.svg";
import UserSelector from "../UserInputs/UserSelector";

const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const SingleLineAreaChart = () => {
  const handleSelectAccount = () => {
    console.log("handleSelectAccount");
  };

  const chartData = {
    series: [
      {
        name: "Equity",
        type: "area",
        data: [600, 230, 200, 800, 390, 108, 100, 900, 125, 600, 190, 550],
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
          format: "MM/yyyy",
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01-01-2024",
          "02-02-2024",
          "03-03-2024",
          "04-04-2024",
          "05-05-2024",
          "06-06-2024",
          "07-07-2024",
          "08-08-2024",
          "09-09-2024",
          "10-10-2024",
          "11-11-2024",
          "12-12-2024",
        ],
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
        type: "number",
        categories: [
          "0",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "1000",
        ],
        tickAmount: 5,
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
  };

  chartData.series[0].fill = {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#00E9FF05"],
      stops: [0, 25, 50, 75, 100],
    },
  };

  return (
    <div
      id="chart"
      className="rounded-2xl p-3 lg:p-6"
      style={{
        background: "rgba(21, 27, 25, 0.70)",
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
          <div className="ml-[20px]">
            {" "}
            <UserSelector
              options={selectOptions}
              placeholder="Account Select"
              onSelect={handleSelectAccount}
            />
          </div>
        </div>
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={450}
      />
    </div>
  );
};

export default SingleLineAreaChart;
