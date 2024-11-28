import React from "react";
import PositionCard from "../Cards/PositionCard";
import PageHeader from "../Layout/PageHeader";

import close from "../../assets/icons/close.svg";

import styles from "./modals.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalCard from "../Cards/ModalCard";

const CompetitionModal = ({ onClose }) => {
  const navigate = useNavigate();
  const borderStyles = styles.borderGradientAlt;

  const handleFaqClick = () => {
    navigate("/faqs");
    onClose();
  };

  // Generate PositionCard components from 4th to 29th place
  const positionCards = Array.from({ length: 26 }, (_, index) => {
    const position = 4 + index;
    const prize = position >= 12 ? "$10k Evaluation" : `$${5 * 10}k Evaluation`;
    return (
      <PositionCard
        key={position}
        position={`${position}th Place`}
        prize={prize}
      />
    );
  });

  // Group PositionCard components into pairs
  const groupedPositionCards = [];
  for (let i = 0; i < positionCards.length; i += 2) {
    groupedPositionCards.push(
      <div
        key={`group-${i}`}
        className="flex justify-between w-full gap-2 md:gap-4 mb-2 md:mb-4"
      >
        {positionCards[i]}
        {positionCards[i + 1] || null}
      </div>
    );
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className="flex justify-between w-full">
          <PageHeader title="Competition Dashboard" />
          <img
            src={close}
            alt="close"
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center md:justify-between gap-2 md:gap-4 my-2 md:my-4 flex-wrap lg:flex-nowrap">
          <ModalCard title="Finished" body="$300k Evaluation" variant="gold" />
          <ModalCard
            title="Prize Pool"
            body="$200k Evaluation"
            variant="silver"
          />
          <ModalCard
            title="Remaining Contestants"
            body="$100k Evaluation"
            variant="bronze"
          />
        </div>
        {groupedPositionCards}

        <div
          className={`${borderStyles} rounded-lg p-6 mb-4`}
          style={{ background: "rgba(0, 95, 61, 0.20)" }}
        >
          <p className="text-[16px]">
            Follow all the same rules for the challenges:
          </p>
          <br />
          <p className="text-[16px]">5% Max Daily Drawdown</p>
          <br />
          <p className="text-[16px]">10% Max Total Drawdown</p>
          <br />
          <p className="text-[16px]">5 Minimum Trading Days</p>
          <br />
          <p className="text-[16px]">EA's are not allowed</p>
          <br />
          <p className="text-[16px]">
            No taking advantage of unrealistic fills in the demo environment
          </p>
          <br />
          <p className="text-[16px]">
            Daily Drawdown will now be calculated based on Balance or Equity
            whichever is higher at the end of the day
          </p>
          <br />
          <p className="text-[16px]">
            There will be a lot size rule of 5 max across all positions. It will
            be a soft breach where if someone goes above the lot size limit we
            close all trades and send an email.
          </p>
          <br />
          <p className="text-[16px]">Only 1 account per person is permitted</p>
          <br />
          <p className="text-[16px]">
            The competition starts on the first of the month and ends on the
            last day of the month.
          </p>
          <br />
          <p className="text-[16px]">
            If you end up being one of the winners, someone from our Trader
            Success Team will reach out with the appropriate prize.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full lg:w-[50%]">
            <Button variant="containedGradientAlt" onClick={handleFaqClick}>
              Click to read full FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionModal;
