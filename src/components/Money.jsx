import React, { useState } from "react";
import Minus from "@assets/icons/Minus.svg";
import Plus from "@assets/icons/Plus.svg";
import Bar from "@components/assets/Bar";
// import ProfitImage from "@assets/images/ProfitImage.png";
import MoneyPrices from "./MoneyPrices";
const Money = () => {
  const [profitRate, setProfitRate] = useState(5.7);

  const [value, setValue] = useState(25000);

  const takeHomeProfit = Math.round((profitRate / 100) * value);

  const handleIncrease = () => {
    if (value < 100000) {
      setValue((prevValue) => 
        prevValue === 5000 ? 10000 : 
        prevValue === 10000 ? 25000 :
        prevValue === 25000 ? 50000 :
        100000
      );
    }
  };

  const handleDecrease = () => {
    if (value > 5000) {
      setValue((prevValue) => 
        prevValue === 10000 ? 5000 : 
        prevValue === 25000 ? 10000 :
        prevValue === 50000 ? 25000 :
        prevValue === 100000 ? 50000 :
        5000
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 xl:gap-60 px-4 mt-20 md:px-12 xl:px-20 2xl:px-32 py-5 md:py-10 items-center">
      <div className="w-full flex flex-col gap-y-6 lg:w-1/2 xl:w-[55%]">
        <div className="text-[28px] text-white capitalize lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          How much money
          <br /> can you make?
        </div>
        <div className="text-base text-white lg:text-lg font-poppins font-light">
          Start your journey as a crypto trader without risking your own money! Research shows that experienced traders can achieve consistent monthly profits, often ranging from 5-15% in returns. Use our calculator to estimate your potential earnings based on your trading skills and account size.
        </div>
        <div className="flex justify-between 2xl:justify-start 2xl:gap-32 items-center">
          <MoneyPrices />
        </div>
      </div>
      <div className="w-full flex flex-col p-5 lg:p-6 xl:p-12 gap-9 lg:w-1/2 xl:w-[45%] bg-white bg-opacity-[4%] border border-white border-opacity-[10%] rounded-[16px] ">
        <div className="font-poppins capitalize text-2xl font-medium text-center text-white lg:text-[32px]">
          estimate your profits!
        </div>

        <div className="flex flex-col gap-5">
          <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
            account size
          </div>
          <div className="rounded-full bg-white p-[2px] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0]">
            <div className="w-full flex justify-between items-center bg-gray-800 rounded-full p-3">
              <button onClick={handleDecrease}>
                <img src={Minus} alt="Minus" />
              </button>
              <div className="font-poppins font-semibold capitalize text-[24px] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent lg:text-[30px]">
                {/* $125,000 */} ${value.toLocaleString()}
              </div>
              <button onClick={handleIncrease}>
                <img src={Plus} alt="Plus" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-5">
          <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
            Profit Rate
          </div>
          <div className="font-poppins font-semibold capitalize text-center text-2xl text-white lg:text-[30px]">
            5.7%
          </div>
        </div> */}
        {/* <Bar /> */}
        {/* <img src={Bar} alt="Bar" /> */}

        <div className="flex flex-col gap-5 items-center">
          <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
            Profit Rate
          </div>
          <div className="font-poppins font-semibold capitalize text-center text-2xl text-white lg:text-[30px]">
            {profitRate}%
          </div>
          <Bar profitRate={profitRate} setProfitRate={setProfitRate} />
        </div>

        <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
          Take Home on 97% profit split: ${takeHomeProfit}/month
        </div>
        <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
          <span className="bg-gradient-to-r from-[#00fc9e] text-2xl lg:text-[40px] to-[#1c7ef0] text-transparent bg-clip-text">
            {" "}
            ${takeHomeProfit}
          </span>
          <span className="text-base lg:text-[20px]">/Month</span>
        </div>
      </div>
    </div>
  );
};

export default Money;
