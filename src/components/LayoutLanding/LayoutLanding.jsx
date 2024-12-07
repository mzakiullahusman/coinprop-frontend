import Header from "@components/LayoutLanding/Header";
import Footer from "@components/LayoutLanding/Footer";
import React from "react";

const LayoutLanding = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutLanding;
