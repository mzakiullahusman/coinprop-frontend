import React, { useEffect } from "react";

import HowItWorksCommon from "@components/HowItWorksCommon";
import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import ContactForm from "@components/ContactForm";
import Social from "@components/Social";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  return (
    <div className="bg-[#020621]">
      <div
        data-aos="fade-up"
        className="bg-cover bg-center bg-no-repeat gap-6 px-4 lg:px-20 py-5 md:py-10"
        style={{
          backgroundImage: `url(${HowItWorksBg})`,
        }}
      >
        <HowItWorksCommon text="Contact Us" index={true} />
        <ContactForm />
        <Social />
      </div>
      <div data-aos="fade-up" className="xl:px-28">
        <FAQComponent />
      </div>

      <div data-aos="fade-up">
        <AceFundedTrader />
      </div>
    </div>
  );
};

export default ContactUs;
