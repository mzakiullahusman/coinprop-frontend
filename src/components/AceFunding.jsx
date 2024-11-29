import React from "react";

const AceFunding = ({ text, title, description, index }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="border-white border border-opacity-20 text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
          {text}
        </div>
        <div className="text-[28px] text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          {title}
        </div>
        <div className="text-base text-white lg:text-lg font-poppins font-light">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AceFunding;
