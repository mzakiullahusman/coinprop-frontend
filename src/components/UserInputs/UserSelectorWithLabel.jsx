import React, { useState } from "react";
import selectorDown from "../../assets/icons/selectorDown.svg";

const UserSelectorWithLabel = ({
  options = [],
  label,
  placeholder = "Select an option",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-start gap-1.5 w-full h-[52px] p-3.5 rounded-lg"
      style={{
        border: `1px solid ${isFocused ? "#D974F3" : "#2B312F"}`,
        background: "linear-gradient(0deg, #1C1D20 0%, #1C1D20 100%), #1B211F",
      }}
    >
      <button
        type="button"
        className="flex justify-between items-center w-full bg-transparent border-none focus:outline-none text-[#A8A8A8] text-[14px] font-medium leading-4 lg:leading-normal"
        onClick={handleToggle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <img src={selectorDown} alt="Select" className="ml-2" />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-[#1C1D20] border border-[#2B312F] rounded-lg z-10"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-[#2B312F] text-[#A8A8A8] text-[14px] font-medium"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSelectorWithLabel;
