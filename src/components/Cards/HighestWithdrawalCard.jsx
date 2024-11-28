import React from "react";
import { Chip } from "@mui/material";

import styles from "./cards.module.css";

const HighestWithdrawalCard = ({
  avatarSrc,
  name,
  countryFlag,
  country,
  position,
  trophySrc,
  withdrawAmount,
  daysFunded,
  accountType = "Express Challenge",
  startBalance,
}) => {
  return (
    <div className={`${styles.highestWithdrawalCard} w-full`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <img src={avatarSrc} alt="Trader Avatar" />
          <div className="flex flex-col items-start">
            <div className="flex text-[20px] sm:text-[24px] gap-[6px]">
              <h3>{name} - </h3>
              <img src={countryFlag} alt="Country Flag" />
              <h3>{country}</h3>
            </div>
            <p className="ml-[10px] text-[14px]">{position}</p>
          </div>
        </div>
        <div>
          <img src={trophySrc} alt="Trader Avatar" />
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <p className="text-[14px]">Withdraw</p>
        <h3 className="text-[24px] text-[#D974F3] font-bold">
          {withdrawAmount}
        </h3>
      </div>

      <div className="flex justify-between items-center w-full flex-wrap sm:flex-nowrap">
        <div>
          <p className="text-[14px]">Days Funded</p>
          <h4 className="text-[24px]">{daysFunded}</h4>
        </div>
        <div>
          <p className="text-[14px]">Account Type</p>
          <Chip
            label={accountType}
            variant="outlined"
            sx={{
              fontFamily: "Arial",
              fontSize: "16px",
              fontWeight: 400,
              color: "#D974F3",
              background: "transparent",
              borderRadius: "4px",
              border: "1.167px solid var(--Highlight-30, #D974F3)",
            }}
          />
        </div>
        <div>
          <p className="text-[14px]">Starting Balance</p>
          <h4 className="text-[24px]">{startBalance}</h4>
        </div>
      </div>
    </div>
  );
};

export default HighestWithdrawalCard;
