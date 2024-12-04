import React from "react";

const Rule = ({ text }) => {
  return (
    <>
      <div className="text-[28px] text-white mt-20 text-left lg:text-[44px]  font-poppins font-bold">
        {text}
      </div>
      <div className="text-lg md:text-2xl text-white text-left mt-4 font-poppins font-semibold">
        1 Rule: Maximum loss limit
      </div>
      <div className="text-base text-[#8a8a8a] mt-1 text-left font-poppins font-light">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </div>
    </>
  );
};

export default Rule;
