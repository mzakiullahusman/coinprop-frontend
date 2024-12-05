import React from "react";

import HowItWorksCommon from "@components/HowItWorksCommon";
import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import ContactForm from "@components/ContactForm";
import Social from "@components/Social";

const ContactUs = () => {
  return (
    <div className="bg-[#020621]">
      <div
        className="bg-cover bg-center bg-no-repeat gap-6 px-4 lg:px-20 py-5 md:py-10"
        style={{
          backgroundImage: `url(${HowItWorksBg})`,
        }}
      >
        <HowItWorksCommon text="Contact Us" index={true} />
        <ContactForm />
        <Social />
      </div>
      <div className="xl:px-28">
        <FAQComponent />
      </div>

      <AceFundedTrader />
    </div>
  );
};

export default ContactUs;
