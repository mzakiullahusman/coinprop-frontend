import React, { useEffect } from "react";
import { createVeriffFrame } from "@veriff/incontext-sdk";

const VeriffComponent = ({ sessionUrl }) => {
  useEffect(() => {
    const existingFrame = document.getElementById("veriffFrame");

    if (!existingFrame) {
      createVeriffFrame({
        url: sessionUrl,
        containerId: "veriff-root",
      });
    }
  }, [sessionUrl]);

  return (
    <div id="veriff-container">
      <div id="veriff-root"></div>
    </div>
  );
};

export default VeriffComponent;
