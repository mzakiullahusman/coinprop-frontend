import React, { useState, useRef, useEffect } from "react";
import { Button, Chip } from "@mui/material";
import toast from "react-hot-toast";
import {
  createCryptoPayment,
  chargeCreditCard,
  purchasePlan,
} from "../../services/paymentService";
import { createMT5Account } from "../../services/userService";
import { useAuth } from "../../context/AuthContext";
import { splitTextWithSymbols } from "../../utils/splitTextWithSymbols";
import Loader from "../Loader";
import bookmarkIcon from "../../assets/icons/bookmarkIcon.svg";
import PaymentOptionsModal from "../Modals/PaymentOptionsModal";
import styles from "./cards.module.css";
import { getToken } from "../../services/mt5ApiClient";

const PricingCard = ({
  chargeAmount,
  planType = "Evaluation Funding",
  planId,
  mt5PlanId,
  price,
  descriptionList,
  isMostPopular = false,
  onSelect,
}) => {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [normalLoading, setNormalLoading] = useState(false);

  const { user, fetchAccounts } = useAuth();

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ref for the modal
  const modalRef = useRef(null);

  // Handler to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handler to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isModalOpen]);

  // Crypto checkout handler
  const handleCryptoCheckout = async (amount) => {
    setCryptoLoading(true);
    setPaymentLoading(true);

    const formattedAmount = parseFloat(amount.toFixed(2));

    try {
      const response = await createCryptoPayment({
        name: planType,
        description: "new_checkout",
        local_price: {
          amount: formattedAmount,
          currency: "USD",
        },
        pricing_type: "fixed_price",
        metadata: {
          userId: user.id,
          plan: mt5PlanId,
          paymentPlanId: planId,
        },
      });
      console.log(
        "🚀 ~ handleCryptoCheckout ~ response.data.hosted_url:",
        response.data.hosted_url
      );

      const checkoutUrl = response.data.hosted_url;
      if (checkoutUrl) {
        window.open(checkoutUrl, "_blank", "noopener,noreferrer");
      } else {
        throw new Error("Checkout URL not found in the response.");
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
      toast.error("Failed to initiate cryptocurrency payment.");
    } finally {
      setCryptoLoading(false);
      setPaymentLoading(false);
      closeModal();
    }
  };

  // Normal (Credit Card) payment handler
  const handleNormalPayment = async (cardDetails) => {
    const { cardNumber, expirationDate, cardCode, amount } = cardDetails;

    setNormalLoading(true);
    setPaymentLoading(true); // Disable the main payment button

    const formattedAmount = amount.toFixed(2);

    try {
      // Charge the credit card
      const chargeResponse = await chargeCreditCard({
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cardCode: cardCode,
        amount: formattedAmount,
      });

      if (chargeResponse.success && chargeResponse.data.transId) {
        // Purchase the plan
        const purchaseResponse = await purchasePlan({
          paymentPlan: planId,
          amountPaid: formattedAmount,
          transactionId: chargeResponse.data.transId,
          paymentMethod: "credit_card",
        });

        console.log(
          "🚀 ~ handleNormalPayment ~ purchaseResponse:",
          purchaseResponse
        );
        if (purchaseResponse.success) {
          toast.success("Payment successful! Plan purchased.");

          // Create MT5 account here using mt5PlanId
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
          }
        } else {
          throw new Error(purchaseResponse.message || "Purchase failed.");
        }
      } else {
        throw new Error(chargeResponse.message || "Credit card charge failed.");
      }
    } catch (error) {
      console.error("Error in normal payment:", error);
      toast.error(error.message || "Failed to process credit card payment.");
    } finally {
      setNormalLoading(false);
      setPaymentLoading(false);
      closeModal();
    }
  };

  return (
    <>
      <div className={`${styles.pricingCard} w-full`}>
        {isMostPopular && (
          <div
            id="chip-container"
            className="mb-[-10px] z-10 absolute top-[-25px]"
            onClick={onSelect}
          >
            <Chip
              label="Most Popular"
              sx={{
                fontFamily: "Turret Road",
                fontSize: "14px",
                fontWeight: 700,
                color: "white",
                background:
                  "linear-gradient(133deg, #6746E1 11.53%, #D974F3 95.94%)",
              }}
            />
          </div>
        )}
        <p className="text-[16px]">{planType}</p>
        <div className="flex mt-[3px]">
          <p className="text-[16px] font-bold">$</p>
          <h1 className="text-[30px] xl:text-[60px] font-bold">{price}</h1>
        </div>
        <div className="my-[35px] flex flex-col gap-[20px]">
          {descriptionList.map((description, index) => (
            <div key={index} className="flex gap-[20px]">
              <img src={bookmarkIcon} alt="pricing-description" />
              <p className="text-[14px]">
                {splitTextWithSymbols(description).map((part, i) => (
                  <span
                    key={i}
                    style={{
                      color:
                        /(\$[\d,]+(\.\d{1,2})?|[\d,]+(\.\d{1,2})?%|[\d,]+(\.\d{1,2})?)/.test(
                          part
                        )
                          ? "#D974F3"
                          : "inherit",
                    }}
                  >
                    {part}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <Button
          variant="containedGradient"
          onClick={openModal}
          disabled={paymentLoading}
          className="relative"
        >
          {paymentLoading ? <Loader isWrapper={false} /> : "Get Funded"}
        </Button>
      </div>

      {/* Payment Options Modal */}
      <PaymentOptionsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onCryptoPayment={handleCryptoCheckout}
        onNormalPayment={handleNormalPayment}
        paymentLoading={paymentLoading}
        cryptoLoading={cryptoLoading}
        normalLoading={normalLoading}
        modalRef={modalRef}
        chargeAmount={chargeAmount}
        planAccountSize={price}
        planId={planId}
        mt5PlanId={mt5PlanId}
      />
    </>
  );
};

export default PricingCard;
