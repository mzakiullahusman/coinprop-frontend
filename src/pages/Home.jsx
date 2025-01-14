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
import Profit2 from "@assets/icons/Digital-Blossom.svg";


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
import RMTVsTrade from "@components/RMTVsTrade";

const Home = () => {
  const features = [
    {
      icon: Acc,
      title: "Select Your Capital Size",
      description:
        "Select your CPS (CoinProp Simulated) account, ideally one that aligns with your expertise. Purchase your account, and take the next step forward.",
    },
    {
      icon: ProveTrade,
      title: "Pass the Evaluation",
      description:
        "Reach the profit target while proving you can follow our straight forward risk rules. Once our system verifies your skills, you'll become a CPS Funded trader.",
    },
    {
      icon: EarnMoney,
      title: "Pass The KYC Process",
      description:
        "Complete the KYC process, including identity verification and compliance forms.",
    },
    {
      icon: Profit2,
      title: "Start Making Money",
      description:
        "Experience zero downtime. Once approved, unlock your CPS Funded account and start trading to earn profits from day one. Perfect for day traders seeking a quick start and hassle free stream of income.",
    },
    {
      icon: Profit,
      title: "Withdraw your Profits",
      description:
        "Maximize your earnings with our automated withdrawal system. Enjoy fast, secure profit withdrawals, ensuring your money is in your pocket when you need it.",
    },
    {
      icon: Pro,
      title: "Upgrade to CPS+",
      description:
        "Consistently successful traders may receive an invitation from the CoinProp Trading Team to join the CPS+ Funded Traders program. This exclusive opportunity offers unparalleled benefits, increased capital, dedicated support, and even potential job offers.",
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
    });
  }, []);

  return (
    <div>
      <HomeFirst />
      <div className=" px-4 md:px-12 py-5 md:py-10" data-aos="fade-up">
        <TextMain
          text="Benefits"
          title="KEY BENEFITS"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <Benefits />
      </div>
      <div className=" px-4 md:px-12 py-5 md:py-10" data-aos="fade-up">
        <TextMain
          text="How It Works"
          title="You're just 1 step away from becoming a CPS funded trader!"
          description="CoinProp is a seamless, hassle-free simulated crypto funding offering perpetual futures liquidity sourced from best centralized exchanges. Our Evaluations are designed to help you unlock your full potential as a trader. We don't have hidden rules, add-ons, or gimmicks, focusing solely on your success in crypto trading."
          titleSize="2xl"
          descriptionSize="base"
        />
        <HowItWorks mainData={features} />
      </div>
      <div data-aos="fade-up">
        <RMTVsTrade />
      </div>

      <div
        className="bg-cover bg-[#0f1827] rounded-b-[60px] bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10 "
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${ChallengeBg})`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <TextMain
            text="Steps"
            title="CHOOSE YOUR ACCOUNT SIZE"
            description="CoinProp offers five CPS® account sizes to match your goals. Secure your account with a one-time fee—no recurring charges until you secure funding, and no deadlines to reach your objectives."
            index={false}
          />
          <ChallengeButtons />
        </div>

        <ChooseChallenges />
      </div>

      <Money />
      <div className="mt-4 bg-white bg-opacity-[2%] p-4 lg:p-8">
        <AboutAceFunded as="section" className="custom-class px-6" />
      </div>

      {/* </div> */}
      <div className="mt-8" data-aos="fade-up">
        <WithDrawalSection />
      </div>

      <div data-aos="fade-up">
        <RMT />
      </div>
      <div data-aos="fade-up">
        {" "}
        <Testimonial />
      </div>
      <div className="bg-white bg-opacity-[2%] border-white border rounded-[44px] border-opacity-20 mx-4 mt-9 xl:mx-20 2xl:mx-32 2xl:mt-16 px-4 xl:px-10 py-5 xl:py-12">
        <div data-aos="fade-up">
          <TalkingAbout />
        </div>
        <div className="mt-24">
          {" "}
          <FAQComponent />
        </div>
      </div>
      <div className="mt-16 lg:mt-20">
        {" "}
        <AceFundedTrader />
      </div>
    </div>
  );
};

export default Home;
