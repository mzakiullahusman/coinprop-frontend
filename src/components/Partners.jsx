import React from "react";
// import BgImage1 from "../assets/Images/BgImage1.png";
import Yahoo from "@assets/icons/Yahoo.svg";
import Bloomberg from "@assets/icons/Bloomberg.svg";
import Benzinga from "@assets/icons/Benzinga.svg";
import MarketWatch from "@assets/icons/MarketWatch.svg";
const Partners = () => {
  const partnersData = [Bloomberg, MarketWatch, Yahoo, Benzinga];
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={
        {
          // backgroundImage: `url(${BgImage1})`,
        }
      }
    >
      <div className="px-4 md:px-12 py-5 md:py-10">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <div className="border-white font-poppins border border-opacity-20 text-white rounded-full px-3 py-1 font-normal text-base">
            Partners
          </div>
          <div className="text-[28px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[80px] text-white lg:text-[50px] xl:text-[64px] font-redhat font-medium">
            Partners of Ace Funded
          </div>
          <div className="text-base text-white lg:text-[20px] font-redhat font-normal">
            Trade the way you want , how you want , for as long as you want...
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-24 py-12">
          {partnersData.map((item, i) => (
            <div key={i} className="flex justify-center items-center">
              <img src={item} alt={`Partner ${i}`} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
