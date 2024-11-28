import React, { useState } from "react";
import selectorDown from "../../assets/icons/selectorDown.svg";

const UserSelector = ({
  label,
  options = [],
  placeholder = "Select an option",
  name,
  value = "",
  onChange,
  onBlur,
  isDisabled,
  isNovaTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => {
    if (isDisabled) return;
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-start gap-1.5 w-full p-3.5 rounded-lg ${
        label ? "h-[54px]" : "h-[40px]"
      }`}
      style={{
        border: isNovaTheme
          ? `1px solid ${isFocused ? "#2A80B3" : "#B35BF5"}`
          : `1px solid ${isFocused ? "#3d4054" : "#2B312F"}`,
        background: isNovaTheme
          ? `rgba(179, 91, 245, ${isFocused ? "0.3" : "0.22"})`
          : "#11152e",
        boxShadow: isFocused
          ? isNovaTheme
            ? "0 0 0 3px rgba(179, 91, 245, 0.5)"
            : "0 0 0 3px #2A80B3"
          : "none",
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {label && <label className="text-[#ffffff] text-[12px]">{label}</label>}
      <button
        type="button"
        className={`flex justify-between items-center w-full bg-transparent border-none focus:outline-none text-white text-[14px] font-medium leading-4 lg:leading-normal ${
          isDisabled ? "cursor-not-allowed" : ""
        }`}
        onClick={handleToggle}
        disabled={isDisabled}
      >
        {value
          ? options.find((opt) => opt.value === value)?.label
          : placeholder}
        <img src={selectorDown} alt="Select" className="mx-2" />
      </button>
      {isOpen && !isDisabled && (
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-[#11152e] border border-[#2B312F] rounded-lg z-10"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-[#2B312F] text-white text-[14px] font-medium"
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

export default UserSelector;
