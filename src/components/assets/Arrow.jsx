import React from "react";

const Arrow = ({ direction }) => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={direction === "up" ? "rotate(180)" : ""}
    >
      <path
        d="M12.4198 0.951988L13.4798 2.01299L7.70277 7.79199C7.6102 7.88514 7.50012 7.95907 7.37887 8.00952C7.25762 8.05997 7.12759 8.08594 6.99627 8.08594C6.86494 8.08594 6.73491 8.05997 6.61366 8.00952C6.49241 7.95907 6.38233 7.88514 6.28977 7.79199L0.509766 2.01299L1.56977 0.952987L6.99477 6.37699L12.4198 0.951988Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;
