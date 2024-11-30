import React from "react";
import { Button, Chip, LinearProgress } from "@mui/material";

import timeDivider from "../../assets/icons/timeDivider.svg";

import styles from "./cards.module.css";

const CompetitionCardPrev = ({
  name,
  status,
  trophyImg,
  isActive = true,
  contestants,
  prizePool = "Challenge Account",
  percentageCompletion,
  timeLeft,
  buttonOne,
  buttonHandlerOne,
  buttonTwo,
  buttonHandlerTwo,
  buttonThree,
  buttonHandlerThree,
}) => {
  return (
    <div className={`${styles.competitionCard} w-full`}>
      <div className="gap-[6px]">
        <h3 className="text-[24px] font-medium">{name}</h3>
        <Chip
          label={status}
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
      <div className="w-full flex justify-center">
        {/* <img src={trophyImg} alt="trophy" className="w-[94px] h-[94px]" /> */}
        <img
          src={trophyImg}
          alt="trophy"
          className={`w-[94px] h-[94px] ${
            isActive ? "opacity-100" : "opacity-50"
          }`}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-[14px]">Contestants</p>
        <h3 className="text-[20px] sm:text-[24px] text-[#D974F3] font-bold">
          {contestants}
        </h3>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-[14px]">Prize Pool</p>
        <p className="text-[14px]">{prizePool}</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-[16px]">0%</p>
          <p className="text-[16px]">100%</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={percentageCompletion}
          sx={{
            width: "100%",
            color: "#D974F3",
            backgroundColor: "#979797",
            borderRadius: "50px",
            "& .MuiLinearProgress-root": {
              color: "#D974F3",
            },
            "& .MuiLinearProgress-bar1": {
              color: "#D974F3",
            },
          }}
        />
      </div>
      <p className="text-[14px]">Time Left</p>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[20px] sm:text-[24px] font-medium">00</p>
          <p className="text-[14px]">Days</p>
        </div>
        <img src={timeDivider} alt="divider" />
        <div className="flex flex-col gap-[6px]">
          <p className="text-[20px] sm:text-[24px] font-medium">00</p>
          <p className="text-[14px]">Hours</p>
        </div>
        <img src={timeDivider} alt="divider" />
        <div className="flex flex-col gap-[6px]">
          <p className="text-[20px] sm:text-[24px] focompnt-medium">00</p>
          <p className="text-[14px]">Minutes</p>
        </div>
        <img src={timeDivider} alt="divider" />
        <div className="flex flex-col gap-[6px]">
          <p className="text-[20px] sm:text-[24px] font-medium">00</p>
          <p className="text-[14px]">Seconds</p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        <Button variant="containedGradient" onClick={buttonHandlerOne}>
          {buttonOne}
        </Button>
        <Button variant="containedGradient" onClick={buttonHandlerTwo}>
          {buttonTwo}
        </Button>
        <Button variant="containedGradient" onClick={buttonHandlerThree}>
          {buttonThree}
        </Button>
      </div>
    </div>
  );
};

export default CompetitionCardPrev;
