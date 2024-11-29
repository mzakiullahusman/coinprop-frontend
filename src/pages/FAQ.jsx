import React from "react";

import FAQFunded from "../components/FAQFunded";

import AceFundedTrader from "../components/AceFundedTrader";
import Trading from "@assets/icons/Trading.svg";
import Bulb1 from "@assets/icons/Bulb1.svg";
import Raw from "@assets/icons/Raw.svg";
import RocketIcon1 from "@assets/icons/RocketIcon1.svg";
import AceFunding from "../components/AceFunding";
const FAQ = () => {
  const highlights = [
    "Lowest Spreads in the Industry",
    "Spreads Starting From 0.0",
    "True Market Pricing & Execution",
  ];

  const fundedWorksData = [
    {
      icon: Raw,
      title: "RAW or All-In Pricing Feeds.",
      description:
        "It is a long established fact that a reader will be distracted",
    },
    {
      icon: Bulb1,
      title: "300+ Trading Instruments In Fastfund.",
      description:
        "It is a long established fact that a reader will be distracted",
    },
    {
      icon: RocketIcon1,
      title: "Trader-friendly Leverage.",
      description:
        "It is a long established fact that a reader will be distracted",
    },
    {
      icon: Trading,
      title: "All Types Of Trading Platforms.",
      description:
        "It is a long established fact that a reader will be distracted",
    },
  ];

  return (
    <>
      <FAQFunded />
      <AceFundedTrader />
      <AceFunding
        mainData={fundedWorksData}
        highlights={highlights}
        text="Features"
        title="How Ace Funded Works?"
        description="Trade With Our Capital and Keep Up To 95% Of The Profit."
        index={false}
      />
    </>
  );
};

export default FAQ;
