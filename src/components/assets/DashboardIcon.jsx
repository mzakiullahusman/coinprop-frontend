import React from "react";

const DashboardIcon = ({ active }) => {
  return (
    <div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.62891 8.33398L7.62891 13.334"
          stroke={active ? "#01FF9D" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9619 10V13.3333"
          stroke={active ? "#01FF9D" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.2949 6.66602V13.3327"
          stroke={active ? "#01FF9D" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3.46191"
          y="2.5"
          width="15"
          height="15"
          rx="2"
          stroke={active ? "#01FF9D" : "white"}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default DashboardIcon;
