// PageHeader.jsx
import React, { useState } from "react";
import UserSelector from "../UserInputs/UserSelector";
import { useAuth } from "../../context/AuthContext";
import Loader from "../Loader";

const PageHeader = ({ title, subtitle, selectPlaceholder, isNovaTheme }) => {
  const { accountOptions, selectedAccount, setSelectedAccount } = useAuth();
  const [loading, setLoading] = useState(false);

  const mobileTextShadow = {
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  };
  const isMobile = window.innerWidth < 640;

  const handleAccountSelect = (selectedOption) => {
    setSelectedAccount(selectedOption);
    localStorage.setItem("selectedAccount", JSON.stringify(selectedOption));
    console.log("Selected account:", selectedOption.label);
  };

  const placeholderText =
    accountOptions.length > 0
      ? selectPlaceholder
      : "Purchase an account to proceed";

  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h2
          className="lg:text-[24px] md:text-[24px] text-[16px] font-medium capitalize"
          style={isMobile ? mobileTextShadow : {}}
        >
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-[14px] capitalize mt-[6px]">{subtitle}</h3>
        )}
      </div>
      <div className="lg:w-[25%] lg:me-1 md:w-[30%] md:me-4 sm:me-10  sm:text-inherit text-ellipsis whitespace-nowrap">
        {selectPlaceholder && (
          <>
            {loading ? <Loader isWrapper={false} /> : null}
            <UserSelector
              options={accountOptions}
              placeholder={placeholderText}
              value={selectedAccount ? selectedAccount.value : ""}
              onChange={handleAccountSelect}
              isNovaTheme={isNovaTheme}
              isDisabled={accountOptions.length === 0}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
