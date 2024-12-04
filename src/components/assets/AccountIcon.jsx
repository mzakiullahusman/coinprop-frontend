import React from "react";

const AccountIcon = ({ active }) => {
  return (
    <div>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.46191 15.6667C3.4084 13.6021 6.05109 12.3333 8.96191 12.3333C11.8727 12.3333 14.5154 13.6021 16.4619 15.6667M12.7119 5.25C12.7119 7.32107 11.033 9 8.96191 9C6.89085 9 5.21191 7.32107 5.21191 5.25C5.21191 3.17893 6.89085 1.5 8.96191 1.5C11.033 1.5 12.7119 3.17893 12.7119 5.25Z"
          stroke={active ? "#01FF9D" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AccountIcon;
