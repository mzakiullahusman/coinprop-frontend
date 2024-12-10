import Header from "@components/LayoutLanding/Header";
import Footer from "@components/LayoutLanding/Footer";
import React from "react";
import BgImage from "@assets/images/BgImage.png";

const LayoutLanding = ({ children }) => {
  return (
    <div
      className="bg-[#0f1827]"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutLanding;
