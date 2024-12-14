import React from "react";

const NewsFilter = () => {
  return (
    <div className="border-1 border-white border-opacity-10 rounded-[16px] bg-sidebar border-2 py-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-y-5 md:items-center justify-center mx-5">
        <h2 className="text-[24px] font-bold  text-center md:text-left text-gradient-color">
          Stay Updated with the Latest Headlines
        </h2>
      </div>

      {/* Sub-header Section */}
      <div className="flex justify-center mx-8 mt-4">
        <p className="text-sm text-white font-normal">
          Your go-to source for live updates and breaking news.
        </p>
      </div>
    </div>
  );
};

export default NewsFilter;
