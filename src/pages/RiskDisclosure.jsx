import React from "react";
import BgStar from "@assets/images/BgStar.png";
import AceFundedTrader from "@components/AceFundedTrader";

const RiskDisclosure = () => {
  const contentData = [
    {
      description: `Disclaimer of Investment Risks [Company Name] acknowledges the significant risks inherent in cryptocurrency trading, even within our simulated environment. We maintain transparency about our challenge success rates: historically, less than 3% of participants successfully complete our trading challenges, highlighting the demanding nature of crypto trading. General Information Disclosure All content, materials, and information provided through our platform, including trading tools, analysis, educational resources, and market data, are for general informational and simulation purposes only. Nothing on our platform constitutes: ● Financial advice ● Investment recommendations ● Trading signals ● Endorsement of any cryptocurrency ● Solicitation to buy or sell any digital assets Simulated Trading Environment Limitations Key Differences from Live Trading Our simulation aims to replicate cryptocurrency market conditions but differs from live trading in several important ways: ● Noactual cryptocurrencies are traded ● Noreal money is at risk ● Market depth may vary from real exchanges ● Execution speeds may differ ● Liquidity conditions may not match live markets ● Emotional factors may differ without real capital at risk Challenge Environment Specifics ● Simulated capital is for testing purposes only ● Trading results do not guarantee similar performance in live markets ● Challenge metrics and rules are for evaluation only ● Success in our simulation does not guarantee success in real trading Crypto Market Risks Unique Cryptocurrency Characteristics Even in simulation, traders should understand that crypto markets feature: ● 24/7trading hours ● Highvolatility ● Rapidprice movements ● Gaprisks ● Market manipulation risks ● Technical vulnerabilities Simulation Limitations Our platform attempts to replicate these conditions but may not capture: ● Extreme market events ● Flash crashes ● Network congestion effects ● Exchange downtimes ● Market manipulation scenarios Program Success Rates Wemaintain transparency about challenge completion rates: ● Mostparticipants do not pass initial evaluations ● Success rates vary by challenge type ● Historical pass rates are below 3% ● Pastperformance does not guarantee future results Legal Compliance [Company Name], registered in British Columbia, Canada, operates in compliance with applicable Canadian laws and regulations. Our services are: ● Forsimulation purposes only ● Notregulated as financial services ● Not intended for actual cryptocurrency trading ● Educational and evaluative in nature Personal Responsibility Trader Obligations Each participant is responsible for: ● Understanding the simulation nature of our platform ● Evaluating their own trading capabilities ● Managing simulated risk appropriately ● Not treating simulation results as guaranteed outcomes ● Understanding crypto market risks Education Recommendation Westrongly recommend: ● Learning about cryptocurrency markets before participating ● Understanding technical analysis ● Studying risk management principles ● Practicing responsible trading habits ● Notrelying solely on simulation results Additional Risk Factors Technology Risks ● Platform downtime possibilities ● Technical glitches ● Internet connectivity issues ● Datafeed delays ● Systemmaintenance periods Challenge-Specific Risks ● Timepressure effects ● Performance metric requirements ● Rulecompliance requirements ● Evaluation criteria ● Challenge expiration periods Important Declarations Simulation Nature You acknowledge that: ● Thisis a simulated trading environment ● Noactual cryptocurrencies are traded ● Results may differ from live trading ● Success is not guaranteed ● Challenges are for evaluation only No Guarantees Wedonot guarantee: ● Challenge success ● Trading profits ● Market conditions ● Platform availability ● Future performance Contact Information For questions about risks or our simulation platform: ● Email: [risk@company.com] ● Support Hours: [Hours] ● Response Time: Within 24 hours By participating in our trading challenges, you acknowledge reading and understanding all risks disclosed in this statement. Last Updated: [Date`,
    },
  ];
  const filteredContent = Array(1).fill(contentData[0]);
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat bg-[#0f1827] px-4 md:px-12 py-5  md:py-10 "
        style={{
          backgroundImage: `url(${BgStar})`,
        }}
      >
        <div className="text-[32px] capitalize tracking-[-1px] mb-6 xl:leading-[80px] text-white  lg:text-[64px]  font-poppins font-bold">
          Risk Disclosure
        </div>
        <div className="space-y-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-6 font-poppins font-medium text-white text-base capitalize lg:text-[20px]"
            >
              <span className="leading-[54px]">{item.description}</span>
            </div>
          ))}
        </div>
        <AceFundedTrader />
      </div>
    </>
  );
};

export default RiskDisclosure;
