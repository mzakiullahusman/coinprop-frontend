import React from "react";
import AceFunding from "../components/AceFunding";
import SupportIcon from "../assets/Icons/SupportIcon.svg";
import ThumbIcon from "../assets/Icons/ThumbIcon.svg";
import RocketIcon from "../assets/Icons/RocketIcon.svg";
import BulbIcon from "../assets/Icons/BulbIcon.svg";
import AceFundedTrader from "../components/AceFundedTrader";
import Partners from "../components/Partners";
import DiscordCommunity from "../components/DiscordCommunity";
import FAQComponent from "../components/FAQComponent";

const HomeItWorks = () => {
  const features = [
    {
      icon: ThumbIcon,
      title: "Take a Challenge",
      description:
        "Trade with our Capital without being liable for any losses.",
    },
    {
      icon: RocketIcon,
      title: "Fast & Reliable Payouts",
      description:
        "Receive Payouts with a High Profit Split, protected by our Payout Guarantee.",
    },
    {
      icon: SupportIcon,
      title: "24/7 Support",
      description: "Our dedicated Support team is always here to help.",
    },
    {
      icon: BulbIcon,
      title: "Always 90% Profit Split",
      description:
        "At Ace Funded, we offer an industry-leading profit split of 90%.",
    },
  ];
  return (
    <>
      <AceFunding
        mainData={features}
        text="Works"
        title="How Ace Funding Works?"
        description="Your Skills With Our Risk. You're Not Liable For Any Losses."
        index={true}
      />
      <AceFundedTrader />
      <Partners />
      <FAQComponent />

      <DiscordCommunity />
    </>
  );
};

export default HomeItWorks;
