import React from "react";
import QuestionIcon from "@assets/icons/QuestionIcon.svg";
import BlackArrowRight from "@assets/icons/BlackArrowRight.svg";
const ChooseChallenges = () => {
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
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4 gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className=" p-8 border-white border-2 border-opacity-20 rounded-[16px] shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-outfit xl:text-[34px] font-bold text-white mb-4">
              {challenge.title}
            </h3>
            <ul className="space-y-4">
              {challenge.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex justify-between text-white font-outfit"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-light text-[18px]">
                      {detail.label}
                    </span>
                    <img src={QuestionIcon} alt="Question" />
                  </div>
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
      {/* <button className="bg-gradient-to-b mx-auto flex flex-row gap-x-3 mt-6 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
        Start Challenge
        <img src={ArrowRightIcon} alt="Arrow" />
      </button> */}

      <button className=" flex flex-row mt-8 gap-x-3 mx-auto items-center bg-[#01ff9d] text-[#141414]  font-outfit text-[20px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
        Get Funded
        <img src={BlackArrowRight} alt="Arrow" />
      </button>
    </>
  );
};

export default ChooseChallenges;
