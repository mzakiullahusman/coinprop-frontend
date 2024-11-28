import React from "react";
import search from "../../assets/icons/search.svg";

const UserSearchField = ({ value, onChange }) => {
  return (
    <div
      className="flex items-center 2xl:gap-1.5 w-full h-[40px] p-3.5 rounded-lg"
      style={{ border: "1px solid #2A80B3", background: "#11152e" }}
    >
      <input
        className="flex-1 bg-transparent border-none focus:outline-none text-white text-[14px] font-medium leading-4 lg:leading-normal"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <img
        src={search}
        alt="Search"
        className="w-5 h-5 translate-x-0 lg:translate-x-[-55px] xl:translate-x-[-25px] 2xl:translate-x-0"
      />
    </div>
  );
};

export default UserSearchField;
