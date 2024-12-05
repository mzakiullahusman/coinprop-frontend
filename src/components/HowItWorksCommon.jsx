import React from "react";

const HowItWorksCommon = ({ index, text }) => {
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
          {text === "About Us" && (
            <div className="h-[50px] w-[6px] text-center mx-auto bg-[#01ff9d]"></div>
          )}
          {text === "About Us" ? (
            <div className="font-poppins text-center mt-2 font-normal text-lg lg:text-2xl">
              We’re Special and We Know It
              <br /> Traders have withdrawn millions since 2012, and it’s not
              luck — we
              <br /> know what success takes!
            </div>
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
