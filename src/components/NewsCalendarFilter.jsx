import React, { useState } from "react";
import EurIcon from "../assets/icons/eur.svg";
import NzdIcon from "../assets/icons/nzd.svg";
import GBPIcon from "../assets/icons/gbp.svg";
import USDIcon from "../assets/icons/usd.svg";
import CADIcon from "../assets/icons/cad.svg";
import AUDIcon from "../assets/icons/aud.svg";
import JPYIcon from "../assets/icons/jpy.svg";
import CHFIcon from "../assets/icons/chf.svg";

const NewsCalendarFilter = ({
  days,
  daysMobile,
  impacts,
  currencies,
  toggleCheckbox,
}) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedImpact, setSelectedImpact] = useState([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  const currencyIcons = {
    EUR: EurIcon,
    NZD: NzdIcon,
    GBP: GBPIcon,
    USD: USDIcon,
    CAD: CADIcon,
    AUD: AUDIcon,
    JPY: JPYIcon,
    CHF: CHFIcon,
  };

  return (
    <>
      <div className="flex justify-between flex-col xl:flex-row mb-6">
        <div>
          <h3 className="text-white mb-3 text-base lg:text-lg font-semibold">
            Days
          </h3>
          <div className="hidden md:flex gap-3">
            {days.map((day) => (
              <label
                key={day}
                className={`rounded-[10px] font-[lexend] text-sm p-3 font-medium flex items-center gap-2 ${
                  selectedDays.includes(day)
                    ? "border-[#D974F3] text-white border-[1px]"
                    : "border-white text-[#999f9f] border-opacity-10 border-[2px]"
                } `}
              >
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() =>
                    toggleCheckbox(setSelectedDays, selectedDays, day, "days")
                  }
                  className="form-checkbox rounded w-[14px] h-[14px]"
                />
                {day}
              </label>
            ))}
          </div>
          <div className="flex flex-wrap md:hidden gap-3">
            {daysMobile.map((day) => (
              <label
                key={day}
                className={`font-[lexend] rounded-[10px] text-sm p-2 md:p-3 font-medium flex items-center gap-2 ${
                  selectedDays.includes(day)
                    ? "border-[#D974F3] text-white border-[1px]"
                    : "border-white text-[#999f9f] border-opacity-10 border-[2px]"
                } `}
              >
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() =>
                    toggleCheckbox(setSelectedDays, selectedDays, day, "days")
                  }
                  className="form-checkbox rounded w-[14px] h-[14px]"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-white mb-3 text-base lg:text-lg font-semibold">
            Impact
          </h3>
          <div className="flex flex-wrap gap-3">
            {impacts.map((impact) => {
              // Determine colors based on impact value
              const getColorClass = (impact) => {
                switch (impact) {
                  case "Positive":
                    return selectedImpact.includes(impact)
                      ? "border-[#D974F3] text-[#D974F3]" // Green for Low
                      : "border-white border-opacity-10 border-[1px] text-[#D974F3]";
                  case "Neutral":
                    return selectedImpact.includes(impact)
                      ? "border-[#ff9f43] text-[#ff9500]" // Orange for Medium
                      : "border-white border-opacity-10 text-[#ff9500]";
                  case "Negative":
                    return selectedImpact.includes(impact)
                      ? "border-[#ff4d4f] text-[#ec221f]" // Red for High
                      : "border-white border-opacity-10 text-[#ec221f]";
                  default:
                    return selectedImpact.includes(impact)
                      ? "border-[#999f9f] text-white" // Default color
                      : "border-white border-opacity-10 text-[#999f9f]";
                }
              };

              return (
                <label
                  key={impact}
                  className={`font-[lexend] rounded-[10px] text-sm p-[6px] md:p-3 font-medium flex items-center bg-[#151b1980] border-[1px] gap-[4px] md:gap-2 ${getColorClass(
                    impact
                  )} `}
                >
                  <input
                    type="checkbox"
                    checked={selectedImpact.includes(impact)}
                    onChange={() =>
                      toggleCheckbox(
                        setSelectedImpact,
                        selectedImpact,
                        impact,
                        "impact"
                      )
                    }
                    className="form-checkbox rounded w-[14px] h-[14px] checked:bg-transparent"
                  />
                  {impact}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Currency Filter */}
      <div className="mb-6">
        <h3 className="text-white mb-3 font-[lexend] text-base lg:text-lg font-semibold">
          Currency
        </h3>
        <div className="border-2 flex items-start border-white border-opacity-10 gap-x-12 md:gap-x-16 px-3 md:px-20 xl:px-12 py-4">
          <label className="font-[lexend] text-base font-medium flex items-center w-[6%] text-white cursor-pointer gap-2">
            <input
              type="checkbox"
              checked={selectedCurrencies?.length === currencies?.length}
              onClick={(event) => {
                if (event?.target?.checked) {
                  toggleCheckbox(
                    setSelectedCurrencies,
                    selectedCurrencies,
                    currencies,
                    "currencies"
                  );
                } else {
                  toggleCheckbox(
                    setSelectedCurrencies,
                    selectedCurrencies,
                    [],
                    "currencies"
                  );
                }
              }}
              className="form-checkbox rounded text-green-600 w-[14px] h-[14px]"
            />
            All
          </label>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 justify-center xl:w-[94%]">
            {currencies.map((currency, index) => (
              <div
                style={
                  selectedCurrencies?.some(
                    (selected) => selected?.code === currency?.code
                  )
                    ? {
                        border: "1px solid #00C68C",
                        borderRadius: "7px",
                        padding: "5px",
                      }
                    : { padding: "5px" }
                }
                key={currencies?.code}
                onClick={() => {
                  toggleCheckbox(
                    setSelectedCurrencies,
                    selectedCurrencies,
                    [currencies[index]],
                    "currencies"
                  );
                }}
              >
                <label
                  key={currency.code}
                  className="font-[lexend] text-base font-medium hidden md:flex gap-2 items-center text-white "
                >
                  <img
                    src={currencyIcons[currency.code]}
                    alt={`${currency.label} flag`}
                    className="w-5 h-5"
                  />
                  {currency.code}
                </label>
                {/* <img
                  src={currencyIcons[currency.code]}
                  alt={`${currency.label} flag`}
                  className="w-5 h-5 md:hidden"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCalendarFilter;
