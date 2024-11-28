import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FreePlanTab from "../components/PricingTabs/FreePlanTab";
import ExpressPlanTab from "../components/PricingTabs/ExpressPlanTab";
import EvaluationPlanTab from "../components/PricingTabs/EvaluationPlanTab";

import PageCardAlt from "../components/PageCards/PageCardAlt";

const ChooseFunding = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const tabContent = [
    {
      title: "Choose Your Funding",
      description:
        "One Phase, no time limit, get started trading on a funded account faster!",
    },
    {
      title: "Choose Your Funding",
      description:
        "One Phase, no time limit, get started trading on a funded account faster!",
    },
    {
      title: "Choose Your Funding",
      description:
        "Two Phases, same profit target, get started trading on a funded account faster!",
    },
  ];

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleMyPlan = () => {
    console.log("handleMyPlan");
    navigate("/trading-account");
  };

  const handleChooseFunding = () => {
    navigate("/choose-funding");
  };

  const handlePaymentHistory = () => {
    console.log("handlePaymentHistory");
  };

  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div id="buttons" className="flex justify-center w-full">
          <div className="flex gap-4 w-full lg:w-[50%] flex-wrap sm:flex-nowrap">
            <Button variant="containedGradient" onClick={handleMyPlan}>
              My Plan
            </Button>
            <Button variant="containedGradient" onClick={handleChooseFunding}>
              Choose Funding
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
          <div className="flex flex-wrap lg:flex-nowrap justify-center w-full gap-3 mt-3">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs"
              sx={{
                "& button:focus": {
                  color: "#D974F3",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#D974F3",
                  fontWeight: 500,
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
            >
              <Tab
                sx={{
                  width: { xs: 100, sm: 200 },
                  fontWeight: 500,
                  fontSize: { xs: 14, sm: 16 },
                  color: "#646464",
                  textTransform: "capitalize",
                }}
                label="Free plan"
              />
              <Tab
                sx={{
                  width: { xs: 100, sm: 200 },
                  fontWeight: 500,
                  fontSize: { xs: 14, sm: 16 },
                  color: "#646464",
                  textTransform: "capitalize",
                }}
                label="Express"
              />
              <Tab
                sx={{
                  width: { xs: 100, sm: 200 },
                  fontWeight: 500,
                  fontSize: { xs: 14, sm: 16 },
                  color: "#646464",
                  textTransform: "capitalize",
                }}
                label="Evaluation"
              />
            </Tabs>
          </div>
          {value === 0 && <FreePlanTab isChooseYourFunding={true} />}
          {value === 1 && <ExpressPlanTab isChooseYourFunding={true} />}
          {value === 2 && <EvaluationPlanTab isChooseYourFunding={true} />}
        </PageCardAlt>
      </div>
    </>
  );
};

export default ChooseFunding;
