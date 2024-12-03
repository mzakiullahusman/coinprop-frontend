import React from "react";
import GaugeChart from "react-gauge-chart";

const GaugeCard = ({ title, value, minValue, maxValue, color }) => {
  // Normalize value for GaugeChart (it accepts values between 0 and 1)
  const normalizedValue = (value - minValue) / (maxValue - minValue);

  // Calculate segment colors dynamically
  const segmentColors = [color, "#303841"];
  const arcLength = normalizedValue; // Portion of the arc that is colored

  return (
    <div className="bg-sidebar p-6 rounded-lg text-white flex flex-col items-center space-y-3 w-auto">
      <h3 className="text-2xl text-center">{title}</h3>
      <GaugeChart
        id={`gauge-chart-${title}`}
        nrOfLevels={2} // Two levels: colored and gray
        arcsLength={[arcLength, 1 - arcLength]} // Define arc distribution
        colors={segmentColors}
        percent={normalizedValue}
        arcWidth={0.3}
        needleColor="#fff"
        textColor="#fff"
        hideText
      />
      <div className="flex justify-around items-center w-full">
        <span className="bg-gray-800 px-3 py-1 rounded-md text-xl">
          {minValue}
        </span>
        <span className="text-xl">{`$${value}`}</span>
        <span className="bg-gray-800 px-3 py-1 rounded-md text-xl">
          {maxValue}
        </span>
      </div>
    </div>
  );
};

export default GaugeCard;
