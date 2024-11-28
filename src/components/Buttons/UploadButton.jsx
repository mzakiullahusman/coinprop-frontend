import React from "react";
import uploadIcon from "../../assets/icons/uploadIcon.svg";

const UploadButton = ({
  body = "Upload Attachment",
  isDashedBorder = true,
  onChange,
}) => {
  return (
    <div
      className={`w-full flex justify-center items-center py-[16px] px-[40px] flex-1 bg-transparent rounded-xl cursor-pointer relative 
        border-2 ${
          isDashedBorder ? "border-dashed" : "border-solid"
        } border-[#B35BF5]
        hover:bg-[#B35BF5] hover:shadow-[0_0_24px_rgba(179,91,245,0.5)] group`}
    >
      <img
        src={uploadIcon}
        alt="upload"
        className="mr-[10px] group-hover:opacity-80"
      />
      <h2 className="text-[#B35BF5] text-[14px] font-medium group-hover:text-white">
        {body}
      </h2>
    </div>
  );
};

export default UploadButton;
