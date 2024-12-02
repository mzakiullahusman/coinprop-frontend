import React from "react";

const ArrowLeft = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_105_367)">
        <rect
          x="0.700806"
          y="0.932129"
          width="31"
          height="31"
          rx="15.5"
          stroke="white"
        />
        <path
          d="M23.2008 16.4321H9.20081M9.20081 16.4321L16.2008 23.4321M9.20081 16.4321L16.2008 9.43213"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_105_367"
          x="-7.79919"
          y="-7.56787"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_105_367"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_105_367"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
