import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import EvaluationPlanTab from "../components/PricingTabs/EvaluationPlanTab";
import PageCardAlt from "../components/PageCards/PageCardAlt";

const TradingAccount = () => {
  const [value, setValue] = useState(2);
  const navigate = useNavigate();

  const tabContent = [
    {
      title: "Free Plan",
      description:
        "You are currently registered under Free subscription plan. You could start trading by subscribing a new account.",
    },
    {
      title: "HFT Series Evaluation",
      description:
        "Two Phases, same profit target, get started trading on a funded account faster!",
    },
    {
      title: "Express Plan",
      description:
        "One Phase, no time limit, get started trading on a funded account faster!",
    },
  ];

  const handleMyPlan = () => {
    navigate("/trading-account");
  };

  const handlePaymentHistory = () => {
    navigate("/billing-and-accounts");
  };

  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div id="buttons" className="flex justify-center w-full">
          <div className="flex gap-4 w-full lg:w-[50%] flex-wrap sm:flex-nowrap">
            <Button variant="containedGradient" onClick={handleMyPlan}>
              My Plan
            </Button>
            <Button
              variant="containedNoGradient"
              onClick={handlePaymentHistory}
            >
              Payment History
            </Button>
          </div>
        </div>
        <PageCardAlt>
          <div className="flex flex-col gap-3 text-center w-full">
            <h2 className="text-[24px] lg:text-[60px] font-bold capitalize">
              {tabContent[value].title}
            </h2>
            <p className="text-[16px]">{tabContent[value].description}</p>
          </div>
          <EvaluationPlanTab />
        </PageCardAlt>
      </div>
    </>
  );
};

export default TradingAccount;
