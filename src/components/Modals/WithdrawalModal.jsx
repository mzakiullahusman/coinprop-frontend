import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";

import { addWithdrawal } from "../../services/withdrawalService";
import Loader from "../Loader";
import { useAuth } from "../../context/AuthContext";

const WithdrawalModal = ({
  closeModal,
  openWithdrawalSubmittedModal,
  getWithdrawalAPI,
  isProfitWithdrawalAllowed,
  availableAffiliateAmount,
}) => {
  const { selectedAccount, withdrawableProfit } = useAuth();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    withdrawalAmount: "",
    cryptoWallet: "",
    networkAddress: "",
    isAffiliateWithdrawal: false,
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [maxWithdrawalAmount, setMaxWithdrawalAmount] = useState(0);

  useEffect(() => {
    // Set initial max withdrawal amount based on the selected source
    if (formData.isAffiliateWithdrawal) {
      setMaxWithdrawalAmount(availableAffiliateAmount || 0);
    } else {
      setMaxWithdrawalAmount(withdrawableProfit || 0);
    }
  }, [
    formData.isAffiliateWithdrawal,
    withdrawableProfit,
    availableAffiliateAmount,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle withdrawal source change for isAffiliateWithdrawal
    if (name === "withdrawalSource") {
      const isAffiliate = value === "Affiliate Earning";
      setFormData((prevData) => ({
        ...prevData,
        isAffiliateWithdrawal: isAffiliate,
        tradingAccountID: isAffiliate ? "" : selectedAccount?.value?.value,
      }));
      setMaxWithdrawalAmount(determineMaxWithdrawal(value));
    } else {
      // Handle other form inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: name === "withdrawalAmount" ? Number(value) : value,
      }));
    }

    setErrorMessages((prev) => ({ ...prev, [name]: "" }));
  };

  const determineMaxWithdrawal = (source) => {
    return source === "Affiliate Earning"
      ? availableAffiliateAmount || 0
      : withdrawableProfit || 0;
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.withdrawalAmount) {
      errors.withdrawalAmount = "Withdrawal amount is required.";
    } else if (
      isNaN(formData.withdrawalAmount) ||
      Number(formData.withdrawalAmount) <= 0
    ) {
      errors.withdrawalAmount = "Withdrawal amount must be a positive number.";
    } else if (Number(formData.withdrawalAmount) < 10) {
      errors.withdrawalAmount = "Minimum withdrawal amount is $10.";
    } else if (formData.withdrawalAmount > maxWithdrawalAmount) {
      errors.withdrawalAmount = `Withdrawal amount cannot exceed $${maxWithdrawalAmount.toLocaleString()}.`;
    }

    if (!formData.cryptoWallet) {
      errors.cryptoWallet = "Crypto wallet is required.";
    }

    if (!formData.networkAddress) {
      errors.networkAddress = "Network address is required.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build request data based on formData
    const requestData = {
      withdrawalAmount: formData.withdrawalAmount,
      cryptoWallet: formData.cryptoWallet,
      networkAddress: formData.networkAddress,
      isAffiliateWithdrawal: formData.isAffiliateWithdrawal,
      ...(formData.isAffiliateWithdrawal
        ? {}
        : { tradingAccountID: selectedAccount?.value }),
    };

    setLoader(true);
    try {
      const res = await addWithdrawal(requestData);
      if (res?.success) {
        toast.success(res?.message);
        openWithdrawalSubmittedModal();
        getWithdrawalAPI();
        closeModal();
      } else {
        toast.error(res?.message || "Something went wrong");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <Loader />}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#0A0A0A] to-[#040404] bg-opacity-60 border-[1px] border-white border-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4 md:max-w-md lg:max-w-[540px]">
          {/* Close button */}
          <div className="text-center">
            <div className="flex justify-end">
              <IconButton onClick={closeModal}>
                <CloseIcon sx={{ color: "#06b6d4" }} />
              </IconButton>
            </div>
            <h2 className="text-base xl:text-[20px] font-medium text-white mt-2">
              Withdrawal Method
            </h2>
            <p className="font-normal text-sm text-[#999f9f] mt-2">
              Please choose your desired method.
            </p>
          </div>

          {/* Available Trading Profit and Affiliate Amount */}
          {isProfitWithdrawalAllowed && (
            <div className="text-center mt-4">
              <p className="font-normal text-sm text-[#999f9f] mt-2">
                Available Trading Profit for Withdrawal:{" "}
                <span className="text-[16px] text-[##14b8a6]">
                  {withdrawableProfit !== undefined
                    ? `$${withdrawableProfit.toLocaleString()}`
                    : "$0"}
                </span>
              </p>
            </div>
          )}
          <div className="text-center mt-2">
            <p className="font-normal text-sm text-[#999f9f] mt-2">
              Available Affiliate Amount:{" "}
              <span className="text-[16px] text-[#D974F3]">
                {availableAffiliateAmount !== undefined
                  ? `$${availableAffiliateAmount.toLocaleString()}`
                  : "$0"}
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {isProfitWithdrawalAllowed && (
              <>
                <h2 className="text-xs font-medium mt-4">Withdrawal Source</h2>
                <select
                  className="border-white border-opacity-10 rounded-[10px] border-[1px] bg-[#111411] w-full text-sm p-3 mt-3 text-white"
                  name="withdrawalSource"
                  value={
                    formData.isAffiliateWithdrawal
                      ? "Affiliate Earning"
                      : "Trading Profits"
                  }
                  onChange={handleChange}
                  disabled={loader}
                >
                  <option value="" disabled>
                    Select Withdrawal Source
                  </option>
                  <option value="Affiliate Earning">Affiliate Earning</option>
                  <option value="Trading Profits">Trading Profits</option>
                </select>
                {errorMessages.withdrawalSource && (
                  <p className="text-red-500 text-xs mt-2">
                    {errorMessages.withdrawalSource}
                  </p>
                )}
              </>
            )}

            {/* Withdrawal Amount */}
            <h2 className="text-xs font-medium mt-6">Withdrawal Amount</h2>
            <input
              className="border-white border-opacity-10 rounded-[10px] border-[1px] bg-[#111411] w-full text-sm p-3 mt-3"
              type="number"
              name="withdrawalAmount"
              value={formData.withdrawalAmount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="0"
              step="1"
              max={maxWithdrawalAmount > 0 ? maxWithdrawalAmount : undefined}
              disabled={loader}
            />
            {errorMessages.withdrawalAmount && (
              <p className="text-red-500 text-xs mt-2">
                {errorMessages.withdrawalAmount}
              </p>
            )}

            {/* Withdrawal Network Address */}
            <h2 className="text-xs font-medium mt-6">Network Address</h2>
            <input
              className="border-white border-opacity-10 rounded-[10px] border-[1px] bg-[#111411] w-full text-sm p-3 mt-3"
              type="text"
              name="networkAddress"
              value={formData.networkAddress}
              onChange={handleChange}
              placeholder="Enter network address"
              disabled={loader}
            />
            {errorMessages.networkAddress && (
              <p className="text-red-500 text-xs mt-2">
                {errorMessages.networkAddress}
              </p>
            )}

            {/* Crypto Wallet Dropdown */}
            <h2 className="text-xs font-medium mt-4">Crypto Wallet</h2>
            <select
              className="border-white border-opacity-10 rounded-[10px] border-[1px] bg-[#111411] w-full text-sm p-3 mt-3 text-white"
              name="cryptoWallet"
              value={formData.cryptoWallet}
              onChange={handleChange}
              disabled={loader}
            >
              <option value="" disabled>
                Select Crypto Wallet
              </option>
              <option value="ETH (ERC-20)">ETH (ERC-20)</option>
              <option value="USDT - ERC-20">USDT - ERC-20</option>
              {/* Add more options as needed */}
            </select>
            {errorMessages.cryptoWallet && (
              <p className="text-red-500 text-xs mt-2">
                {errorMessages.cryptoWallet}
              </p>
            )}

            <Button
              type="submit"
              variant="containedGradient"
              disabled={loader}
              sx={{ width: "100%", mt: 3 }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WithdrawalModal;
