import React from "react";
import ArrowUpIcon from "@assets/icons/ArrowUpIcon.svg";
const AboutUsComponent = () => {
  const tickList = [
    { 
      text: "High volatility",
      description: "Cryptocurrency markets are notoriously volatile, offering traders the potential for significant profits in a shorter timeframe compared to traditional markets. This volatility also creates more frequent opportunities for traders to capitalize on price movements.",
     },
    { 
      text: "24/7 market",
      description: "Unlike the traditional markets which operate on specific opening and closing times, crypto futures trading is available 24/7. This allows traders from all around the world to participate at any time they choose.",
    },
    { 
      text: "Decentralized market",
      description: "Cryptocurrency markets are decentralized, meaning they are not controlled by a central authority or institution. This adds an extra layer of security and transparency to the market.",
    },
    { 
      text: "High liquidity",
      description: "Crypto futures have high trading volumes, making it easier to execute. This also allows for tighter spreads, reducing trading costs for traders.",
    },
  ];
  return (
    <div className="flex flex-col items-start mt-8 w-full gap-8">
      {tickList.map((item, index) => (
        <div key={index} className="flex flex-col w-full gap-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-poppins font-semibold text-2xl">
                {item.text}
              </div>
              <div className="font-poppins text-base mt-2">
                {item.description}
              </div>
            </div>
            
          </div>
          {index !== tickList.length - 1 && (
            <div className="w-full h-[1px] bg-gradient-to-r from-[#2f466a00] via-[#2f466a] to-[#2f466a00]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUsComponent;
