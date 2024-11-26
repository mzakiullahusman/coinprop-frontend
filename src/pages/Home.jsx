import AceFundedTrader from "../components/AceFundedTrader";
import AceFunding from "../components/AceFunding";
import ChooseChallenges from "../components/ChooseChallenges";
import BgImage1 from "../assets/Images/BgImage1.png";
import Dive from "../components/Dive";

import Acc from "../assets/Icons/Acc.svg";
import ProveTrade from "../assets/Icons/ProveTrade.svg";
import EarnMoney from "../assets/Icons/EarnMoney.svg";
import Profit from "../assets/Icons/WithDraw.svg";
import Pro from "../assets/Icons/Pro.svg";

import Trading from "../assets/Icons/Trading.svg";
import Bulb1 from "../assets/Icons/Bulb1.svg";
import Raw from "../assets/Icons/Raw.svg";
import RocketIcon1 from "../assets/Icons/RocketIcon1.svg";
import DiscordCommunity from "../components/DiscordCommunity";
import HowItWorks from "../components/HowItWorks";
import TextMain from "../components/TextMain";
import Benefits from "../components/Benefits";

const Home = () => {
  const features = [
    {
      icon: Acc,
      title: "Select Your Acc Size",
      description:
        "Select Your Futures Account. Register And Define The Maximum Contract Size You'll Manage.",
    },
    {
      icon: ProveTrade,
      title: "Prove You Can Trade",
      description:
        "Reach A Profit Target While Proving You Can Follow A Set Of Risk Rules. You Become A PRO Trader.",
    },
    {
      icon: EarnMoney,
      title: "Start Earning Money",
      description:
        "No Downtime. Once Approved, Get Your PRO Account And Start Trading For Day One Withdrawable Profits.",
    },
    {
      icon: Profit,
      title: "Withdraw Profit",
      description:
        "Money Is Nothing Until It Is In Your Pocket. We Know How Important It Is. Withdraw.",
    },
    {
      icon: Pro,
      title: "Upgrade To PRO+",
      description:
        "Elevate Your Experience By Upgrading To PRO+. As A PRO+ Member, You'll Enjoy Unparalleled Benefits.",
    },
  ];

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
      <Dive />

      <div
        className="bg-black bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10"
        style={{
          backgroundImage: `url(${BgImage1})`,
        }}
      >
        <TextMain
          text="Benefits"
          title="Risk Master Traders Benefits"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <Benefits />
      </div>

      <div
        className="bg-black bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10"
        style={{
          backgroundImage: `url(${BgImage1})`,
        }}
      >
        <TextMain
          text="Steps"
          title="How It Works"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <HowItWorks
          mainData={features}
          text="Benefits"
          title="How It Works?"
          description="Our platform makes crypto investments simple and accessible for all users."
          index={false}
        />
      </div>
      <ChooseChallenges />
      <AceFundedTrader />

      <AceFunding
        mainData={fundedWorksData}
        highlights={highlights}
        text="Features"
        title="How Ace Funded Works?"
        description="Trade With Our Capital and Keep Up To 95% Of The Profit."
        index={false}
      />
      <DiscordCommunity />
    </>
  );
};

export default Home;
