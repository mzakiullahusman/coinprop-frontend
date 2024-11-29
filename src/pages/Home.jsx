import AceFundedTrader from "../components/AceFundedTrader";
import AboutAceFunded from "../components/AboutAceFunded";
import ChooseChallenges from "../components/ChooseChallenges";
import HomeFirst from "../components/HomeFirst";
import WithDrawalSection from "../components/WithDrawalSection";
import Acc from "@assets/icons/Acc.svg";
import ProveTrade from "@assets/icons/ProveTrade.svg";
import EarnMoney from "@assets/icons/EarnMoney.svg";
import Profit from "@assets/icons/WithDraw.svg";
import Pro from "@assets/icons/Pro.svg";
import ChallengeBg from "@assets/images/ChallengeBg.png";

import HowItWorks from "../components/HowItWorks";
import TextMain from "../components/TextMain";
import Benefits from "../components/Benefits";
import ChallengeButtons from "../components/ChallengeButtons";
import Money from "../components/Money";
import RMT from "../components/RMT";

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

  return (
    <div className="bg-[#020621] ">
      <HomeFirst />

      <div className="bg-[#0f1827] bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10">
        <TextMain
          text="Benefits"
          title="Risk Master Traders Benefits"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <Benefits />
      </div>

      <div className="bg-[#0f1827] bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10">
        <TextMain
          text="Steps"
          title="How It Works"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <HowItWorks mainData={features} index={false} />
      </div>
      <Money />

      <div
        className="bg-cover bg-[#0f1827] bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10"
        style={{
          backgroundImage: `url(${ChallengeBg})`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <TextMain
            text="Steps"
            title="Risk Master Challenges"
            description="Prop trading brought to you by professional traders."
            index={false}
          />
          <ChallengeButtons />
        </div>

        <ChooseChallenges />
      </div>

      <TextMain
        text="Features"
        title="Risk Master Trader Features"
        description="Our platform makes crypto investments simple and accessible for all users."
        index={true}
      />

      <AboutAceFunded />

      {/* </div> */}

      <WithDrawalSection />

      <RMT />

      <AceFundedTrader />
    </div>
  );
};

export default Home;