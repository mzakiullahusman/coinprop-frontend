import React, { useEffect } from "react";
import ButtonIcon from "@assets/icons/ButtonIcon.svg";
import LeftBlock from "@assets/images/LeftBlock.png";
import RightBlock from "@assets/images/RightBlock.png";
import TrustPilot from "@assets/icons/TrustPilot.svg";
import Match from "@assets/icons/Match.svg";
import BlackArrowRight from "@assets/icons/RightBlackArrow.svg";
import BgImage from "@assets/images/BgImage.png";


const HomeFirst = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "Bitcoin", proName: "BINANCE:BTCUSDT.P" },
        { description: "Ethereum", proName: "BINANCE:ETHUSDT.P" },
        { description: "Solana", proName: "BINANCE:SOLUSDT.P" },
        { description: "Dogecoin", proName: "BINANCE:DOGEUSDT.P" },
        { description: "XRP", proName: "BINANCE:XRPUSDT.P" },
        { description: "Sui", proName: "BINANCE:SUIUSDT.P" },
        { description: "Pepe", proName: "BINANCE:PEPEUSDT" },
        { description: "Gas", proName: "BINANCE:GASUSDT.P" },
        { description: "Cardano", proName: "BINANCE:ADAUSDT.P" },
        { description: "Ethena", proName: "BINANCE:ENAUSDT.P" },
        { description: "dogwifhat", proName: "BINANCE:WIFUSDT.P" },
        { description: "BNB", proName: "BINANCE:BNBUSDT.P" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    // Create container div
    const container = document.getElementsByClassName('tradingview-widget-container__widget')[0];
    
    if (container) {
      container.appendChild(script);
    }

    
  }, []);
  return (
    <>
      <div className="text-center py-5 mt-4 md:py-10 flex flex-col items-center justify-center">
        <button className="flex items-center gap-1 gradient-div">
          <img src={ButtonIcon} alt="Icon" />
          Intelligent Solutions, Infinite Possibilities
        </button>

        <div className="text-[36px] xl:w-3/4 2xl:w-[80%] text-white lg:text-[64px] leading-[48px] lg:leading-[96px]  font-poppins font-extralight">
            Become a{" "}
          <span className="font-bold bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text  text-transparent">
            Funded 
          </span><br />
            Crypto{" "}
          <span className="font-bold bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text  text-transparent">
            Trader.
          </span>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8 xl:gap-12">
          <img src={LeftBlock} className="z-50 w-60 h-60" alt="Left Block" />
          <div className="flex flex-col items-center">
            <div className=" text-white text-[18px] font-poppins font-normal">
            CoinProp traders enhance their skills, develop winning habits, and unlock unmatched opportunities to thrive in the competitive crypto markets.
            </div>
            <div className="flex flex-col md:flex-row mt-8 items-center text-white gap-5 md:gap-16 font-poppins text-sm md:text-lg font-normal ">
              <img src={TrustPilot} alt="TrustPilot" />
              <div className="flex items-start md:items-center gap-x-2">
                <div>Listed on</div>
                <img src={Match} alt="Match" />
                <div>Propfirmmatch.com</div>
              </div>
            </div>

            <button className="bg-gradient-to-r z-50 from-[#00fc9e] to-[#1c7ef0] flex flex-row mt-8 gap-x-3 items-center text-[#141414]  font-outfit text-[20px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
              GET STARTED TODAY
              <img src={BlackArrowRight} alt="Arrow" />
            </button>
          </div>
          <img className="z-50" src={RightBlock} alt="Right Block" />
        </div>
      </div>
      <div className="relative mt-40">
        <img
          src={BgImage}
          className="w-full absolute bottom-[-10px] bg-contain bg-no-repeat"
        />

        {/* embed here */}

        <div className="tradingview-widget-container relative z-50">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
          className="text-blue-500 hover:text-blue-600"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
      </div>
    </>
  );
};

export default HomeFirst;
