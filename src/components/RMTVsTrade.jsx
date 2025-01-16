import React from "react";
import { motion } from "framer-motion";

function InfoCard({ title, content, extraClasses = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col px-6 py-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 
      hover:bg-white/10 transition-all duration-300 shadow-lg h-[320px] ${extraClasses}`}
    >
      <div className="text-2xl font-semibold text-white capitalize">
        {title}
      </div>
      <div className="mt-8 text-lg text-zinc-300/80 overflow-y-auto pr-2">
        {content}
      </div>
    </motion.div>
  );
}

const RMTVsTrade = () => {
  const cardData = [
    {
      title: "Global AccessTrade",
      content: "crypto futures securely from anywhere in the world. No need to worry about local regulations or risking your own capital. Our platform provides a seamless and hassle-free experience for crypto traders worldwide.",
    },
    {
      title: "Build Smarter Trading Habits",
      content: "Emotional trading is a common challenge for many traders, often resulting in impulsive decisions and inconsistent outcomes. CoinProp provides a structured environment designed to foster discipline and promote consistent, profitable trading strategies, helping traders stay focused and in control.",
    },
    {
      title: "Minimized Personal Financial Exposure",
      content: "With CoinProp, your risk is minimized with a small upfront fee, e.g., just $449 for $50,000 in simulated capital. This fee caps your potential losses, while your profit potential is virtually limitless.",
    },
    {
      title: "Scale Your Trading Strategies",
      content: "Access to more capital means traders can finally scale their profitable strategies. What once felt impossible with smaller personal accounts now becomes a real opportunity.",
    },
  ];

  return (
    <div className="rounded-none p-8 md:px-12 2xl:px-20">
      <div className="flex gap-y-8 gap-x-1 max-md:flex-col">
        <div className="flex flex-col w-[30%] max-md:w-full">
          <div className="flex z-10 flex-col gap-8 2xl:gap-y-64">
            <InfoCard {...cardData[0]} delay={0.2} />
            <InfoCard {...cardData[1]} delay={0.4} />
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center w-[40%] max-md:w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[400px] h-[400px] 2xl:w-[750px] 2xl:h-[750px] max-md:w-[300px] max-md:h-[300px]"
          >
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/30"
            />
            
            {/* Glowing background circles */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-emerald-400/5 to-blue-400/5 backdrop-blur-xl" />
            
            {/* Main content circle */}
            <div className="absolute inset-8 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-center text-white space-y-4"
              >
                <div>Why RMT</div>
                <div className="text-emerald-400">vs</div>
                <div>Why CoinProp</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col w-[30%] max-md:w-full">
          <div className="flex z-10 flex-col gap-8 2xl:gap-y-64">
            <InfoCard {...cardData[2]} delay={0.6} />
            <InfoCard {...cardData[3]} delay={0.8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RMTVsTrade;