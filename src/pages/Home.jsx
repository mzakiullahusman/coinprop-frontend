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
import TalkingAbout from "@components/TalkingAbout";
import FAQComponent from "@components/FAQComponent";
import Testimonial from "@components/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";
import Target from "@assets/icons/Target.svg";
import Sparkle from "@assets/icons/Sparkle.svg";
import ListChecks from "@assets/icons/ListChecks.svg";
import CursorClick from "@assets/icons/CursorClick.svg";
import ChartLine from "@assets/icons/Chartline.svg";
import Bell from "@assets/icons/Bell.svg";
import { useEffect } from "react";

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

  const aceFunded = [
    {
      icon: ChartLine,
      title: "Visual reports",
      description: "Visual insights into your site's performance.",
    },
    {
      icon: Sparkle,
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
    },
    {
      icon: Bell,
      title: "Automated alerts",
      description: "Automatic notifications about your SEO health.",
    },
    {
      icon: ListChecks,
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
    },
    {
      icon: Target,
      title: "Link Optimization Wizard",
      description: "Guides you through the process of creating Links.",
    },
    {
      icon: CursorClick,
      title: "One-click optimization",
      description: "Perform complex SEO audits and optimizations.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#020621] ">
      <HomeFirst />
      <div
        className="bg-[#0f1827] px-4 md:px-12 py-5 md:py-10"
        data-aos="fade-up"
      >
        <TextMain
          text="Benefits"
          title="Risk Master Traders Benefits"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <Benefits />
      </div>
      <div
        className="bg-[#0f1827] px-4 md:px-12 py-5 md:py-10"
        data-aos="fade-up"
      >
        <TextMain
          text="Steps"
          title="How It Works"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <HowItWorks mainData={features} />
      </div>
      <Money />
      <div
        className="bg-cover bg-[#0f1827] bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10 "
        data-aos="fade-up"
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
      <div className="mt-6">
        <TextMain
          text="Features"
          title="Risk Master Trader Features"
          description="Our platform makes crypto investments simple and accessible for all users."
          index={true}
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-[#020621]  text-white"
        data-aos="fade-up"
      >
        <AboutAceFunded data={aceFunded} />
      </div>
      {/* </div> */}
      <div data-aos="fade-up">
        <WithDrawalSection />
      </div>
      <div data-aos="fade-up">
        <WithDrawalSection />
      </div>{" "}
      <div data-aos="fade-up">
        <RMT />
      </div>
      <div data-aos="fade-left">
        {" "}
        <Testimonial />
      </div>
      <div className="bg-white bg-opacity-[2%] border-white border rounded-[44px] border-opacity-20 m-4 md:m-8 xl:m-20 px-4 xl:px-10 py-5 xl:py-12">
        <div data-aos="fade-up">
          <TalkingAbout />
        </div>
        <FAQComponent />
      </div>
      <AceFundedTrader />
    </div>
  );
};

export default Home;
