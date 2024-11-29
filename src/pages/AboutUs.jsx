import React from "react";

import AboutAceFunded from "../components/AboutAceFunded";
// import AceFunding from "../components/AceFunding";
import FAQComponent from "../components/FAQComponent";

import Partners from "../components/Partners";

const AboutUs = () => {
  const highlights = [
    "Lowest Spreads in the Industry",
    "Spreads Starting From 0.0",
    "True Market Pricing & Execution",
  ];
  return (
    <>
      <AboutAceFunded />

      <FAQComponent />
      <Partners />
    </>
  );
};

export default AboutUs;
