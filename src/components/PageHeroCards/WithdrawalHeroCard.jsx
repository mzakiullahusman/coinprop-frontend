import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import WithdrawalModal from "../Modals/WithdrawalModal";
import WithdrawalSubmitted from "../Modals/WithdrawalSubmitted";
import Kyc from "../Kyc";
import { userKycStatus } from "../../services/authService";
import { affiliateResults } from "../../services/userService";
import { getWithdrawals } from "../../services/withdrawalService";
import Loader from "../Loader";
import MessageModal from "../Modals/MessageModal";

const WithdrawalHeroCard = ({
  title,
  description,
  bgImage,
  isProfitWithdrawalAllowed,
}) => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [withdrawalStatusMessage, setWithdrawalStatusMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [withdrawalsData, setWithdrawalsData] = useState([]);
  const [availableAffiliateAmount, setAvailableAffiliateAmount] = useState(0);

  // Set the initial payout date to 14 days from now (November 25, 2024)
  const initialPayoutDate = new Date("2024-11-25");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openWithdrawalMethod = () => {
    const today = new Date();

    // Calculate the days remaining until payout
    const diffTime = initialPayoutDate.getTime() - today.getTime();
    const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Set the status message based on the remaining days
    if (remainingDays > 0) {
      setWithdrawalStatusMessage(
        `Payouts available after ${remainingDays} days.`
      );
    } else {
      setWithdrawalStatusMessage("Payouts are now available.");
    }

    // Show MessageModal with the countdown message
    setModalType("MessageModal");
    setIsOpen(true);
  };

  const openWithdrawalSubmittedModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setModalType("WithdrawalSubmitted");
      setIsOpen(true);
    }, 1000);
  };

  const handleWithdrawalClick = async () => {
    setLoading(true);
    setStatusMessage(""); // Clear any previous message
    try {
      const status = await userKycStatus();
      console.log("KYC status:", status.message);
      // Set the status message and open the modal
      setStatusMessage(status.message);
      setModalType("MessageModal");
      setIsOpen(true);
    } catch (error) {
      // Set the error message and open the modal
      setStatusMessage("An error occurred while checking KYC status.");
      setModalType("MessageModal");
      setIsOpen(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAffiliateData = async () => {
      try {
        const data = await affiliateResults();
        setAvailableAffiliateAmount(data.data.allTime.unpaidEarnings);
      } catch (err) {
        console.error(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliateData();
  }, []);

  return (
    <>
      <div
        className="w-full rounded-xl p-[40px] flex flex-col bg-sidebar border border-[#3d4054] justify-center items-center lg:items-start min-h-[395px] "
      >
        <div className="w-[70%] lg:w-1/2 text-center lg:text-start">
          <h2 className="text-custom-cyan text-[24px] xl:text-[48px] font-medium mb-6">
            {title}
          </h2>
          <p className="text-[16px] mt-[12px]">{description}</p>
        </div>

        <div className="flex items-center gap-[10px] mt-8 lg:mt-[70px] w-full flex-wrap md:flex-nowrap justify-center md:justify-start">
          <div className="w-[70%] sm:w-[45%] xl:w-[25%]">
            <Kyc />
          </div>

          <div className="w-[70%] sm:w-[45%] xl:w-[25%]">
            <Button
              variant="containedGradient"
              sx={{ borderRadius: "12px", textWrap: "nowrap" }}
              onClick={openWithdrawalMethod}
              disabled={loading}
            >
              {loading && <Loader isWrapper={false} />}
              {loading ? "Checking KYC..." : "Withdrawal Request"}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && modalType === "WithdrawalModal" && (
        <WithdrawalModal
          closeModal={closeModal}
          openWithdrawalSubmittedModal={openWithdrawalSubmittedModal}
          getWithdrawalAPI={getWithdrawals}
          isProfitWithdrawalAllowed={isProfitWithdrawalAllowed}
          availableAffiliateAmount={availableAffiliateAmount}
        />
      )}

      {isOpen && modalType === "WithdrawalSubmitted" && (
        <WithdrawalSubmitted closeModal={closeModal} />
      )}

      {isOpen && modalType === "MessageModal" && (
        <MessageModal
          message={withdrawalStatusMessage}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default WithdrawalHeroCard;
