import React from "react";
import PricingCard from "../Cards/PricingCard";

const price1 = "10,000";
const descriptionList1 = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Trading Days",
  "One Time Refundable Fee $99",
];

const price2 = "25,000";
const descriptionList2 = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Trading Days",
  "One Time Refundable Fee $238",
];

const price3 = "50,000";
const descriptionList3 = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Trading Days",
  "One Time Refundable Fee $428",
];

const price4 = "100,000";
const descriptionList4 = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Trading Days",
  "Mastery Course ",
  "A Traders Mind",
  "One Time Refundable Fee $749",
];

const price5 = "200,000";
const descriptionList5 = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Trading Days",
  "Mastery Course",
  "A Traders Mind",
  "One Time Refundable Fee $1498",
];

const priceCyk = "200,000";
const descriptionListCyk = [
  "One Step Assessment Process",
  "4% Daily Drawdown",
  "5% Overall Drawdown",
  "3 Minimum Trading Days",
  "Max Allocation $400,00 ",
  "Mastery Course",
  "A Traders Mind",
];

const ExpressPlanTab = ({ isChooseYourFunding = false }) => {
  return (
    <div
      className={`flex flex-col gap-6 w-full ${
        isChooseYourFunding ? "items-center" : ""
      }`}
    >
      {!isChooseYourFunding ? (
        <>
          <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">
            <PricingCard price={price1} descriptionList={descriptionList1} />
            <PricingCard price={price2} descriptionList={descriptionList2} />
            <PricingCard
              price={price3}
              descriptionList={descriptionList3}
              isMostPopular={true}
            />
          </div>
          <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">
            <PricingCard price={price4} descriptionList={descriptionList4} />
            <PricingCard price={price5} descriptionList={descriptionList5} />
          </div>
        </>
      ) : (
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PricingCard price={priceCyk} descriptionList={descriptionListCyk} />
        </div>
      )}
    </div>
  );
};

export default ExpressPlanTab;
