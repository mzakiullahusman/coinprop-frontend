import React from "react";

const LiveNewsIcon = ({ active }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <rect
          x="1.66602"
          y="3.11719"
          width="16.6667"
          height="15"
          rx="4"
          stroke={active ? "white" : "white"}
          strokeWidth="1.5"
        />
        <path
          d="M8.94721 8.00754L12.3778 9.72284C13.1149 10.0914 13.1149 11.1432 12.3778 11.5117L8.94721 13.227C8.28231 13.5594 7.5 13.076 7.5 12.3326V8.90197C7.5 8.15859 8.28231 7.67509 8.94721 8.00754Z"
          stroke={active ? "white" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LiveNewsIcon;
