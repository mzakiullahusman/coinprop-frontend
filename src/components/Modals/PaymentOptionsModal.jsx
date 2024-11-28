import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Cards from "react-credit-cards-2";
import { useForm, Controller } from "react-hook-form";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import Loader from "../Loader";
import { createMT5Account } from "../../services/userService";

const PaymentOptionsModal = ({
  isOpen,
  onClose,
  onCryptoPayment,
  onNormalPayment,
  paymentLoading,
  cryptoLoading,
  normalLoading,
  modalRef,
  chargeAmount,
  planAccountSize,
  planId,
  mt5PlanId,
}) => {
  const { user, fetchAccounts } = useAuth();
  const [isPayingNormally, setIsPayingNormally] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const basePrice = parseFloat(chargeAmount.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    setFinalAmount(basePrice);
  }, [basePrice]);

  const validateCouponCode = async (code) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock coupon codes
    if (code === "FASTTRACK") {
      return { success: true, discountPercentage: 10 };
    } else {
      return { success: false, message: "Invalid coupon code" };
    }
  };

  const handleApplyCoupon = async () => {
    const result = await validateCouponCode(couponCode.trim().toUpperCase());
    if (result.success) {
      const discountPercentage = result.discountPercentage;
      const discount = (discountPercentage / 100) * basePrice;
      setDiscountAmount(discount);
      setFinalAmount(basePrice - discount);
      toast.success(`Coupon applied! You get ${discountPercentage}% off.`);
    } else {
      setDiscountAmount(0);
      setFinalAmount(basePrice);
      toast.error(result.message);
    }
  };

  const handleFreePurchase = async () => {
    try {
      const mt5AccountResponse = await createMT5Account(mt5PlanId);
      if (
        mt5AccountResponse.data.metaTraderResponse.message ===
        "Account created and credentials sent successfully"
      ) {
        toast.success("MT5 account created successfully.");
        await getToken();
        await fetchAccounts(user.id);
      } else {
        throw new Error(
          mt5AccountResponse.message || "MT5 account creation failed."
        );
      }
    } catch (error) {
      console.error("Error creating MT5 account:", error);
      toast.error(error.message || "Failed to create MT5 account.");
    } finally {
      onClose();
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watch form fields to synchronize with cardInfo
  const number = watch("number", "");
  const name = watch("name", "");
  const expiry = watch("expiry", "");
  const cvc = watch("cvc", "");

  useEffect(() => {
    setCardInfo((prev) => ({
      ...prev,
      number: number,
      name: name,
      expiry: expiry,
      cvc: cvc,
    }));
  }, [number, name, expiry, cvc]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setIsPayingNormally(false);
      setCardInfo({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: "",
      });
    }
  };

  const handleInputFocus = (e) => {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  };

  const onSubmit = (data) => {
    // Call the parent handler with card details
    onNormalPayment({
      cardNumber: data.number,
      expirationDate: data.expiry,
      cardCode: data.cvc,
      amount: finalAmount,
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        {/* Modal Content */}
        <div
          className="bg-gradient-to-b from-[#0A0A0A] to-[#040404] bg-opacity-90 border border-white border-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 relative overflow-auto max-h-full"
          ref={modalRef} // Assigning the ref for auto-scroll
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <IconButton onClick={onClose}>
              <CloseIcon sx={{ color: "#D974F3" }} />
            </IconButton>
          </div>

          {/* Modal Title */}
          <h2 className="text-xl font-medium text-white text-center mt-2">
            Choose Payment Method
          </h2>
          <p className="font-normal text-sm text-[#999f9f] text-center mt-2">
            Select your preferred payment option below.
          </p>

          {/* Coupon Code Input */}
          <div className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full p-3.5 bg-transparent text-[#999F9F] text-[14px] font-medium leading-4 border border-[#ffffff1a] focus:outline-none focus:border-[#D974F3] rounded-[10px]"
            />
            <Button
              variant="containedNoGradient"
              onClick={handleApplyCoupon}
              className="mt-2 bg-white text-[#0A0A0A] border border-pink-500 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              Apply Coupon
            </Button>
          </div>

          {/* Payment Options or Credit Card Form */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Payment Summary */}
            <div className="bg-[#1A1A1A] px-4 py-8 rounded-lg">
              <h3 className="text-lg font-medium text-white">
                Payment Summary
              </h3>
              <div className="mt-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#999f9f]">Account Size:</span>
                  <span className="text-sm text-white">${planAccountSize}</span>
                </div>
                <br />
                <div className="flex justify-between">
                  <span className="text-sm text-[#999f9f]">Base Price:</span>
                  <span className="text-sm text-white">
                    ${basePrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#999f9f]">Discount:</span>
                  <span className="text-sm text-white">
                    -${discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-2 border-t border-[#333] pt-2">
                  <span className="text-sm font-medium text-white">Total:</span>
                  <span className="text-sm font-medium text-white">
                    ${finalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {finalAmount === 0 ? (
              // Render the Get Plan for Free button
              <Button
                variant="containedGradient"
                onClick={handleFreePurchase}
                disabled={paymentLoading}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors duration-300 flex items-center justify-center mt-4"
              >
                {paymentLoading ? (
                  <Loader isWrapper={false} />
                ) : (
                  `Get Plan for Free`
                )}
              </Button>
            ) : !isPayingNormally ? (
              <>
                {/* Cryptocurrency Payment Option */}
                <Button
                  variant="containedGradient"
                  onClick={() => onCryptoPayment(finalAmount)}
                  disabled={cryptoLoading || normalLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors duration-300 flex items-center justify-center mt-4"
                >
                  {cryptoLoading ? (
                    <Loader isWrapper={false} />
                  ) : (
                    `Pay $${finalAmount.toFixed(2)} with Cryptocurrency`
                  )}
                </Button>

                {/* Normal Payment Option */}
                <Button
                  variant="containedNoGradient"
                  onClick={() => setIsPayingNormally(true)}
                  disabled={cryptoLoading || normalLoading}
                  className="bg-white text-[#0A0A0A] border border-pink-500 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                >
                  {normalLoading ? (
                    <Loader isWrapper={false} />
                  ) : (
                    `Pay $${finalAmount.toFixed(2)} with Credit/Debit Card`
                  )}
                </Button>
              </>
            ) : (
              // Credit Card Form
              <div className="flex flex-col items-center mt-6">
                <Cards
                  number={cardInfo.number}
                  name={cardInfo.name}
                  expiry={cardInfo.expiry}
                  cvc={cardInfo.cvc}
                  focused={cardInfo.focus}
                />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
                  <div className="mb-4">
                    <Controller
                      name="number"
                      control={control}
                      rules={{
                        required: "Card number is required",
                        pattern: {
                          value: /^\d{16,19}$/,
                          message: "Invalid card number",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Card Number"
                          {...field}
                          onFocus={handleInputFocus}
                          className={`w-full p-3.5 bg-transparent text-[#999F9F] text-[14px] font-medium leading-4 border ${
                            errors.number
                              ? "border-red-500"
                              : "border-[#ffffff1a]"
                          } focus:outline-none focus:border-[#D974F3] rounded-[10px]`}
                          maxLength="19"
                          autoComplete="cc-number"
                        />
                      )}
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.number.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Name on Card"
                          {...field}
                          onFocus={handleInputFocus}
                          className={`w-full p-3.5 bg-transparent text-[#999F9F] text-[14px] font-medium leading-4 border ${
                            errors.name
                              ? "border-red-500"
                              : "border-[#ffffff1a]"
                          } focus:outline-none focus:border-[#D974F3] rounded-[10px]`}
                          autoComplete="cc-name"
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 flex gap-4">
                    <Controller
                      name="expiry"
                      control={control}
                      rules={{
                        required: "Expiry date is required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                          message: "Invalid expiry date",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Expiry (MM/YY)"
                          {...field}
                          onFocus={handleInputFocus}
                          className={`w-full p-3.5 bg-transparent text-[#999F9F] text-[14px] font-medium leading-4 border ${
                            errors.expiry
                              ? "border-red-500"
                              : "border-[#ffffff1a]"
                          } focus:outline-none focus:border-[#D974F3] rounded-[10px]`}
                          maxLength="5"
                          autoComplete="cc-exp"
                        />
                      )}
                    />
                    <Controller
                      name="cvc"
                      control={control}
                      rules={{
                        required: "CVC is required",
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: "Invalid CVC",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="CVC"
                          {...field}
                          onFocus={handleInputFocus}
                          className={`w-full p-3.5 bg-transparent text-[#999F9F] text-[14px] font-medium leading-4 border ${
                            errors.cvc ? "border-red-500" : "border-[#ffffff1a]"
                          } focus:outline-none focus:border-[#D974F3] rounded-[10px]`}
                          maxLength="4"
                          autoComplete="cc-csc"
                        />
                      )}
                    />
                  </div>
                  {errors.expiry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.expiry.message}
                    </p>
                  )}
                  {errors.cvc && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cvc.message}
                    </p>
                  )}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      type="submit"
                      variant="containedGradient"
                      disabled={normalLoading}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors duration-300"
                    >
                      {normalLoading ? (
                        <Loader isWrapper={false} />
                      ) : (
                        `Pay $${finalAmount.toFixed(2)} Now`
                      )}
                    </Button>
                    <Button
                      variant="text"
                      onClick={() => {
                        setIsPayingNormally(false);
                        setCardInfo({
                          number: "",
                          name: "",
                          expiry: "",
                          cvc: "",
                          focus: "",
                        });
                      }}
                      sx={{
                        color: "#D974F3",
                        textTransform: "capitalize",
                        fontWeight: "medium",
                        borderRadius: "12px",
                        "&:hover": {
                          color: "#fff",
                        },
                      }}
                    >
                      Back to Payment Options
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOptionsModal;
