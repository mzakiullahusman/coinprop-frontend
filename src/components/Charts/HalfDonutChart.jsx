import React, { useEffect, useState } from "react";
import ArcProgress from "react-arc-progress";

import daysChartLegend from "../../assets/icons/daysChartLegend.svg";

import styles from "./charts.module.css";

const progress = 1;
const text = "Unlimited";
const fillColor = { gradient: ["#2A80B3", "#3d4054"] };
const textStyle = {
  color: "#ffffff",
  size: "24px",
  font: "Arial",
};

const HalfDonutChart = () => {
  const [size, setSize] = useState(window.innerWidth < 768 ? 320 : 390);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 768 ? 320 : 390);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  {
    return (
      <div className={`border border-[#3d4054] ${styles.halfDonutChartContainer}`}>
        <h2 className="text-[20px] lg:text-[24px] font-medium text-start w-full">
          {/* Current Days  */}
          Days left
        </h2>
        <div
          style={{
            position: "relative",
            top: "55px",
          }}
        >
          <ArcProgress
            progress={progress}
            text={text}
            textStyle={textStyle}
            size={size}
            fillColor={fillColor}
            thickness="60"
            fillThickness="#000000"
            emptyColor="#303030"
            arcStart={180}
            arcEnd={360}
          />
        </div>
        {/* <div className="flex items-center justify-between w-full">
          <div className="flex gap-[11px]">
            <img src={daysChartLegend} alt="legend" />
            <p className="text-[14px]">Days left</p>
          </div>
          <p className="text-[18px] font-semibold">23 Days</p>
        </div> */}
      </div>
    );
  }
};

export default HalfDonutChart;
