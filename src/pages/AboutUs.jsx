import React from "react";

import AboutAceFunded from "../components/AboutAceFunded";
import AceFunding from "../components/AceFunding";
import FAQComponent from "../components/FAQComponent";

import Partners from "../components/Partners";
import DiscordCommunity from "../components/DiscordCommunity";
const AboutUs = () => {
  const highlights = [
    "Lowest Spreads in the Industry",
    "Spreads Starting From 0.0",
    "True Market Pricing & Execution",
  ];
  return (
    <>
      <AboutAceFunded />
      {/* <AceFunding
        mainData={features}
        highlights={highlights}
        text="Features"
        title="Features of ace funded"
        description="Trade with our Capital and keep up to 95% of the Profit."
        index={true}
      /> */}
      <FAQComponent />
      <Partners />
      <DiscordCommunity />
    </>
  );
};

export default AboutUs;
