import React from "react";
import RMTVsTradeImgIcon from "@assets/icons/RMTVsTrade-1.svg";
import RMTVsTradeImgMobileIcon from "@assets/icons/RMTVsTradeMobile-1.svg";
const RMTVsTrade = () => {
  return (
    <div className="flex justify-center md:px-10 lg:px-14 xl:px-[0px] py-16 xl:py-24">
      <img
        className="hidden md:block"
        src={RMTVsTradeImgIcon}
        alt="RMTVsTrade"
      />
      <img
        className="md:hidden"
        src={RMTVsTradeImgMobileIcon}
        alt="RMTVsTradeImgMobileIcon"
      />
    </div>
  );
};

export default RMTVsTrade;
