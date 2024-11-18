import AceFundedTrader from "../components/AceFundedTrader";
import AceFunding from "../components/AceFunding";
import ChooseChallenges from "../components/ChooseChallenges";

import SupportIcon from "../assets/Icons/SupportIcon.svg";
import ThumbIcon from "../assets/Icons/ThumbIcon.svg";
import RocketIcon from "../assets/Icons/RocketIcon.svg";
import BulbIcon from "../assets/Icons/BulbIcon.svg";
import Dive from "../components/Dive";

import Trading from "../assets/Icons/Trading.svg";
import Bulb1 from "../assets/Icons/Bulb1.svg";
import Raw from "../assets/Icons/Raw.svg";
import RocketIcon1 from "../assets/Icons/RocketIcon1.svg";
import DiscordCommunity from "../components/DiscordCommunity";

const Home = () => {
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
      <AceFunding
        mainData={features}
        highlights={highlights}
        title="Features of ace funded"
        description="Trade with our Capital and keep up to 95% of the Profit."
        index={true}
      />
      <AceFundedTrader />
      <ChooseChallenges />
      <AceFunding
        mainData={fundedWorksData}
        highlights={highlights}
        title="How Ace Funded Works?"
        description="Trade with our Capital and keep up to 95% of the Profit."
        index={false}
      />
      <DiscordCommunity />
    </>
  );
};

export default Home;
