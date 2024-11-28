import React from "react";
import GreenTick from "../../assets/icons/GreenTick.svg";
const WithdrawalSubmitted = ({ closeModal }) => {
  // const handleRateUs = () => {
  //   const url = "https://ca.trustpilot.com/review/futurefunded.com";
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div className="bg-gradient-to-b from-[#0A0A0A] to-[#040404] bg-opacity-60 border-[1px] border-white border-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4 md:max-w-md lg:max-w-[540px]">
          <div className="text-center">
            <img src={GreenTick} alt="CancelIcon" className="mx-auto" />
            <h2 className="text-base xl:text-[20px] font-medium text-white mt-5">
              Withdrawal Submitted
            </h2>
            <p className=" font-normal text-sm text-[#999f9f] mt-2">
              Please expect your payout within 24h.
            </p>
            {/* 
            <p className=" font-normal text-sm text-[#999f9f] mt-12">
              How would you rate your experience?
            </p> */}
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={closeModal}
              className="bg-[#101114] border-[1px] w-full py-3 border-white rounded-[10px] font-medium text-sm border-opacity-10 mt-6"
            >
              Close
            </button>
            {/* <button
              className="bg-white w-1/2 py-3 border-white text-[#0f0f0f] rounded-[10px] font-medium text-sm border-opacity-10 mt-6"
              onClick={handleRateUs}
            >
              Rate Us
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawalSubmitted;
