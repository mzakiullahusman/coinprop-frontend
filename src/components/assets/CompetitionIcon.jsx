import React from "react";

const CompetitionIcon = ({ active }) => {
  return (
    <div>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3408 8.40039L11.9633 11.9666C11.5374 12.6055 10.5802 12.5459 10.2369 11.8591L10.1114 11.6083C9.76807 10.9216 8.81088 10.862 8.38497 11.5008L6.00749 15.0671"
          stroke="#8A8A8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="2.67432"
          y="3.40039"
          width="15"
          height="15"
          rx="2"
          stroke="#8A8A8A"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default CompetitionIcon;
