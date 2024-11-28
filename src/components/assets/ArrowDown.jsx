import React from "react";

const ArrowDown = ({ isPositive = false }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
      >
        <path
          d="M6.22494 7.65928C6.10071 7.78024 5.89929 7.78024 5.77506 7.65928L3.84381 5.77877C3.64341 5.58364 3.78534 5.25 4.06875 5.25L7.93125 5.25C8.21466 5.25 8.35659 5.58364 8.15619 5.77877L6.22494 7.65928Z"
          fill={isPositive ? "white" : "white"}
        />
      </svg>
    </div>
  );
};

export default ArrowDown;
