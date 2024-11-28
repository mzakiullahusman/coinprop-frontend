import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const TableNoData = ({ emptyMessage = "No data available" }) => {
  return (
    <div className="w-full p-5 bg-sidebar border border-[#3d4054] rounded-2xl">
      <div className="text-center p-6 text-gray-400 w-full flex flex-col items-center justify-center">
        <FormatListBulletedIcon sx={{ fontSize: 100 }} />
        {emptyMessage}
      </div>
    </div>
  );
};

export default TableNoData;
