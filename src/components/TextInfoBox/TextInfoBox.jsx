import React from "react";

const TextInfoBox = ({ text }) => {
  return (
    <div
      className="flex flex-col justify-center items-start gap-1.5 w-full p-3.5 rounded-lg relative bg-[#1C1D20]"
      style={{ border: "1px solid #D974F3" }}
    >
      <div className="flex items-center w-full">
        <textarea
          className="w-full border-none focus:outline-none text-[14px] bg-[#1C1D20]"
          value={text}
          readOnly
          rows={8}
        />
      </div>
    </div>
  );
};

export default TextInfoBox;
