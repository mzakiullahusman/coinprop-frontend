import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import UserSearchField from "../UserInputs/UserSearchField";

const NewsFilter = ({ search, setSearch }) => {
  return (
    <div className="border-1 border-white border-opacity-10  rounded-[16px] bg-[#11152e] border-2 py-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-y-5 md:items-center justify-between mx-5">
        <h2 className="text-[20px] sm:text-[24px] font-medium capitalize">
          Top News Feed
        </h2>

        {/* Search Bar */}
        <div className="md:w-1/4 xl:w-1/5 relative ">
          <UserSearchField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      {/* TODO: activate and make functional  */}
      {/* <div className="mx-5">
        <button className="w-full px-3 py-4   text-left text-[#999f9f] bg-[#111315] rounded-[8px] my-8 font-normal  text-sm focus:outline-none">
          Update
        </button>
      </div> */}

      <div className="flex justify-between mx-8">
        <div className="text-sm text-white font-normal -translate-x-2">
          Stay updated with the latest headlines!
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
