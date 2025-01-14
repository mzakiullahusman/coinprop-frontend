import React from "react";
import RMTRight from "./RMTRight";

const RMT = () => {
  const tickList = [
    { 
      text: "Generous Profit Sharing",
      description: "Earn 90% of your profits with quick, reliable weekly payouts.",
    },
    { 
      text: "Guaranteed Payouts",
      description: "We guarantee your payouts - no exceptions.",
    },
    { 
      text: "1-Step Evaluation Process",
      description: "Prove your trading abilities and start trading with real capital quickly.",
    },
    { 
      text: "Advanced Crypto Prop Trading Platform (CPX)",
      description: "Trade with institutional-grade tools and real-time data from top exchanges.",
    },
    { 
      text: "Access a Diverse Range of Trending Crypto Assets",
      description: "Trade over 50+ cryptocurrencies with best-in-class execution. We constantly update our asset listings to ensure our traders can benefit fully from the dynamic crypto world.",
    },
    { 
      text: "Join a Thriving Community of Traders",
      description: "Join our Discord and connect with other traders, share insights, and learn from experienced professionals.",
    },
    { 
      text: "Transparency",
      description: "A public CEO and Legal Canadian company ensure accountability and trust at every level.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-y-16 px-4 md:px-12 xl:px-20 2xl:px-32 py-5  md:py-10">
      <div className="w-full items-start flex flex-col gap-y-7">
        <RMTRight tickList={tickList} />
      </div>
    </div>
  );
};

export default RMT;
