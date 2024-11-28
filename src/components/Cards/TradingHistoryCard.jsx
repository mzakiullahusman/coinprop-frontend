import React from "react";
import { Button } from "@mui/material";
import styles from "./cards.module.css";

const TradingHistoryCard = ({
  htmlContent,
  htmlRef,
  headerImg,
  buttonOne,
  buttonHandlerOne,
  buttonTwo,
  buttonHandlerTwo,
  buttonThree,
  buttonHandlerThree,
}) => {
  return (
    <div className={styles.tradingHistoryCard}>
      {/* Render the HTML content in a hidden off-screen div */}
      {/* <div
        style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
        ref={htmlRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      /> */}
      <img src={headerImg} alt="certificate" />
      <div className="flex flex-col gap-[22px] mt-8 lg:mt-[38px] w-full">
        <Button
          variant="containedGradient"
          onClick={buttonHandlerOne}
          sx={{
            textTransform: "capitalize",
            fontFamily: "Inter",
            background:
              "linear-gradient(70deg, #9C1AFF 13.36%, #932EE0 53.35%, #AF45FF 71.76%)",
          }}
        >
          {buttonOne}
        </Button>
        <Button
          variant="containedGradient"
          onClick={buttonHandlerTwo}
          sx={{
            textTransform: "capitalize",
            fontFamily: "Inter",
            background:
              "linear-gradient(70deg, #9C1AFF 13.36%, #932EE0 53.35%, #AF45FF 71.76%)",
          }}
        >
          {buttonTwo}
        </Button>
        {buttonThree && (
          <Button
            variant="outlinedHighlight"
            onClick={buttonHandlerThree}
            sx={{ textTransform: "capitalize", fontFamily: "Inter" }}
          >
            {buttonThree}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TradingHistoryCard;
