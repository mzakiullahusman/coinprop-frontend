import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = ({ isWrapper = true }) => {
  return (
    <Triangle
      visible={true}
      height={isWrapper ? "80" : "20"}
      width={isWrapper ? "80" : "20"}
      color={isWrapper ? "#2A80B3" : "#FFFFFF"}
      ariaLabel="triangle-loading"
      wrapperStyle={
        isWrapper
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }
          : {}
      }
    />
  );
};

export default Loader;
