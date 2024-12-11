import Header from "@components/LayoutLanding/Header";
import Footer from "@components/LayoutLanding/Footer";
import React from "react";
import BgStar from "@assets/images/BgStar.png";

const LayoutLanding = ({ children }) => {
  return (
    <>
      <div
        className="bg-[#0f1827] bg-no-repeat"
        style={{
          backgroundImage: `url(${BgStar})`,
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default LayoutLanding;
