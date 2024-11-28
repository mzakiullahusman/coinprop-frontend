// EvaluationPlanTab.js
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PricingCard from "../Cards/PricingCard";
import Loader from "../Loader";
import { getAllPaymentPlans } from "../../services/paymentService";

const EvaluationPlanTab = () => {
  const [paymentPlans, setPaymentPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to assign letters A, B, C, D based on index
  const assignPlanLetters = (plans) => {
    const letters = ["A", "B", "C", "D"];
    return plans.map((plan, index) => ({
      ...plan,
      mt5PlanId: letters[index] || `Plan${index + 1}`, // Fallback in case there are more than 4 plans
    }));
  };

  // Fetch payment plans on component mount
  useEffect(() => {
    const fetchPaymentPlans = async () => {
      try {
        const response = await getAllPaymentPlans();
        if (response.success) {
          const plansWithLetters = assignPlanLetters(response.data);
          setPaymentPlans(plansWithLetters);
        } else {
          toast.error("Failed to fetch payment plans.");
          setError("Failed to fetch payment plans.");
        }
      } catch (err) {
        toast.error("An error occurred while fetching payment plans.");
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentPlans();
  }, []);

  const getMostPopularPlanId = () => {
    if (paymentPlans.length === 0) return null;
    const sortedPlans = [...paymentPlans].sort((a, b) => {
      const priceA = parseFloat(a.programPricing.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.programPricing.replace(/[^0-9.-]+/g, ""));
      return priceB - priceA;
    });
    return sortedPlans[0]._id;
  };

  const mostPopularPlanId = getMostPopularPlanId();

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-center gap-6 flex-wrap xl:flex-nowrap">
        <>
          {isLoading && <Loader isWrapper={false} />}
          {paymentPlans.slice(0, 3).map((plan) => {
            const descriptionList = [
              `Profit Target ${plan.profitTarget}`,
              "One Step Assessment Process",
              `${plan.dailyDrawdown} Daily Drawdown`,
              `${plan.totalDrawdown} Overall Drawdown`,
              `${plan.tradingDays} Trading Days`,
              `One Time Fee ${plan.programPricing}`,
            ];

            return (
              <PricingCard
                key={plan._id}
                chargeAmount={plan.programPricing}
                planId={plan._id}
                mt5PlanId={plan.mt5PlanId}
                price={plan.name.replace("$", "")}
                descriptionList={descriptionList}
                isMostPopular={plan._id === mostPopularPlanId}
              />
            );
          })}
        </>
      </div>
      <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap xl:px-[34%] lg:mt-2">
        {paymentPlans.length > 3 && (
          <PricingCard
            chargeAmount={paymentPlans[3].programPricing}
            planId={paymentPlans[3]._id}
            mt5PlanId={paymentPlans[3].mt5PlanId}
            price={paymentPlans[3].name.replace("$", "")}
            descriptionList={[
              `Profit Target ${paymentPlans[3].profitTarget}`,
              "One Step Assessment Process",
              `${paymentPlans[3].dailyDrawdown} Daily Drawdown`,
              `${paymentPlans[3].totalDrawdown} Overall Drawdown`,
              `${paymentPlans[3].tradingDays} Trading Days`,
              `One Time Fee ${paymentPlans[3].programPricing}`,
            ]}
            isMostPopular={paymentPlans[3]._id === mostPopularPlanId}
          />
        )}
      </div>
    </div>
  );
};

export default EvaluationPlanTab;
