import React from "react";
import Minus from "@assets/icons/Minus.svg";
import Plus from "@assets/icons/Plus.svg";
import ProfitImage from "@assets/images/ProfitImage.png";
import MoneyPrices from "./MoneyPrices";
const Money = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 xl:gap-60 px-4 md:px-12 py-5 md:py-10 items-center">
      <div className="w-full flex flex-col gap-y-6 lg:w-1/2">
        <div className="text-[28px] text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          How much money
          <br /> can you make?
        </div>
        <div className="text-base text-white lg:text-lg font-poppins font-light">
          Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum
          tortor ut ac ullamcorper ac et facilisis.
        </div>
        <div className="flex justify-between items-center">
          <MoneyPrices />
        </div>
      </div>
      <div className="w-full flex flex-col p-5 lg:p-6 gap-9 lg:w-1/2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-[16px] ">
        <div className="font-poppins capitalize text-2xl font-medium text-center text-white lg:text-[32px]">
          estimate your profits!
        </div>

        <div className="flex flex-col gap-5">
          <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
            account size
          </div>
          <div className="rounded-full bg-transparent p-[2px] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0]">
            <div className="w-full flex justify-between items-center bg-gray-900 rounded-full p-3">
              <button>
                <img src={Minus} alt="Minus" />
              </button>
              <div className="font-poppins font-semibold capitalize text-[24px] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent lg:text-[30px]">
                $125,000
              </div>
              <button>
                <img src={Plus} alt="Plus" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
            Profit Rate
          </div>
          <div className="font-poppins font-semibold capitalize text-center text-2xl text-white lg:text-[30px]">
            5.7%
          </div>
        </div>

        <img src={ProfitImage} alt="ProfitImage" />

        <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
          Take Home on 97% profit split $6,413 /month
        </div>
        <div className="font-poppins font-normal capitalize text-center text-base text-white lg:text-[20px]">
          <span className="bg-gradient-to-r from-[#00fc9e] text-2xl lg:text-[40px] to-[#1c7ef0] text-transparent bg-clip-text">
            {" "}
            $6,413
          </span>
          <span className="text-base lg:text-[20px]">/Month</span>
        </div>
      </div>
    </div>
  );
};

export default Money;
