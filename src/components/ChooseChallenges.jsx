import React, { useState } from "react";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";

const ChooseChallenges = () => {
  const [selectedValue, setSelectedValue] = useState("$10k");

  const options = ["$10k", "$20k", "$30k", "$50k", "$100k", "$200k"];
  const challenges = [
    {
      title: "Phase 1",
      details: [
        { label: "Max Trading Days", value: "N/A" },
        { label: "Virtual Profit Target", value: "8%" },
        { label: "Max Drawdown", value: "10% ($1,000)" },
        { label: "Max Daily Drawdown", value: "5%" },
        { label: "Max Growth", value: "$2,000,000" },
        { label: "Minimum Trading Days", value: "5" },
        { label: "0% Commission", value: "YES" },
        { label: "Trade Through News", value: "YES" },
        { label: "Hold Over The Weekend", value: "YES" },
      ],
    },
    {
      title: "Phase 1",
      details: [
        { label: "Max Trading Days", value: "N/A" },
        { label: "Virtual Profit Target", value: "8%" },
        { label: "Max Drawdown", value: "10% ($1,000)" },
        { label: "Max Daily Drawdown", value: "5%" },
        { label: "Max Growth", value: "$2,000,000" },
        { label: "Minimum Trading Days", value: "5" },
        { label: "0% Commission", value: "YES" },
        { label: "Trade Through News", value: "YES" },
        { label: "Hold Over The Weekend", value: "YES" },
      ],
    },
    {
      title: "Phase 1",
      details: [
        { label: "Max Trading Days", value: "N/A" },
        { label: "Virtual Profit Target", value: "8%" },
        { label: "Max Drawdown", value: "10% ($1,000)" },
        { label: "Max Daily Drawdown", value: "5%" },
        { label: "Max Growth", value: "$2,000,000" },
        { label: "Minimum Trading Days", value: "5" },
        { label: "0% Commission", value: "YES" },
        { label: "Trade Through News", value: "YES" },
        { label: "Hold Over The Weekend", value: "YES" },
      ],
    },
    // Add more phases if necessary
  ];

  return (
    <div className="bg-[#0a0d2c] py-12 px-4 md:px-12">
      <div className="text-center text-white mb-10">
        <div className="border-white border inline-block border-opacity-20 text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
          Challenges
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold mt-4">
          Choose Your Challenge
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Trade Forex, Indices, Metals & Crypto
        </p>

        <div className="mt-4 flex flex-wrap gap-y-2 justify-between items-start">
          <div className="flex mx-auto lg:mx-[0px] gap-x-3">
            <button className="bg-[#2a80b3] font-redhat text-sm sm:text-[20px] text-white px-4 py-[10px] sm:px-6 sm:py-[14px] rounded-full shadow-lg font-normal hover:opacity-90 transition">
              1 Step
            </button>
            <button className="bg-transparent border-white border-opacity-20 border font-redhat text-sm sm:text-[20px] text-white px-4 py-[10px] sm:px-6 sm:py-[14px] rounded-full shadow-lg font-normal hover:opacity-90 transition">
              2 Step
            </button>
            <button className="bg-transparent border-white border-opacity-20 border font-redhat text-sm sm:text-[20px] text-white px-4 py-[10px] sm:px-6 sm:py-[14px] rounded-full shadow-lg font-normal hover:opacity-90 transition">
              3 Step
            </button>
            <button className="bg-transparent border-white border-opacity-20 border font-redhat text-sm sm:text-[20px] text-white px-4 py-[10px] sm:px-6 sm:py-[14px] rounded-full shadow-lg font-normal hover:opacity-90 transition">
              Funded
            </button>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-6 p-4  text-white justify-center items-center">
            {options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center font-redhat text-[20px] cursor-pointer font-normal gap-2 ${
                  selectedValue === option ? "text-[#2a80b3]" : "text-gray-400"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedValue === option}
                  onChange={() => setSelectedValue(option)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedValue === option
                      ? "bg-[#2a80b3] border-[#2a80b3]"
                      : "border-gray-400"
                  }`}
                ></span>
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-[#08122a] p-8 border-white border-2 border-opacity-20 rounded-[16px] shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-redhat xl:text-[34px] font-bold text-white mb-4">
              {challenge.title}
            </h3>
            <ul className="space-y-4">
              {challenge.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex justify-between text-white font-outfit"
                >
                  <span className="font-light text-[18px]">{detail.label}</span>
                  <span className="font-medium text-base xl:text-[20px]">
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-2xl lg:text-[34px] font-bold text-white text-center mt-6 font-redhat">
        $62.70 for 5k account
      </p>
      <button className="bg-gradient-to-b mx-auto flex flex-row gap-x-3 mt-6 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
        Start Challenge
        <img src={ArrowRightIcon} alt="Arrow" />
      </button>
    </div>
  );
};

export default ChooseChallenges;
