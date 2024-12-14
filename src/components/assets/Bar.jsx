import React, { useState, useRef, useEffect } from "react";

const Bar = ({ profitRate, setProfitRate }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [barWidth, setBarWidth] = useState(430); // Default width
  const barRef = useRef(null); // Reference to the SVG element

  useEffect(() => {
    // Update the bar width dynamically for responsiveness
    const handleResize = () => {
      if (barRef.current) {
        setBarWidth(barRef.current.getBoundingClientRect().width);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const barRect = barRef.current.getBoundingClientRect();
      const offsetX = e.clientX - barRect.left;

      // Calculate new profit rate (clamp between 0 and 10)
      let newProfitRate = Math.round((offsetX / barWidth) * 100) / 10;
      newProfitRate = Math.max(0, Math.min(10, newProfitRate)); // Clamp between 0 and 10
      setProfitRate(newProfitRate);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const filledWidth = (profitRate / 10) * barWidth;
  const circlePosition = Math.max(12, Math.min(filledWidth, barWidth - 12)); // Ensure circle stays within bounds

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "pointer" }}
    >
      <svg
        ref={barRef}
        width="100%" // Make the bar responsive
        height="49"
        viewBox={`0 0 ${barWidth} 49`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMouseMove(e);
        }}
      >
        {/* Background Bar */}
        <rect
          x="0"
          y="16.246"
          width={barWidth}
          height="16.3383"
          rx="8.16914"
          fill="#01FF9D"
          fillOpacity="0.2"
        />
        {/* Filled Bar */}
        <rect
          x="0"
          y="16.246"
          width={filledWidth}
          height="16.3383"
          rx="8.16914"
          fill="#01FF9D"
        />
        {/* Draggable Circle */}
        <circle
          cx={circlePosition}
          cy="24.4152"
          r="23.9029"
          fill="url(#paint0_linear_203_8306)"
          onMouseDown={handleMouseDown}
        />
        <defs>
          <linearGradient
            id="paint0_linear_203_8306"
            x1="165.875"
            y1="24.4152"
            x2="213.68"
            y2="24.4152"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FC9E" />
            <stop offset="1" stopColor="#1C7EF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Bar;
