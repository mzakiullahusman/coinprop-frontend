import React from "react";

const Rule = ({ index, text }) => {
  // Define the repeated content to avoid redundancy
  const renderListItems = () => (
    <div className="flex flex-col md:flex-row md:gap-8 mt-5">
      <ul className="list-disc ml-5">
        <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
          It is a long established
        </li>
      </ul>
      <ul className="list-disc ml-5">
        <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
          It is a long established
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {/* Title */}
      <div className="text-[28px] capitalize text-white text-left lg:text-[44px] font-poppins font-bold">
        {text}
      </div>

      {/* Description for other texts */}
      {text !== "Try These future Products" &&
        text !== "Future Terminology" && (
          <div className="text-lg capitalize md:text-2xl text-white text-left mt-4 font-poppins font-semibold">
            1 Rule: Maximum loss limit
          </div>
        )}

      {/* Main Content */}
      {index && (
        <>
          <div className="text-base text-[#8a8a8a] mt-1 text-left font-poppins font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>

          <div className="text-lg capitalize md:text-2xl text-white text-left mt-4 font-poppins font-semibold">
            Objectives:
          </div>
        </>
      )}

      {/* Conditional Description */}
      {(text === "Future Terminology" ||
        text === "Try These future Products") && (
        <div className="font-light text-white font-poppins mt-5 text-base leading-[38px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </div>
      )}

      {/* List items */}
      {renderListItems()}

      {/* Additional List items based on index */}
      {index === false && renderListItems()}

      {/* Buttons */}
      {text === "Try These future Products" ? (
        <button className="bg-[#01ff9d] rounded-[24px] mt-8 text-[#141414] font-normal font-poppins text-base px-5 py-2">
          Start Trading FX Futures
        </button>
      ) : text === "Future Terminology" ? (
        <div className="font-light text-white font-poppins mt-5 text-base leading-[38px]">
          It is a long established fact that a reader
        </div>
      ) : (
        <button className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] flex flex-row mt-5 gap-x-3 items-center text-[#141414] font-outfit text-[16px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
          View the full product list
        </button>
      )}
    </>
  );
};

export default Rule;
