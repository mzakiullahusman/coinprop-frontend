// import React from "react";

// const Bar = () => {
//   return (
//     <div>
//       <svg
//         width="401"
//         height="49"
//         viewBox="0 0 401 49"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="0.0494347"
//           y="16.246"
//           width="400.951"
//           height="16.3383"
//           rx="8.16914"
//           fill="#01FF9D"
//           fill-opacity="0.2"
//         />
//         <rect
//           x="0.0494347"
//           y="16.246"
//           width="182.436"
//           height="16.3383"
//           rx="8.16914"
//           fill="#01FF9D"
//         />
//         <circle
//           cx="189.777"
//           cy="24.4152"
//           r="23.9029"
//           fill="url(#paint0_linear_203_8306)"
//         />
//         <defs>
//           <linearGradient
//             id="paint0_linear_203_8306"
//             x1="165.875"
//             y1="24.4152"
//             x2="213.68"
//             y2="24.4152"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stop-color="#00FC9E" />
//             <stop offset="1" stop-color="#1C7EF0" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default Bar;

import React from "react";

const Bar = ({ profitRate }) => {
  const totalWidth = 400.951; // Total width of the bar in the SVG
  const filledWidth = (profitRate / 10) * totalWidth; // Calculate width based on profit rate
  const circlePosition = filledWidth; // Circle position matches the end of the filled bar

  return (
    <div>
      <svg
        width="401"
        height="49"
        viewBox="0 0 401 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Bar */}
        <rect
          x="0.0494347"
          y="16.246"
          width="400.951"
          height="16.3383"
          rx="8.16914"
          fill="#01FF9D"
          fillOpacity="0.2"
        />
        {/* Filled Bar */}
        <rect
          x="0.0494347"
          y="16.246"
          width={filledWidth}
          height="16.3383"
          rx="8.16914"
          fill="#01FF9D"
        />
        {/* Circle */}
        <circle
          cx={circlePosition}
          cy="24.4152"
          r="23.9029"
          fill="url(#paint0_linear_203_8306)"
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
