import { Button } from "@mui/material";
import React from "react";

const LiveCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-[#11152e] text-white rounded-[20px] border-[1px] border-opacity-10 border-white p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-base font-[lexend] sm:text-[20px] xl:text-2xl font-medium text-[#2A80B3] mb-2">
              {card.source_name}
            </h2>

            <h3 className="text-sm font-[lexend] font-medium text-white mb-3 w-full">
              {card.title}
            </h3>

            <div className="rounded-[6px] inline-flex mb-4 bg-[#2A80B3] bg-opacity-10 px-2 py-[5px] text-left text-xs font-[lexend] text-[#2A80B3] font-medium">
              {card.date}
            </div>

            <p className="text-[#999f9f] font-[lexend] leading-[24px] font-normal text-xs mb-6">
              {card.text}
            </p>
          </div>
          <Button
            variant="containedGradient"
            onClick={() => window.open(card.news_url)}
          >
            Read More
          </Button>
        </div>
      ))}
    </div>
  );
};

export default LiveCard;
