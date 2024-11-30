import React from "react";

import TextMain from "./TextMain";
const FAQComponent = () => {
  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      <TextMain
        text="FAQs"
        title="Frequently Asked Questions?"
        description="Our platform makes crypto investments simple and accessible for all users."
        textStyling="gradient"
      />
    </div>
  );
};

export default FAQComponent;
