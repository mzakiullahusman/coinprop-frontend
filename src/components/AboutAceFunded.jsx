import React from 'react';
import Laptop from "@assets/images/Macbook.png"
import Mobile1 from "@assets/images/AndroidGrey.png"
import Mobile2 from "@assets/images/AndroidGrey-1.png"

const AboutAceFunded = ({ as: Component = 'div', className, ...props }) => {
  return (
    <Component className={`bg-gray-900 text-white min-h-screen ${className}`} {...props}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#00FC9E] to-[#1C7EF0] text-transparent bg-clip-text">
          The Ultimate Crypto Prop Trading Terminal
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg mb-6">
              CPX™ is a cutting-edge crypto prop trading platform designed specifically for crypto proprietary traders. Built with user-friendly tools and familiar features, CPX™ delivers an intuitive experience modeled after platforms used by top crypto exchanges.
            </p>
            <p className="text-lg mb-6">
              Trusted by traders worldwide, it offers exclusive features tailored to meet the unique needs of prop firm traders. Whether you're looking for advanced crypto trading technology or seamless functionality, CPX™ has everything you need to trade efficiently and effectively.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FC9E] to-[#1C7EF0] rounded-lg transform rotate-3"></div>
            <img
              src={Laptop}
              alt="Trading view on laptop"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-6 text-[#00FC9E]">Key Features of Our Trading Platform:</h2>
        <ul className="list-none space-y-4 mb-12">
          {[
            "Advanced TradingView and K-line charts",
            "Access to premium trading indicators",
            "Get the latest crypto news and live market updates all in one place",
            "Advanced trading analytics dashboard with real-time tracking and insight",
            "Lowest Commission Rates for Crypto Futures Trading"
          ].map((feature, index) => (
            <li key={index} className="flex text-lg items-center">
              <svg className="w-6 h-6 mr-2 text-[#1C7EF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="relative w-64 h-128">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00FC9E] to-[#1C7EF0] rounded-lg transform -rotate-3"></div>
            <img
              src={Mobile1}
              alt="Trading view on mobile app 1"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
          <div className="relative w-64 h-128">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1C7EF0] to-[#00FC9E] rounded-lg transform rotate-3"></div>
            <img
              src={Mobile2}
              alt="Trading view on mobile app 2"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl mb-8">
            Experience seamless and efficient trading with CPX™, the platform built to elevate your trading game.
          </p>
        </div>
      </div>
    </Component>
  );
};

export default AboutAceFunded;

