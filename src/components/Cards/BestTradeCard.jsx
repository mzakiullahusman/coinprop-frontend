import React from "react";
import { Button } from "@mui/material";

import styles from "./cards.module.css";

const BestTradeCard = ({
  avatarSrc,
  name,
  withdrawAmount,
  symbol,
  accountSize,
  openPrice,
  closePrice,
  openTime,
  closeTime,
  sellHandler,
}) => {
  return (
    <div className={`${styles.bestTradeCard} w-full lg:min-w-[556px]`}>
      <div className="flex justify-start items-center w-full">
        <div className="flex gap-2">
          <img src={avatarSrc} alt="Trader Avatar" />
          <h3>{name}</h3>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <p className="text-[14px]">Withdraw</p>
        <h3 className="text-[20px] sm:text-[24px] text-[#D974F3] font-bold">
          {withdrawAmount}
        </h3>
      </div>

      <div className="flex justify-between w-full">
        <div className="w-[47%] flex flex-col justify-center gap-6 items-start">
          <div>
            <p className="text-[14px]">Symbol</p>
            <h3 className="text-[20px] sm:text-[24px]">{symbol}</h3>
          </div>
          <div>
            <p className="text-[14px]">Open Price</p>
            <h3 className="text-[20px] sm:text-[24px]">{openPrice}</h3>
          </div>
          <div>
            <p className="text-[14px]">Open Time</p>
            <h3 className="text-[20px] sm:text-[24px] font-semibold">
              {openTime}
            </h3>
          </div>
        </div>
        <div className="w-[47%] flex flex-col justify-center gap-6 items-start">
          {" "}
          <div>
            <p className="text-[14px]">Account Size</p>
            <h3 className="text-[20px] sm:text-[24px]">{accountSize}</h3>
          </div>
          <div>
            <p className="text-[14px]">Close Price</p>
            <h3 className="text-[20px] sm:text-[24px]">{closePrice}</h3>
          </div>
          <div>
            <p className="text-[14px]">Close Time</p>
            <h3 className="text-[20px] sm:text-[24px] font-semibold">
              {closeTime}
            </h3>
          </div>
        </div>
      </div>

      <Button variant="containedGradient" onClick={sellHandler}>
        Sell
      </Button>
    </div>
  );
};

export default BestTradeCard;
