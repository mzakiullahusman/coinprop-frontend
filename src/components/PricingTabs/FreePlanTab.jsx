import React from "react";
import PricingCard from "../Cards/PricingCard";

const price1 = "25,000";
const descriptionList1 = [
  "One Step Assessment Process",
  "5% Daily Drawdown",
  "10% Overall Drawdown",
  "10 Trading Days",
  "Free plan",
];

const price2 = "50,000";
const descriptionList2 = [
  "One Step Assessment Process",
  "5% Daily Drawdown",
  "10% Overall Drawdown",
  "10 Trading Days",
  "Free plan",
];

const price3 = "100,000";
const descriptionList3 = [
  "One Step Assessment Process",
  "5% Daily Drawdown",
  "10% Overall Drawdown",
  "10 Trading Days",
  "Free plan",
];

const priceCyk = "100,000";
const descriptionListCyk = [
  "One Step Assessment Process",
  "5% Daily Drawdown",
  "10% Overall Drawdown",
  "10 Trading Days",
  "Free plan",
];

const FreePlanTab = ({ isChooseYourFunding = false }) => {
  return (
    <div
      className={`flex ${
        isChooseYourFunding ? "justify-center" : "justify-center"
      } gap-6 w-full flex-wrap lg:flex-nowrap`}
    >
      {!isChooseYourFunding ? (
        <>
          <PricingCard price={price1} descriptionList={descriptionList1} />
          <PricingCard price={price2} descriptionList={descriptionList2} />
          <PricingCard price={price3} descriptionList={descriptionList3} />
        </>
      ) : (
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PricingCard price={priceCyk} descriptionList={descriptionListCyk} />
        </div>
      )}
    </div>
  );
};

export default FreePlanTab;
