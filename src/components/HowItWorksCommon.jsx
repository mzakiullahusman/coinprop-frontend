import React from "react";

const HowItWorksCommon = ({ index, text }) => {
  const items = [
    "FX Futures",
    "Terminology",
    "How It Works",
    "FAQs",
    "Learn More",
  ];
  return (
    <>
      {index ? (
        <div className="text-center capitalize text-white font-bold font-poppins text-[32px] xl:leading-[96px] lg:text-[64px] ">
          {text}
        </div>
      ) : (
        <div className="text-center capitalize text-white font-bold font-poppins text-[32px] xl:leading-[96px] lg:text-[64px] ">
          earn funding by Passing the
          <br />
          trading combine®
        </div>
      )}
      {index && (
        <>
          {text === "About Us" ||
            (text === "Forex To Futures" && (
              <div className="h-[50px] w-[6px] text-center mx-auto bg-[#01ff9d]"></div>
            ))}
          {text === "About Us" ? (
            <div className="font-poppins leading-[36px] text-center mt-2 font-normal text-lg lg:text-2xl">
              We’re Special and We Know It
              <br /> Traders have withdrawn millions since 2012, and it’s not
              luck — we
              <br /> know what success takes!
            </div>
          ) : text === "Forex To Futures" ? (
            <>
              <div className="flex flex-col justify-center items-center md:gap-y-6">
                <div className="font-poppins text-center leading-[30px] lg:leading-[54px] mt-2 font-normal text-lg lg:text-2xl">
                  When the pros want to trade currencies, they turn to{" "}
                  <span className="text-[#01ff9d]">COIN PROP</span> for the many
                  <br />
                  benefits not found in forex markets.
                </div>
                <button className="bg-[#01ff9d] rounded-[24px] text-[#141414] font-normal font-poppins text-base px-5 py-2">
                  Start Trading FX Futures
                </button>
              </div>
              <div className="bg-[#01ff9d] mt-8 py-2 flex justify-center flex-wrap md:flex-nowrap items-center gap-3 lg:gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="font-normal font-poppins text-lg lg:text-2xl text-[#141414]"
                  >
                    <button
                      className="bg-transparent border-none text-[#141414] hover:text-white py-2 px-4 rounded-lg transition-all"
                      // onClick={() => handleButtonClick(item)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="font-poppins text-center mt-2 font-normal text-lg lg:text-[20px]">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
              <br /> viverra orci diam. Nibh est vitae suspendisse parturient
              sed lorem eu.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HowItWorksCommon;
