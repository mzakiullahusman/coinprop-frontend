import React, { useState } from "react";

const ChallengeButtons = () => {
  const [activeStep, setActiveStep] = useState(1); // Default to "1 Step"
  const [activeAmount, setActiveAmount] = useState("$5k"); // Default amount

  const steps = ["1 Step", "2 Step"];
  const amounts = ["$5k", "$10k", "$25k", "$50k", "$100k", "$200k"];

  return (
    <div className="flex flex-col gap-2 items-start">
      {/* Step Buttons */}
      <div className="flex items-center border border-white border-opacity-10 rounded-[8px] p-2 gap-[6px]">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index + 1)}
            className={`${
              activeStep === index + 1
                ? "bg-[#01ff9d] text-[#141414]"
                : "bg-transparent text-white text-opacity-50 border border-opacity-20 border-white"
            } font-outfit rounded-[8px] text-base md:text-[20px] font-normal py-3 px-4`}
          >
            {step}
          </button>
        ))}
      </div>

      {/* Amount Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap items-center border border-white border-opacity-10 rounded-[8px] p-2 gap-[6px]">
        {amounts.map((amount, index) => (
          <button
            key={index}
            onClick={() => setActiveAmount(amount)}
            className={`${
              activeAmount === amount
                ? "bg-[#01ff9d] text-[#141414]"
                : "bg-transparent text-white text-opacity-50 border border-opacity-20 border-white"
            } font-outfit rounded-[8px] text-base md:text-[20px] font-normal py-3 px-4`}
          >
            {amount}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChallengeButtons;
