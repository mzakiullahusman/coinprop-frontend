import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import orderCardSeparator from "../../assets/icons/orderCardSeparator.svg";

import styles from "./cards.module.css";

const OrderSummaryCard = ({ price, discount, total }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/new-challenge-checkout");
    console.log("Get Funded");
  };

  return (
    <div className={`${styles.orderSummaryCard} w-full`}>
      <h3 className="text-[24px] font-bold">Order Summary</h3>
      <img src={orderCardSeparator} alt="separator" className="w-full" />
      <div className="flex justify-between items-center w-full">
        <p className="text-[16px]">Original Price</p>
        <p className="text-[16px] font-bold text-[#D974F3]">{price}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-[16px]">Discount</p>
        <p className="text-[16px] font-bold text-[#D974F3]">{discount}</p>
      </div>
      <img src={orderCardSeparator} alt="separator" className="w-full" />
      <div className="flex justify-between items-center w-full">
        <p className="text-[16px]">Total</p>
        <p className="text-[16px] font-bold text-[#D974F3]">{total}</p>
      </div>
      <Button variant="containedGradient" onClick={handleCheckout}>
        Complete Checkout
      </Button>
    </div>
  );
};

export default OrderSummaryCard;
