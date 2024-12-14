import React from "react";

const MoneyPrices = ({ textSize }) => {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <div
          className={`font-poppins bg-gradient-to-r text-center from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent font-semibold ${
            textSize === "big"
              ? "text-[38px] lg:text-[64px] leading-[96px]"
              : "lg:text-[37px]"
          } text-2xl `}
        >
          41.5%
        </div>
        {textSize === "big" && (
          <div className="font-normal text-lg text-white font-poppins">
            Bitcoin Dominance
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-1">
        <div
          className={`font-poppins bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent font-semibold ${
            textSize === "big"
              ? "text-[38px] lg:text-[64px] text-center leading-[96px]"
              : "lg:text-[37px]"
          } text-2xl `}
        >
          $2.5T
        </div>

        {textSize === "big" && (
          <div className="font-normal text-lg text-white font-poppins">
            Total Market Capitalization
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-1">
        <div
          className={`font-poppins bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent font-semibold ${
            textSize === "big"
              ? "text-[38px] lg:text-[64px] text-center leading-[96px]"
              : "lg:text-[37px]"
          } text-2xl `}
        >
          $300B
        </div>
        {textSize === "big" && (
          <div className="font-normal text-lg text-white font-poppins">
            24-Hour Trading Volume
          </div>
        )}
      </div>
    </>
  );
};

export default MoneyPrices;
