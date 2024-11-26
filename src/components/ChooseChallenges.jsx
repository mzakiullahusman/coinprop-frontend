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
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
