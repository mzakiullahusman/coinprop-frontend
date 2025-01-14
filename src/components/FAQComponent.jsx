import React, { useState } from "react";
import TextMain from "./TextMain";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      id: 1,
      title: "What is CoinProp?",
      description:
        "CoinProp is an education and evaluation platform for traders looking to take their skills to the next level. We offer a safe and supportive environment where traders can practice, develop disciplined trading habits, and build a proven track record of success. Our evaluation system select the successful traders based on their performance, rewarding them with opportunities to manage larger accounts and reach their full trading potential. Whether you're a beginner or an experienced trader, CoinProp helps you improve your trading strategies, and achieve long-term success in the competitive world of trading.",
    },
    {
      id: 2,
      title: "Is CoinProp a Prop Firm?",
      description:
        "CoinProp is not a traditional prop firm. Unlike traditional firms that operate their own trading desks, CoinProp takes a modern approach. We focus on empowering aspiring traders through education, robust evaluation programs, and essential trading resources.",
    },
    {
      id: 3,
      title: "Who can join CoinProp?",
      description: `We welcome adults aged 18 and older from around the world to join us. However, we cannot accept individuals with criminal financial records or those listed on international sanction lists. CoinProp strictly adheres to Canadian sanctions laws. We do not provide our services to residents with citizenships of the following:
        Belarus, Democratic People's Republic of Korea (North Korea), Iran, Russia, Syria, Ukraine (Occupied regions: Crimea, Donetsk, Luhansk), Guatemala, Haiti, Libya, Moldova (due to Transnistria region issues), Nicaragua, South Sudan, Sudan, Venezuela, Yemen, Zimbabwe
        Service prohibitions also extend to persons listed under sanctions regulations pertaining to Terrorist Entities and Extremist Settler Violence in the West Bank, Gaza, and East Jerusalem, and persons listed under the for Victims of Corrupt Foreign Officials Act.`,
    },
    {
      id: 4,
      title: "Is CoinProp regulated?",
      description:
        "CoinProp is currently unregulated because we don't offer any regulated investment services, do not hold client deposits, or handle any real trading transactions for our customers.",
    },
    {
      id: 5,
      title: "What instruments can I trade?",
      description:
        "You can trade a wide range of crypto perpetual futures pairs. Our platform is dedicated to delivering exceptional services, ensuring crypto traders enjoy the best possible experience.",
    },
    {
      id: 6,
      title: "Do my trades take place in the real market?",
      description:
        "No, CoinProp customers are not trading with real money. All trades take place in a highly realistic simulated trading environment. CoinProp uses advanced technology to replicate “live-like” execution conditions, leveraging real-time market data, accurate depth of market information, and high-quality data feeds from top regulated exchanges and liquidity providers. This ensures users can practice trading in a safe, risk-free environment while experiencing conditions similar to real-world cryptocurrency trading.",
    },
    {
      id: 7,
      title: "How should I start?",
      description:
        "Start by selecting the account size that suits your experience and pay the associated fee. Once registered, you can start trading according to the evaluation rules.",
    },
    {
      id: 8,
      title: "What if I fail the evaluation?",
      description:
        "You can try again by purchasing another evaluation account, as many times as needed.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-1 md:px-12 xl:px-28 2xl:px-32 py-5 md:py-10">
      <TextMain
        text="FAQs"
        title="Frequently Asked Questions?"
        description="Our platform makes crypto investments simple and accessible for all users."
        textStyling="gradient"
      />

      {faqData.map((item, index) => (
        <div
          key={item.id}
          className={`group flex justify-center p-[1px] mt-8 rounded-[24px] items-center ${
            openIndex === index
              ? "bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0]"
              : "border border-opacity-30 opacity-50 border-white"
          } `}
        >
          <div
            className={`flex flex-col ${
              openIndex === index ? "bg-gray-900" : "bg-white bg-opacity-[4%]"
            } rounded-[24px] p-4 w-full `}
          >
            <div className="flex flex-col lg:flex-row gap-3 xl:gap-12 justify-between px-6 items-center">
              <div className="flex flex-col lg:flex-row items-center gap-3 xl:gap-12">
                <div className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text font-poppins font-normal text-[64px]">
                  {String(item.id).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="text-white text-center xl:text-start  font-semibold text-lg lg:text-2xl">
                    {item.title}
                  </div>

                  {openIndex === index && (
                    <div className="text-white font-light text-base font-poppins">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              {/* Button to toggle */}
              <div
                onClick={() => toggleOpen(index)}
                className={`rounded-full text-lg flex items-center bg-white bg-opacity-10 justify-center w-16 h-16 transition duration-300 ease-in-out hover:scale-105 ${
                  openIndex === index
                    ? " to-[#1c7ef0] p-7 border-white border"
                    : "  p-3"
                } cursor-pointer`}
              >
                {openIndex === index ? "x" : "+"}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={`text-base px-3 mt-8 md:px-20 xl:px-32 lg:text-xl font-poppins font-light text-center`}>
        Still Have Questions? Find All FAQs and Answers on our comprehensive Help Center or contact us directly at support@coinprop.io for personalized assistance.
      </div>
    </div>
  );
};

export default FAQComponent;
