import React from "react";

const NoButtonHeroCard = ({ title, description, bgImage }) => {
  return (
    <div
      className="blurry-effect w-full rounded-xl p-[40px] flex flex-col justify-center items-center lg:items-start min-h-[332px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[70%] lg:w-1/2 text-center lg:text-start lg:pb-20">
        <h2 className="text-[#D974F3] text-[24px] xl:text-[48px] font-medium mb-6">
          {title}
        </h2>
        <p className="text-[16px] mt-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default NoButtonHeroCard;
