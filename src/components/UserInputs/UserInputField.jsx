import { Button } from "@mui/material";
import React, { useState } from "react";

const UserInputField = ({
  label,
  type = "text",
  placeholder,
  decorator,
  onDecoratorClick,
  buttonText,
  onButtonClick,
  lgWidth,
  name,
  value = "",
  onChange,
  onBlur,
  readOnly = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-start gap-1.5 w-full ${
        label ? "h-[54px]" : "h-[48px]"
      } p-3.5 rounded-[10px] relative`}
      style={{
        border: `1px solid ${isFocused ? "#06b6d4" : "#ffffff1a"}`,
        background: "transparent",
      }}
    >
      {label && <p className="text-[12px] font-medium">{label}</p>}
      <div className="flex items-center w-full">
        <input
          className={`w-full bg-transparent border-none focus:outline-none text-[#cfd6d6] text-[14px] font-medium leading-4 lg:leading-normal ${
            lgWidth ? `lg:w-[${lgWidth}]` : ""
          }`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          readOnly={readOnly}
        />
        {decorator && (
          <img
            src={decorator}
            alt="decorator-icon"
            className="absolute right-3 cursor-pointer"
            onClick={onDecoratorClick}
          />
        )}
        {buttonText && (
          <div className="absolute right-3 top-[5%]">
            <Button
              variant="containedGradient"
              sx={{ padding: "10px" }}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInputField;
