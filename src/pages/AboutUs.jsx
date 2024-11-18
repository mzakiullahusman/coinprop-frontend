import React from "react";

import AboutAceFunded from "../components/AboutAceFunded";
import AceFunding from "../components/AceFunding";
import FAQ from "../components/FAQ";
import SupportIcon from "../assets/Icons/SupportIcon.svg";
import ThumbIcon from "../assets/Icons/ThumbIcon.svg";
import RocketIcon from "../assets/Icons/RocketIcon.svg";
import BulbIcon from "../assets/Icons/BulbIcon.svg";
import Partners from "../components/Partners";
import DiscordCommunity from "../components/DiscordCommunity";
const AboutUs = () => {
  const features = [
    {
      icon: ThumbIcon,
      title: "Your Skill, Our Risk",
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

  const highlights = [
    "Lowest Spreads in the Industry",
    "Spreads Starting From 0.0",
    "True Market Pricing & Execution",
  ];
  return (
    <>
      <AboutAceFunded />
      <AceFunding
        mainData={features}
        highlights={highlights}
        text="Features"
        title="Features of ace funded"
        description="Trade with our Capital and keep up to 95% of the Profit."
        index={true}
      />
      <FAQ />
      <Partners />
      <DiscordCommunity />
    </>
  );
};

export default AboutUs;
