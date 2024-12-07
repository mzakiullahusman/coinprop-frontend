import React from "react";
import BSocial from "@assets/images/BgSocialImg.png";
import ChatBot from "@assets/icons/ChatBot.svg";
import Telegram from "@assets/icons/Telegram.svg";
import Discord from "@assets/icons/Discord.svg";
const Social = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat gap-6 p-8 md:p-12"
      style={{
        backgroundImage: `url(${BSocial})`,
      }}
    >
      <div className="font-bold font-poppins text-[30px] lg:text-[44px] text-white leading-[40px] text-center md:leading-[60px]">
        Get us through Telegram, Discord or Chabot If non worked try to contact
        us and we'll answer as fast as possible
      </div>
      <div className="flex justify-center items-center mt-6 gap-8 lg:gap-16">
        <img className="h-12 md:h-16 xl:h-20" src={Telegram} alt="Telegram" />
        <img className="h-12 md:h-16 xl:h-20" src={Discord} alt="Discord" />
        <img className="h-12 md:h-16 xl:h-20" src={ChatBot} alt="ChatBot" />
      </div>
    </div>
  );
};

export default Social;
