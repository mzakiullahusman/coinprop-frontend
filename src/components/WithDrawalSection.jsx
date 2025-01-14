import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Wallet,
  Clock,
  AlertCircle,
} from "lucide-react";
import BrandIcon1 from "@assets/icons/BrandIcon1.svg";
import BrandIcon2 from "@assets/icons/BrandIcon2.svg";
import BrandIcon3 from "@assets/icons/BrandIcon3.svg";
import BrandIcon4 from "@assets/icons/BrandIcon4.svg";
import BrandIcon5 from "@assets/icons/BrandIcon5.svg";
import BrandIcon6 from "@assets/icons/BrandIcon6.svg";
import BrandIcon7 from "@assets/icons/BrandIcon7.svg";
import ArrowIcon1 from "@assets/icons/ArrowIcon1.svg";
import ArrowIcon2 from "@assets/icons/ArrowIcon2.svg";
import ArrowIcon3 from "@assets/icons/ArrowIcon3.svg";
import ArrowIcon4 from "@assets/icons/ArrowIcon4.svg";
import ArrowPlusIcon from "@assets/icons/ArrowPlusIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import TextMain from "./TextMain";
import AboutUsComponent from "./AboutUsComponent";
const WithDrawalSection = () => {
  // Simulated price data
  const [price, setPrice] = useState(95678);
  const [priceChange, setPriceChange] = useState(-2.3);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 100;
      setPrice((prev) => +(prev + change).toFixed(2));
      setPriceChange(
        +(Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1)).toFixed(2)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tradingPairs = [
    { name: "BTC/USDT", price: price, change: priceChange },
    { name: "ETH/USDT", price: 2847.12, change: 1.2 },
    { name: "SOL/USDT", price: 98.45, change: -0.8 },
  ];
  const diveIcons = [
    { src: BrandIcon1, alt: "BrandIcon1" },
    { src: BrandIcon2, alt: "BrandIcon2" },
    { src: BrandIcon3, alt: "BrandIcon3" },
    { src: BrandIcon4, alt: "BrandIcon4" },
    { src: BrandIcon5, alt: "BrandIcon5" },
    { src: BrandIcon6, alt: "BrandIcon6" },
    { src: BrandIcon7, alt: "BrandIcon7" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-12 py-5  md:py-10">
        <div className="bg-gray-900 p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Left Panel */}
            <div className="space-y-6">
              {/* Trading Pairs */}
              <div className="bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Popular Pairs
                  </h2>
                  <Activity className="text-green-400" />
                </div>

                {tradingPairs.map((pair, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-8 bg-green-400 rounded-r-full" />
                      <div>
                        <h3 className="text-white font-semibold">
                          {pair.name}
                        </h3>
                        <p className="text-sm text-gray-400">Perpetual</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-mono">
                        ${pair.price.toLocaleString()}
                      </p>
                      <p
                        className={`text-sm flex items-center ${
                          pair.change >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {pair.change >= 0 ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        {Math.abs(pair.change)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Transaction Status */}
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Transaction Status
                  </h2>
                  <Clock className="text-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-green-400/20 rounded-full mx-auto flex items-center justify-center">
                    <Wallet className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Withdrawal Processing
                  </h3>
                  <p className="text-sm text-gray-400">
                    Expected completion in 30 minutes
                  </p>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="w-2/3 bg-green-400 h-full rounded-full" />
                  </div>
                  <button className="w-full bg-green-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Market Info */}
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Market Analysis
                  </h2>
                  <AlertCircle className="text-green-400" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Crypto futures trading provides enhanced leverage
                    opportunities and 24/7 market access. Trade with confidence
                    using our advanced platform features.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Volume",
                      "Open Interest",
                      "Funding Rate",
                      "Index Price",
                    ].map((label, index) => (
                      <div
                        key={index}
                        className="bg-gray-700/50 p-4 rounded-lg"
                      >
                        <p className="text-gray-400 text-sm">{label}</p>
                        <p className="text-white font-mono mt-1">
                          {label === "Funding Rate"
                            ? "0.01%"
                            : "$" + (Math.random() * 1000000).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start flex flex-col gap-y-2">
          <TextMain
            text=""
            title="WHY TRADE CRYPTO FUTURES "
            description="Crypto futures trading has become increasingly popular in recent years, with more and more traders turning to this market as an alternative to traditional markets like Forex CFDs. But why exactly is crypto futures trading gaining so much traction? Here are a few reasons"
            index={false}
          />

          <AboutUsComponent />
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full max-w-[90%] h-28 xl:h-48"
      >
        {diveIcons.map((icon, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={icon.src} alt={icon.alt} className="h-8" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WithDrawalSection;
